// Get the modal
var modal = document.getElementById('myModal');
        
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('img1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// When the user clicks on <modal> or (x), close the modal
modal.onclick = function() { 
  modal.style.display = "none";
}