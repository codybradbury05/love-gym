// create an array and add some questions and answes
// note arrays are zero based. That means array [0] is the first one
var currentquestion = 0;
var questionsarray = [{
  "question": "Bench press targets your chest",
  "response": "Yes, bench press does target your chest",
  "answer": false
}, {
  "question": "Deadlift targets your back",
  "response": "Yes, Deadlift does target your back",
  "answer": true
}, {
  "question": "Squat targets your legs",
  "response": "Yes, squat does target your legs",
  "answer": false
}];

(function() {
    // your page initialization code here
    fnReset(); //call reset on document ready
  
    document.getElementById("nextquestion").addEventListener('click', function(event) {
      fnCheck();
    });
  
    document.getElementById("checktrue").addEventListener('click', function(event) {
      fnCheck(true);
    });
    document.getElementById("checkfalse").addEventListener('click', function(event) {
      fnCheck(false);
    });
    document.getElementById("nextquestion").addEventListener('click', function(event) {
      fnNext();
    });
    document.getElementById("reset").addEventListener('click', function(event) {
      fnReset();
    });
  