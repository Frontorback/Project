( function() {

    var slider = document.querySelector('.slider-container-four');
    var sliderItems = document.querySelectorAll('.slider-item-four');
    var dots = document.querySelectorAll('.dots');
    
    
    

    var backBtn = document.querySelector('.prev-two');
    var nextBtn = document.querySelector('.next-two');
    backBtn.innerText = "<";
    nextBtn.innerText = '>';
    
    var slideIndex = null;
    
    slider.addEventListener('click', function(e) {
      var t = e.target;
    
      if (t.matches('[data-changed]')) {
        setActiveSlide(slideIndex + +t.getAttribute('data-changed'));
      } else if (t.matches('.dots')) {
        setActiveSlide([...dots].indexOf(t));
      }
    });
    
    setActiveSlide(0);
    
    function setActiveSlide(index) {
      slider.querySelectorAll('.slider-active-four').forEach(n => n.classList.remove('slider-active-four'));
      slider.querySelectorAll('.active').forEach(n => n.classList.remove('active'));
    
        slideIndex = (index >= 0 ? 0 : sliderItems.length) + (index % sliderItems.length);
    
        sliderItems[slideIndex].classList.add('slider-active-four');
        dots[slideIndex].classList.add('active');
    }
    
    }
  )();