package ggiJS


interface SimplePlayerInterface {
    fun getAction(gameState: AbstractGameState, playerId: Int) : Int
    fun reset() : SimplePlayerInterface
}


interface AbstractGameState {

    fun copy(): AbstractGameState

    // the ith entry of the actions array is the action for the ith player
    // next is used to advance the state of the game given the current
    // set of actions
    // this can either be for the 'real' game
    // or for a copy of the game to use in statistical forward planning, for example
    fun next(actions: IntArray, playerId: Int): AbstractGameState

    // the number of actions available to a player in the current state
    fun nActions(): Int

    fun score(): Double

    fun isTerminal(): Boolean

    fun nTicks(): Int

}

interface ExtendedAbstractGameState : AbstractGameState {
    fun totalTicks() : Long

    fun resetTotalTicks(): Unit
}

