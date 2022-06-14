//Function for go back to top button in portfolio.html page

var mybutton = document.getElementById("btn");

//function will activate itself when we perform scrolling down on page
window.onscroll = function() {
  scrollFunction();
}

//function for the appearance of Button, which will appear once we scroll down the page for more than 200 pixels
function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) { //two declarations because some browsers work with one and not with other
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//actual work of function. Go back to top when we click on the button(arrow)
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




//Function for slideshow of owner's pictures in about.html page

var i = 0;
var time = 2700;
var pictures = [];


//pictures with their 
// Image List
pictures[0] = "imgs/kenan.jpg";
pictures[1] = "imgs/kenan2.png";
pictures[2] = "imgs/kenan3.png";
pictures[3] = "imgs/kenan4.png";
pictures[4] = "imgs/kenan5.png";
pictures[5] = "imgs/kenan6.png";


// Change Image
function changeImg(){
	document.slide.src = pictures[i];

	// Check If Index Is Under Max
	if(i < pictures.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg


