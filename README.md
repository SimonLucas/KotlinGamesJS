# Kotlin Games Transpiled to JavaScript

### Go to [index.html](https://simonlucas.github.io/KotlinGamesJS/src/test/index.html) to run sample Breakout game

Should look something like this:

![Breakout Screenshot](https://simonlucas.github.io/KotlinGamesJS/docs/BreakoutScreenshot.png)


### Overview

This is a simple example of using Kotlin to write games and simulations that run in a Web Browser.
This page gives some advice on how to do this, and demonstrates that it's fast enough to
run Statsitical Forward Planning algorithms in the browser.
Gone are the days when Java Applets can be used: Kotlin seems like a good option now.


[Kotlin](https://kotlinlang.org/) is an excellent new language that interoperates seamlessly with Java.  
The example here was developed using the free [Community Edition of Intellij IDEA.](https://www.jetbrains.com/idea/)

IDEA can be used to port Java programs directly in to Kotlin - just right click a Java file and select the option,
or copy and paste snippets of Java into a Kotlin file.  This is a great benefit when learning the language, 
though the auto-translated code sometimes has bugs, and often will not use the best features of Kotlin.  Still, it's a great start.

The sample game is breakout: the Kotlin version runs at around 30 million game ticks per second without graphics, 
and the transpiled JavaScript game runs at around 3 million ticks per second on the same machine (a recent Mac) running 
in a web browser (tested with Safari and Chrome).

This speed is good, and means we can use our favourite Statistical Forward Planning 
algorithms to get instant reasonable performance AI to test the games.

### Gotchas

Although Kotlin interoperates well with Java, there are some things to look out for when using with JavaScript.  
If you get things wrong, it often simply fails to work without any sensible error messages.  Here are
some tips for transpiling Kotlin to run in a web browser:

* You CANNOT use any Java classes.  
For example, my Kotlin code was originally using `java.util.Random.`  
This just fails without proper error messages...  Stick to pure Kotlin and you should be ok. 
* Use Intellij IDEA as an IDE.  Kotlin was developed by JetBrains, and IDEA supports it out of the box.
* Try to keep all your GUI code in a separate class 
(i.e. use something like a Model-View-Controller architecture)
You then just have to do the View and event handling differently for desktop versus browser

### Writing Graphics Code in Kotlin

To learn the necessary graphics code Breakout example I looked at the code here:
https://try.kotlinlang.org/#/Examples/Canvas/Creatures/Creatures.kt 
It's a good website with interesting examples.

The drawing code is all in [BreakoutGameCanvas](src/breakoutJS/BreakoutGameCanvas.kt)

Example methods are shown below for drawing the bat and the score.  It's mostly ok,
the only horrible thing is passing Strings to control the colour (takes a bit
of figuring out how to get this right...)

```

    fun drawBat() {
        // would be better to extract the common code
        val params = gameState.state.params
        val s = gameState.state.bat
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
        val str = "Score = ${gameState.score().toInt()}, human = $humanPlayer"
        context.fillText(str, width / 2.0, height / 10.0);
        if (!humanPlayer) {
            val ai = "AI ticks = $nTicks"
            context.textAlign = CanvasTextAlign.LEFT
            context.fillText(ai, height / 10.0, height / 10.0)
        }
    }




```

### Experimenting with the AI

When in AI mode the game is controlled by a 
[SimpleEvoAgent](src/agentsJS/SimpleEvoAgent.kt).  This is a simple but powerful Rolling Horizon Evolution 
algorithm which you can see playing breakout, albeit in a jittery way!  Breakout, although a simple game,
is actually quite hard for rolling horizon evolution as it has long periods in which the user
actions make no difference to the score.  You can experiment with the code to test which options succeed
and fail.  To do this just modify the options when the agent is created - complete set of options with their defaults are shown below.
Note that the MutationTransducer implements a soft form of macro-action that uses a simple Markov chain: paper coming soon!


```
data class SimpleEvoAgent (
         var flipAtLeastOneValue: Boolean = true,
         var probMutation:Double = 0.3,
         var sequenceLength: Int = 200,
         var nEvals: Int = 20,
         var useShiftBuffer: Boolean = true,
         var useMutationTransducer: Boolean = true,
         var repeatProb: Double = 0.5,  // only used with mutation transducer
         var discountFactor: Double? = null,
         var opponentModel: SimplePlayerInterface = DoNothingAgent()
 ): SimplePlayerInterface {
```
 
For example: `val agent = SimpleEvoAgent(sequenceLength = 400, probMutation = 0.2, nEvals = 10, repeatProb = 0.6)`


### Papers to Cite

You're weclome to use SimpleEvoAgent in your own work.  If you do please cite this paper for the most similar
version of the algorithm:

```bibtex
@article{NTBEA-AgentTuning,
  title={{The N-Tuple Bandit Evolutionary Algorithm for Game Agent Optimisation}},
  author={Simon M. Lucas and Jialin Liu and Diego Perez-Liebana},
  journal={Proceedings of IEEE Congress on Evolutionary Computation},
  note={\url{https://arxiv.org/abs/1802.05991}},
  year={2018}
}
```


Or this one for the first use of Rolling Horizon Evolution (as far as we know) for real-time game AI:

D Perez, S Samothrakis, S Lucas, P Rohlfshagen
Proceedings of the 15th annual conference on Genetic and evolutionary …

```bibtex
@article{NTBEA-AgentTuning,
  title={Rolling horizon evolution versus tree search for navigation in single-player real-time games},
  author={Diego Perez-Liebana and Spyros Samothrakis and Simon M. Lucas and Philipp Rohlfshagen},
  journal={Proceedings of the 15th annual conference on genetic and evolutionary computation (GECCO)},
  note={\url{https://arxiv.org/abs/1802.05991}},
  year={2013}
}
```
