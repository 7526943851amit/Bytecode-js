// /*!
//  * enquire.js v2.1.2 - Awesome Media Queries in JavaScript
//  * Copyright (c) 2014 Nick Williams - http://wicky.nillia.ms/enquire.js
//  * License: MIT (http://www.opensource.org/licenses/mit-license.php)
//  */
// !function(a,b,c){var d=window.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=c(d):"function"==typeof define&&define.amd?define(function(){return b[a]=c(d)}):b[a]=c(d)}("enquire",this,function(a){"use strict";function b(a,b){var c,d=0,e=a.length;for(d;e>d&&(c=b(a[d],d),c!==!1);d++);}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function d(a){return"function"==typeof a}function e(a){this.options=a,!a.deferSetup&&this.setup()}function f(b,c){this.query=b,this.isUnconditional=c,this.handlers=[],this.mql=a(b);var d=this;this.listener=function(a){d.mql=a,d.assess()},this.mql.addListener(this.listener)}function g(){if(!a)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!a("only all").matches}return e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(a){return this.options===a||this.options.match===a}},f.prototype={addHandler:function(a){var b=new e(a);this.handlers.push(b),this.matches()&&b.on()},removeHandler:function(a){var c=this.handlers;b(c,function(b,d){return b.equals(a)?(b.destroy(),!c.splice(d,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){b(this.handlers,function(a){a.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var a=this.matches()?"on":"off";b(this.handlers,function(b){b[a]()})}},g.prototype={register:function(a,e,g){var h=this.queries,i=g&&this.browserIsIncapable;return h[a]||(h[a]=new f(a,i)),d(e)&&(e={match:e}),c(e)||(e=[e]),b(e,function(b){d(b)&&(b={match:b}),h[a].addHandler(b)}),this},unregister:function(a,b){var c=this.queries[a];return c&&(b?c.removeHandler(b):(c.clear(),delete this.queries[a])),this}},new g});

// /* Simple jQuery Equal Heights @version 1.5.1. Copyright (c) 2013 Matt Banks. Dual licensed under the MIT and GPL licenses. */
// !function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);

// /*
//  jQuery Cookie Plugin v1.4.1
//  https://github.com/carhartl/jquery-cookie 
//  Copyright 2006, 2014 Klaus Hartl
//  Released under the MIT license
// */
// (function(factory){if(typeof define==="function"&&define.amd)define(["jquery"],factory);else if(typeof exports==="object")module.exports=factory(require("jquery"));else factory(jQuery)})(function($){var pluses=/\+/g;function encode(s){return config.raw?s:encodeURIComponent(s)}function decode(s){return config.raw?s:decodeURIComponent(s)}function stringifyCookieValue(value){return encode(config.json?JSON.stringify(value):String(value))}function parseCookieValue(s){if(s.indexOf('"')===0)s=s.slice(1,
// -1).replace(/\\"/g,'"').replace(/\\\\/g,"\\");try{s=decodeURIComponent(s.replace(pluses," "));return config.json?JSON.parse(s):s}catch(e){}}function read(s,converter){var value=config.raw?s:parseCookieValue(s);return $.isFunction(converter)?converter(value):value}var config=$.cookie=function(key,value,options){if(arguments.length>1&&!$.isFunction(value)){options=$.extend({},config.defaults,options);if(typeof options.expires==="number"){var days=options.expires,t=options.expires=new Date;t.setMilliseconds(t.getMilliseconds()+
// days*864E5)}return document.cookie=[encode(key),"=",stringifyCookieValue(value),options.expires?"; expires="+options.expires.toUTCString():"",options.path?"; path="+options.path:"",options.domain?"; domain="+options.domain:"",options.secure?"; secure":""].join("")}var result=key?undefined:{},cookies=document.cookie?document.cookie.split("; "):[],i=0,l=cookies.length;for(;i<l;i++){var parts=cookies[i].split("="),name=decode(parts.shift()),cookie=parts.join("=");if(key===name){result=read(cookie,value);
// break}if(!key&&(cookie=read(cookie))!==undefined)result[name]=cookie}return result};config.defaults={};$.removeCookie=function(key,options){$.cookie(key,"",$.extend({},options,{expires:-1}));return!$.cookie(key)}});

// /* Run function after window resize */
// var afterResize=(function(){var t={};return function(callback,ms,uniqueId){if(!uniqueId){uniqueId="Don't call this twice without a uniqueId";}if(t[uniqueId]){clearTimeout(t[uniqueId]);}t[uniqueId]=setTimeout(callback,ms);};})();



// window.timber = window.timber || {};

// timber.cacheSelectors = function () {
//   timber.cache = {
//     // General
//     $html: $('html'),
//     $body: $('body'),
//     $productGridImages: $('.card--product')
//   };
// };


// timber.init = function () {
//   // FastClick.attach(document.body);
//   timber.equalHeights();
// };
   

// timber.equalHeights = function () { 

//   $(window).load(function() {
//     resizeElements();
//   });

//   $(window).resize(function() {
//     afterResize(function() {
//       resizeElements();
//     }, 250, 'id');
//   });

//   function resizeElements() {
   
//     timber.cache.$productGridImages.css('height', 'auto').equalHeights();
    
//     $('.card--product').find('img').on('load', function() {
//       if($(this).height() < $(this).width()) $(this).parent().height($(this).width());
//     });
//   }
// };

// $(timber.init);














//FAQ
$('.frequently-asked-questions h4').on('click', function() {
  $(this).next('p, div').toggle(200);
  $(this).toggleClass('open');
});

//About toggle
$('.our-team-img button').on('click', function() {
  $(this).parent().find('p').slideToggle(200);
});

$("a.gallery-item").fancybox({prevEffect:'none',nextEffect:'none',helpers:{title:{type:'outside'},thumbs:{width:80,height:80}}});

$(document).ready(function(){

  //Get inspired
  var descContent = $('#Bathroom .descContent').val();
  console.log(descContent + "here");
  $('.get-inspired-description').html(descContent);
  
  //Tabs
  $('.tabs').each(function(){
    var active, content, links = $(this).find('a');
    console.log(active + "here");
    active = links.first().addClass('active');
    content = $(active.attr('href'));
    links.not(':first').each(function () {
      $($(this).attr('href')).hide();
    });
    $(this).find('a').click(function(e){
      active.removeClass('active');
      content.hide();
      active = $(this);
      content = $($(this).attr('href'));
      active.addClass('active');
      content.show();
      var descContent = content.find(".descContent").val();
      $('.get-inspired-description').html(descContent)
      return false;
    });
  });

  // Home page Blog
  /**
  $.get( "https://blog.mozaico.com/wp-json/wp/v2/posts?per_page=3", function( data ) {
    var html = '';
    data.forEach(function(currentValue, index, array) {
      var title = currentValue.title.rendered;
      var excerpt = currentValue.excerpt.rendered;
      if(currentValue.better_featured_image.media_details.sizes.vw_one_third_thumbnail)
      {
        var image = currentValue.better_featured_image.media_details.sizes.vw_one_third_thumbnail.source_url;

      } else {
        var image = currentValue.better_featured_image.media_details.sizes.vw_two_third_thumbnail.source_url;
      }
      var link = currentValue.link;
      var date = moment(currentValue.date).format("MMM Do YY");
      html += '<div class="blog_block">';
      html += '<a class="img_post" href="'+link+'">';
      html += '<img loading="lazy" src="'+image+'" alt="'+title+'" /></a>';
      html += '<span class="date">'+date+'</span>';
      html += '<h3 class="link_h3">';
      html += '<a title="'+title+'" href="'+link+'">'+title+'</a></h3>';  
      html += '<p>'+excerpt.substr(0, 250);
      html += '<a class="read_more" href="'+link+'"> read more...</a></p></div>';
    });

    $('.blog-posts').html(html);
  });
  */

});


//Chat box custom projecct starts
var collection = "";
var tags = ["","",""];
var count = 1;
var chatbot_result_link = "";
$(".chatbot-option > div").on("click",function(){
  $(this).parent().find("div").removeClass("selected");
  $(this).addClass("selected");
  if($(this).parent().hasClass("chatbot-option-1")){
    collection = $(this).attr("data-collection");
    $(".chatbot-option-2").fadeIn();
    $(".selection_collection").html($(this).attr("data-collection").replace("mosaics","").replace("mosaic","").replace("-","").replace("-",""));
  }
  if($(this).parent().hasClass("chatbot-option-2")){
    if($(this).attr("data-tag") != "Shape_none"){
      tags[0] = $(this).attr("data-tag");
    }
    $(".chatbot-option-3").fadeIn();
    $(".selection_shape").html($(this).find("p").text());
  }
  if($(this).parent().hasClass("chatbot-option-3")){ 
    if($(this).attr("data-tag") != "Color_none"){
      tags[2] = $(this).attr("data-tag");
    }
    $(".chatbot-option-4").fadeIn();
    $(".selection_color").html($(this).find("p").text());
  }
  if($(this).parent().hasClass("chatbot-option-4")){
    if($(this).attr("data-tag") != "application:no preference"){
      tags[1] = $(this).attr("data-tag");
    }
    $(".selection_placement").html($(this).attr("data-tag").split(":")[1]);
    $(".chatbot-option-5").fadeIn();
  }else{
    count++;
  }
  refreshResult();
});
$("#start_now").on("click",function(){
  $(".chatbot-option-1").fadeIn();
  $(".chatbot-option-0").hide();

});

$("#chatbot_result").on("click",function(){
  chatbot_result_link = "/collections/"+collection+"/";
  if(tags[0] != "" && tags[0] != null){
    chatbot_result_link = chatbot_result_link+tags[0]+'+';
  }
  if(tags[1] != "" && tags[1] != null){
    chatbot_result_link = chatbot_result_link+tags[1]+'+';
  }
  if(tags[2] != "" && tags[2] != null){
    chatbot_result_link = chatbot_result_link+tags[2];
  }

  if(chatbot_result_link != ""){
    window.location.href = chatbot_result_link;
  }
});
$(".chatbot-option > div >img").each(function(){
  $(this).parent().css("background-image","url('"+$(this).attr("src")+"')");
});
function refreshResult(){
  if(!$(".chatbot-option-5").is(":hidden")){
    $(".chatbot-option-5").hide();
    $(".chatbot-option-5").fadeIn("slow");
  }
}
//Chat box custom projecct ends

// Art Personalization starts
function display(input) {
  if(input.files && input.files[0]) {
    if(Math.round(input.files[0].size/(1024*1024)) <= 1) {
      var reader = new FileReader();
      reader.onload = function(event) {
        $('#img').attr('src', event.target.result);
        $('#style-result-img').attr('src', event.target.result);
      }
      $("#but_upload").removeAttr('disabled');
      $('#warning').text('');
      reader.readAsDataURL(input.files[0]);
    } else {
      $('#warning').text('Please select image size less than 1 MB').css({'color': '#ff0000', 'font-size': '13px'});
      $("#but_upload").attr('disabled','disabled');
    }
  }
}
function loadStart() {
  $('#loading').show();
}
function loadStop() {
  $('#loading').hide();
}
function toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
}

var styleImage;

$(document).ready(function() {

//   $("#styleImages").owlCarousel({
//     items: 6,
//     margin: 20,
//     nav: true,
//     dots: false,
//     navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
//     responsiveClass: true,
//     responsive: {
//       0: {
//         items: 2
//       },

//       567: {
//         items: 3
//       },

//       991: {
//         items: 5
//       },

//       1100: {
//         items: 6
//       }
//     }
//   });

  $('#file').change(function() {
    display(this);
    $('.preview.upload img').show();
  });

  $('.selectStyle').click(function() {
    $('.selectStyle').removeClass('style-selected');
    $(this).addClass('style-selected');
    styleImage = $(this).data('styleimg');
    $('#style-img, #base-result-img').attr( 'src', styleImage);
    $('#styleimage').val('https:'+styleImage);
  });

  $("#but_upload").click(function(e) {
    e.preventDefault();
    var fd = new FormData();
    var files = $('#file')[0].files;
    var styleImage = $('#styleimage').val();

    // Check file selected or not
    if(files.length > 0 )  {
      fd.append('file', files[0]);
      fd.append('styleimage', styleImage);

      $.ajax({
        url: 'https://codeyear2021.com/hotpot/hotpotai.php',
        type: 'post',
        data: fd,
        contentType: false,
        processData: false,
        beforeSend: loadStart,
        complete: loadStop,
        success: function(response) {
          if(response != 0) {
            toDataURL('https://codeyear2021.com/hotpot/result-file.php?filename=' + response, function(dataUrl) {
              $('#btndownload').attr('href', dataUrl);
            });
            $('#resultimg').attr('src', 'https://codeyear2021.com/hotpot/' + response);
            //$('#resultimg').attr('src', 'data:image/jpeg;base64,' + response.base64Image);
            //$('#btndownload').attr('href', 'data:image/jpeg;base64,' + response.base64Image);
            $('#btndownload').removeClass('disabled');
            $('.preview.download img').show();
          } else {
            alert('file not uploaded');
          }
        },
        error: function(response) {}
      });
    } else {
      alert("Please select a file.");
    }
  });
  $('.custom-file-input input[type="file"]').change(function(e) {
    $(this).siblings('input[type="text"]').val(e.target.files[0].name);
  });

  /*toDataURL('https://codeyear2021.com/hotpot/result-file.php?filename=./images/results/pexels-pixabay-2573601615358430.jpg', function(dataUrl) {
      $('#btndownload').attr('href', dataUrl);
    });*/
});
// Art Personalization Ends



$(document).ready(function(){
  $("#search-header").click(function(){
    $(".header-wrapper .header__icons").toggle();
//     $(".header-wrapper .header__icons").css("display", "block");
  });
});


//// GIFT template script Start ///

$('.images_template .image').on('click', function() {
  $('.images_template .image').removeClass('active');
  $(this).addClass('active');
  $('.select_templates').val($('.select_templates option:nth-child('+$(this).attr('data-num')+')').val());
  $('#productPhoto #productPhotoImg').attr('src', $(this).attr('data-big-url'));
  $('.card_content_block h3').text($('.select_templates').val());
});
$('.select_templates').on('change', function() {
  $('.images_template .image').removeClass('active');
  $('.images_template .image[data-num='+$(this).find('option:selected').attr('data-num')+']').addClass('active');
  $('.card_content_block h3').text($('.select_templates').val());
  $('#productPhoto #productPhotoImg').attr('src', $(this).find('option:selected').attr('data-bigImage'));

});
$('.prod_custom_properties #send_to_friend').on('change', function() {
  if($(this).prop('checked')) $('.prod_custom_properties .hidden_fields').show();
  else $('.prod_custom_properties .hidden_fields').hide();
});
$('input#post_office').on('change', function() {
  if($(this).prop('checked')) $('.post_office_hide').show();
  else $('.post_office_hide').hide();
});

$(document).ready(function() {
  if($('.prod_custom_properties #send_to_friend').prop('checked')) $('.prod_custom_properties .hidden_fields').show();
  if($('input#post_office').prop('checked')) $('.post_office_hide').show();
});

$('.for_preview, .button_preview ').on('click', function() {

  /* var copy = $('.for_preview').clone();
  var close = "<div class='close_div'><img src='{% comment %}ly_asset_replace_for_[ 'fancy_close.png' | asset_url ]_begin{% endcomment %}{% assign ly_asset = 'fancy_close.png' %}{% include 'ly-asset' with ly_asset %}{{ ly_translation  }}{% comment %}ly_asset_replace_end{% endcomment %}' /></div>";
  $('body').append('<div class="back_end_preload"></div><div class="preview_gift_card"></div>');
  $('body').find('.preview_gift_card').html(copy).append(close);
  if($('#custom_message').val().length <= 0) $('body').find('.preview_gift_card .mess').removeClass('mess').addClass('hr_line');
  */
});
$('body').on('click', '.preview_gift_card .close_div', function() {
  $('body').find('.preview_gift_card').remove();
  $('body').find('.back_end_preload').remove();
});
$('#custom_message').on('keyup', function() {
  var count_sym = $(this).val().length;
  if(count_sym > 220) $(this).val(($(this).val()).slice(0, (220 - count_sym)));
  $('.after_cust_mess #remain_char').text((220 - $(this).val().length));
  $('.card_content_block .mess').text($(this).val());
});

$('.own_design #upload_image_template').on('change', function () {
  var input = $(this)[0];
  if (input.files && input.files[0]) {
    if (input.files[0].type.match('image.*')) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('#productPhoto #productPhotoImg').attr('src', e.target.result);
        $('.variant_templates #image_template').val('Own design');
        $('.images_template .image').removeClass('active');
        $('.images_template .image.own_design_block').attr('data-big-url', e.target.result);
        $('.images_template .image.own_design_block > img').attr('src', e.target.result);
        $('.images_template .image.own_design_block').addClass('active').show();
        $('.card_content_block h3').text($('.own_design #own_design_title').val());
        $('label[for="own_design_title"], input#own_design_title').show();
      }
      reader.readAsDataURL(input.files[0]);
    } 
    else {console.log('ошибка, не изображение')}
  } 
  else {console.log('хьюстон у нас проблема')}
});
$('.own_design #own_design_title').on('keyup', function() {
  $('.card_content_block h3').text($(this).val());
  $('.variant_templates #image_template option:last-child').val($(this).val());
});

/// End ////


// $( window ).load(function() {
  // Run code
//   document.querySelector('#my-awesome-el').innerHTML = new Date;
// });


$(document).ready(function() {
  $(".pro-checkout").click(function(){
    $("._ckt-rmndr").css("display", "none");
    $(".pro-checkout").css("display", "none");
    //   $( "._ckt-rmndr" ).find( ".pro-checkout" ).css( "display", "block" );
  });
  
//   $('._ckt-rmndrSlides').parents('._ckt-rmndr').css( "display", "block" );
//   $("._ckt-rmndrSlides").parents("._ckt-rmndr").css("display", "block");
  
//   $('body ._ckt-rmndrSlides').find('.pro-checkout').css( "display", "block" );
  
  
});

// $(document).ready(function() {
//   if ($('._ckt-rmndr ._ckt-rmndrSlides').find('.pro-checkouts')){
//     alert('a');
//     $("._ckt-rmndr").css("display", "none");

//   } else {
//     alert('b');
//   }
// });


// $(document).ready(function() {
//   setTimeout(function(){ 
//     $.getJSON('/cart.js', function(cart){ 
//       var result = cart.item_count; 

//       if (result > 0) {
//          alert('1');
//         $('body').find('.pro-checkout').css( "display", "block" );

//       } else {
// //          alert('2');
// //         $('body').find('.pro-checkout').css( "display", "none" );
//       }

//     }); },100);
// });

/** AB 19-10-2021 Adding GLCID Fields to forms **/
$(document).ready(function(){
  var interval = setInterval(function() {
    
    var klaviyoformMw3UAa = $(document).find('.klaviyo-form-Mw3UAa form').length;
    var aaaFormBuilder3381 = $(document).find('.aaa_form_class_3381').length;
    var aaaFormBuilder3382 = $(document).find('.aaa_form_class_3382').length;
    var aaaFormBuilder5439 = $(document).find('.aaa_form_class_5439').length;
    var aaaFormBuilder8994 = $(document).find('.aaa_form_class_8994').length;
    var aaaFormBuilder7227 = $(document).find('.aaa_form_class_7227').length;
    var aaaFormBuilder709 = $(document).find('.aaa_form_class_709').length;
    var aaaFormBuilder631 = $(document).find('.aaa_form_class_631').length;
    var orderLookupForm = $(document).find('#order-lookup-form').length;
    
    //console.log(orderLookupForm);
    
    if( klaviyoformMw3UAa > 0 ){
      clearInterval(interval);
        $(document).find('.klaviyo-form-Mw3UAa form').prepend('<input type="hidden" id="klaviyo-form-Mw3UAa-gclid_field" name="gclid_field" value="">');
      	addGclid();
    }
    if(aaaFormBuilder631 > 0 ){
      clearInterval(interval);
      $(document).find('.aaa_form_class_631').prepend('<input type="hidden" id="custom-mosaics-gclid_field" name="gclid_field" value="">');
      addGclid();
    }
    if(aaaFormBuilder3381 > 0 ){
      clearInterval(interval);
      $(document).find('.aaa_form_class_3381').prepend('<input type="hidden" id="aaaFormBuilder3381-gclid_field" name="gclid_field" value="">');
      addGclid();
    }
    if(aaaFormBuilder3382 > 0 ){
      clearInterval(interval);
      $(document).find('.aaa_form_class_3382').prepend('<input type="hidden" id="aaaFormBuilder3382-gclid_field" name="gclid_field" value="">');
      addGclid();
    }
    if(orderLookupForm > 0 ){
      clearInterval(interval);
      $(document).find('#order-lookup-form').prepend('<input type="hidden" id="orderLookupForm-gclid_field" name="gclid_field" value="">');
      addGclid();
    }
    if(aaaFormBuilder5439 > 0 ){
      clearInterval(interval);
      $(document).find('.aaa_form_class_5439').prepend('<input type="hidden" id="artist-collaboration-gclid_field" name="gclid_field" value="">');
      addGclid();
    }
    if(aaaFormBuilder8994 > 0 ){
      clearInterval(interval);
      $(document).find('.aaa_form_class_8994').prepend('<input type="hidden" id="black-friday-gclid_field" name="gclid_field" value="">');
      addGclid();
    }
    if(aaaFormBuilder7227 > 0 ){
      clearInterval(interval);
      $(document).find('.aaa_form_class_7227').prepend('<input type="hidden" id="corporate-logo-gclid_field" name="gclid_field" value="">');
      addGclid();
    }
    // if(aaaFormBuilder709 > 0 ) {
    //   setTimeout(function(){
    //     clearInterval(interval);
    //     $(document).find('.aaa_form_class_709').prepend('<input type="hidden" id="need-help-gclid_field" name="gclid_field" value="">');
    //   },1500)
    // }
  }, 300);  
});



setTimeout(function(){
$(document).ready(function(){
  var length = $('.selector-wrapper.Size').find('.single-option-selector>option').length;
  if( length === 1 ){
    $('.selector-wrapper.Size').find('label').text('Size');
    $('.selector-wrapper.Size').addClass('have-one-option');
  }
  var length2 = $('.selector-wrapper.SKU').find('.single-option-selector>option').length;
  if( length2 === 1 ){
    $('.selector-wrapper.SKU').find('label').text('SKU');
    $('.selector-wrapper.SKU').addClass('have-one-option');
  }
}); 
}, 3000);



$(document).ready(function(){
  $('.pagination-wrapper').parent('.negative-margin').parent('.CollectionPage2').css("margin-top", "0");
});

$(document).ready(function(){
  $('.template-collection .addToCart.add_to_cart').click(function(){
    $(this).addClass( "added" );
  });
});

