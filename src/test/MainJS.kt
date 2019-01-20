package test

import agentsJS.DoNothingAgent
import agentsJS.SimpleEvoAgent
import breakoutJS.BreakoutGameState
import breakoutJS.BreakoutGameView
import jquery.jq
import mymath.RandomWrapper
import org.w3c.dom.CENTER
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.CanvasTextAlign
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Date


fun main(args: Array<String>) {
    jq {
        RandomNumberTest().run()
        // FancyLines().run()
        BreakoutGameView().run()
    }
}

// todo : Run the AI to play the game
// todo : Measure the speed of the forward model running in JS
// todo : Capture keyboard events

val canvas = initalizeCanvas()

fun initalizeCanvas(): HTMLCanvasElement {
    val canvas = document.createElement("canvas") as HTMLCanvasElement
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    context.canvas.width  = window.innerWidth // 800
    context.canvas.height = window.innerHeight / 2 // 400

    document.body!!.appendChild(canvas)

    // note: fullscreen option did not work in Safari - it just popped up a new window over the old one
//    window.open("https://www.w3schools.com", "_blank",
//            "fullscreen=yes");



    return canvas
}

class RandomNumberTest() {
    val context = canvas.getContext("2d") as CanvasRenderingContext2D
    val height = canvas.height.toDouble()
    val width = canvas.width.toDouble()

    val rand = RandTest()

    val random = RandomWrapper()

    val gameState = BreakoutGameState()
    val agent = SimpleEvoAgent()

    fun update() {

        // val str = "Roll = ${rand.testRand()}"
        val str = "Roll = ${1 + random.nextInt(6)}"
        // canvas.clear()
        context.clearRect(0.0, 0.0, width, height)

        context.font = "30px Comic Sans MS";
        context.fillStyle = "red";
        context.textAlign = CanvasTextAlign.CENTER


        context.fillText(str, width/2, height/10)

    }

    fun testForwardModel() {
        val playerId = 0
        val date = Date()
        gameState.reset()
        val n = 100000
        val lazyAgent = DoNothingAgent()
        var scoreTot = 0.0
        for (i in 0 until n) {
            val action = lazyAgent.getAction(gameState, playerId)
            gameState.next(intArrayOf(action), playerId)
            scoreTot += gameState.score()
            if (gameState.isTerminal()) gameState.reset()
        }
        val elapsed = Date().getMilliseconds().toDouble() - date.getMilliseconds().toDouble()

        context.font = "20px Comic Sans MS";
        context.fillStyle = "red";
        context.textAlign = CanvasTextAlign.CENTER

        val str = "Elapsed ${elapsed}ms for $n game ticks; = ${(n * 1e-3/ elapsed).toInt()}mTicks / s"

        context.fillText(str, width/2, height/2)

    }

    fun run() {
        window.setInterval({ update() }, 1000);
        // window.setInterval({ testForwardModel() }, 1000);

    }

}

