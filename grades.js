var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var grades = {
	"A": 0,
	"B": 0,
	"C": 0,
	"D": 0,
	"F": 0,
	"lowest": 100,
	"highest": null
};

function checkLowest(grade) {
	if (grade <= grades.lowest) {
		grades.lowest = grade;
	}
}

function checkHighest(grade) {
	if (grade >= grades.highest) {
		grades.highest = grade;
	}
}

for (var i = 0; i < scores.length; i++) {
	if (scores[i] >= 50 && scores[i] <= 60) {
		grades.F++;
	} else if (scores[i] >= 61 && scores[i] <= 70) {
		grades.D++;
	} else if (scores[i] >= 71 && scores[i] <= 80) {
		grades.C++;
	} else if (scores[i] >= 81 && scores[i] <= 90) {
		grades.B++;
	} else if (scores[i] >= 91 && scores[i] <= 100) {
		grades.A++;
	} else {
		// do nothing
	}
	checkLowest(scores[i]);
	checkHighest(scores[i]);
}

console.log(grades);