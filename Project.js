function Sliders(selector,image, loop = true)  {
    this.selector = selector;

    this.rootEl = document.querySelector(selector);
    

this.images = image;
this.loops = loop;
this.currentSlideIndex = 0;


this.bodyEl = this.createBody();

this.createControls();

    this.rootEl.append(this.bodyEl);
    this.rootEl.classList.add('slider');
    this.render();
    

}

Sliders.prototype.createControls = function() {

    const nextBtn = document.createElement('button');
    const backBtn = document.createElement('button');

    nextBtn.innerText = '>';
    backBtn.innerText = '<';

    nextBtn.className = 'slider_control-button slider_control-next';
    backBtn.className = 'slider_control-button slider_control-back';

    nextBtn.addEventListener (
        'click',
        this.nextSlide.bind(this)

    );

    backBtn.addEventListener (
        'click',
        this.backSlide.bind(this)
    );


    this.nextBtn = nextBtn;
    this.backBtn = backBtn;

    this.rootEl.append(nextBtn, backBtn );
}



Sliders.prototype.createBody = function() {

   const bodyEl = document.createElement('div');
    bodyEl.className = 'slider_body';



    //const createSliderEl = this.createSliderEl
    this.SlideCol = this.images.map(
        function(imgSrc, imgIdx) {
            return this.createSliderEl(imgIdx);
        },
        this,
    );
    
    bodyEl.append.apply(bodyEl,this.SlideCol);
    return bodyEl;
    }



Sliders.prototype.createSliderEl = function(index) {
    const slideEl = document.createElement('img');
    // const EllipseEl = document.getElementsByClassName('loopSliders-ellipse')

    slideEl.className = 'slider_img';
    slideEl.src = this.images[index];
    // this.images[index] = EllipseEl;

    return slideEl;
}


Sliders.prototype.backSlide = function () {

 this.currentSlideIndex--;
 if(this.loops) {
     this.currentSlideIndex = (this.images.length + this.currentSlideIndex) % this.images.length;
 } else {
     this.currentSlideIndex = Math.max(this.currentSlideIndex, 0);
 }
 this.render();
}
Sliders.prototype.nextSlide = function () {
    
    this.currentSlideIndex++;
    
    if (this.loops) {
        this.currentSlideIndex = this.currentSlideIndex % this.images.length;
    } else {
        this.currentSlideIndex = Math.min(this.currentSlideIndex, this.images.length - 1);
    }

    
    
this.render();
}

Sliders.prototype.render = function() {

    const currentSlideIndex = this.currentSlideIndex;
    //this.bodyEl.innerText = ('');
   // this.bodyEl.append(this.createSliderEl(this.currentSlideIndex));
   this.SlideCol.forEach(
       function(imageEl, imageIdx) {
           if(imageIdx === currentSlideIndex){
               imageEl.classList.add('slider_image--active');
           }else {
            imageEl.classList.remove('slider_image--active');
           }
       }
   );
}

Sliders.prototype.changedColor = function (){
    const EllipseEl = document.getElementsByClassName('first-ellipse');
    const EllipseSecEl = document.getElementsByClassName('second-ellipse');
    const EllipseThreeEl = document.getElementsByClassName('first-ellipse');
    if(this.currentSlideIndex = 0){
        this.EllipseEl;
    }
    if(this.currentSlideIndex = 1){
        this.EllipseSecEl;
    }
    if(this.currentSlideIndex = 2){
        this.EllipseThreeEl;
    }
     const changed = document.getElementById('loopSliders-ellipses');
     if(EllipseEl || EllipseSecEl || EllipseThreeEl ){
        // return changed.style.display = "block";
         return changed.style.background = "white";
     }
}

Sliders.prototype.changedColor = function (){
    const EllipseEl = document.getElementsByClassName('first-ellipse');
    const EllipseSecEl = document.getElementsByClassName('second-ellipse');
    const EllipseThreeEl = document.getElementsByClassName('first-ellipse');

    this.currentSlideIndex = 0 === this.EllipseEl;
    this.currentSlideIndex = 1 === this.EllipseSecEl;
    this.currentSlideIndex = 2 === this.EllipseThreeEl;

    const changed = document.getElementsByClassName('loopSliders-ellipses');
     if(EllipseEl || EllipseSecEl || EllipseThreeEl ){
        // return changed.style.display = "block";
         return changed.style.background = "white";
     }
     
    }

    

const loopSliders = new Sliders (
    '.loopSliders',
    [
        'img/Rectangle.png',
        'img/Section-two1.png',
        'img/Section-two.jpg'
        
    ]

);
