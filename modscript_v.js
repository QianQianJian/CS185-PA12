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

// prevent click from palying the video automatically
document.querySelector("modal").addEventListener("click", function(event) {
    event.preventDefault();
}, false);