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
        $(".messy").show();
    });

    messyBtn.change(function(){
        messyAnswer = this.value;
        console.log(messyAnswer);

        if (humorAnswer === "no" && messyAnswer === "yes") {
            hideAll();
            $("#cl").show();
        } else if (humorAnswer=== "no" && messyAnswer === "no") {
            hideAll();
            $("#flan").show();
        }else if(humorAnswer === "yes" && messyAnswer === "no") {
            hideAll();
            $("#marge").show();
        } else {
            hideAll();
            $(".drink").show();
        }

    });

    drinkBtn.change(function(){
        drinkAnswer = this.value;
        console.log(drinkAnswer);
            hideAll();
            $(".smart").show();
        

    });

    smartBtn.change(function(){
        smartAnswer = this.value;
        console.log(smartAnswer);
        if (smartAnswer === "yes"){
            hideAll();
            $("#kc").show();
        } else {
            hideAll();
            $("#homie").show();
        }
        // if(smart ye) {
        //     show krusty
        // } else {
        //     show homer
        // }
    });


    function hideAll() {
        $('#images img').hide();
    }
});