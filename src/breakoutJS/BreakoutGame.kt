package breakoutJS

import mymath.MovableObject
import mymath.Vector2d
import ggiJS.*
import kotlin.math.*

object Constants {
    val doNothing = 0
    val left = 1
    val right = 2
    val empytyCell = 0
}

data class BreakoutParams(
        // grid size in cells
        var gridWidth: Int = 11,
        var gridHeight: Int = 15,
        // cell size in "pixels" - just to give an idea
        // actual pixels will depend on window size
        // var cellWidth: Int = 20,
        // var cellHeight: Int = 5,

        var batWidth: Double = 0.1,
        var batHeight: Double = 0.05,

        // these control which grid cells will be occupied with bricks
        var topGap: Double = 0.2,
        var wallBottom: Double = 0.5,
        var edgeGap: Double = 0.0,

        var maxTicks: Int = 50000,
        var ballSpeed: Double = 0.01,
        var ballSize: Double = batHeight / 4,
        var batSpeed: Double = 0.01,
        var batInfluence: Double = 2.0
)

data class InternalGameState(var params: BreakoutParams = BreakoutParams(),
                             var ball: MovableObject = MovableObject(),
                             var bat: Vector2d = Vector2d(),
                             var score: Int = 0,
                             var nBricks: Int = 0,
                             var nTicks: Int = 0,
                             var gameOver: Boolean = false) {

    public var bricks = Array(params.gridWidth) { IntArray(params.gridHeight) }

    fun initBall(): MovableObject {
        val s = Vector2d(0.5, params.wallBottom + params.batWidth)
        val v = Vector2d(params.ballSpeed / 2, params.ballSpeed)
        ball = MovableObject(s, v)
        return ball
    }

    fun initBat(): Vector2d {
        val s = Vector2d(0.5, 1.0 - 2 * params.batHeight)
        bat = s
        return bat
    }

    fun deepCopy(): InternalGameState {
        val state = copy()
        // probably needs a deeper copy
        state.bricks = bricks.copyOf()
        state.ball = ball.copy()
        state.bat = bat.copy()
        for (i in 0 until bricks.size) {
            state.bricks[i] = bricks[i].copyOf()
        }
        return state
    }
}

var totalTicks: Long = 0

// use the internal game state within the active game state
// active in the sense that it has the operational code
// whereas the internal state just has the state data
data class BreakoutGameState(public var state: InternalGameState = InternalGameState())
    : ExtendedAbstractGameState {


    override fun resetTotalTicks() {
        totalTicks = 0
    }


    override fun totalTicks(): Long {
        return totalTicks
    }

    override fun copy(): AbstractGameState {

        return BreakoutGameState(state = state.deepCopy())
    }

    val brickValues: HashMap<Int,Int> = hashMapOf(0 to 100, 1 to 100, 2 to 100, 3 to 50, 4 to 30, 5 to 20)
    val defaultScore = 10

    fun brickValue(j: Int) : Int {
        val score: Int? = brickValues.get(j)
        if (score != null) return score
        else return defaultScore
    }

    fun reset(): BreakoutGameState {
        state = InternalGameState()
        setUp()
        return this
    }

    fun setUp(): BreakoutGameState {
        // workout which bricks to set up

        with(state) {
            ball = initBall()
            bat = initBat()

            with(params) {

                for (i in 0 until gridWidth) {
                    for (j in 0 until gridHeight) {
                        // calculate position of centre of potential brick
                        // as ration of grid size to work out whether
                        // it should be there or not
                        val x = (i + 0.5) / gridWidth
                        val y = (j + 0.5) / gridHeight
                        val isBrick = x >= edgeGap && x <= (1 - edgeGap) &&
                                y >= topGap && y <= wallBottom
                        bricks[i][j] = if (isBrick) 1 else 0
                    }
                }
            }
        }
        return this
    }

    override fun next(actions: IntArray, playerId: Int): AbstractGameState {
        val action = actions[0]
        // println(action)
        with(state) {
            with(params) {


                // update the ball and check for collisions
                var flipX = false
                var flipY = false

                with(state.ball) {
                    // bounce back of edge of arena
                    val nextS = Vector2d(s)
                    nextS.add(v)
                    if (nextS.y >= 1.0) {
                        gameOver = true
                        score -= 50
                    }

                    if (nextS.x <= 0 || nextS.x >= 1) flipX = true
                    if (nextS.y <= 0 || nextS.y >= 1) flipY = true

                    val inArena = !flipX && !flipY
                    // only do the following checks if still in the arena
                    // now do the grid calculation for where the next position would be

                    if (inArena) {

                        // see if a brick has been hit, then figure out any reversals
                        val bx = gridX(nextS.x)
                        val by = gridY(nextS.y)
                        if (bricks[bx][by] != Constants.empytyCell) {
                            // wow - a collision!
                            bricks[bx][by] = Constants.empytyCell
                            score += brickValue(by)
                            if (gridX(s.x) != gridX(nextS.x)) flipX = true
                            if (gridY(s.y) != gridY(nextS.y)) flipY = true
                        }
                    }

                    // now bounce the velocity irrespective of the reason
                    if (flipX) v.x = -v.x
                    if (flipY) v.y = -v.y

                    // now consider the bat: since it occupies a different area to the bricks
                    // this should not interfere

                    // on collision with the bat, the y velocity will be upwards
                    // and the x velocity will depend on the place on the bat it collides with
                    // also only collide if it's heading down (i.e. if v.y is positive

                    val xDiff = nextS.x - bat.x
                    if (abs(xDiff) < batWidth / 2 && nextS.y > bat.y - batHeight / 2 && nextS.y < bat.y + batHeight / 2) {
                        v.y = -ballSpeed
                        v.x = xDiff * batInfluence * ballSpeed / batWidth
                    }

                    s.add(v)
                }

                with(state.bat) {
                    if (action == Constants.left) x -= batSpeed
                    if (action == Constants.right) x += batSpeed

                    if (x >= 1.0) x = 1.0
                    if (x < 0.0) x = 0.0
                    // println(x)
                }


            }
            nTicks++
        }
        totalTicks++
        return this
    }


    //    fun inBat(s: Vector2d, bat: Vector2d) : Boolean {
//
//    }
//
    fun gridX(x: Double): Int {
        return (x * state.params.gridWidth).toInt()
    }

    fun gridY(y: Double): Int {
        return (y * state.params.gridHeight).toInt()
    }

    override fun nActions(): Int {
        return 3
    }

    override fun score(): Double {
        return state.score.toDouble()
    }

    override fun isTerminal(): Boolean {
        // for now just check game ticks
        return state.gameOver || state.nTicks >= state.params.maxTicks
    }

    override fun nTicks(): Int {
        return state.nTicks
    }
}
