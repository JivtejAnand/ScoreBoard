let homePoints = document.getElementById("pointsHome")
let guestPoints = document.getElementById("pointsGuest")
let homeScore = 0
let guestScore = 0



function addOneHome(){

    homeScore += 1 
    homePoints.textContent = homeScore
   
    whoIsHigher()
    
}

function addTwoHome(){
    homeScore += 2 
    homePoints.textContent = homeScore

    whoIsHigher()
    
}

function addThreeHome(){
    homeScore += 3 
    homePoints.textContent = homeScore

    whoIsHigher()
}

function addOneGuest(){
    guestScore += 1 
    guestPoints.textContent = guestScore

    whoIsHigher()
}

function addTwoGuest(){
    guestScore += 2 
    guestPoints.textContent = guestScore

    whoIsHigher()
}

function addThreeGuest(){
    guestScore += 3 
    guestPoints.textContent = guestScore

    whoIsHigher()
}

function resetGame(){

    guestScore = 0
    homeScore = 0

    guestPoints.textContent = guestScore
    homePoints.textContent = homeScore
    
    document.getElementById("home").style.color = "white";
    document.getElementById("guest").style.color = "white";
    

}

function whoIsHigher(){

    if (homeScore > guestScore){

        document.getElementById("home").style.color = "#4CDE19";
        document.getElementById("guest").style.color = "white";
        
    }

    else if (guestScore > homeScore) {
 
        document.getElementById("guest").style.color = "#4CDE19";
        document.getElementById("home").style.color = "white";

    }

    else if ( homeScore == guestScore) {

        document.getElementById("home").style.color = "#FF6B00";
        document.getElementById("guest").style.color = "#FF6B00";

    }

}