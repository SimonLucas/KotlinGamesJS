package mymath


data class MovableObject(var s: Vector2d = Vector2d(), var v: Vector2d = Vector2d()) {

    fun update(resultantForce: Vector2d, lossFactor: Double): MovableObject {
        v.add(resultantForce)
        s.add(v)
        v.mul(lossFactor)
        return this
    }

    override fun toString(): String {
        return "$s : $v"
    }

    fun copy(): MovableObject {
        return MovableObject(s.copy(), v.copy())
    }
}
