// File: code.go

package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}

// Function example
func greet(name string) string {
    return "Hello, " + name + "!"
}

// Call the function
fmt.Println(greet("World"))
