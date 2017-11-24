//Basic sketch of an interactive "button" that changes colour randomly upon pressing


function setup() {
	width=900;
	height=600;
	createCanvas(width, height);
	background(32);
	back=random(255);
	r1=random(255);
	g1=random(255);
	b1=random(255);
	r2=random(255);
	g2=random(255);
	b2=random(255);
	r3=random(255);
	g3=random(255);
	b3=random(255);
	r4=random(255);
	g4=random(255);
	b4=random(255);
}

//draw loops for the entire function
function draw() {
	strokeWeight(5);

	//draw the four circles
	stroke(r1,g1,b1);
	fill(r1,g1,b1,127);
	ellipse(width/4,height/4,150,150);

	stroke(r2,g2,b2);
	fill(r2,g2,b2,127);
	ellipse(width-width/4,height/4,150,150);

	stroke(r3,g3,b3);
	fill(r3,g3,b3,127);
	ellipse(width/4,height-height/4,150,150);

	stroke(r4,g4,b4);
	fill(r4,g4,b4,127);
	ellipse(width-width/4,height-height/4,150,150);

}

//checks if mouse is pressed
function mousePressed(){
	var d1=dist(mouseX,mouseY,width/4,height/4);
	if(d1<75){
		r1=random(255);
		g1=random(255);
		b1=random(255);
	}

	var d2=dist(mouseX,mouseY,width-width/4,height/4);
	if(d2<75){
		r2=random(255);
		g2=random(255);
		b2=random(255);
	}

	var d3=dist(mouseX,mouseY,width/4,height-height/4);
	if(d3<75){
		r3=random(255);
		g3=random(255);
		b3=random(255);
	}

	var d4=dist(mouseX,mouseY,width-width/4,height-height/4);
	if(d4<75){
		r4=random(255);
		g4=random(255);
		b4=random(255);
	}

	if(d1>75 && d2>75 && d3>75 && d4>75){
		var back=random(255);
		background(back);
	}
}
