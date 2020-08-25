function backgroundIn() {
  $('.menu-box-2 > ul').mouseenter(function () {
    $('.menu-background').css('display', 'block');
  })
}

function backgroundOut() {
  $('.menu-box-2').mouseleave(function () {
    $('.menu-background').css('display', 'none');
  })
}



function mainSlider() {
  $('.main-slider > .btn-box > div').click(function () {
    var $click = $(this);
    var $slider = $click.parent().parent();
    var $active = $slider.find('.active');
    var $post = null;
    var isLeft = $click.index() == 0;
    var postIndex;


    if (isLeft) {
      $post = $active.prev();
    } else {
      $post = $active.next();
    }

    if ($post.length == 0) {
      if (isLeft) {
        $post = $('.main-slider > .slider').find(' > :last-child');
      } else {
        $post = $('.main-slider > .slider').find(' > :first-child');
      }
    }
    
    postIndex = $post.index();
    console.log(postIndex);
    
    $('.main-slider > .dot-box').find('> .actived').removeClass('actived');
    $('.main-slider > .dot-box > .dot').eq(postIndex).addClass('actived');
    $active.removeClass('active');
    $post.addClass('active');
  });

  $('.main-slider > .dot-box > .dot').click(function(){
    var $clicked = $(this);
    var $activedot = $('.main-slider > .dot-box').find('> .actived');
    var index = $clicked.index();
    

    $activedot.removeClass('actived');
    $clicked.addClass('actived');
    $('.main-slider > .slider').find('>.active').removeClass('active');
    $('.main-slider > .slider > li').eq(index).addClass('active'); 
  });
}

setInterval(function a() {
  var $actived = $(".main-slider > .dot-box").find(">.actived");
  var $next = $actived.next('.dot');

  if ( $next.length == 0 ) {
    $('.main-slider > .dot-box > .dot:first-child').click();
  }
  else {
    $next.click();
  }

},5000);


function slide_start_stop(){
  $('.main-slider > .dot-box > .start-stop').click(function(){
    var startBtn = $(this);

    if (startBtn.hasClass('non')){
      startBtn.removeClass('non');
    }
    else {
      startBtn.addClass('non');
    }
  });
}

function scroll_action(){
  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();

        $('.notice-borad-page > .page-title').css('transform','scale(1)').css('opacity','1');

      if (scroll > 100) {
        $(".notice-view > ul >li").css('top','0').css('opacity','1');
      }
      else{
        $(".notice-view > ul >li").css('top','300px').css('opacity','0');   
      }

      if ( scroll > 150) {
        $('.exhibition-notice').css('left','0');
        $('.exhibition-name').css('margin-left','0').css('opacity','1');
        $('.exhibition-notice > .exhibition-board > .date-name ').css('left','0').css('opacity','1');
      }
      else{
        $('.exhibition-notice').css('left','-1200px');
        $('.exhibition-name').css('margin-left','-1000px').css('opacity','0');
        $('.exhibition-notice > .exhibition-board > .date-name ').css('left','-500px').css('opacity','0');
      }

      if ( scroll > 450 ) {
        $('.ed-ev-page > .page-title').css('transform','scale(1)').css('opacity','1');
        $('.ed-ev-list > li').css('transform','translateY(0)');
      }
      else {
        $('.ed-ev-page > .page-title').css('transform','scale(.8)').css('opacity','0');
        $('.ed-ev-list > li').css('transform','translateY(100%)');
      }
      if (scroll > 750 ){
        $('.collections-page > .page-title').css('transform','scale(1)').css('opacity','1');
        $('.collections-list > ul > li').css('transform','translateY(0)');
      }
      else {
        $('.collections-page > .page-title').css('transform','scale(.8)').css('opacity','0');
        $('.collections-list > ul > li').css('transform','translateY(110%)');
      }
    })
  })
}


function activeRandom($el, count) {
  var lenOf$el = $el.length;
  
  if ( count > lenOf$el ) {
      count = lenOf$el;
  }
  
  if ( count == lenOf$el ) {
      $el.addClass('active');
      return;
  }
  
  for ( var i = 0; i < count; i++ ) {
      var $randomOne = $el.eq(Math.floor(Math.random() * lenOf$el));
      
      if ( $randomOne.hasClass('active') ) {
          i--;
          continue;
      }

      $randomOne.addClass('active');
  }
}

$('document').ready(function(){
  activeRandom($('.collections-list > ul > li'), 4);
});




function top_move() {
  $('.top-move').click(function () {
    $('html,body').scrollTop('0');
  });
}

function alerted(){
	$('.alerted > .alert-box > .close-btn > .close-text').click(function(){
		$('.alerted').removeClass('active');
	})
}

$(function () {
  backgroundIn();
  backgroundOut();
  mainSlider();
  top_move();
  slide_start_stop();
  scroll_action();
  alerted();
})