package breakoutJS

// import games.breakout.BreakoutGameState

/*
class BreakoutViewJS {
    internal var viewWidth = 600
    internal var viewHeight = 400
    var gameState = BreakoutGameState()
    internal var brickColor = Color.getHSBColor(0.1f, 1f, 1f)
    internal var batColor = Color.getHSBColor(0.5f, 1f, 1f)
    internal var ballColor = Color.getHSBColor(0.9f, 1f, 1f)
    internal var bg = Color.getHSBColor(0.1f, 0.2f, 0.2f)
    internal var faintLine = Color(1f, 1f, 1f, 0.5f)
    internal var scoreColor = Color.white

    internal var brickColors = arrayOf<Color>(Color.getHSBColor(0.05f, 1f, 1f), Color.getHSBColor(0.15f, 1f, 1f), Color.getHSBColor(0.25f, 1f, 1f), Color.getHSBColor(0.35f, 1f, 1f), Color.getHSBColor(0.45f, 1f, 1f), Color.getHSBColor(0.55f, 1f, 1f), Color.getHSBColor(0.65f, 1f, 1f), Color.getHSBColor(0.75f, 1f, 1f), Color.getHSBColor(0.85f, 1f, 1f))

    override fun paintComponent(go: Graphics) {
        val g = go as Graphics2D
        // calculate the upper left of the grid
        // and how it should map to the game view
        g.setColor(bg)
        g.fillRect(0, 0, getWidth(), getHeight())
        // start by drawing the grid
        val vp = ViewParams(gameState.state.params)
        drawWall(g, vp)
        drawBat(g, vp)
        drawBall(g, vp)
        drawScore(g, vp)
    }

    private fun drawScore(g: Graphics2D, vp: ViewParams) {
        val message = String.format("Score: %d", gameState.score().toInt())
        val draw = DrawUtil()
        draw.setFontSize(20)
        draw.setColor(scoreColor)
        draw.centreString(g, message, (getWidth() / 2).toDouble(), vp.cellHeight)
    }

    // static double ballSize = 0.02;

    private fun drawBall(g: Graphics2D, vp: ViewParams) {
        val s = gameState.state.ball.s
        // System.out.println("Ball: " + s);
        val cx = s.x * getWidth()
        val cy = s.y * getHeight()


        val pixWidth = getWidth() * vp.ballRad
        val pixHeight = getHeight() * vp.ballRad
        val rect = Ellipse2D.Double(cx - pixWidth / 2, cy - pixHeight / 2, pixWidth, pixHeight)
        g.setColor(ballColor)
        g.fill(rect)
    }

    private fun drawBat(g: Graphics2D, vp: ViewParams) {
        val s = gameState.state.bat
        // System.out.println("Bat: " + s);
        val cx = s.x * getWidth()
        val cy = s.y * getHeight()
        val pixWidth = getWidth() * (gameState.state.params.batWidth - vp.ballRad)
        val pixHeight = getHeight() * (gameState.state.params.batHeight - vp.ballRad)

        val rect = Rectangle2D.Double(cx - pixWidth / 2, cy - pixHeight / 2, pixWidth, pixHeight)
        g.setColor(batColor)
        g.fill(rect)
    }

    internal fun drawWall(g: Graphics2D, vp: ViewParams) {
        for (i in 0 until vp.cellsWide) {
            for (j in 0 until vp.cellsHigh) {
                // find centre
                val cx = (i + 0.5) * vp.cellWidth
                val cy = (j + 0.5) * vp.cellHeight
                //                Rectangle2D.Double brick =
                //                        new Rectangle2D.Double(
                //                                i * vp.cellWidth, j * vp.cellHeight, vp.cellWidth, vp.cellHeight);

                val pixWidth = vp.cellWidth - getWidth() * vp.ballRad
                val pixHeight = vp.cellHeight - getHeight() * vp.ballRad

                val brick = Rectangle2D.Double(
                        cx - pixWidth / 2,
                        cy - pixHeight / 2,
                        pixWidth, pixHeight)

                g.setColor(getBrickColor(i, j))
                g.fill(brick)

                // g.setColor(faintLine);
                // g.draw(brick);
            }
        }
    }

    private fun getBrickColor(i: Int, j: Int): Color {
        return if (gameState.state.bricks[i][j] == 1) {
            if (j < brickColors.size - 1) {
                brickColors[j]
            } else {
                brickColor
            }
        } else
            bg
    }

    internal inner class ViewParams(var params: BreakoutParams) {
        var upperLeft: Double = 0.toDouble()

        var cellsWide: Int = 0
        var cellsHigh: Int = 0
        var cellWidth: Double = 0.toDouble()
        var cellHeight: Double = 0.toDouble()
        var ballRad: Double = 0.toDouble()
        var batWidth: Double = 0.toDouble()
        var batHeight: Double = 0.toDouble()

        init {
            setup()
        }

        fun setup() {
            cellsWide = params.gridWidth
            cellsHigh = params.gridHeight
            cellWidth = getWidth() * 1.0 / cellsWide
            cellHeight = getHeight() * 1.0 / cellsHigh
            ballRad = params.ballSize
            batWidth = params.batWidth
            batHeight = params.batHeight
        }
    }

    companion object {

        @JvmStatic
        fun main(args: Array<String>) {
            JEasyFrame(BreakoutView(), "Breakout View")
        }
    }

}


        */
