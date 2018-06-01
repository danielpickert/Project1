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

// Correct answers
if (question1 == "Chocolate Turtles") {
	correct++
}
if (question2 == "The Dementors") {
	correct++
}
if (question3 == "Stayin' Alive") {
	correct++
}
if (question4 == "Garbage") {
	correct++
}
if (question5 == "Gould") {
	correct++
}
if (question6 == "Devin") {
	correct++
}
if (question7 == "WL HUNG") {
	correct++
}
if (question8 == "Anthony Gardner") {
	correct++
}
if (question9 == "Cocktails") {
	correct++
}
if (question10 == "Limitless Paper in a Paperless World") {
	correct++
}

// Messages that will appear based on how many the User got correct
var messages = ["You're an expert! You should have taken over as regional manager when Steve Carell left the show in season 7!",
 "Dinkin' Flicka! You're almost an expert but not quite. Try again and go for the gold!",
  "Rudit-dit-dadoo! Go celebrate with a drink at Poor Richard's!",
  "Good not great. Try again.",
  "Very average. You are cruisin' for a bruisin', and my name is Captain Bruisin'. Try again.",
  "Not very good. You are basically Phyllis and this quiz is the soccer ball. Try again.",
  "You gotta be kidding me. You call yourself a fan? Try again.",
  "Very bad. You might want to lay low for awhile. Try again.",
  "Even Toby would have done better. Try again.",
  "Terrible. Try again.",
  "Rock bottom. Try again."]


 // Gifs that will appear after User clicks "Done"
 var gifs = ["img/0gif.gif","img/1gif.gif","img/2gif.gif","img/3gif.gif",
 "img/4gif.gif","img/5gif.gif","img/6gif.gif","img/7gif.gif",
 "img/8gif.gif","img/9gif.gif","img/10gif.gif"]

// Determines which message is displayed after User clicks "Done"
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



// Makes message & gif appear after User clicks "Done"
document.getElementById("after_submit").style.visibility = "visible"

document.getElementById("message").innerHTML = messages[index]
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!"
document.getElementById("gif").src = gifs[index]

}