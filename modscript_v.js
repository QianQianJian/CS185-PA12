// For video display

// Get the modal
var modal = document.getElementById("myModal");

// Get all videos
var videos = document.getElementsByClassName("myVideos");

// The specific video in the model
var modalVid = document.getElementById("vid01");

// Go thru all videos 
for (let i = 0; i < videos.length; i++) {
    videos[i].onclick = function() {
        modal.style.display = "block";
        modalVid.src = videos[i].getElementsByTagName('source')[0].src;
        modalVid.play();    
    }
}
  
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
window.onclick = function(event) { 
    if(event.target == modal){
        modal.style.display = "none";
        modalVid.pause(); 
    }
}

