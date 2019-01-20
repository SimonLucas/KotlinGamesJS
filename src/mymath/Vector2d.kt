package mymath

import kotlin.math.*

class Vector2d  {

    var x: Double = 0.toDouble()
    var y: Double = 0.toDouble()

    override fun equals(o: Any?): Boolean {
        if (o is Vector2d) {
            val v = o as Vector2d?
            return x == v!!.x && y == v.y
        } else {
            return false
        }
    }

    constructor(x: Double = 0.0, y: Double = 0.0) {
        this.x = x
        this.y = y
    }

    constructor(v: Vector2d) {
        this.x = v.x
        this.y = v.y
    }

    fun copy(): Vector2d {
        return Vector2d(x, y)
    }

    fun set(v: Vector2d): Vector2d {
        this.x = v.x
        this.y = v.y
        return this
    }

    operator fun set(x: Double, y: Double): Vector2d {
        this.x = x
        this.y = y
        return this
    }

    fun zero(): Vector2d {
        x = 0.0
        y = 0.0
        return this
    }

    override fun toString(): String {
        return x.toString() + " : " + y
    }

    fun add(v: Vector2d): Vector2d {
        this.x += v.x
        this.y += v.y
        return this
    }

    fun add(x: Double, y: Double): Vector2d {
        this.x += x
        this.y += y
        return this
    }

    fun add(v: Vector2d, w: Double): Vector2d {
        // weighted addition
        this.x += w * v.x
        this.y += w * v.y
        return this
    }

    fun wrap(w: Double, h: Double): Vector2d {
        //        w = 2 * w;
        //        h = 2 * h;
        x = (x + w) % w
        y = (y + h) % h
        return this
    }

    fun subtract(v: Vector2d): Vector2d {
        this.x -= v.x
        this.y -= v.y
        return this
    }

    fun subtract(x: Double, y: Double): Vector2d {
        this.x -= x
        this.y -= y
        return this
    }

    fun mul(fac: Double): Vector2d {
        x *= fac
        y *= fac
        return this
    }

    fun rotate(theta: Double): Vector2d {
        // rotate this vector by the angle made to the horizontal by this line
        // theta is in radians
        val cosTheta = cos(theta)
        val sinTheta = sin(theta)

        val nx = x * cosTheta - y * sinTheta
        val ny = x * sinTheta + y * cosTheta

        x = nx
        y = ny
        return this
    }

    //    public void rotate(Vector2d start, Vector2d end) {
    //        // rotate this vector by the angle made to the horizontal by this line
    //        double r = start.dist(end);
    //        double cosTheta = (end.x - start.x) / r;
    //        double sinTheta = (end.y - start.y) / r;
    //
    //        double nx = x * cosTheta - y * sinTheta;
    //        double ny = x * sinTheta + y * cosTheta;
    //
    //        x = nx;
    //        y = ny;
    //    }
    //
    //    public void limit(double maxMag) {
    //        double mag = this.mag();
    //        if (mag > maxMag) {
    //            this.mul(maxMag / mag);
    //        }
    //    }
    //
    //    public void setMag(double m) {
    //        if (mag() != 0) { // can still blow up!
    //            this.mul( m / mag() );
    //        }
    //    }
    //
    fun contraRotate(start: Vector2d, end: Vector2d): Vector2d {
        // rotate this vector by the opposite angle made to the horizontal by this line
        val r = start.dist(end)
        val cosTheta = (end.x - start.x) / r
        val sinTheta = (end.y - start.y) / r

        val nx = x * cosTheta + y * sinTheta
        val ny = -x * sinTheta + y * cosTheta

        x = nx
        y = ny
        return this
    }

    fun contraRotate(heading: Vector2d): Vector2d {
        // rotate this vector by the opposite angle made to the vertical by this line
        val r = heading.mag()
        val cosTheta = heading.y / r
        val sinTheta = heading.x / r

        val nx = x * cosTheta + y * sinTheta
        val ny = -x * sinTheta + y * cosTheta

        x = nx
        y = ny
        return this
    }

    fun sqr(x: Double) : Double {
        return x*x
    }

    fun scalarProduct(v: Vector2d): Double {
        return x * v.x + y * v.y
    }

    fun sqDist(v: Vector2d): Double {
        return sqr(x - v.x) + sqr(y - v.y)
    }

    fun mag(): Double {
        return sqrt(sqr(x) + sqr(y))
    }

    //    public double sqMag() {
    //        return sqr( x ) + sqr( y );
    //    }
    //
    fun dist(v: Vector2d): Double {
        return sqrt(sqDist(v))
    }

    fun theta(): Double {
        return atan2(y, x)
    }

    fun normalise() {
        val mag = mag()
        if (mag != 0.0) {
            x /= mag
            y /= mag
        }
    }

}
