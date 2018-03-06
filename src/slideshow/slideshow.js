function initSlidesCtx() {
  /* Create context to hold index and timer references */
  var context = {index:0};

  /* Add member method to start slide show on context */
  context.showSlides = 
   function () {
     var i;
     var slides = document.getElementsByClassName("mySlides");
     var dots = document.getElementsByClassName("dot");
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     this.index++;
     if (this.index > slides.length) {this.index = 1}
     for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[this.index-1].style.display = "block";
     dots[this.index-1].className += " active";
     clearTimeout(this.timer);
     var _this = this;
     this.timer = setTimeout(function() { _this.showSlides(); }, 3000);
     return;
  };

  /* Add member method to show image at specific index */
  context.showSlide = 
   function(idx) {
     this.index = idx-1;
     this.showSlides();
  };

  /* Return slide context ready to use */
  return context;
}

