$('.top-slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    speed: 1500,
    fade: true,
    infinite: true,
  });


  // sticky header



window.onscroll = function() {
    myFunction();
  }
  
  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
  }



  $('.testimonial-slide-box').slick({
    slidesToShow: 2,
    infinite: true,
    slidesToScroll: 1,
    autoplay: false,
    Speed: 500,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });



    //load more js product page btn

  // $(document).ready(function(){
  //   $(".procontent").slice(0, 4).show();
  //   $("#loadMore").on("click", function(e){
  //     e.preventDefault();
  //     $(".procontent:hidden").slice(0, 4).slideDown();
  //     if($(".procontent:hidden").length == 0) {
  //       $("#loadMore").text("Load More").addClass("noContent");
  //     }
  //   });
    
  // })


  function nav_open() {
    document.getElementById("responsiveNav").style.width = "90%";
  }
  
  function nav_close() {
    document.getElementById("responsiveNav").style.width = "0";
  }
  
  
  // Hide Menu when Click the Links
  var wd = screen.width;
  var awd = screen.availWidth;
  if(wd<768)
  
  { document.querySelectorAll("#click").forEach((link) => {
  
          link.addEventListener("click", () => {
  
          document.getElementById("responsiveNav").style.width = "0";
  
          });
      });
  }


  // back-scroll-top

  var btn = $('#scrollTop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });


  jQuery(function($) {
    var path = window.location.href; 
    // because the 'href' property of the DOM element is the absolute path
    $('.aclivenav a').each(function() {
      if (this.href === path) {
        $(this).addClass('active');
      }
    });
  });



// function smoothScrollingTo(target){
//     $('html,body').animate({scrollTop:$(target).offset().​top}, 500);
//   }
//   $('a[href^=\\#]').on('click', function(event){     
//       event.preventDefault();
//       smoothScrollingTo(this.hash);
//   });
//   $(document).ready(function(){
//     smoothScrollingTo(location.hash);
//   });

