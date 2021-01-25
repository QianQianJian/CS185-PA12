// For image display

// Get the modal
var modal = document.getElementById("myModal");
// Get all images
var images = document.getElementsByClassName("myImages");
// The specific image in the model
var modalImg = document.getElementById("img01");

// Go thru all images 
for (var i = 0; i < images.length; i++) {
    var img = images[i];
    // and attach our click listener for this image.
    img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
window.onclick = function(event) { 
    if(event.target == modal){
        modal.style.display = "none";
    }
}

//Back to top button

//Get the button:
mybutton = document.getElementById("myBtn");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var height = document.getElementsByTagName('body')[0].offsetHeight;
  if (document.body.scrollTop > 0.25*height || document.documentElement.scrollTop > 0.25*height ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}