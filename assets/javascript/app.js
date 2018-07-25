// New and Improved section
var panel = $("#quiz-area");
var countStartNumber = 30;

var questions = [{
  question: "Which two players have the most Super Bowl rings of all time?",
  answers: ["Randy Moss and Joe Montana", "Tom Brady and Charles Haley", "Tim Tebow and Jerry Rice", "Brett Farve and Julio Jones"],
  correctAnswer: "Tom Brady and Charles Haley",
  image: "assets/images/TomB.gif"
}, {
  question: "Which running back has the most rushing yards in the history of the NFL? (18,355 yards)",
  answers: ["Ahmad Green", "Adrian Peterson", "Ricky Williams", "Emmitt Smith"],
  correctAnswer: "Emmitt Smith",
  image: "assets/images/Amari.gif"
}, {
  question: "Which coach has the most total wins in league history? (347 wins)",
  answers: ["Bill Belichick", "Don Shula", "George Halas", "Tom Landry"],
  correctAnswer: "Don Shula",
  image: "assets/images/CJA.gif"
}, {
  question: "Who has scored the most total touchdowns in NFL History? (208 TDs)",
  answers: ["Jerry Rice", "Barry Sanders", "LaDainian Tomlinson", "Terrell Owens"],
  correctAnswer: "Jerry Rice",
  image: "assets/images/DrewBreezy.gif"
}, {
  question: "",
  answers: ["", "", "", ""],
  correctAnswer: "",
  image: ""
}, {
  question: "",
  answers: ["", "", "", ""],
  correctAnswer: "",
  image: ""
}, {
  question: "",
  answers: ["", "", "", ""],
  correctAnswer: "",
  image: ""
}, {
  question: "",
  answers: ["", "", "", ""],
  correctAnswer: "",
  image: ""
}, {
  question: "",
  answers: ["", "", "", ""],
  correctAnswer: "",
  image: ""
}, {
  question: "",
  answers: ["", "", "", ""],
  correctAnswer: "",
  image: ""
}];
// New and improved section ends

// Old Code starts
var timer;

var trivia = {
	// Set the boundaries of the game
	time: 15,	
	correct: 0,
	incorrect: 0,
	unanswered: 0,
	//Four answers nested within Question strings
	question: {
		one: {
			string: "Which two players have the most Super Bowl rings of all time? (5 rings each)",
			answer: {
				one: {
					string: "Tom Brady and Charles Haley",
					value: true
				},
				two: {
					string: "Randy Moss and Joe Montana",
					value: false
				},
				three: {
					string: "Tim Tebow and Jerry Rice",
					value: false
				},
				four: {
					string: "Brett Farve and Julio Jones",
					value: false
				}
			},
			gif: "assets/images/TomB.gif"
		},
		two: {
			string: "Which running back has the most rushing yards in the history of the NFL? (18,355 yards)",
			answer: {
				one: {
					string: "Ahmad Green",
					value: false
				},
				two: {
					string: "Adrian Peterson",
					value: false
				},
				three: {
					string: "Emmitt Smith",
					value: true
				},
				four: {
					string: "Ricky Williams",
					value: false
				}
			},
			gif: "assets/images/Amari.gif"
		},
		three: {
			string: "Which coach has the most total wins in league history? (347 wins)",
			answer: {
				one: {
					string: "Bill Belichick",
					value: false
				},
				two: {
					string: "Don Shula",
					value: true
				},
				three: {
					string: "George Halas",
					value: false
				},
				four: {
					string: "Tom Landry",
					value: false
				}
			},
			gif: "assets/images/CJA.gif"
		},
		four: {
			string: "Who has scored the most total touchdowns in NFL History? (208 TDs)",
			answer: {
				one: {
					string: "Jerry Rice",
					value: true
				},
				two: {
					string: "Barry Sanders",
					value: false
				},
				three: {
					string: "LaDainian Tomlinson",
					value: false
				},
				four: {
					string: "Terrell Owens",
					value: false
				}
			},
			gif: "assets/images/DrewBreezy.gif"
		},
		five: {
			string: "Who holds the longest rushing play in NFL history? (99 Yards)",
			answer: {
				one: {
					string: "Marshawn Lynch",
					value: false
				},
				two: {
					string: "Tyreek Hill",
					value: false
				},
				three: {
					string: "LeSean McCoy",
					value: false
				},
				four: {
					string: "Tony Dorsett",
					value: true
				}
			},
			gif: "assets/images/GioFlip.gif"
		},
		six: {
			string: "Which Quarterback has the most 4th Quarter Comebacks in a single season? (8 4th Quarter Comebacks)",
			answer: {
				one: {
					string: "Drew Brees",
					value: false
				},
				two: {
					string: "Tom Brady",
					value: false
				},
				three: {
					string: "Matthew Stafford",
					value: true
				},
				four: {
					string: "Aaron Rodgers",
					value: false
				}
			},
			gif: "assets/images/MikeBen.gif"
		},
		seven: {
			string: "Who has the most touchdowns returning kicks and punts in league history? (20 returns)",
			answer: {
				one: {
					string: "Devin Hester",
					value: true
				},
				two: {
					string: "Rod Woodson",
					value: false
				},
				three: {
					string: "Deion Sanders",
					value: false
				},
				four: {
					string: "Darren Sproles",
					value: false
				}
			},
			gif: "assets/images/KickReturn.gif"
		},
		eight: {
			string: "Who has the most yards from scrimmage ever? (23,540 yards from scrimmage)",
			answer: {
				one: {
					string: "Walter Peyton",
					value: false
				},
				two: {
					string: "Jerry Rice",
					value: true
				},
				three: {
					string: "Barry Sanders",
					value: false
				},
				four: {
					string: "Randy Moss",
					value: false
				}
			},
			gif: "assets/images/Pman.gif"
		},
		nine: {
			string: "Which of these great players has the most passing yards in NFL history?",
			answer: {
				one: {
					string: "Drew Brees",
					value: false
				},
				two: {
					string: "Brett Favre",
					value: false
				},
				three: {
					string: "Peyton Manning",
					value: true
				},
				four: {
					string: "Tom Brady",
					value: false
				}
			},
			gif: "assets/images/ReggieW.gif"
		},
		ten: {
			string: "Who intercepted Quarterbacks a record 14 times in one season?",
			answer: {
				one: {
					string: "Deion Sanders",
					value: false
				},
				two: {
					string: "Night Trane Lane",
					value: true
				},
				three: {
					string: "Lester Hayes",
					value: false
				},
				four: {
					string: "Paul Krause",
					value: false
				}
			},
			gif: "assets/images/Odell.gif"
		}
	},
	// Old Code Ends

	//Method that starts the timer
	startTimer: function() {
		trivia.time = 15;
		$("#timer").text("Time Remaining: " + trivia.time + " seconds");
		timer = setInterval(trivia.countDown, 1000)
	},

	//Method that stops the timer
	stopTimer: function() {
		clearInterval(timer);
	},
	// When time expires this method will activate
	timeOver: function() {
		this.unanswered++;		
		$(".answer").hide();
		$("#question").html("Whoops, every second counts! The correct answer is:<br>");
		$("[value='true']").contents().clone().appendTo($("#question"));
		$("#question").append("<br><img src='" + questions[i].gif + "'>");
		this.nextQuestion();
	},
	// Counts down the game timer a second at a time
	countDown: function() {
		trivia.time--;
		$("#timer").text("Time Remaining: " + trivia.time + " seconds");

		if (trivia.time === 0) {
			trivia.stopTimer();
			trivia.timeOver();
		}
	},

	startQuiz: function() {
		i = 0;
		this.correct;
		this.incorrect;
		this.unanswered;
		trivia.questionStart(questions[i]);
		$("#start").hide();
	},

	//Calls the previously assigned Qs and As to appear in "index.html"
	questionStart: function(q) {
		$(".answer").show();
		$("#question").text(q.string);
		$("#optionA").text(q.answer.one.string);
		$("#optionB").text(q.answer.two.string);
		$("#optionC").text(q.answer.three.string);
		$("#optionD").text(q.answer.four.string);

		$("#optionA").attr("value", q.answer.one.value);
		$("#optionB").attr("value", q.answer.two.value);
		$("#optionC").attr("value", q.answer.three.value);
		$("#optionD").attr("value", q.answer.four.value);

		this.startTimer();
	},

	rightAnswer: function() {
		this.correct++;
		$(".answer").hide();
		$("#question").html("Touchdown!");
		$("#question").append("<br><img src='" + questions[i].gif + "'>");
		this.nextQuestion();
		
	},

	wrongAnswer: function() {
		this.incorrect++;
		$(".answer").hide();
		$("#question").html("Intercepted! Correct Answer:<br>");
		$("[value='true']").contents().clone().appendTo($("#question"));
		$("#question").append("<br><img src='" + questions[i].gif + "'>");
		this.nextQuestion();
	},

	nextQuestion: function() {
		i++
		this.stopTimer();
		if (i < questions.length){
			setTimeout(function(){trivia.questionStart(questions[i])}, 1000*9);
		}
		else {
			setTimeout(function(){trivia.endQuiz()}, 1000*10);
		}
	},

	endQuiz: function() {
		$("#start").show()
		$("#question").text("Game Over! Try to beat your scores below:")
		$("#question").append("<p>Correct: " + this.correct + "</p>");
		$("#question").append("<p>Incorrect: " + this.incorrect + "</p>");
		$("#question").append("<p>Time-outs " + this.unanswered + "</p>");
	}
};
// Loop that cycles through the ten questions to dynamically apply content to the html
for (var j = 0; j < 10; j++) {
	var number = Math.floor(Math.random() * 4) + 1;
	console.log(number);
}

var tQ = trivia.question;
var questions = [tQ.one, tQ.two, tQ.three, tQ.four, tQ.five, tQ.six, tQ.seven, tQ.eight, tQ.nine, tQ.ten]

// Hides the answer until we need it revealed
$(".answer").hide();

//Hitting the start button will begin the quiz. The 15 second timer will kickoff for each individual question.
$("#start").click(function() {
	trivia.startQuiz();
});

//Choosing the correct answer will stop the timer, and replace the question and answers with a correct answer message, and an animated gif
$(".answer").click(function() {
	console.log(this);
	console.log($(this).attr("value"));

	var check = $(this).attr("value");
	
	if (check === "true") {
		trivia.rightAnswer();
	}
	if (check === "false") {
		trivia.wrongAnswer();
	}
});