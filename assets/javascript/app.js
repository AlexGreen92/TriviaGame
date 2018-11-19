    var questionArray = ["What is the capital of Belarus?", "What is the capital of Great Britain?", "What is the capital of United States Of America?", "What is the capital of Japan?", "What is the capital of Ukraine?", "What is the capital of China??", "What is the capital of Australia?", "What is the capital of India?"];
    var answerArray = [["Tokyo","Minsk","Moscow","Vladivostok"], ["Moscow", "London", "Luxemburg", "Taipei"], ["Washington D.C.", "New York", "Seattle", "Chicago"], ["Kyoto","Hiroshima","Tokyo","Osaka"], ["Minsk","Moscow","Kiev","Odessa"], ["Hong Kong", "Macau", "Shanghai", "Beijing"], ["Sydney", "Canberra", "Melbourne", "Perth"], ["Hyderabad","Bangalore","Mumbai","New Delhi"]];
    var imageArray = ["minsk.jpg", "london.jpg", "washington.jpg", "tokyo.jpg", "kiev.jpg", "beijing.jpg", "canberra.jpg", "newDelhi.jpg"];
    var correctAnswers = ["B. Minsk", "B. London", "A. Washington D.C.", "C. Tokyo", "C. Kiev", "D. Beijing", "B. Canberra", "D. New Delhi"];
    var gameHTML;
    var counter = 30;
    var questionCounter = 0;
    var selecterAnswer;
    var myInterval;
    var correctA = 0;
    var incorrectA = 0;
    var unansweredA = 0;

    
$(document).ready(function() {
    $(".start-button").on("click",function(event){
        newHTML();
        timer();
    }); 
    
    $("body").on("click", ".answer", function(event){       
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
            clearInterval(myInterval);
            rightAnswer();
        }
        else {
            clearInterval(myInterval);
            wrongAnswer();
        }
    }); 

    $("body").on("click", ".reset-button", function(event){
        resetGame();
    }); 
    
    });  
    
    function newHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p></br><p class='answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
        $(".mainArea").html(gameHTML);
    }
    function timeOut() {
        unansweredA++;
        gameHTML =  "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>"+"<img class='img-display' src=assets/images/"+imageArray[questionCounter] +">";
        $(".mainArea").html(gameHTML);
        setTimeout(delay, 2000);  
    }
    
    function rightAnswer() {
        correctA++;
        gameHTML = "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + "<img class='img-display' src=assets/images/"+imageArray[questionCounter] +">";
        $(".mainArea").html(gameHTML);
        setTimeout(delay, 2000);  
    }
    
    function wrongAnswer() {
        incorrectA++;
        gameHTML = "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>"+"<img class='img-display' src=assets/images/"+imageArray[questionCounter] +">";
        $(".mainArea").html(gameHTML);
        setTimeout(delay, 2000); 
    }
    
    
    
    function delay() {
        if (questionCounter < 7) {
        questionCounter++;
        newHTML();
        counter = 30;
        timer();
        }
        else {
            finalScreen();
        }
    }
    
    function timer() {
        myInterval = setInterval(checkTime, 1000);
        function checkTime() {
            if (counter === 0) {
                clearInterval(myInterval);
                timeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }
    
    function finalScreen() {
        gameHTML = "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctA + "</p>" + "<p>Wrong Answers: " + incorrectA + "</p>" + "<p>Unanswered: " + unansweredA + "</p>" + "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block reset-button'>Reset The Quiz!</a></p>";
        $(".mainArea").html(gameHTML);
    }
    
    function resetGame() {
        questionCounter = 0;
        correctA = 0;
        incorrectA = 0;
        unansweredA = 0;
        counter = 30;
        newHTML();
        timer();
    }

    