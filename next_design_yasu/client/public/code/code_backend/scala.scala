// File: code.scala

object HelloWorld {
    def main(args: Array[String]): Unit = {
        println("Hello, Scala!")
    }

    // Function example
    def greet(name: String): String = {
        "Hello, " + name + "!"
    }

    // Call the function
    println(greet("World"))
}
