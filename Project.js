(function() {

    var slider = document.querySelector('.loopSliders');
    var sliderItems = document.querySelectorAll('.loopSliders-item ');
    var dots = document.querySelectorAll('.doted');
    
  

    var backBtn = document.querySelector('.prev-first')
    var nextBtn = document.querySelector('.next-first')
    backBtn.innerText = "<";
    nextBtn.innerText = '>';

    
    var slideIndex = null;
    
    slider.addEventListener('click', function(e) {
      var t = e.target;
    
      if (t.matches('[data-changing]')) {
        setActiveSlide(slideIndex + +t.getAttribute('data-changing'));
      } else if (t.matches('.doted')) {
        setActiveSlide([...dots].indexOf(t));
      }
    });
    
    setActiveSlide(0);
    
    function setActiveSlide(index) {
      slider.querySelectorAll('.loopSliders-active').forEach(n => n.classList.remove('loopSliders-active'));
      slider.querySelectorAll('.active').forEach(n => n.classList.remove('active'));
    
        slideIndex = (index >= 0 ? 0 : sliderItems.length) + (index % sliderItems.length);
    
        sliderItems[slideIndex].classList.add('loopSliders-active');
        dots[slideIndex].classList.add('active');
    }
    
    }
)()
        
        
