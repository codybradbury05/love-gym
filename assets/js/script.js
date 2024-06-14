// create an array and add some questions and answes
// note arrays are zero based. That means array [0] is the first one
var currentquestion = 0;
var questionsarray = [{
  "question": "Bench press targets your chest",
  "response": "Yes, bench press does target your chest",
  "answer": true
}, {
  "question": "Deadlift targets your back",
  "response": "Yes, Deadlift does target your back",
  "answer": true
}, {
  "question": "Bicep curls targets your legs",
  "response": "no, bicep curls does target your legs",
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
})();

function fnReset() {

    document.getElementById('questionresponse').classList.add('hide');
    document.getElementById('nextquestion').classList.add('hide');
    document.getElementById('reset').classList.add('hide');
    document.getElementById('questionbox').classList.remove('hide');
    currentquestion = 0;
    document.getElementById('questiontext').innerHTML = questions[currentquestion].question;
  }

  function fnNext() {
    document.getElementById('questionresponse').classList.add('hide');
    if (currentquestion < questions.length - 1) {
      currentquestion = currentquestion + 1;
      document.getElementById('nextquestion').classList.add('hide');
      document.getElementById('reset').classList.add('hide');
  
    } else {
  
      document.getElementById('nextquestion').classList.add('hide');
      document.getElementById('questionbox').classList.add('hide');
      document.getElementById('reset').classList.remove('hide');
    }
    document.getElementById('questionresponse').classList.add('hide');
    document.getElementById('questiontext').innerHTML = questions[currentquestion].question;
  }