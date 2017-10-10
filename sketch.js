var films = [];
var filmData;

function preload() {
	filmData = loadJSON("films.json", gotData);
}

function setup() {
	createCanvas(760, 240);
	noStroke();
	fill(255);
}

function draw() {

    background(0);
    
    for (var i = 0; i < films.length; i++) {
    	var x = i*54 + 50;
    	textSize(14);
    	films[i].display(x, 180);
    }

    fill(255);
    textSize(48);
    text("The films of " + films[0].director, 45, height+4);

}

function gotData() {

	for (var prop in filmData) {
		films[prop] = new Film(filmData[prop]);
	}

}

function Film(f) {
	this.title = f.title;
	this.director = f.director;
	this.year = f.year;
	this.rating = f.rating;

	this.display = function (x,y) {
		var ratingGray = map(this.rating, 6.5, 8.1, 100, 255);
		push();
		translate(x,y);
		rotate(-QUARTER_PI);
		fill(ratingGray);
		text(this.title, 17, -10);
		rotate(QUARTER_PI);
		fill(255, 127, 0);
		text(this.year, 0, 10);
		pop();
	}
}
