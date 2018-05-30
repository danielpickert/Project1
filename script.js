function check() {

var question1 = document.quiz.question1.value
var question2 = document.quiz.question2.value
var question3 = document.quiz.question3.value
var question4 = document.quiz.question4.value
var question5 = document.quiz.question5.value
var question6 = document.quiz.question6.value
var question7 = document.quiz.question7.value
var question8 = document.quiz.question8.value
var question9 = document.quiz.question9.value
var question10 = document.quiz.question10.value
var correct = 0

if (question1 == "") {
	correct++
}
if (question2 == "") {
	correct++
}
if (question3 == "") {
	correct++
}
if (question4 == "") {
	correct++
}
if (question5 == "") {
	correct++
}
if (question6 == "") {
	correct++
}
if (question7 == "") {
	correct++
}
if (question8 == "") {
	correct++
}
if (question9 == "") {
	correct++
}
if (question10 == "") {
	correct++
}

var messages = ["You're an expert! You should have taken over as regional manager when Steve Carell left the show after season 7!",
 "Dinkin' Flicka! You're almost an expert but not quite. Sign the lease on your condo and go for the gold medal!",
  "Rudit-dit-dadoo!",
  "Good not great.",
  "6 out of 10",
  "5 out of 10",
  "4 out of 10",
  "3 out of 10",
  "2 out of 10",
  "1 out of 10",
  "0 out of 10"]

 var gifs = ["","","",]

 var index

 	if (correct == 0) {
 		index = 10
 	} 

 	if (correct == 1) {
 		index = 9
 	}

 	if (correct == 2) {
 		index = 8
 	}

 	if (correct == 3) {
 		index = 7
 	}

 	if (correct == 4) {
 		index = 6
 	}

 	if (correct == 5) {
 		index = 5
 	}

 	if (correct == 6) {
 		index = 4
 	}

 	if (correct == 7) {
 		index = 3
 	}

 	if (correct == 8) {
 		index = 2
 	}

 	if (correct == 9) {
 		index = 1
 	}

 	if (correct == 10) {
 		index = 0
 	}




document.getElementById("after_submit").style.visibility = "visible"

document.getElementById("message").innerHTML = messages[index]
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!"

}