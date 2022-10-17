var floor = Math.floor(563.9045);
var ceil = Math.ceil(Math.PI);
var random = Math.random();

// console.log(floor);
// console.log(ceil);
// console.log(random);

function d6() {
    //should randomly return 1,2,3,4,5, or 6
    var roll = Math.random();
    // your code here
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

function magicEightBall(){
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes - definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    var index;

    //your code here

    return lifesAnswers[index];
}

console.log(magicEightBall());