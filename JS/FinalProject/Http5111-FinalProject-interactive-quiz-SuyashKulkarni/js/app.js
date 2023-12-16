// Pet Project - Interactive Quiz
// Variables used globally in the project 
var languages = ["HTML/CSS", "JS", "CSharp", "DataBase"];
var timer = null;
var counter = 0;
var timerInterval = null;
var timeLeft = 15;
var score = 0;
var selectedLangValue = null;

/* Array Structure used for question array 
var samplearray = [{
    question - Here the question is placed in sequence (Its a string value).
    options - Its an array of options used to store the collection of options of the question.
    answer - Its a string and the array number is which the correct ans is placed in here.

    For Ex: 
    question: 'This is the sample Question ?'
    options:['Option 1','option 2','Option 3','Option 4'] (Lets assume correct ans is Option 3 - So the position according to the array number is 2)
    answer: '2' (As the correct option is option 3 which is on array number 2 the answer stored is 2)
}];
*/

// Questions array for project
var htmlQuestions = [
    {
       question:"1. What does HTML stand for?",
       options:["a) Hyper Text Markup Language", "b) High Technology Modern Language", "c) Hyper Transfer Markup Language", "d) Hyperlink and Text Markup Language"],
       answer:"0"
    },
    {
       question:"2. Which HTML tag is used to define an external stylesheet?",
       options:["a) &lt;css&gt;", "b) &lt;style&gt;", "c) &lt;link&gt;", "d) &lt;stylesheet&gt;"],
       answer:"2"
    },
    {
        question:"3. How can you include an external CSS file in an HTML document?",
        options:["a) &lt;style src='styles.css'&gt;", "b) &lt;link href='styles.css'&gt;", "c) &lt;style link='styles.css'&gt;", "d) &lt;stylesheet src='styles.css'&gt;"],
        answer:"1"
    },
    {
        question:"4. Which CSS property is used to set the text color of an element?",
        options:["a) text-color","b) color","c) text-style","d) font-color"],
        answer:"1"
    },
    {
        question:"5. What does CSS stand for?",
        options:["a) Cascading Style Script","b) Creative Style Sheet","c) Computer Style Sheet","d) Cascading Style Sheet"],
        answer:"3"
    },
    {
        question:"6. Which HTML tag is used to create an ordered list?",
        options:["a) &lt;ol&gt;","b) &lt;ul&gt;","c) &lt;li&gt;","d) &lt;list&gt;"],
        answer:"0"
    },
    {
        question:"7. In CSS, which property is used to control the space between elements?",
        options:["a) margin","b) padding","c) spacing","d) border"],
        answer:"1"
    },
    {
        question:"8. Which CSS property is used to make text bold?",
        options:["a) font-weight","b) text-weight","c) bold-text","d) font-bold"],
        answer:"0"
    },
    {
        question:"9. Which HTML tag is used to create a hyperlink?",
        options:["a) &lt;link&gt;","b) &lt;href&gt;","c) &lt;a&gt;","d) &lt;url&gt;"],
        answer:"2"
    },
    {
        question:"10. Which CSS property is used to specify the type of cursor to be displayed when hovering over an element?",
        options:["a) cursor-type","b) pointer","c) mouse-cursor","d) cursor"],
        answer:"3"
    }
];
// Questions array for js
var jsQuestions = [
    {
       question: "1. What is the correct way to include an external JavaScript file in HTML?",
       options:[ "a) &lt;script src='script.js'&gt;&lt;/script&gt;","b) &lt;js src='script.js'&gt;&lt;/js&gt;", "c) &lt;link rel='javascript' href='script.js'&gt;", "d) &lt;include script='script.js'&gt;"],
       answer:"0" 
    },
    {
        question: "2. What will the following code output: console.log(typeof [1, 2, 3]);",
        options:["a) number", "b) object", "c) array", "d) undefined"],
        answer:"1" 
    },
    {
        question: "3. Which function is used to parse a JSON string?",
        options:["a) parseJSON()", "b) JSON.parse()", "c) fromJSON()", "d) parse()"],
        answer:"1" 
    },
    {
        question:"4. What is the purpose of the 'let' keyword in JavaScript?",
        options:["a) Declare a constant variable", "b) Declare a block-scoped variable", "c) Declare a global variable", "d) Declare a function"],
        answer:"1" 
    },
    {
        question:"5. How do you check if a variable is not equal to a specific value in JavaScript?",
        options:["a) x =! 5", "b) x !== 5", "c) x ==! 5", "d) x !=== 5"],
        answer:"1" 
    },
    {
        question:"6. What is the output of the following code: console.log(2 + '2' - 1);",
        options:["a) 3", "b) '22'", "c) 21", "d) NaN"],
        answer:"2" 
    },
    {
        question:"7. Which of the following is the correct way to create a function in JavaScript?",
        options:["a) function: myFunction() {}", "b) func myFunction() {}", "c) function myFunction() {}", "d) create function myFunction() {}"],
        answer:"2" 
    },
    {
        question:"8. What does the '===' operator do in JavaScript?",
        options:["a) Checks for equality and type", "b) Checks for equality only", "c) Checks for type only", "d) Converts the right-hand side to a number"],
        answer:"0" 
    },
    {
        question:"9. What is the purpose of the `break` statement in a switch statement?",
        options:["a) Terminates the switch statement", "b) Skips the current case and moves to the next", "c) Jumps to a specific case label", "d) Exits the current loop"],
        answer:"0" 
    },
    {
        question:"10. What is the purpose of the `window` object in the browser environment?",
        options:["a) Represents the current HTML document", "b) Represents the browser windows", "c) Represents a DOM element", "d) Represents the JavaScript engine"],
        answer:"1" 
    }
];
// Questions array for csharp
var csharpQuestions = [
    {
       question:"1. Which of the following is the correct way to declare a variable in C#?",
       options:["a) int variableName;", "b) variableName int;", "c) var variableName;", "d) int = variableName;"],
       answer:"0" 
    },
    {
        question:"2. What is the purpose of the 'using' statement in C#?",
        options:["a) To include external libraries in the code.", "b) To define a namespace.", "c) To specify the scope of a variable.", "d) To handle exceptions."],
        answer:"0" 
    },
    {
        question:"3. Which of the following is the correct syntax for a single-line comment in C#?",
        options:["a) /* This is a comment */", "b) // This is a comment", "c) # This is a comment", "d) ' This is a comment"],
        answer:"1" 
    },
    {
        question:"4. What does the 'this' keyword refer to in C#?",
        options:["a) It refers to the current instance of the class.", "b) It is used to declare constants.", "c) It refers to the base class.", "d) It is a data type specifier."],
        answer:"0" 
    },
    {
        question:"5. In C#, how can you handle exceptions using try-catch blocks?",
        options:["a) try { /* code / } catch { / exception handling code */ }", "b) exception { /* code */ }" ,"c) catch { /* code / } try { / exception handling code */ }", "d) handle { /* code / } except { / exception handling code */ }"],
        answer:"0" 
    },
    {
        question:"6. What is the default access modifier for members of a C# class if no access modifier is specified?",
        options:["a) public", "b) private", "c) protected", "d) internal"],
        answer:"1" 
    },
    {
        question:"7. In C#, which keyword is used to implement method overloading?",
        options:["a) overload", "b) override", "c) over", "d) None of the above"],
        answer:"3" 
    },
    {
        question:"8. What is the purpose of the 'static' keyword in C#?",
        options:["a) It is used to create static variables.", "b) It is used to declare a constant.", "c) It is used to define static methods.", "d) It is a data type specifier."],
        answer:"2" 
    },
    {
        question:"9. Which of the following is used to exit from a loop in C#?",
        options:["a) break", "b) exit", "c) terminate", "d) return"],
        answer:"0" 
    },
    {
        question:"10. Which of the following is not a valid C# data type?",
        options:["a) int", "b) float", "c) real", "d) char"],
        answer:"2" 
    }
];
// Questions array for database
var databaseQuestions = [
    {
       question:"1. Which of the following is not a type of database model?",
       options:["a) Hierarchical", "b) Relational", "c) Linear", "d) NoSQL"],
       answer:"2" 
    },
    {
        question:"2. What is the purpose of the SQL SELECT statement?",
        options:["a) To insert data into a table", "b) To update data in a table", "c) To retrieve data from a table", "d) To delete data from a table"],
        answer:"2" 
    },
    {
        question:"3. Which of the following is a primary key in a database?",
        options:["a) Duplicate values allowed", "b) Unique identifier for a record", "c) Stores only numeric values", "d) Case-sensitive text"],
        answer:"1" 
    },
    {
        question:"4. What does the acronym SQL stand for?",
        options:["a) Structured Query Language", "b) Simple Question Language", "c) Sequential Query Language", "d) Systematic Question Language"],
        answer:"0" 
    },
    {
        question:"5. Which of the following is a foreign key in a database?",
        options:["a) A key that is shared among multiple tables", "b) A key that uniquely identifies each record in a table", "c) A key that is automatically generated by the database", "d) A key that links to the primary key in another table"],
        answer:"3" 
    },
    {
        question:"6. What is normalization in the context of databases?",
        options:["a) Adding redundancy to improve performance", "b) Organizing data to minimize redundancy and dependency", "c) Combining multiple tables into one for simplicity", "d) Deleting unnecessary data"],
        answer:"1" 
    },
    {
        question:"7. Which of the following is not a relational database management system (RDBMS)?",
        options:["a) MySQL", "b) Oracle", "c) MongoDB", "d) SQL Server"],
        answer:"2" 
    },
    {
        question:"8. What is the purpose of the SQL WHERE clause?",
        options:["a) To filter data based on specified conditions", "b) To order the results of a query", "c) To perform mathematical calculations", "d) To join multiple tables"],
        answer:"0" 
    },
    {
        question:"9. Which of the following is not a valid data type in SQL?",
        options:["a) VARCHAR", "b) INTEGER", "c) BOOLEAN", "d) FLOATING-POINT"],
        answer:"2" 
    },
    {
        question:"10. Which of the following statements is used to add new rows to a table in SQL?",
        options:["a) SELECT", "b) UPDATE", "c) INSERT", "d) DELETE"],
        answer:"2" 
    }
];

//LISTEN FOR load EVENT
window.onload = interactiveQuiz;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function interactiveQuiz(){
    //Fetched the lang container and added the lang options dynamically
    
    //var langContainer = document.getElementById("language");

    for(var i = 0;i < languages.length; i++){
        //Jquery to append lang options
        $("#language").append(`<li><input name='lang' id='lang${i}' type='radio' value='${languages[i]}' /><label for='lang${i}'>${languages[i]}</label></li>`);
        //langContainer.innerHTML += `<li><input name='lang' id='lang${i}' type='radio' value='${languages[i]}' /><label for='lang${i}'>${languages[i]}</label></li>`;
    }

    //Add listeners for submit button
    var startButton = document.getElementById("start_button");
    startButton.addEventListener("click", start);

    //Add listeners for next button
    //var nextButton = document.getElementById("next_button");
    //nextButton.addEventListener("click", nextQuestion);

    //Jquery to add click event for next button
    $("#next_button").on('click',nextQuestion);

    //Hiding the next button while asking for the lang selection
    hideContent("next_button");

    //This function calls the function based on the lang selected
    function start(){
        //Fetched the selected input value and executed the switch function based on selection provided
        selectedLangValue = document.querySelector('input:checked')?.value;

        //Validated the selected value is not null or undefined
        if(selectedLangValue != "" && selectedLangValue != null && selectedLangValue != undefined){
            //Made next button visible as the quiz is started
            unhideContent("next_button");
            //Hided the start button 
            hideContent("start_button");
            //Hiding the instruction div
            hideContent("instructions");
            //Switch case based on the input selected
            switch (selectedLangValue) {
                case "HTML/CSS":
                    //Hiding the sub heading and language selection div
                    hideContent("language");
                    hideContent("sub_heading");
                    //Calling the main function for the value selected
                    htmlQuiz(counter);
                    //Cleared the selection of the lang input
                    var radioButtons = document.querySelector('input:checked');
                    radioButtons.checked = false;
                    break;
                case "JS":
                    //Hiding the sub heading and language selection div
                    hideContent("language");
                    hideContent("sub_heading");
                    //Calling the main function for the value selected
                    jsQuiz(counter);
                    //Cleared the selection of the lang input
                    var radioButtons = document.querySelector('input:checked');
                    radioButtons.checked = false;
                    break;
                case "CSharp":
                    //Hiding the sub heading and language selection div
                    hideContent("language");
                    hideContent("sub_heading");
                    //Calling the main function for the value selected
                    csharpQuiz(counter);
                    //Cleared the selection of the lang input
                    var radioButtons = document.querySelector('input:checked');
                    radioButtons.checked = false;
                    break;
                case "DataBase":
                    //Hiding the sub heading and language selection div
                    hideContent("language");
                    hideContent("sub_heading");
                    //Calling the main function for the value selected
                    databaseQuiz(counter);
                    //Cleared the selection of the lang input
                    var radioButtons = document.querySelector('input:checked');
                    radioButtons.checked = false;
                    break;
                default:
                    break;
            }
        }
        //If the selected value is null then the header is highligted as red
        else{
            var subheading = document.getElementById("sub_heading");
            //Fetched the div tag containing heading to highlight it in red in case of directly clicking start without any selection
            subheading.style.color = 'Red'; 
        }
    }

    //This function takes one parameter tagId and fetch that element and hide it
    function hideContent(htmlTagId){

        //Jquery to hide the element
        $("#"+htmlTagId).hide();

        //var elementToHide = document.getElementById(htmlTagId);
        //elementToHide.style.display = "none";

    }

    //This function takes one parameter tagId and fetch that element and unhide it
    function unhideContent(htmlTagId){

        //Jquery to show the element
        $("#"+htmlTagId).show();

        //var elementToHide = document.getElementById(htmlTagId);
        //elementToHide.style.display = "block";

    }

    //This function shows question for html/css related quiz
    function htmlQuiz(counterValue){
        //This function is called first to remove the exisiting red color when the question is changed
        removeErrorColor("question");
        
        if(counterValue >= 0 && counterValue < 10){
            //This function is used to show the timer
            displayTimer();
            
            var questionContainer = document.getElementById("question");
            var optionsContainer = document.getElementById("choices");
        
            //Fetched the question container and removed the existing question before adding new question
            if(questionContainer.childNodes.length > 0){
                while (questionContainer.firstChild) {
                    questionContainer.removeChild(questionContainer.firstChild);
                }
            }

            //Fetched the option container and removed the existing options before adding new options
            if(optionsContainer.childNodes.length > 0){
                while (optionsContainer.firstChild) {
                    optionsContainer.removeChild(optionsContainer.firstChild);
                }
            }

            //Added new question in the container
            questionContainer.innerHTML += `<div>${htmlQuestions[counterValue].question}</div>`;
            
            //Added new options in the containers
            for (let index = 0; index < htmlQuestions[counterValue].options.length; index++) {
                const option = htmlQuestions[counterValue].options[index];
                optionsContainer.innerHTML += `<li><input name='option' id='option${index}' type='radio' value='${index}' /><label for='option${index}'>${option}</label></li>`;
            }
        }
    }

    //This function shows question for js related quiz
    function jsQuiz(counterValue){
        //This function is called first to remove the exisiting red color when the question is changed
        removeErrorColor("question");
        
        if(counterValue >= 0 && counterValue < 10){
            //This function is used to show the timer
            displayTimer();
            
            var questionContainer = document.getElementById("question");
            var optionsContainer = document.getElementById("choices");
        
            //Fetched the question container and removed the existing question before adding new question
            if(questionContainer.childNodes.length > 0){
                while (questionContainer.firstChild) {
                    questionContainer.removeChild(questionContainer.firstChild);
                }
            }

            //Fetched the option container and removed the existing options before adding new options
            if(optionsContainer.childNodes.length > 0){
                while (optionsContainer.firstChild) {
                    optionsContainer.removeChild(optionsContainer.firstChild);
                }
            }

            //Added new question in the container
            questionContainer.innerHTML += `<div>${jsQuestions[counterValue].question}</div>`;
            
            //Added new options in the containers
            for (let index = 0; index < jsQuestions[counterValue].options.length; index++) {
                const option = jsQuestions[counterValue].options[index];
                optionsContainer.innerHTML += `<li><input name='option' id='option${index}' type='radio' value='${index}' /><label for='option${index}'>${option}</label></li>`;
            }
        }
    }

    //This function shows question for csharp related quiz
    function csharpQuiz(counterValue){
        //This function is called first to remove the exisiting red color when the question is changed
        removeErrorColor("question");
        
        if(counterValue >= 0 && counterValue < 10){
            //To start the timer
            displayTimer();
            
            var questionContainer = document.getElementById("question");
            var optionsContainer = document.getElementById("choices");
        
            //Condition to check to if it has childnodes and if it does have to remove before adding new question
            if(questionContainer.childNodes.length > 0){
                while (questionContainer.firstChild) {
                    questionContainer.removeChild(questionContainer.firstChild);
                }
            }

            //Condition to check to if it has childnodes and if it does have to remove before adding new options
            if(optionsContainer.childNodes.length > 0){
                while (optionsContainer.firstChild) {
                    optionsContainer.removeChild(optionsContainer.firstChild);
                }
            }

            //Add the question in to the container
            questionContainer.innerHTML += `<div>${csharpQuestions[counterValue].question}</div>`;
            
            //Add options to the container from array
            for (let index = 0; index < csharpQuestions[counterValue].options.length; index++) {
                const option = csharpQuestions[counterValue].options[index];
                optionsContainer.innerHTML += `<li><input name='option' id='option${index}' type='radio' value='${index}' /><label for='option${index}'>${option}</label></li>`;
            }
        }
    }

    //This function shows question for database related quiz
    function databaseQuiz(counterValue){
        //This function is called first to remove the exisiting red color when the question is changed
        removeErrorColor("question");
        
        if(counterValue >= 0 && counterValue < 10){
            displayTimer();
            
            var questionContainer = document.getElementById("question");
            var optionsContainer = document.getElementById("choices");
        
            //Fetched the question container and removed the existing question before adding new question
            if(questionContainer.childNodes.length > 0){
                while (questionContainer.firstChild) {
                    questionContainer.removeChild(questionContainer.firstChild);
                }
            }

            //Fetched the option container and removed the existing options before adding new options
            if(optionsContainer.childNodes.length > 0){
                while (optionsContainer.firstChild) {
                    optionsContainer.removeChild(optionsContainer.firstChild);
                }
            }

            //Added new question in the container
            questionContainer.innerHTML += `<div>${databaseQuestions[counterValue].question}</div>`;
            
            //Added new options in the containers
            for (let index = 0; index < databaseQuestions[counterValue].options.length; index++) {
                const option = databaseQuestions[counterValue].options[index];
                optionsContainer.innerHTML += `<li><input name='option' id='option${index}' type='radio' value='${index}' /><label for='option${index}'>${option}</label></li>`;
            }
        }
    }

    //This function is called on click of next button and validates the selected input and change the question
    function nextQuestion(){
        removeErrorColor("question");
        if(counter >= 0 && counter < 9){
            //Fetched the selected value before changing to next question to valid
            var selectionValue = document.querySelector('input:checked')?.value;

            if(selectionValue != null && selectionValue != undefined && selectionValue !=  ""){
                //This function is used to check the ans is correct or not
                checkAnswer(selectionValue, htmlQuestions);

                //If the answer is correct the the timer is reset to 0
                clearTimer();
                //The counter is increased to change the question
                counter++;
                //This function is used to again call the main function according to the quiz lang selected and counter value
                changeContainer(selectedLangValue, counter);
            }
            else{
                if(timeLeft > 0 && !(timeLeft < 0)){
                    //If the time is in between 0 to 15 and the next button is clicked error color is showed on question container
                    errorMessage("question");
                }
                else{
                    // If the timer is less than or equal to 0 than clear the timer and change the question
                    clearTimer();
                    counter++;
                    changeContainer(selectedLangValue, counter);
                }
            }   
        }
        //If the counter has reached the value 9 then hide question, options and timer container
        else{
            hideContent("question");
            hideContent("choices");
            hideContent("timer");
            hideContent("next_button");

            //Chnage the css for the score and make it visible on the page with big fonts using jquery
            $("#score_container").css({'fontSize':'80px','margin':'auto','width':'60%','position':'relative'});

            //var scoreContainer = document.getElementById("score_container");
            //scoreContainer.style.fontSize = "80px";
            //scoreContainer.style.margin = "auto";
            //scoreContainer.style.width = "60%";
            //scoreContainer.style.position = "relative";
        }
    }

    //This function is used to show the remaining time for the question
    function displayTimer(){
        if(counter >= 0 && counter < 10){
            var timerTag = document.getElementById("timer");
            function updateTimer() {
                //Show the remaining time with 0 in front of the single digit
                var remainingTimeString = timeLeft.toString().padStart(2, '0');
                if (timeLeft >= 0) {
                    timerTag.textContent = remainingTimeString;
                    timeLeft--;
                } else {
                    if(counter == 9){
                        hideContent("question");
                        hideContent("choices");
                        hideContent("timer");
                        hideContent("next_button");

                        //Chnage the css for the score and make it visible on the page with big fonts using jquery
                        $("#score_container").css({'fontSize':'80px','margin':'auto','width':'60%','position':'relative'});
                        
                        //var scoreContainer = document.getElementById("score_container");
                        //scoreContainer.style.fontSize = "80px";
                        //scoreContainer.style.margin = "auto";
                        //scoreContainer.style.width = "60%";
                        //scoreContainer.style.position = "relative";
                    }
                    else{
                        clearInterval(timerInterval); // Stop the timer when it reaches 0
                        nextQuestion(); //Change the question
                    }
                }
            }
            updateTimer();  //Display the initial time
            timerInterval = setInterval(updateTimer, 1000); 
        }
    }

    //This function is used to clear the exisiting timer and reset it to 15 seconds on question change
    function clearTimer() {
        // Clear the existing timer
        clearInterval(timerInterval);

        // Reset the seconds
        timeLeft = 15;

        // Update the timer display
        document.getElementById('timer').innerHTML = timeLeft;
    }

    //This function takes one parameter as an input and changes it's color to red to indicate please select an ans
    function errorMessage(tagId){
        //Jquery to change the color
        $("#" + tagId).css({'color':'Red'});
        
        //var element = document.getElementById(tagId);
        //element.style.color = 'Red';
    }

    //This function takes one parameter as an input and changes it's color to white again
    function removeErrorColor(tagId){

        //Jquery to change color back to white
        $("#" + tagId).css({'color':'white'});

        //var element = document.getElementById(tagId);
        //element.style.color = 'White';
    }

    //This function is used to check the selected ans and if it's correct and +1 is added to the score
    function checkAnswer(ansSelected, questionArray){
        var scoreContainer = document.getElementById("score_container");
        
        //If the answer is correct add 1 to the score and render it
        if(ansSelected == questionArray[counter].answer){
            score++;
            scoreContainer.innerText = "Score: " + score + " / 10";

            //Jquery to update the bg color
            $("option" + ansSelected).css({'color':'Green'});
            
            //var selectedAnsTag = document.getElementById("option" + ansSelected);
            //selectedAnsTag.style.background = "Green";
        }
        else{
            //Jquery to update the bg color
            $("option" + ansSelected).css({'background':'Red'});

            //var selectedAnsTag = document.getElementById("option" + ansSelected);
            //selectedAnsTag.style.background = "Red";
        }
    }

    //This function is used to call the same selected lang function on click of next to change the question
    function changeContainer(selectionValue, counter){
        //Based on the selection value and counter it this function calls the right quiz function to continue the question loop
        if(selectionValue != "" && selectionValue != null && selectionValue != undefined){
            switch (selectionValue) {
                case "HTML/CSS":
                    htmlQuiz(counter);
                    break;
                case "JS":
                    jsQuiz(counter);
                    break;
                case "CSharp":
                    csharpQuiz(counter);
                    break;
                case "DataBase":
                    databaseQuiz(counter);
                    break;
                default:
                    break;
            }
        }
    }
}