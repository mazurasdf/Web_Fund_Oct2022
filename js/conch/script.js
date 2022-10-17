function ask(){
    var question = document.querySelector("#question");
    if(question.value.length < 1){
        alert("You have to ask a question!");
    }
    else{
        //change to a gif
        var conchImg = document.querySelector("#conchImg");
    
        conchImg.src = "img/conchAnimated.gif";
        
        console.log("asking question...");

        var response = document.querySelector("#response");


        response.innerText = " ";
    
        setTimeout(askEnd,4000);
    }
}

function askEnd(){
    //change back to still image
    var conchImg = document.querySelector("#conchImg");

    conchImg.src = "img/conchStill.png";

    //give response
    var response = document.querySelector("#response");

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

    var randex = Math.floor(Math.random() * lifesAnswers.length);

    response.innerText = lifesAnswers[randex];

    //clear input
    var question = document.querySelector("#question");
    question.value = "";
    question.focus();
}