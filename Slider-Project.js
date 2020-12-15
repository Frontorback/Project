window.onload = function() {

    var slider = document.querySelector('.slider-container');
    var sliderItems = document.querySelectorAll('.slider-item');
    var dots = document.querySelectorAll('.dot');
    
  

    var backBtn = document.querySelector('.prev')
    var nextBtn = document.querySelector('.next')
    backBtn.innerText = "<";
    nextBtn.innerText = '>';

    
    var slideIndex = null;
    
    slider.addEventListener('click', function(e) {
      var t = e.target;
    
      if (t.matches('[data-change]')) {
        setActiveSlide(slideIndex + +t.getAttribute('data-change'));
      } else if (t.matches('.dot')) {
        setActiveSlide([...dots].indexOf(t));
      }
    });
    
    setActiveSlide(0);
    
    function setActiveSlide(index) {
      slider.querySelectorAll('.slider-active').forEach(n => n.classList.remove('slider-active'));
      slider.querySelectorAll('.active').forEach(n => n.classList.remove('active'));
    
        slideIndex = (index >= 0 ? 0 : sliderItems.length) + (index % sliderItems.length);
    
        sliderItems[slideIndex].classList.add('slider-active');
        dots[slideIndex].classList.add('active');
    }
    
    }