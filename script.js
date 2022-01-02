

function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="user")
        {
            alert("login succesfully");
            return false;
        }
     if(username=="joy dhar" && password=="12345")
        {
            alert("login succesfully");
            return false;
        }
  
     if(username=="tony@gmail.com" && password=="12345")
        {
            alert("login succesfully");
            return false;
        }
    else{
        alert("login failed");
    }

}

let searchForm = document.querySelector('.search-form');

  document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
          navbar.classList.remove('active');
    loginForm.classList.remove('active');
     shoppingCart.classList.remove('active');
}
  
let shoppingCart = document.querySelector('.shopping-cart');

  document.querySelector('#cart-btn').onclick = () => {
          navbar.classList.remove('active');
    loginForm.classList.remove('active');
     searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
}  
let loginForm = document.querySelector('.login-form');

  document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
          navbar.classList.remove('active');
     shoppingCart.classList.remove('active');
     searchForm.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

  document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    loginForm.classList.remove('active');
     shoppingCart.classList.remove('active');
     searchForm.classList.remove('active');
} 
window.onscroll = () => {
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
     shoppingCart.classList.remove('active');
     searchForm.classList.remove('active');
} 

var swiper = new Swiper(".product-slider", {
        loop:true,
        spaceBetween: 20,
    autoplay: {
    delay:7500,
    disableOnInteraction:false,
},
         centeredSlides:true,               
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
            
          },
        },
});  
  
  
 var swiper = new Swiper(".review-slider", {
        loop:true,
        spaceBetween: 20,
    autoplay: {
    delay:7500,
    disableOnInteraction:false,
},
         centeredSlides:true,               
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1020: {
            slidesPerView: 3,
            
          },
        },
});  
   
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  