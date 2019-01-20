package breakoutJS

// import games.breakout.BreakoutGameState
import agentsJS.SimpleEvoAgent
import mymath.Vec2d
import org.w3c.dom.*
import org.w3c.dom.events.KeyboardEvent
import org.w3c.dom.events.MouseEvent
import kotlin.browser.document
import kotlin.browser.window

// import kotlin.js.Math

/*
This example is based on example from html5 canvas2D docs:
  http://www.w3.org/TR/2dcontext/
Note that only a subset of the api is supported for now.

see example here:  https://try.kotlinlang.org/#/Examples/Canvas/Creatures/Creatures.kt


*/


val canvas = initalizeCanvas()

fun initalizeCanvas(): HTMLCanvasElement {
    val canvas = document.createElement("canvas") as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    context.canvas.width = window.innerWidth // 800
    context.canvas.height = 2 * window.innerHeight / 3 // 400

//    window.open("https://www.w3schools.com", "_blank",
//            "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");

    document.body!!.appendChild(canvas)
    return canvas
}


class BreakoutGameView() {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val height = canvas.height
    val width = canvas.width

    val gameState: BreakoutGameState = BreakoutGameState().setUp()


    var mousePos: Vec2d = Vec2d(width / 2.0, 0.0)

    val agent = SimpleEvoAgent(sequenceLength = 400, probMutation = 0.2, nEvals = 10, repeatProb = 0.6)

    var humanPlayer: Boolean = true
    var nTicks = 0
    var colorScheme1 = false

    init {

        document.onkeypress = { e ->
            humanPlayer = !humanPlayer
            if (e is KeyboardEvent) {
                if (e.key.equals("a"))
                    colorScheme1 = !colorScheme1
                println(e.key)
            }
            println("Key pressed document event")
//            println(e.type)
        }

        document.onmousemove = {
            println(it.type)
            if (it is MouseEvent) {
                var mx = it.pageX - canvas.offsetLeft
                if (mx < 0) mx - 0
                if (mx > width - 1) mx = width - 1.0
                mousePos = Vec2d(mx, it.pageY - canvas.offsetTop)
            }
        }
    }

    val playerId = 0

    fun gameTick() {
        if (humanPlayer) {
            gameState.state.bat.x = mousePos.x / width
            gameState.next(intArrayOf(Constants.doNothing), playerId)
        } else {
            gameState.resetTotalTicks()
            val action = agent.getAction(gameState.copy(), playerId)
            nTicks = gameState.totalTicks().toInt()
            gameState.next(intArrayOf(action), playerId)
        }

        blank()
        drawWall()
        drawBat()
        drawBall()
        drawScore()

        // gameState.next(intArrayOf(Constants.doNothing), 0)
        if (gameState.isTerminal()) {
            gameState.reset()
            agent.reset()
        }
    }

    fun drawBall() {
        val s = gameState.state.ball.s
        val rad = gameState.state.params.ballSize

        val cx = s.x * width
        val cy = s.y * height

        val pixWidth = width * rad
        val pixHeight = height * rad

        context.fillStyle = "white" // "hsl($hue, 50%, 50%)";
        context.fillRect(cx - pixWidth / 2, cy - pixHeight / 2, pixWidth, pixHeight);
    }

    fun drawBat() {
        // would be better to extract the common code
        val params = gameState.state.params
        val s = gameState.state.bat
        // System.out.println("Bat: " + s);
        val cx = s.x * width
        val cy = s.y * height

        val pixWidth = width * (params.batWidth - params.ballSize)
        val pixHeight = height * (params.batHeight - params.ballSize)
        context.fillStyle = "hsl(128, 100%, 50%)"
        context.fillRect(cx - pixWidth / 2, cy - pixHeight / 2, pixWidth, pixHeight)
    }

    fun drawScore() {
        context.font = "20px Comic Sans MS";
        context.fillStyle = "red";
        context.textAlign = CanvasTextAlign.CENTER
//        val str = "Score = ${gameState.score().toInt()}, mouse = ${mousePos.x}, ${mousePos.y}"
        val str = "Score = ${gameState.score().toInt()}, human = $humanPlayer"
        context.fillText(str, width / 2.0, height / 10.0);
        if (!humanPlayer) {
            val ai = "AI ticks = $nTicks"
            context.textAlign = CanvasTextAlign.LEFT
            context.fillText(ai, height / 10.0, height / 10.0)
        }
    }

    fun drawWall() {
        with(gameState.state) {
            val cellWidth = width / params.gridWidth
            val cellHeight = height / params.gridHeight
            for (i in 0 until params.gridWidth) {
                for (j in 0 until params.gridHeight) {
                    val cx = (i + 0.5) * cellWidth
                    val cy = (j + 0.5) * cellHeight

                    val pixWidth = cellWidth - width * params.ballSize
                    val pixHeight = cellHeight - height * params.ballSize

//                    g.setColor(getBrickColor(i, j))
                    context.fillStyle = "rgba(0, 0, 0, 0.1)"
                    if (bricks[i][j] != Constants.empytyCell) {
                        if (colorScheme1) {
                            brickColor1(j)
                        } else {
                            brickColor2(j)
                        }
                    }
                    context.fillRect(cx - pixWidth / 2, cy - pixHeight / 2, pixWidth, pixHeight)
                }
            }
        }
    }

    fun brickColor1(j: Int) {
        val brickHue = (j * 500) / gameState.state.params.gridHeight
        // context.fillStyle = "rgba(0, 255, 0, 0.5)" // "hsl($brickHue, 50%, 50%)";
        context.fillStyle = "hsl($brickHue, 100%, 60%)";

    }

    fun brickColor2(j: Int) {
        val p = gameState.state.params
        val ratio = ((j.toDouble() / p.gridHeight) - p.topGap) / (p.wallBottom - p.topGap)
        val brickHue = ((0.1 + ratio * 0.8) * 360).toInt()
        // context.fillStyle = "rgba(0, 255, 0, 0.5)" // "hsl($brickHue, 50%, 50%)";
        context.fillStyle = "hsl($brickHue, 100%, 60%)";

    }

    fun blank() {
        // context.fillStyle = "rgba(255,255,128,0.1)";
        context.fillStyle = "rgba(0, 0, 0, 0.5)";
        context.fillRect(0.0, 0.0, width.toDouble(), height.toDouble());
    }

    fun run() {
        window.setInterval({ gameTick() }, 20);
        // window.setInterval({ blank() }, 100);
    }
}
