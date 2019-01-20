package agentsJS

import ggiJS.AbstractGameState
import ggiJS.SimplePlayerInterface


data class DoNothingAgent (var action: Int = 0) : SimplePlayerInterface {

    override fun getAction(gameState: AbstractGameState, playerId: Int): Int {
        // return zero without knowing what this will do
        return action
    }

    override fun reset(): SimplePlayerInterface {
        return this
    }

}


