function quizeFunction() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;

	var correct = 0;


	if (question1 == "dhaka") {
		correct++;
	}
	if (question2 == "64") {

		correct++;
	}
	if (question3 == "new delhi") {
		correct++;
	}

	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("correct-answer").innerHTML = "You got " + correct + " correct.";
}