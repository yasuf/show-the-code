// File: Program.cs

using System;

namespace HelloWorld
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, C#!");
        }

        // Function example
        static string Greet(string name)
        {
            return "Hello, " + name + "!";
        }

        // Call the function
        Console.WriteLine(Greet("World"));
    }
}
