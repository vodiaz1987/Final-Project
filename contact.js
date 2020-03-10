

function hello(){
    console.log('Hello vale diaz')
}

function returnVale(){
    return "buy"
}
returnVale()
hello()

console.log(returnVale())

// FUNCTIONS EXERCISE


// 5.2 Create a function called myName that uses a prompt to get the users name
// Call that function and return the value in a variable called name

function myName(){
   // return prompt("what is your name")
}

var name = myName()
console.log(name)


// 5.3 Declare a new function called movieDetails
// Give it two arguments - title and released
// Inside the function body, return a sentence that includes both arguments
// Create a variable called movie1 and invoke the function giving it some movie details


function movieDetails(title,released){
    return title + " was released in " + released

}

var movie1 = movieDetails("toy story 1", 2010)
var movie2 = movieDetails("toy story 2", 2012)
var movie3 = movieDetails("toy story 3", 2015)

console.log(movie1)
console.log(movie2)
console.log(movie3)

// if inside a function
function verifyAge(name,age){
    if (age >=18){
        return name + " is old enough to drink"
    }
    else {
        return name + " has to be 18 to drink"
    }

}

var Vale = verifyAge("Vale", 18)
var Amanda = movieDetails("Amanda", 15)

console.log(Vale)
console.log(Amanda)


// 5.4 Write another function with control flow called shoppingCart which decides whether or not you can
// afford a new item of clothing
// It should take 3 arguments: item, cost and balance and return whether or not you can afford it based
// on your balance

function shoppingCart(item,cost,balance){
    if(balance>=cost){
        return "you can afford the "+ item

    }
    else{
        return "you can't afford the "+ item + "return it to the shelf"
    }
}

var result = shoppingCart("shoes",50,10)

console.log(result)


// 2. Write a function that sorts a string in alphabetical order


// 3. Write a function that loops over an array or Strings and capitalises each one before returning the array 


// 4. Write a function that console logs the data type of the aruments


// 5. Write a function that returns the length of the longest word in a sentence
