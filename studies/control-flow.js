/**
 * CONTROL FLOW:
 * 0.   When a program contains more than one statement, the statments are executed from top to bottom.  When we add *
 *      conditional statements, we can guide the path of executing statements depending on how those conditions resolve
 * 1.   If, Else-if, and Else:  An if statement tests a condition, if the statement resolves to true, the code that follows*
 *      will be executed.  Chaining them together with Else-if and Else statements allows for considering additional *
 *      conditions and executing code accordingly
 * 2.   Switch: Switch expressions are evaluated once and is compared with any number of values we include in our switch cases.*
 *      If the switch expression matches a case value, associated block of code will execute.  If no match exists, a default code*
 *      block will execute.
 */

//  1.  If, Else-if, Else   //
//  In chanined if else-if statements, the first conditional statement is preceded by the keyword if followed by the code*
//  to be executed in curly braces after.  The next conditional statements are code blocks are preceded by the keywords "else if"*
//  Finally, if no condition is met, the default code is preceded by the keyword else; which captures any other condition not accounted for.
let favMovie = "Hudson Hawk";

if (favMovie === "Citizen Cane"){
    console.log("Go back to film school");
}else if (favMovie === "Grave of the Fireflies"){
    console.log("Cry me a river");
}else if ("Fight Club"){
    console.log("You'll never get those abs");
}else if (favMovie === "The Seventh Seal"){
    console.log("You're bad at parties");
}else {
    console.log("A person of culture");
}   //  prints => A person of culture


//  2. Switch //
//  A single switch statement is evaluated once and compared to each case value.  The break keyword is necessary to exit the 
//  loop after the case value has matched and associated code executed.  The default case is hit when there is no match value.
let sanDiegoWeather = "Sunny";
switch (sanDiegoWeather){   //  switch keyword is followed by switch expression in parenthesis
    case "Cloudy":  //  case keyword followed by possible switch expresssion values
        console.log("Bring a sweater"); //  code block to be executed if case match
        break;  //  break keyword exits switch
    case "Rainy":
        console.log("Bring an umbrella");
        break;
    case "Snow":
        console.log("What in the world");
        break;
    default:    //  default is hit if case value has no match
        console.log("Why do we need a weatherman?")
}                                                   // prints => Why do we need a weatherman?