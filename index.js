let homeMarks = document.getElementById("home-marks")
let guestMarks = document.getElementById("guest-marks")
let marks = 0
function incOne() {
   marks += 1;
   homeMarks.textContent = marks
    }
    
function incTwo() {
   marks += 2;
   homeMarks.textContent = marks
    }
    
    function incThree() {
   marks += 3;
   homeMarks.textContent = marks
    }
    
    let points = 0
    
    function incFour() {
   points += 1;
   guestMarks.textContent = points
    }
    
    function incFive() {
   points += 2;
   guestMarks.textContent = points
    }
    
    function incSix() {
   points += 3;
   guestMarks.textContent = points
    }
    
    function newGame() {
        points = 0
        marks = 0
        homeMarks.textContent = points
        guestMarks.textContent = marks
    }