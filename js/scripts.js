$(document).ready(function(){
    //buttons
    var humorBtn = $("#humor input");
    var messyBtn = $("#messy input");
    var drinkBtn = $("#drink input");
    var smartBtn = $("#smart input");

    //answers
    var humorAnswer;
    var messyAnswer;
    var drinkAnswer;
    var smartAnswer;

    humorBtn.change(function(){
        humorAnswer = this.value;
        console.log(humorAnswer);

    });



});