var raw_data = {
    "questions" : [
		{
			"question_text": "charles babbage invented the computer.",
			"options": [
				{
					"option_text" : "True",
					"is_correct" : true,
					"option_feedback": "correct answer"

				},
				{
					"option_text" : "False",
					"is_correct" : false,
					"option_feedback": "wrong answer"

				}
			],
			"hints" : [
				"try to remember the first introduction class."
			]

		},
		{
			"question_text": "Mahatma Gandhi is the father our nation.",
			"options": [
				{
					"option_text" : "True",
					"is_correct" : true,
					"option_feedback": "correct answer"

				},
				{
					"option_text" : "False",
					"is_correct" : false,
					"option_feedback": "wrong answer"

				}
			],
			"hints" : [
				"try to remember the first page in the testbook."
			]

		},
		{
			"question_text": "Who wrote the national Anthem?",
			"options": [
				{
					"option_text" : "Tagore",
					"is_correct" : true,
					"option_feedback": "correct answer"

				},
				{
					"option_text" : "Tyagaraju",
					"is_correct" : false,
					"option_feedback": "wrong answer"

				}
			],
			"hints" : [
				"try to remember the first page in the testbook."
			]

		},
		{
			"question_text": "Delhi is the capital of India.",
			"options": [
				{
					"option_text" : "True",
					"is_correct" : true,
					"option_feedback": "correct answer"

				},
				{
					"option_text" : "False",
					"is_correct" : false,
					"option_feedback": "wrong answer"

				}
			],
			"hints" : [
				"try to remember the first page in the testbook."
			]

		}
	]
};

var data = JSON.stringify(raw_data);
console.log(data);
var obj = JSON.parse(data);

function detailsupload() {
	for(var i=1; i<5; i++) {
		var question_id="q" + i;
		document.getElementById(question_id).innerHTML = obj.questions[i-1].question_text;
		document.getElementById(question_id+1+1).innerHTML = obj.questions[i-1].options[0].option_text;
		document.getElementById(question_id+2+2).innerHTML = obj.questions[i-1].options[1].option_text;

	}
}

function check_answer(argument) {
	console.log(argument);
	var question = parseInt(argument[1], 10);
	var option = parseInt(argument[2], 10);
	if(obj.questions[question-1].options[option-1].is_correct) {
		document.getElementById("demo" + argument[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible question-cor-ans">' + 
					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
					"<strong>correct: </strong>" + obj.questions[question-1].options[option-1].option_feedback +
				'</div>';
	} else {
		document.getElementById("demo" + argument[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible question-inc-ans">' + 
					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
					"<strong>Incorrect: </strong>" + obj.questions[question-1].options[option-1].option_feedback +
				'</div>';
	}
}

function get_hint(arg) {
	var question = parseInt(arg[1], 10);
	document.getElementById("hint" + arg[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible question-hint">' + 
					'<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
					"<strong>Hint: </strong>" + obj.questions[question-1].hints[0] +
				'</div>';

}