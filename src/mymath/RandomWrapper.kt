package mymath

import kotlin.random.Random

class RandomWrapper {
    fun nextInt(range: Int) : Int {
        return Random.nextInt(range)
    }

    fun nextDouble() : Double {
        return Random.nextDouble()
    }
}
