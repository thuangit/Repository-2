var myIndex = 0;
function carouse (){
    var img = document.querySelectorAll('.mySlides2');
    for(var i =0; i< img.length;i++){
        img[i].style.display = 'none';
    }
    myIndex++;
    if(myIndex > img.length){
        myIndex =1;
    }
    img[myIndex - 1].style.display = 'block';
    setTimeout(carouse, 3000);

}
carouse();

//
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("image-badge");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" badge-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " badge-white";
}
//
var slideIndex_2 = 1;
showDiv_image_2(slideIndex_2);

function plusDivs_2(n) {
  showDiv_image_2(slideIndex_2 += n);
}

function currentDiv_2(n) {
  showDiv_image_2(slideIndex_2 = n);
}

function showDiv_image_2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides4");
  var dots = document.getElementsByClassName("image-badge_2");
  if (n > x.length) {slideIndex_2 = 1}
  if (n < 1) {slideIndex_2 = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" badge-white_2", "");
  }
  x[slideIndex_2-1].style.display = "block";  
  dots[slideIndex_2-1].className += " badge-white_2";
}
function ani(){
  var index = 0;
  
  var images = document.querySelectorAll('.slideAnimation_2');
  function animation_2(){
    for(var i =0; i< images.length; i++){
      images[i].style.display = 'none'
    }
    index ++;
    if(index > images.length){
      index = 1;
    }
    images[index -1 ].style.display = "block";
    setTimeout(animation_2, 2000);
  }
  animation_2()
};
ani();