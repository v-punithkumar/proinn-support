$(document).ready(function(){
    console.log("the document is ready!");

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function(event){

          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 900, function(){
          });
    });

    
// loads pages
        $(document).on('click', '.load-page', function(){
        var href = $(this).attr("data-href");

        $.get(href,function (hdisplayed) {
            $("#content").html( hdisplayed );
   $(window).scrollTop(0);
        });
    });
    
$(window).on('resize', function() {
    if($(window).width() > 540) {
        $('#body, #body2, #body3, #body4, #body5, #body6').addClass('limit1200');
        $('#body, #body2, #body3, #body4, #body5, #body6').removeClass('limit400');
    }else{
        $('#body, #body2, #body3, #body4, #body5, #body6').addClass('limit400');
        $('#body, #body2, #body3, #body4, #body5, #body6').removeClass('limit1200');
    }
    console.log("class executed 1");   
    });

    console.log("code executed 1");
    
    //MODAL ON PRINCIPLE CLICK    
    // Get the modal
    var modal = document.getElementById('segmentation-mod');

    var modal1 = document.getElementById('content_area_space');

    // Get the button that opens the modal
    var btnl1 = document.getElementById("l1");
    var btnl2 = document.getElementById("l2");
    var btnl3 = document.getElementById("l3");
    var btnl4 = document.getElementById("l4");
    var btnl5 = document.getElementById("l5");
    var btnl6 = document.getElementById("l6");
    var btnl7 = document.getElementById("l7");
    var btnl8 = document.getElementById("l8");
    var btnl9 = document.getElementById("l9");
    var btnl10 = document.getElementById("l10");
    var btnl11 = document.getElementById("l11");
    var btnl12 = document.getElementById("l12");
    var btnl13 = document.getElementById("l13");
    var btnl14 = document.getElementById("l14");
    var btnl15 = document.getElementById("l15");
    var btnl16 = document.getElementById("l16");
    var btnl17 = document.getElementById("l17");
    var btnl18 = document.getElementById("l18");
    var btnl19 = document.getElementById("l19");
    var btnl20 = document.getElementById("l20");
    var btnl21 = document.getElementById("l21");
    var btnl22 = document.getElementById("l22");
    var btnl23 = document.getElementById("l23");
    var btnl24 = document.getElementById("l24");
    var btnl25 = document.getElementById("l25");
    var btnl26 = document.getElementById("l26");
    var btnl27 = document.getElementById("l27");
    var btnl28 = document.getElementById("l28");
    var btnl29 = document.getElementById("l29");
    var btnl30 = document.getElementById("l30");
    var btnl31 = document.getElementById("l31");
    var btnl32 = document.getElementById("l32");
    var btnl33 = document.getElementById("l33");
    var btnl34 = document.getElementById("l34");
    var btnl35 = document.getElementById("l35");
    var btnl36 = document.getElementById("l36");
    var btnl37 = document.getElementById("l37");
    var btnl38 = document.getElementById("l38");
    var btnl39 = document.getElementById("l39");
    var ll1=0;
var ll2=0;
var ll3=0;
    var ll4=0;
    var ll5=0;
    var ll6=0;
    var ll7=0;
    var ll8=0;
    var ll9=0;
    var ll10=0;
    var ll11=0;
    var ll12=0;
    var ll13=0;
    var l114=0;
    var ll15=0;
    var ll16=0;
    var ll17=0;
    var ll18=0;
    var ll19=0;
    var ll20=0;
    var ll21=0;
    var ll22=0;
    var ll23=0;
    var ll24=0;
    var ll25=0;
    var ll26=0;
    var ll27=0;
    var ll28=0;
    var ll29=0;
    var ll30=0;
    var ll31=0;
    var ll32=0;
    var ll33=0;
    var ll34=0;
    var ll35=0;
    var ll36=0;
    var ll37=0;
    var ll38=0;
    var ll39=0;
    var btnr1 = document.getElementById("r1");
var btnr2 = document.getElementById("r2");
var btnr3 = document.getElementById("r3");
var btnr4 = document.getElementById("r4");
var btnr5 = document.getElementById("r5");
var btnr6 = document.getElementById("r6");
var btnr7 = document.getElementById("r7");
var btnr8 = document.getElementById("r8");
var btnr9 = document.getElementById("r9");
var btnr10 = document.getElementById("r10");
var btnr11 = document.getElementById("r11");
var btnr12 = document.getElementById("r12");
var btnr13 = document.getElementById("r13");
var btnr14 = document.getElementById("r14");
var btnr15 = document.getElementById("r15");
var btnr16 = document.getElementById("r16");
var btnr17 = document.getElementById("r17");
var btnr18 = document.getElementById("r18");
var btnr19 = document.getElementById("r19");
var btnr20 = document.getElementById("r20");
var btnr21 = document.getElementById("r21");
var btnr22 = document.getElementById("r22");
var btnr23 = document.getElementById("r23");
var btnr24 = document.getElementById("r24");
var btnr25 = document.getElementById("r25");
var btnr26 = document.getElementById("r26");
var btnr27 = document.getElementById("r27");
var btnr28 = document.getElementById("r28");
var btnr29 = document.getElementById("r29");
var btnr30 = document.getElementById("r30");
var btnr31 = document.getElementById("r31");
var btnr32 = document.getElementById("r32");
var btnr33 = document.getElementById("r33");
var btnr34 = document.getElementById("r34");
var btnr35 = document.getElementById("r35");
var btnr36 = document.getElementById("r36");
var btnr37 = document.getElementById("r37");
var btnr38 = document.getElementById("r38");
var btnr39 = document.getElementById("r39");
var rr1=0;
var rr2=0;
var rr3=0;
var rr4=0;
var rr5=0;
var rr6=0;
var rr7=0;
var rr8=0;
var rr9=0;
var rr10=0;
var rr11=0;
var rr12=0;
var rr13=0;
var r114=0;
var rr15=0;
var rr16=0;
var rr17=0;
var rr18=0;
var rr19=0;
var rr20=0;
var rr21=0;
var rr22=0;
var rr23=0;
var rr24=0;
var rr25=0;
var rr26=0;
var rr27=0;
var rr28=0;
var rr29=0;
var rr30=0;
var rr31=0;
var rr32=0;
var rr33=0;
var rr34=0;
var rr35=0;
var rr36=0;
var rr37=0;
var rr38=0;
var rr39=0;


    var principlesSelect1 = 0;
    var principlesSelect2 = 0;
    var modal2 = document.getElementById('extraction-mod');

    // Get the button that opens the modal
    var btn1 = document.getElementById("extraction");
    

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    var span1 = document.getElementsByClassName("close1")[0];

    // When the user clicks the button, open the modal 
    btnl1.onclick = function() {
      console.log("button clicked");
      ll1=1;
      principlesSelect1=1;
      //        modal.style.display = "block";
    }
    btnl2.onclick = function() {
        console.log("button clicked");
        ll2=1;
        principlesSelect1=2;
        //        modal.style.display = "block";
      }
      btnl3.onclick = function() {
        console.log("button clicked");
        ll3=1;
        principlesSelect1=3;
        //        modal.style.display = "block";
      }
      btnl4.onclick = function() {
        console.log("button clicked");
        ll4=1;
        principlesSelect1=4;
        //        modal.style.display = "block";
      }
      btnl5.onclick = function() {
        console.log("button clicked");
        ll5=1;
        principlesSelect1=5;
        //        modal.style.display = "block";
      }
      btnl6.onclick = function() {
        console.log("button clicked");
        ll6=1;
        principlesSelect1=6;
        //        modal.style.display = "block";
      }
      btnl7.onclick = function() {
        console.log("button clicked");
        ll7=1;
        principlesSelect1=7;
        //        modal.style.display = "block";
      }
      btnl8.onclick = function() {
        console.log("button clicked");
        ll8=1;
        principlesSelect1=8;
        //        modal.style.display = "block";
      }
      btnl9.onclick = function() {
        console.log("button clicked");
        ll9=1;
        principlesSelect1=9;
        //        modal.style.display = "block";
      }
      btnl10.onclick = function() {
        console.log("button clicked");
        ll10=1;
        principlesSelect1=10;
        //        modal.style.display = "block";
      }
      btnl11.onclick = function() {
      console.log("button clicked");
      ll11=1;
      principlesSelect1=11;
      //        modal.style.display = "block";
    }
    btnl12.onclick = function() {
        console.log("button clicked");
        ll12=1;
        principlesSelect1=12;
        //        modal.style.display = "block";
      }
      btnl13.onclick = function() {
        console.log("button clicked");
        ll13=1;
        principlesSelect1=13;
        //        modal.style.display = "block";
      }
      btnl14.onclick = function() {
      console.log("button clicked");
      ll14=1;
      principlesSelect1=14;
      //        modal.style.display = "block";
    }
    btnl15.onclick = function() {
        console.log("button clicked");
        ll15=1;
        principlesSelect1=15;
        //        modal.style.display = "block";
      }
      btnl16.onclick = function() {
        console.log("button clicked");
        ll16=1;
        principlesSelect1=16;
        //        modal.style.display = "block";
      }
      btnl17.onclick = function() {
        console.log("button clicked");
        ll17=1;
        principlesSelect1=17;
        //        modal.style.display = "block";
      }
      btnl18.onclick = function() {
        console.log("button clicked");
        ll18=1;
        principlesSelect1=18;
        //        modal.style.display = "block";
      }
      btnl19.onclick = function() {
        console.log("button clicked");
        ll19=1;
        principlesSelect1=19;
        //        modal.style.display = "block";
      }
      btnl20.onclick = function() {
        console.log("button clicked");
        ll20=1;
        principlesSelect1=20;
        //        modal.style.display = "block";
      }
      btnl21.onclick = function() {
        console.log("button clicked");
        ll21=1;
        principlesSelect1=21;
        //        modal.style.display = "block";
      }
      btnl22.onclick = function() {
        console.log("button clicked");
        ll22=1;
        principlesSelect1=22;
        //        modal.style.display = "block";
      }
      btnl23.onclick = function() {
        console.log("button clicked");
        ll23=1;
        principlesSelect1=23;
        //        modal.style.display = "block";
      }
      btnl24.onclick = function() {
        console.log("button clicked");
        ll24=1;
        principlesSelect1=24;
        //        modal.style.display = "block";
      }
      btnl25.onclick = function() {
        console.log("button clicked");
        ll25=1;
        principlesSelect1=25;
        //        modal.style.display = "block";
      }
      btnl26.onclick = function() {
        console.log("button clicked");
        ll26=1;
        principlesSelect1=26;
        //        modal.style.display = "block";
      }
      btnl27.onclick = function() {
        console.log("button clicked");
        ll27=1;
        principlesSelect1=27;
        //        modal.style.display = "block";
      }
      btnl28.onclick = function() {
        console.log("button clicked");
        ll28=1;
        principlesSelect1=28;
        //        modal.style.display = "block";
      }
      btnl29.onclick = function() {
        console.log("button clicked");
        ll29=1;
        principlesSelect1=29;
        //        modal.style.display = "block";
      }
      btnl30.onclick = function() {
        console.log("button clicked");
        ll30=1;
        principlesSelect1=30;
        //        modal.style.display = "block";
      }
      btnl31.onclick = function() {
        console.log("button clicked");
        ll31=1;
        principlesSelect1=31;
        //        modal.style.display = "block";
      }
      btnl32.onclick = function() {
        console.log("button clicked");
        ll32=1;
        principlesSelect1=32;
        //        modal.style.display = "block";
      }
      btnl33.onclick = function() {
        console.log("button clicked");
        ll33=1;
        principlesSelect1=33;
        //        modal.style.display = "block";
      }
      btnl34.onclick = function() {
        console.log("button clicked");
        ll34=1;
        principlesSelect1=34;
        //        modal.style.display = "block";
      }
      btnl35.onclick = function() {
        console.log("button clicked");
        ll35=1;
        principlesSelect1=35;
        //        modal.style.display = "block";
      }
      btnl36.onclick = function() {
        console.log("button clicked");
        ll36=1;
        principlesSelect1=36;
        //        modal.style.display = "block";
      }
      btnl37.onclick = function() {
        console.log("button clicked");
        ll37=1;
        principlesSelect1=37;
        //        modal.style.display = "block";
      }
      btnl38.onclick = function() {
        console.log("button clicked");
        ll38=1;
        principlesSelect1=38;
        //        modal.style.display = "block";
      }
      btnl39.onclick = function() {
        console.log("button clicked");
        ll39=1;
        principlesSelect1=39;
        //        modal.style.display = "block";
      }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        principlesSelect1=0;
        principlesSelect2=0;
        rr1=0;
rr2=0;
rr3=0;
rr4=0;
rr5=0;
rr6=0;
rr7=0;
rr8=0;
rr9=0;
rr10=0;
rr11=0;
rr12=0;
rr13=0;
r114=0;
rr15=0;
rr16=0;
rr17=0;
rr18=0;
rr19=0;
rr20=0;
rr21=0;
rr22=0;
rr23=0;
rr24=0;
rr25=0;
rr26=0;
rr27=0;
rr28=0;
rr29=0;
rr30=0;
rr31=0;
rr32=0;
rr33=0;
rr34=0;
rr35=0;
rr36=0;
rr37=0;
rr38=0;
rr39=0;
ll1=0;
ll2=0;
    ll3=0;
ll4=0
    ll5=0;
    ll6=0;
    ll7=0;
    ll8=0;
    ll9=0;
    ll10=0;
    ll11=0;
    ll12=0;
    ll13=0;
    l114=0;
    ll15=0;
    ll16=0;
    ll17=0;
    ll18=0;
    ll19=0;
    ll20=0;
    ll21=0;
    ll22=0;
    ll23=0;
    ll24=0;
    ll25=0;
    ll26=0;
    ll27=0;
    ll28=0;
    ll29=0;
    ll30=0;
    ll31=0;
    ll32=0;
    ll33=0;
    ll34=0;
    ll35=0;
    ll36=0;
    ll37=0;
    ll38=0;
    ll39=0;
        
    }
    span1.onclick = function() {
        modal1.style.display = "none";
        b1=0;
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            principlesSelect1=0;
            principlesSelect2=0;
            rr1=0;
rr2=0;
rr3=0;
rr4=0;
rr5=0;
rr6=0;
rr7=0;
rr8=0;
rr9=0;
rr10=0;
rr11=0;
rr12=0;
rr13=0;
r114=0;
rr15=0;
rr16=0;
rr17=0;
rr18=0;
rr19=0;
rr20=0;
rr21=0;
rr22=0;
rr23=0;
rr24=0;
rr25=0;
rr26=0;
rr27=0;
rr28=0;
rr29=0;
rr30=0;
rr31=0;
rr32=0;
rr33=0;
rr34=0;
rr35=0;
rr36=0;
rr37=0;
rr38=0;
rr39=0;
ll1=0;
ll2=0;
    ll3=0;
ll4=0;
    ll5=0;
    ll6=0;
    ll7=0;
    ll8=0;
    ll9=0;
    ll10=0;
    ll11=0;
    ll12=0;
    ll13=0;
ll14=0;
    ll15=0;
    ll16=0;
    ll17=0;
    ll18=0;
    ll19=0;
    ll20=0;
    ll21=0;
    ll22=0;
    ll23=0;
    ll24=0;
    ll25=0;
    ll26=0;
    ll27=0;
    ll28=0;
    ll29=0;
    ll30=0;
    ll31=0;
    ll32=0;
    ll33=0;
    ll34=0;
    ll35=0;
    ll36=0;
    ll37=0;
    ll38=0;
    ll39=0;
        }
        if (event.target == modal1) {
            modal1.style.display = "none";
            b1=0;
        }
    }
    btnr1.onclick = function() {
        console.log("button clicked");
        principlesSelect2=1;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
          console.log("Princ1",principlesSelect1);
          modal.style.display = "block";
            }
      }
      btnr2.onclick = function() {
        console.log("button clicked");
        principlesSelect2=2;
        console.log("ll2",ll2);
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          console.log("Princ1",principlesSelect1);
          checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
            
    }
    }
    btnr3.onclick = function() {
      console.log("button clicked");
      principlesSelect2=3;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
        console.log("Princ1",principlesSelect1);
          modal.style.display = "block";
  }
    }
    btnr4.onclick = function() {
      console.log("button clicked");
      principlesSelect2=4;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr5.onclick = function() {
      console.log("button clicked");
      principlesSelect2=5;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr6.onclick = function() {
      console.log("button clicked");
      principlesSelect2=6;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr7.onclick = function() {
      console.log("button clicked");
      principlesSelect2=7;
      if(ll7 && principlesSelect1){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }

    btnr8.onclick = function() {
      console.log("button clicked");
      principlesSelect2=8;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr9.onclick = function() {
      console.log("button clicked");
      principlesSelect2=9;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr10.onclick = function() {
      console.log("button clicked");
      principlesSelect2=10;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }

    btnr11.onclick = function() {
      console.log("button clicked");
      principlesSelect2=11
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr12.onclick = function() {
      console.log("button clicked");
      principlesSelect2=12;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr13.onclick = function() {
      console.log("button clicked");
      principlesSelect2=13;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr14.onclick = function() {
      console.log("button clicked");
      principlesSelect2=1
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr15.onclick = function() {
      console.log("button clicked");
      principlesSelect2=15;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }

    btnr16.onclick = function() {
      console.log("button clicked");
      principlesSelect2=16;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr17.onclick = function() {
      console.log("button clicked");
      principlesSelect2=17;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr18.onclick = function() {
      console.log("button clicked");
      principlesSelect2=18;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }

    btnr19.onclick = function() {
      console.log("button clicked");
      principlesSelect2=19;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }
    btnr20.onclick = function() {
      console.log("button clicked");
      principlesSelect2=20;
      if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
        checkSelect(principlesSelect1,principlesSelect2);
          modal.style.display = "block";
  }
    }

    btnr21.onclick = function() {
        console.log("button clicked");
        principlesSelect2=21
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr22.onclick = function() {
        console.log("button clicked");
        principlesSelect2=22;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr23.onclick = function() {
        console.log("button clicked");
        principlesSelect2=23;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr24.onclick = function() {
        console.log("button clicked");
        principlesSelect2=24;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr25.onclick = function() {
        console.log("button clicked");
        principlesSelect2=25;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr26.onclick = function() {
        console.log("button clicked");
        principlesSelect2=26;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr27.onclick = function() {
        console.log("button clicked");
        principlesSelect2=27;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr28.onclick = function() {
        console.log("button clicked");
        principlesSelect2=28;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr29.onclick = function() {
        console.log("button clicked");
        principlesSelect2=29;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr30.onclick = function() {
        console.log("button clicked");
        principlesSelect2=30;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr31.onclick = function() {
        console.log("button clicked");
        principlesSelect2=31;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr32.onclick = function() {
        console.log("button clicked");
        principlesSelect2=32;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr33.onclick = function() {
        console.log("button clicked");
        principlesSelect2=33;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr34.onclick = function() {
        console.log("button clicked");
        principlesSelect2=34;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr35.onclick = function() {
        console.log("button clicked");
        principlesSelect2=35
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr36.onclick = function() {
        console.log("button clicked");
        principlesSelect2=36;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr37.onclick = function() {
        console.log("button clicked");
        principlesSelect2=37;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }
      btnr38.onclick = function() {
        console.log("button clicked");
        principlesSelect2=38;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }

      btnr39.onclick = function() {
        console.log("button clicked");
        principlesSelect2=39;
        if(ll1 || ll2 || ll3 || ll4 || ll5 || ll6 || ll7 || ll8 || ll9 || ll10 || ll11 || ll12 || ll13 || ll14 || ll15 || ll16 || ll17 || ll18 || ll19 || ll20 || ll21 || ll22 || ll23 || ll24 || ll25 || ll26 || ll27 || ll28 || ll29 || ll30 || ll31 || ll32 || ll33 || ll34 || ll35 || ll36 || ll37 || ll38 || ll39){
          checkSelect(principlesSelect1,principlesSelect2);
            modal.style.display = "block";
    }
      }



  
      // When the user clicks on <span> (x), close the modal    
      function checkSelect(principlesSelect1,principlesSelect2) {
    
    
        
        
          let zasady;
        
          if(principlesSelect1 == 1 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 3) { zasady = [15,8,29,34]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 5) { zasady = [29,17,38,34]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 7) { zasady = [29,2,40,28]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 9) { zasady = [2,8,15,38]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 10) { zasady = [8,10,18,37]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 11) { zasady = [10,36,37,40]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 12) { zasady = [10,14,35,40]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 13) { zasady = [1,35,19,39]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 14) { zasady = [28,27,18,40]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 15) { zasady = [5,34,31,35]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 17) { zasady = [6,29,4,38]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 18) { zasady = [19,1,32,'']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 19) { zasady = [35,12,34,31]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 21) { zasady = [12,36,18,31]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 22) { zasady = [6,2,34,19]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 23) { zasady = [5,35,3,31]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 24) { zasady = [10,24,35,'']; }
          if(principlesSelect1 == 1 && principlesSelect2 == 25) { zasady = [10,35,20,28]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 26) { zasady = [3,26,18,31]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 27) { zasady = [3,11,1,27]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 28) { zasady = [28,27,35,26]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 29) { zasady = [28,35,26,18]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 30) { zasady = [22,21,18,27]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 31) { zasady = [22,35,31,39]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 32) { zasady = [27,28,1,36]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 33) { zasady = [35,3,2,24]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 34) { zasady = [2,27,28,11]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 35) { zasady = [29,5,15,8]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 36) { zasady = [26,30,36,34]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 37) { zasady = [28,29,26,32]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 38) { zasady = [26,35,18,19]; }
          if(principlesSelect1 == 1 && principlesSelect2 == 39) { zasady = [35,3,24,37]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 4) { zasady = [10,1,29,35]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 6) { zasady = [35,30,13,2]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 8) { zasady = [5,35,14,2]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 10) { zasady = [8,10,19,35]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 11) { zasady = [13,29,10,18]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 12) { zasady = [13,10,29,14]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 13) { zasady = [26,39,1,40]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 14) { zasady = [28,2,10,27]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 16) { zasady = [2,27,19,6]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 17) { zasady = [28,19,32,22]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 18) { zasady = [19,32,35,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 20) { zasady = [18,19,28,1]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 21) { zasady = [15,19,18,22]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 22) { zasady = [18,19,28,15]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 23) { zasady = [5,8,13,30]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 24) { zasady = [10,15,35,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 25) { zasady = [10,20,35,26]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 26) { zasady = [19,6,18,26]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 27) { zasady = [10,28,8,3]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 28) { zasady = [18,26,28,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 29) { zasady = [10,1,35,17]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 30) { zasady = [2,19,22,37]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 31) { zasady = [35,22,1,39]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 32) { zasady = [28,1,9,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 33) { zasady = [6,13,1,32]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 34) { zasady = [2,27,28,11]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 35) { zasady = [19,15,29,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 36) { zasady = [1,10,26,39]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 37) { zasady = [25,28,17,15]; }
          if(principlesSelect1 == 2 && principlesSelect2 == 38) { zasady = [2,26,35,'']; }
          if(principlesSelect1 == 2 && principlesSelect2 == 39) { zasady = [1,28,15,35]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 1) { zasady = [8,15,29,34]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 5) { zasady = [15,17,4,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 7) { zasady = [7,17,4,35]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 9) { zasady = [13,4,8,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 10) { zasady = [17,10,4,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 11) { zasady = [1,8,35,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 12) { zasady = [1,8,10,29]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 13) { zasady = [1,8,15,34]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 14) { zasady = [8,35,29,34]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 15) { zasady = [19,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 17) { zasady = [10,15,19,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 18) { zasady = [32,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 19) { zasady = [8,35,24,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 21) { zasady = [1,35,'','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 22) { zasady = [7,2,35,39]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 23) { zasady = [4,29,23,10]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 24) { zasady = [1,24,'','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 25) { zasady = [15,2,29,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 26) { zasady = [29,35,'','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 27) { zasady = [10,14,29,40]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 28) { zasady = [28,32,4,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 29) { zasady = [10,28,29,37]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 30) { zasady = [1,15,17,24]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 31) { zasady = [17,15,'','']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 32) { zasady = [1,29,17,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 33) { zasady = [15,29,35,4]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 34) { zasady = [1,28,10,'']; }
          if(principlesSelect1 == 3 && principlesSelect2 == 35) { zasady = [14,15,1,16]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 36) { zasady = [1,19,26,24]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 37) { zasady = [35,1,26,24]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 38) { zasady = [17,24,26,16]; }
          if(principlesSelect1 == 3 && principlesSelect2 == 39) { zasady = [14,4,28,29]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 2) { zasady = [35,28,40,29]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 6) { zasady = [17,7,10,40]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 8) { zasady = [35,8,2,14]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 10) { zasady = [28,10,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 11) { zasady = [1,14,35,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 12) { zasady = [13,14,15,7]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 13) { zasady = [39,37,35,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 14) { zasady = [15,14,28,26]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 16) { zasady = [1,40,35,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 17) { zasady = [3,35,38,18]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 18) { zasady = [3,25,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 21) { zasady = [12,8,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 22) { zasady = [6,28,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 23) { zasady = [10,28,24,35]; }
          if(principlesSelect1 == 4 && principlesSelect2 == 24) { zasady = [24,26,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 25) { zasady = [30,29,14,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 26) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 27) { zasady = [15,29,28,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 28) { zasady = [32,28,3,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 29) { zasady = [2,32,10,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 30) { zasady = [1,18,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 32) { zasady = [15,17,27,'']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 33) { zasady = [2,25,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 34) { zasady = [3,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 35) { zasady = [1,35,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 36) { zasady = [1,26,'','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 37) { zasady = [26,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 38) { zasady = [41,'','','']; }
          if(principlesSelect1 == 4 && principlesSelect2 == 39) { zasady = [30,14,7,26]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 1) { zasady = [2,17,29,4]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 3) { zasady = [14,15,18,4]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 7) { zasady = [7,14,17,4]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 9) { zasady = [29,30,4,34]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 10) { zasady = [19,30,35,2]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 11) { zasady = [10,15,36,28]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 12) { zasady = [5,34,29,4]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 13) { zasady = [11,2,13,39]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 14) { zasady = [3,15,40,14]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 15) { zasady = [6,3,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 17) { zasady = [2,15,16,'']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 18) { zasady = [15,32,19,13]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 19) { zasady = [19,32,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 21) { zasady = [19,10,32,18]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 22) { zasady = [15,17,30,26]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 23) { zasady = [10,35,2,39]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 24) { zasady = [30,26,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 25) { zasady = [26,4,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 26) { zasady = [29,30,6,13]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 27) { zasady = [29,9,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 28) { zasady = [26,28,32,3]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 29) { zasady = [2,32,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 30) { zasady = [22,33,28,1]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 31) { zasady = [17,2,18,39]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 32) { zasady = [13,1,26,24]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 33) { zasady = [15,17,13,16]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 34) { zasady = [15,13,10,1]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 35) { zasady = [15,30,'','']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 36) { zasady = [14,1,13,'']; }
          if(principlesSelect1 == 5 && principlesSelect2 == 37) { zasady = [2,36,26,18]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 38) { zasady = [14,30,28,23]; }
          if(principlesSelect1 == 5 && principlesSelect2 == 39) { zasady = [10,26,34,2]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 2) { zasady = [30,2,14,18]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 4) { zasady = [26,7,9,39]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 10) { zasady = [1,18,35,36]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 11) { zasady = [10,15,36,37]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 13) { zasady = [2,38,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 14) { zasady = [40,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 16) { zasady = [2,10,19,30]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 17) { zasady = [35,39,38,'']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 21) { zasady = [17,32,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 22) { zasady = [17,7,30,'']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 23) { zasady = [10,14,18,39]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 24) { zasady = [30,16,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 25) { zasady = [10,35,4,18]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 26) { zasady = [2,18,40,4]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 27) { zasady = [32,35,40,4]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 28) { zasady = [26,28,32,3]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 29) { zasady = [2,29,18,36]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 30) { zasady = [27,2,39,35]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 31) { zasady = [22,1,40,'']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 32) { zasady = [40,16,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 33) { zasady = [16,4,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 34) { zasady = [16,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 35) { zasady = [15,16,'','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 36) { zasady = [1,18,36,'']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 37) { zasady = [2,35,30,18]; }
          if(principlesSelect1 == 6 && principlesSelect2 == 38) { zasady = [23,'','','']; }
          if(principlesSelect1 == 6 && principlesSelect2 == 39) { zasady = [10,15,17,7]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 1) { zasady = [2,26,29,40]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 3) { zasady = [1,7,4,35]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 5) { zasady = [1,7,4,17]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 9) { zasady = [29,4,38,34]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 10) { zasady = [15,35,36,37]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 11) { zasady = [6,35,36,37]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 12) { zasady = [1,15,29,4]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 13) { zasady = [28,10,1,39]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 14) { zasady = [9,14,15,7]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 15) { zasady = [6,35,4,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 17) { zasady = [34,39,10,18]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 18) { zasady = [2,13,10,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 19) { zasady = [35,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 21) { zasady = [35,6,13,18]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 22) { zasady = [7,15,13,16]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 23) { zasady = [36,39,34,10]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 24) { zasady = [2,22,'','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 25) { zasady = [2,6,34,10]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 26) { zasady = [29,30,7,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 27) { zasady = [14,1,40,11]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 28) { zasady = [25,26,28,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 29) { zasady = [25,28,2,16]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 30) { zasady = [22,21,27,35]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 31) { zasady = [17,2,40,1]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 32) { zasady = [29,1,40,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 33) { zasady = [15,13,30,12]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 34) { zasady = [10,'','','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 35) { zasady = [15,29,'','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 36) { zasady = [26,1,'','']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 37) { zasady = [29,26,4,'']; }
          if(principlesSelect1 == 7 && principlesSelect2 == 38) { zasady = [35,34,16,24]; }
          if(principlesSelect1 == 7 && principlesSelect2 == 39) { zasady = [10,6,2,34]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 2) { zasady = [35,10,19,14]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 3) { zasady = [19,14,'','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 4) { zasady = [35,8,2,14]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 10) { zasady = [2,18,37,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 11) { zasady = [24,35,'','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 12) { zasady = [7,2,35,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 13) { zasady = [34,28,35,40]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 14) { zasady = [9,14,17,15]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 16) { zasady = [35,34,38,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 17) { zasady = [35,6,4,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 21) { zasady = [30,6,'','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 22) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 23) { zasady = [10,39,35,34]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 25) { zasady = [35,16,32,18]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 26) { zasady = [35,3,'','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 27) { zasady = [2,35,16,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 28) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 29) { zasady = [35,10,25,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 30) { zasady = [34,39,19,27]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 31) { zasady = [30,18,35,4]; }
          if(principlesSelect1 == 8 && principlesSelect2 == 32) { zasady = [35,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 33) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 34) { zasady = [1,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 36) { zasady = [1,31,'','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 37) { zasady = [2,17,26,'']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 38) { zasady = [41,'','','']; }
          if(principlesSelect1 == 8 && principlesSelect2 == 39) { zasady = [35,37,10,2]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 1) { zasady = [8,28,13,38]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 3) { zasady = [13,14,8,'']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 5) { zasady = [29,30,34,'']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 7) { zasady = [7,29,34,'']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 10) { zasady = [13,28,15,19]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 11) { zasady = [6,18,38,40]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 12) { zasady = [35,15,18,34]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 13) { zasady = [28,33,1,18]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 14) { zasady = [8,3,26,14]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 15) { zasady = [3,19,35,5]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 17) { zasady = [28,30,36,2]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 18) { zasady = [10,13,19,'']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 19) { zasady = [8,15,35,38]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 21) { zasady = [19,35,38,2]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 22) { zasady = [14,20,19,35]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 23) { zasady = [10,13,28,38]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 24) { zasady = [13,26,'','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 25) { zasady = [41,'','','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 26) { zasady = [10,19,29,38]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 27) { zasady = [11,35,27,28]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 28) { zasady = [28,32,1,24]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 29) { zasady = [10,28,32,35]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 30) { zasady = [1,28,35,23]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 31) { zasady = [2,24,35,21]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 32) { zasady = [35,13,8,1]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 33) { zasady = [32,28,13,12]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 34) { zasady = [34,2,28,27]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 35) { zasady = [15,10,26,'']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 36) { zasady = [10,28,4,34]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 37) { zasady = [3,34,27,16]; }
          if(principlesSelect1 == 9 && principlesSelect2 == 38) { zasady = [10,18,'','']; }
          if(principlesSelect1 == 9 && principlesSelect2 == 39) { zasady = [41,'','','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 1) { zasady = [8,1,37,18]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 2) { zasady = [18,13,1,28]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 3) { zasady = [17,19,9,36]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 4) { zasady = [28,10,'','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 5) { zasady = [19,10,15,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 6) { zasady = [1,18,36,37]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 7) { zasady = [15,9,12,37]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 8) { zasady = [2,36,18,37]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 9) { zasady = [13,28,15,12]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 10) { zasady = [41,'','','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 11) { zasady = [18,21,11,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 12) { zasady = [10,35,40,34]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 13) { zasady = [35,10,21,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 14) { zasady = [35,10,14,27]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 15) { zasady = [19,2,'','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 17) { zasady = [35,10,21,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 19) { zasady = [19,17,10,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 20) { zasady = [1,16,36,37]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 21) { zasady = [19,35,18,37]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 22) { zasady = [14,15,'','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 23) { zasady = [8,35,40,5]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 25) { zasady = [10,37,36,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 26) { zasady = [14,29,18,36]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 27) { zasady = [3,35,13,21]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 28) { zasady = [35,10,23,24]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 29) { zasady = [28,29,37,36]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 30) { zasady = [1,35,40,18]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 31) { zasady = [13,3,36,24]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 32) { zasady = [15,37,18,1]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 33) { zasady = [1,28,3,25]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 34) { zasady = [15,1,11,'']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 35) { zasady = [15,17,18,20]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 36) { zasady = [26,35,10,18]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 37) { zasady = [36,37,10,19]; }
          if(principlesSelect1 == 10 && principlesSelect2 == 38) { zasady = [2,35,'','']; }
          if(principlesSelect1 == 10 && principlesSelect2 == 39) { zasady = [3,28,35,37]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 1) { zasady = [10,36,37,40]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 2) { zasady = [13,29,10,18]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 3) { zasady = [35,10,36,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 4) { zasady = [35,1,14,16]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 5) { zasady = [10,15,36,28]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 6) { zasady = [10,15,36,37]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 7) { zasady = [6,35,10,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 8) { zasady = [35,24,'','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 9) { zasady = [6,35,36,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 10) { zasady = [36,35,21,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 12) { zasady = [35,4,15,10]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 13) { zasady = [35,33,2,40]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 14) { zasady = [9,18,3,40]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 15) { zasady = [19,3,27,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 17) { zasady = [35,39,19,2]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 19) { zasady = [14,24,10,37]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 21) { zasady = [10,35,14,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 22) { zasady = [2,36,25,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 23) { zasady = [10,36,3,37]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 25) { zasady = [37,36,4,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 26) { zasady = [10,14,36,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 27) { zasady = [10,13,19,35]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 28) { zasady = [6,28,25,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 29) { zasady = [3,35,'','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 30) { zasady = [22,2,37,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 31) { zasady = [2,33,27,18]; }
          if(principlesSelect1 == 11 && principlesSelect2 == 32) { zasady = [1,35,16,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 33) { zasady = [11,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 34) { zasady = [2,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 35) { zasady = [35,'','','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 36) { zasady = [19,1,35,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 37) { zasady = [2,36,37,'']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 38) { zasady = [35,24,'','']; }
          if(principlesSelect1 == 11 && principlesSelect2 == 39) { zasady = [10,14,35,37]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 1) { zasady = [8,10,29,40]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 2) { zasady = [15,10,26,3]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 3) { zasady = [29,34,5,4]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 4) { zasady = [13,14,10,7]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 5) { zasady = [5,34,4,10]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 7) { zasady = [14,4,15,22]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 8) { zasady = [7,2,35,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 9) { zasady = [35,15,34,18]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 10) { zasady = [35,10,37,40]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 11) { zasady = [34,15,10,14]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 13) { zasady = [33,1,18,4]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 14) { zasady = [30,14,10,40]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 15) { zasady = [14,26,9,25]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 17) { zasady = [22,14,19,32]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 18) { zasady = [13,15,32,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 19) { zasady = [2,6,34,14]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 21) { zasady = [4,6,2,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 22) { zasady = [14,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 23) { zasady = [35,29,3,5]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 25) { zasady = [14,10,34,17]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 26) { zasady = [36,22,'','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 27) { zasady = [10,40,16,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 28) { zasady = [28,32,1,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 29) { zasady = [32,30,40,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 30) { zasady = [22,1,2,35]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 31) { zasady = [35,1,'','']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 32) { zasady = [1,32,17,28]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 33) { zasady = [32,15,26,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 34) { zasady = [2,13,1,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 35) { zasady = [1,15,29,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 36) { zasady = [16,29,1,28]; }
          if(principlesSelect1 == 12 && principlesSelect2 == 37) { zasady = [15,13,39,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 38) { zasady = [15,1,32,'']; }
          if(principlesSelect1 == 12 && principlesSelect2 == 39) { zasady = [17,26,34,10]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 1) { zasady = [21,35,2,39]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 2) { zasady = [26,39,1,40]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 3) { zasady = [13,15,1,28]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 4) { zasady = [37,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 5) { zasady = [2,11,13,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 6) { zasady = [39,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 7) { zasady = [28,10,19,39]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 8) { zasady = [34,28,35,40]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 9) { zasady = [33,15,28,18]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 10) { zasady = [10,35,21,16]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 11) { zasady = [2,35,40,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 12) { zasady = [22,1,18,4]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 13) { zasady = [41,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 14) { zasady = [17,9,15,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 15) { zasady = [13,27,10,35]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 16) { zasady = [39,3,35,23]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 17) { zasady = [35,1,32,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 18) { zasady = [32,3,27,15]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 19) { zasady = [13,19,'','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 20) { zasady = [27,4,29,18]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 21) { zasady = [32,35,27,31]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 22) { zasady = [14,2,39,6]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 23) { zasady = [2,14,30,40]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 25) { zasady = [35,27,'','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 26) { zasady = [15,32,35,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 27) { zasady = [41,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 28) { zasady = [13,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 29) { zasady = [18,'','','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 30) { zasady = [35,24,30,18]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 31) { zasady = [35,40,27,39]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 32) { zasady = [35,19,'','']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 33) { zasady = [32,35,30,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 34) { zasady = [2,35,10,16]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 35) { zasady = [35,30,34,2]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 36) { zasady = [2,35,22,26]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 37) { zasady = [35,22,39,23]; }
          if(principlesSelect1 == 13 && principlesSelect2 == 38) { zasady = [1,8,35,'']; }
          if(principlesSelect1 == 13 && principlesSelect2 == 39) { zasady = [23,35,40,3]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 1) { zasady = [1,8,40,15]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 2) { zasady = [40,26,27,1]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 3) { zasady = [1,15,8,35]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 4) { zasady = [15,14,28,26]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 5) { zasady = [3,34,40,29]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 6) { zasady = [9,40,28,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 7) { zasady = [10,15,14,7]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 8) { zasady = [9,14,17,15]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 9) { zasady = [8,13,26,14]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 10) { zasady = [10,18,3,14]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 11) { zasady = [10,3,18,40]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 12) { zasady = [10,30,35,40]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 13) { zasady = [13,17,35,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 14) { zasady = [41,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 15) { zasady = [27,3,26,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 17) { zasady = [30,10,40,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 18) { zasady = [35,19,'','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 19) { zasady = [19,35,10,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 20) { zasady = [35,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 21) { zasady = [10,26,35,28]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 22) { zasady = [35,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 23) { zasady = [35,28,31,40]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 25) { zasady = [29,3,28,10]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 26) { zasady = [29,10,27,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 27) { zasady = [11,3,'','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 28) { zasady = [3,27,16,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 29) { zasady = [3,27,'','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 30) { zasady = [18,35,37,1]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 31) { zasady = [15,35,22,2]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 32) { zasady = [11,3,10,32]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 33) { zasady = [32,40,28,2]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 34) { zasady = [27,11,3,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 35) { zasady = [15,3,32,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 36) { zasady = [2,13,28,'']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 37) { zasady = [27,3,15,40]; }
          if(principlesSelect1 == 14 && principlesSelect2 == 38) { zasady = [15,'','','']; }
          if(principlesSelect1 == 14 && principlesSelect2 == 39) { zasady = [29,35,10,14]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 1) { zasady = [19,5,34,31]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 3) { zasady = [2,19,9,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 5) { zasady = [3,17,19,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 7) { zasady = [10,2,19,30]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 9) { zasady = [3,35,5,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 10) { zasady = [19,2,16,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 11) { zasady = [19,3,27,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 12) { zasady = [14,26,28,25]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 13) { zasady = [13,3,35,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 14) { zasady = [27,3,10,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 17) { zasady = [19,35,39,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 18) { zasady = [2,19,4,35]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 19) { zasady = [28,6,35,18]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 21) { zasady = [19,10,35,38]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 22) { zasady = [41,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 23) { zasady = [28,27,3,18]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 24) { zasady = [10,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 25) { zasady = [20,10,28,18]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 26) { zasady = [3,35,10,40]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 27) { zasady = [11,2,13,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 28) { zasady = [3,'','','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 29) { zasady = [3,27,16,40]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 30) { zasady = [22,15,33,28]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 31) { zasady = [21,39,16,22]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 32) { zasady = [27,1,4,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 33) { zasady = [12,27,'','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 34) { zasady = [29,10,27,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 35) { zasady = [1,35,13,'']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 36) { zasady = [10,4,29,15]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 37) { zasady = [19,29,39,35]; }
          if(principlesSelect1 == 15 && principlesSelect2 == 38) { zasady = [6,10,'','']; }
          if(principlesSelect1 == 15 && principlesSelect2 == 39) { zasady = [35,17,14,19]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 2) { zasady = [6,27,19,16]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 4) { zasady = [1,40,35,'']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 8) { zasady = [35,34,38,'']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 10) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 13) { zasady = [39,3,35,23]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 14) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 17) { zasady = [19,18,36,40]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 21) { zasady = [16,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 22) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 23) { zasady = [27,16,18,38]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 24) { zasady = [10,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 25) { zasady = [28,20,10,16]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 26) { zasady = [3,35,31,'']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 27) { zasady = [34,27,6,40]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 28) { zasady = [10,26,24,'']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 30) { zasady = [17,1,40,33]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 31) { zasady = [22,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 32) { zasady = [35,10,'','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 33) { zasady = [1,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 34) { zasady = [1,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 35) { zasady = [2,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 36) { zasady = [41,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 37) { zasady = [25,34,6,35]; }
          if(principlesSelect1 == 16 && principlesSelect2 == 38) { zasady = [1,'','','']; }
          if(principlesSelect1 == 16 && principlesSelect2 == 39) { zasady = [20,10,16,38]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 1) { zasady = [36,22,6,38]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 2) { zasady = [22,35,32,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 3) { zasady = [15,19,9,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 4) { zasady = [15,19,9,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 5) { zasady = [3,35,39,18]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 6) { zasady = [35,38,'','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 7) { zasady = [34,39,40,18]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 8) { zasady = [35,6,4,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 9) { zasady = [2,28,36,30]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 10) { zasady = [35,10,3,21]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 11) { zasady = [35,39,19,2]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 12) { zasady = [14,22,19,32]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 13) { zasady = [1,35,32,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 14) { zasady = [10,30,22,40]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 15) { zasady = [19,13,39,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 16) { zasady = [19,18,36,40]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 17) { zasady = [41,'','','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 18) { zasady = [32,30,21,16]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 19) { zasady = [19,15,3,17]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 21) { zasady = [2,14,17,25]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 22) { zasady = [21,17,35,38]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 23) { zasady = [21,36,39,31]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 25) { zasady = [35,28,21,18]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 26) { zasady = [3,17,30,39]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 27) { zasady = [19,35,3,10]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 28) { zasady = [32,19,24,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 29) { zasady = [24,'','','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 30) { zasady = [22,33,35,2]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 31) { zasady = [22,35,2,24]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 32) { zasady = [26,27,'','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 33) { zasady = [26,27,'','']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 34) { zasady = [4,10,16,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 35) { zasady = [2,18,27,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 36) { zasady = [2,17,16,'']; }
          if(principlesSelect1 == 17 && principlesSelect2 == 37) { zasady = [3,27,35,31]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 38) { zasady = [26,2,19,16]; }
          if(principlesSelect1 == 17 && principlesSelect2 == 39) { zasady = [15,28,35,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 1) { zasady = [19,1,32,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 2) { zasady = [2,35,32,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 3) { zasady = [19,32,16,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 5) { zasady = [19,32,26,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 7) { zasady = [2,13,10,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 9) { zasady = [10,13,19,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 10) { zasady = [26,19,6,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 12) { zasady = [32,30,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 13) { zasady = [32,3,27,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 14) { zasady = [35,19,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 15) { zasady = [2,19,6,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 17) { zasady = [32,35,19,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 19) { zasady = [32,1,19,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 20) { zasady = [32,35,1,15]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 21) { zasady = [32,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 22) { zasady = [13,16,1,6]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 23) { zasady = [13,1,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 24) { zasady = [1,6,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 25) { zasady = [19,1,26,17]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 26) { zasady = [1,19,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 27) { zasady = [41,'','','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 28) { zasady = [11,15,32,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 29) { zasady = [3,32,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 30) { zasady = [15,19,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 31) { zasady = [35,19,32,39]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 32) { zasady = [19,35,28,26]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 33) { zasady = [28,26,19,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 34) { zasady = [15,17,13,16]; }
          if(principlesSelect1 == 18 && principlesSelect2 == 35) { zasady = [15,1,19,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 36) { zasady = [6,32,13,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 37) { zasady = [32,15,'','']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 38) { zasady = [2,26,10,'']; }
          if(principlesSelect1 == 18 && principlesSelect2 == 39) { zasady = [2,25,16,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 1) { zasady = [12,18,28,31]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 2) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 3) { zasady = [12,28,'','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 5) { zasady = [15,19,25,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 7) { zasady = [35,13,18,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 9) { zasady = [8,15,35,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 10) { zasady = [16,26,21,2]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 11) { zasady = [23,14,25,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 12) { zasady = [12,2,29,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 13) { zasady = [19,13,17,24]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 14) { zasady = [5,19,9,35]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 15) { zasady = [28,35,6,18]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 17) { zasady = [19,24,3,14]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 18) { zasady = [2,15,19,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 21) { zasady = [6,19,37,18]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 22) { zasady = [12,22,15,24]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 23) { zasady = [35,24,18,5]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 25) { zasady = [35,38,19,18]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 26) { zasady = [34,23,16,18]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 27) { zasady = [19,21,11,27]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 28) { zasady = [3,1,32,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 30) { zasady = [1,35,6,27]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 31) { zasady = [2,35,6,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 32) { zasady = [28,26,30,'']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 33) { zasady = [19,35,'','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 34) { zasady = [1,15,17,28]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 35) { zasady = [15,17,13,16]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 36) { zasady = [2,29,27,28]; }
          if(principlesSelect1 == 19 && principlesSelect2 == 37) { zasady = [35,38,'','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 38) { zasady = [32,2,'','']; }
          if(principlesSelect1 == 19 && principlesSelect2 == 39) { zasady = [12,28,35,'']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 1) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 2) { zasady = [19,9,6,27]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 3) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 5) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 7) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 10) { zasady = [36,37,'','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 13) { zasady = [27,4,29,18]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 14) { zasady = [35,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 17) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 18) { zasady = [19,2,35,32]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 21) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 22) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 23) { zasady = [28,27,18,31]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 25) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 26) { zasady = [3,35,31,'']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 27) { zasady = [10,36,23,'']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 28) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 30) { zasady = [10,2,22,37]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 31) { zasady = [19,22,18,'']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 32) { zasady = [1,4,'','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 33) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 34) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 36) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 37) { zasady = [19,35,16,25]; }
          if(principlesSelect1 == 20 && principlesSelect2 == 38) { zasady = [41,'','','']; }
          if(principlesSelect1 == 20 && principlesSelect2 == 39) { zasady = [1,6,'','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 1) { zasady = [8,36,38,31]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 2) { zasady = [19,26,17,27]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 3) { zasady = [1,10,35,37]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 5) { zasady = [19,38,'','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 6) { zasady = [17,32,13,38]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 7) { zasady = [35,6,38,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 8) { zasady = [30,6,25,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 9) { zasady = [15,35,2,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 10) { zasady = [26,2,36,35]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 11) { zasady = [22,10,35,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 12) { zasady = [29,14,2,40]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 13) { zasady = [35,32,15,31]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 14) { zasady = [26,10,28,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 15) { zasady = [19,35,10,38]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 16) { zasady = [16,'','','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 17) { zasady = [2,14,17,25]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 18) { zasady = [16,6,19,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 19) { zasady = [16,6,19,37]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 21) { zasady = [41,'','','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 22) { zasady = [10,35,38,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 23) { zasady = [28,27,18,38]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 24) { zasady = [10,19,'','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 25) { zasady = [35,20,10,6]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 26) { zasady = [4,34,19,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 27) { zasady = [19,24,26,31]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 28) { zasady = [32,15,2,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 29) { zasady = [32,2,'','']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 30) { zasady = [19,22,31,2]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 31) { zasady = [2,35,18,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 32) { zasady = [26,10,34,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 33) { zasady = [26,35,10,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 34) { zasady = [35,2,10,34]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 35) { zasady = [19,17,34,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 36) { zasady = [20,19,30,34]; }
          if(principlesSelect1 == 21 && principlesSelect2 == 37) { zasady = [19,35,16,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 38) { zasady = [28,2,17,'']; }
          if(principlesSelect1 == 21 && principlesSelect2 == 39) { zasady = [28,35,34,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 1) { zasady = [15,6,19,28]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 2) { zasady = [19,6,18,9]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 3) { zasady = [7,2,6,13]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 4) { zasady = [6,38,7,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 5) { zasady = [15,26,17,30]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 6) { zasady = [17,7,30,18]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 7) { zasady = [7,18,23,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 8) { zasady = [7,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 9) { zasady = [16,35,38,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 10) { zasady = [36,38,'','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 13) { zasady = [14,2,39,6]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 14) { zasady = [26,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 15) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 17) { zasady = [19,38,7,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 18) { zasady = [1,13,32,15]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 21) { zasady = [3,38,'','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 22) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 23) { zasady = [35,27,2,37]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 24) { zasady = [19,10,'','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 25) { zasady = [10,18,32,7]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 26) { zasady = [7,18,25,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 27) { zasady = [11,10,35,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 28) { zasady = [32,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 30) { zasady = [21,22,35,2]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 31) { zasady = [21,35,2,22]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 32) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 33) { zasady = [35,32,1,'']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 34) { zasady = [2,19,'','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 36) { zasady = [7,23,'','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 37) { zasady = [35,3,15,23]; }
          if(principlesSelect1 == 22 && principlesSelect2 == 38) { zasady = [2,'','','']; }
          if(principlesSelect1 == 22 && principlesSelect2 == 39) { zasady = [28,10,29,35]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 1) { zasady = [35,6,23,40]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 2) { zasady = [35,6,22,32]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 3) { zasady = [14,29,10,39]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 4) { zasady = [10,28,24,'']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 5) { zasady = [35,2,10,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 6) { zasady = [10,18,39,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 7) { zasady = [1,29,30,36]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 8) { zasady = [3,39,18,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 9) { zasady = [10,13,28,38]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 10) { zasady = [14,15,18,40]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 11) { zasady = [3,36,37,10]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 12) { zasady = [29,35,3,5]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 13) { zasady = [2,14,30,40]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 14) { zasady = [35,28,31,40]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 15) { zasady = [28,27,3,18]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 16) { zasady = [27,16,18,38]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 17) { zasady = [21,36,39,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 18) { zasady = [1,6,13,'']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 19) { zasady = [35,18,24,5]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 20) { zasady = [28,27,12,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 21) { zasady = [28,27,18,38]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 22) { zasady = [35,27,2,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 23) { zasady = [41,'','','']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 25) { zasady = [15,18,35,10]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 26) { zasady = [6,3,10,24]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 27) { zasady = [10,29,39,35]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 28) { zasady = [16,34,31,28]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 29) { zasady = [35,10,24,31]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 30) { zasady = [33,22,30,40]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 31) { zasady = [10,1,34,29]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 32) { zasady = [15,34,33,'']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 33) { zasady = [32,28,2,24]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 34) { zasady = [2,35,34,27]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 35) { zasady = [15,10,2,'']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 36) { zasady = [35,10,28,24]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 37) { zasady = [35,18,10,13]; }
          if(principlesSelect1 == 23 && principlesSelect2 == 38) { zasady = [35,10,18,'']; }
          if(principlesSelect1 == 23 && principlesSelect2 == 39) { zasady = [28,35,10,23]; }
          if(principlesSelect1 == 24 && principlesSelect2 == 1) { zasady = [10,24,35,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 2) { zasady = [10,35,5,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 3) { zasady = [1,26,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 4) { zasady = [26,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 5) { zasady = [30,26,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 6) { zasady = [30,16,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 7) { zasady = [2,22,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 8) { zasady = [26,32,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 10) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 11) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 12) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 13) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 14) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 15) { zasady = [10,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 16) { zasady = [10,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 17) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 18) { zasady = [19,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 19) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 21) { zasady = [10,19,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 22) { zasady = [19,10,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 23) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 25) { zasady = [24,26,28,32]; }
          if(principlesSelect1 == 24 && principlesSelect2 == 26) { zasady = [24,28,35,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 27) { zasady = [10,28,23,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 28) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 30) { zasady = [22,10,1,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 31) { zasady = [10,21,22,'']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 32) { zasady = [32,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 33) { zasady = [27,22,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 34) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 36) { zasady = [41,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 37) { zasady = [35,33,'','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 38) { zasady = [35,'','','']; }
          if(principlesSelect1 == 24 && principlesSelect2 == 39) { zasady = [13,23,15,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 1) { zasady = [10,20,37,35]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 2) { zasady = [10,20,26,5]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 3) { zasady = [15,2,29,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 4) { zasady = [30,24,14,5]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 5) { zasady = [26,4,5,16]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 6) { zasady = [10,35,17,4]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 7) { zasady = [2,5,34,10]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 8) { zasady = [35,16,32,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 10) { zasady = [10,37,36,5]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 11) { zasady = [37,36,4,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 12) { zasady = [4,10,34,17]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 13) { zasady = [35,3,22,5]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 14) { zasady = [29,3,28,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 15) { zasady = [20,10,28,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 16) { zasady = [28,20,10,16]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 17) { zasady = [35,29,21,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 18) { zasady = [1,19,26,17]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 19) { zasady = [35,38,19,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 20) { zasady = [1,'','','']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 21) { zasady = [35,20,10,6]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 22) { zasady = [10,5,18,32]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 23) { zasady = [35,18,10,39]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 24) { zasady = [24,26,28,32]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 25) { zasady = [41,'','','']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 26) { zasady = [35,38,18,16]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 27) { zasady = [10,30,4,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 28) { zasady = [24,34,28,32]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 29) { zasady = [24,26,28,18]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 30) { zasady = [35,18,34,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 31) { zasady = [35,22,18,39]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 32) { zasady = [35,28,34,4]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 33) { zasady = [4,28,10,34]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 34) { zasady = [32,1,10,'']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 35) { zasady = [35,28,'','']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 36) { zasady = [6,29,'','']; }
          if(principlesSelect1 == 25 && principlesSelect2 == 37) { zasady = [18,28,32,10]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 38) { zasady = [24,28,35,30]; }
          if(principlesSelect1 == 25 && principlesSelect2 == 39) { zasady = [41,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 1) { zasady = [35,6,18,31]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 2) { zasady = [27,26,18,35]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 3) { zasady = [29,14,35,18]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 5) { zasady = [15,14,29,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 6) { zasady = [2,18,40,4]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 7) { zasady = [15,20,29,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 9) { zasady = [35,29,34,28]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 10) { zasady = [35,14,3,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 11) { zasady = [10,36,14,3]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 12) { zasady = [35,14,'','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 13) { zasady = [15,2,17,40]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 14) { zasady = [14,35,34,10]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 15) { zasady = [3,35,10,40]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 16) { zasady = [3,35,31,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 17) { zasady = [3,17,39,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 18) { zasady = [41,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 19) { zasady = [34,29,16,18]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 20) { zasady = [3,35,31,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 21) { zasady = [35,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 22) { zasady = [7,18,25,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 23) { zasady = [6,3,10,24]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 24) { zasady = [24,28,35,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 25) { zasady = [35,38,18,16]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 26) { zasady = [41,'','','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 27) { zasady = [18,3,28,40]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 28) { zasady = [3,2,28,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 29) { zasady = [33,30,'','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 30) { zasady = [35,33,29,31]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 31) { zasady = [3,35,40,39]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 32) { zasady = [29,1,35,27]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 33) { zasady = [35,29,25,10]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 34) { zasady = [2,32,10,25]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 35) { zasady = [15,3,29,'']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 36) { zasady = [3,13,27,10]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 37) { zasady = [3,27,29,18]; }
          if(principlesSelect1 == 26 && principlesSelect2 == 38) { zasady = [8,35,'','']; }
          if(principlesSelect1 == 26 && principlesSelect2 == 39) { zasady = [13,29,3,27]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 1) { zasady = [3,8,10,40]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 2) { zasady = [3,10,8,28]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 3) { zasady = [15,9,14,4]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 4) { zasady = [15,29,28,11]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 5) { zasady = [17,10,14,16]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 6) { zasady = [32,35,40,4]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 7) { zasady = [3,10,14,24]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 8) { zasady = [2,35,24,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 9) { zasady = [21,35,11,28]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 10) { zasady = [8,28,10,3]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 11) { zasady = [10,24,35,19]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 12) { zasady = [35,1,16,11]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 13) { zasady = [41,'','','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 14) { zasady = [11,28,'','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 15) { zasady = [2,35,3,25]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 16) { zasady = [34,27,6,40]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 17) { zasady = [3,35,10,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 18) { zasady = [11,32,13,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 19) { zasady = [21,11,27,19]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 20) { zasady = [36,23,'','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 21) { zasady = [21,11,26,31]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 22) { zasady = [10,11,35,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 23) { zasady = [10,35,29,39]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 24) { zasady = [10,28,'','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 25) { zasady = [10,30,4,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 26) { zasady = [21,28,40,3]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 27) { zasady = [41,'','','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 28) { zasady = [32,3,11,23]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 29) { zasady = [11,32,1,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 30) { zasady = [27,35,2,40]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 31) { zasady = [35,2,40,26]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 32) { zasady = [41,'','','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 33) { zasady = [27,17,40,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 34) { zasady = [1,11,'','']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 35) { zasady = [13,35,8,24]; }
          if(principlesSelect1 == 27 && principlesSelect2 == 36) { zasady = [13,35,1,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 37) { zasady = [27,40,28,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 38) { zasady = [11,13,27,'']; }
          if(principlesSelect1 == 27 && principlesSelect2 == 39) { zasady = [1,35,29,38]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 1) { zasady = [32,35,26,28]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 2) { zasady = [28,35,25,26]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 3) { zasady = [28,26,5,16]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 4) { zasady = [32,28,3,16]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 5) { zasady = [26,28,32,3]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 6) { zasady = [26,28,32,3]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 7) { zasady = [32,13,6,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 9) { zasady = [28,13,32,24]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 10) { zasady = [32,2,'','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 11) { zasady = [6,28,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 12) { zasady = [6,28,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 13) { zasady = [32,35,13,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 14) { zasady = [28,6,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 15) { zasady = [28,6,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 16) { zasady = [10,26,24,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 17) { zasady = [6,19,28,24]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 18) { zasady = [6,1,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 19) { zasady = [3,6,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 21) { zasady = [3,6,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 22) { zasady = [26,32,27,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 23) { zasady = [10,16,31,28]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 25) { zasady = [24,34,28,32]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 26) { zasady = [2,6,32,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 27) { zasady = [5,11,1,23]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 28) { zasady = [41,'','','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 30) { zasady = [28,24,22,26]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 31) { zasady = [3,33,39,10]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 32) { zasady = [6,35,25,18]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 33) { zasady = [1,13,17,34]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 34) { zasady = [1,32,13,11]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 35) { zasady = [13,35,2,'']; }
          if(principlesSelect1 == 28 && principlesSelect2 == 36) { zasady = [27,35,10,34]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 37) { zasady = [26,24,32,28]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 38) { zasady = [28,2,10,34]; }
          if(principlesSelect1 == 28 && principlesSelect2 == 39) { zasady = [10,34,28,32]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 1) { zasady = [28,32,13,18]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 2) { zasady = [28,35,27,9]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 3) { zasady = [10,28,29,37]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 4) { zasady = [2,32,10,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 5) { zasady = [28,33,29,32]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 6) { zasady = [2,29,18,36]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 7) { zasady = [32,28,2,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 8) { zasady = [25,10,35,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 9) { zasady = [10,28,32,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 10) { zasady = [28,19,34,36]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 11) { zasady = [3,35,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 12) { zasady = [32,30,40,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 13) { zasady = [30,18,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 14) { zasady = [3,27,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 15) { zasady = [3,27,40,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 17) { zasady = [19,26,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 18) { zasady = [3,32,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 19) { zasady = [32,2,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 21) { zasady = [32,2,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 22) { zasady = [13,32,2,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 23) { zasady = [35,31,10,24]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 25) { zasady = [32,26,28,18]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 26) { zasady = [32,30,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 27) { zasady = [11,32,1,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 28) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 30) { zasady = [26,28,10,36]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 31) { zasady = [4,17,34,26]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 32) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 33) { zasady = [1,32,35,23]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 34) { zasady = [25,10,'','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 36) { zasady = [26,2,18,'']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 37) { zasady = [41,'','','']; }
          if(principlesSelect1 == 29 && principlesSelect2 == 38) { zasady = [26,28,18,23]; }
          if(principlesSelect1 == 29 && principlesSelect2 == 39) { zasady = [10,18,32,39]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 1) { zasady = [22,21,27,39]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 2) { zasady = [2,22,13,24]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 3) { zasady = [17,1,39,4]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 4) { zasady = [1,18,'','']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 5) { zasady = [22,1,33,28]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 6) { zasady = [27,2,39,35]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 7) { zasady = [22,23,37,35]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 8) { zasady = [34,39,19,27]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 9) { zasady = [21,22,35,28]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 10) { zasady = [13,35,39,18]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 11) { zasady = [22,2,37,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 12) { zasady = [22,1,3,35]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 13) { zasady = [35,24,30,18]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 14) { zasady = [18,35,37,1]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 15) { zasady = [22,15,33,28]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 16) { zasady = [17,1,40,33]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 17) { zasady = [22,33,35,2]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 18) { zasady = [1,19,32,13]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 19) { zasady = [1,24,6,27]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 20) { zasady = [10,2,22,37]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 21) { zasady = [19,22,31,2]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 22) { zasady = [21,22,35,2]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 23) { zasady = [33,22,19,40]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 24) { zasady = [22,10,2,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 25) { zasady = [35,18,34,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 26) { zasady = [35,33,29,31]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 27) { zasady = [27,24,2,40]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 28) { zasady = [28,33,23,26]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 29) { zasady = [26,28,10,18]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 30) { zasady = [41,'','','']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 32) { zasady = [24,35,2,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 33) { zasady = [2,25,28,39]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 34) { zasady = [35,10,2,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 35) { zasady = [35,11,22,31]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 36) { zasady = [22,19,29,40]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 37) { zasady = [22,19,29,40]; }
          if(principlesSelect1 == 30 && principlesSelect2 == 38) { zasady = [33,3,34,'']; }
          if(principlesSelect1 == 30 && principlesSelect2 == 39) { zasady = [22,35,13,24]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 1) { zasady = [19,22,15,39]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 2) { zasady = [35,22,1,39]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 3) { zasady = [17,15,16,22]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 5) { zasady = [17,2,18,39]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 6) { zasady = [22,1,40,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 7) { zasady = [17,2,40,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 8) { zasady = [30,18,35,4]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 9) { zasady = [35,28,3,23]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 10) { zasady = [35,28,1,40]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 11) { zasady = [2,33,27,18]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 12) { zasady = [35,1,'','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 13) { zasady = [35,40,27,39]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 14) { zasady = [15,35,22,2]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 15) { zasady = [15,22,33,31]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 16) { zasady = [21,39,16,22]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 17) { zasady = [22,35,2,24]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 18) { zasady = [19,24,39,32]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 19) { zasady = [2,35,6,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 20) { zasady = [19,22,18,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 21) { zasady = [2,35,18,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 22) { zasady = [21,35,2,22]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 23) { zasady = [10,1,34,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 24) { zasady = [10,21,29,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 25) { zasady = [1,22,'','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 26) { zasady = [3,24,39,1]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 27) { zasady = [24,2,40,39]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 28) { zasady = [3,33,26,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 29) { zasady = [4,17,34,26]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 30) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 32) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 33) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 34) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 36) { zasady = [19,1,31,'']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 37) { zasady = [2,21,27,1]; }
          if(principlesSelect1 == 31 && principlesSelect2 == 38) { zasady = [2,'','','']; }
          if(principlesSelect1 == 31 && principlesSelect2 == 39) { zasady = [22,35,18,39]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 1) { zasady = [28,29,15,16]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 2) { zasady = [1,27,36,13]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 3) { zasady = [1,29,13,17]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 4) { zasady = [15,17,27,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 5) { zasady = [13,1,26,12]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 6) { zasady = [16,40,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 7) { zasady = [13,29,1,40]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 8) { zasady = [35,'','','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 9) { zasady = [35,13,8,1]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 10) { zasady = [35,12,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 11) { zasady = [35,19,1,37]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 12) { zasady = [1,28,13,27]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 13) { zasady = [11,13,1,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 14) { zasady = [1,3,10,32]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 15) { zasady = [27,1,4,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 16) { zasady = [35,16,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 17) { zasady = [27,26,18,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 18) { zasady = [28,24,27,1]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 19) { zasady = [28,26,27,1]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 20) { zasady = [1,4,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 21) { zasady = [27,1,12,24]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 22) { zasady = [19,35,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 23) { zasady = [15,34,33,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 24) { zasady = [32,24,18,16]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 25) { zasady = [35,28,34,4]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 26) { zasady = [35,23,1,24]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 27) { zasady = [41,'','','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 28) { zasady = [1,35,12,18]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 30) { zasady = [24,2,'','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 32) { zasady = [41,'','','']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 33) { zasady = [2,5,13,16]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 34) { zasady = [35,1,11,9]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 35) { zasady = [2,13,15,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 36) { zasady = [27,26,1,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 37) { zasady = [6,28,11,1]; }
          if(principlesSelect1 == 32 && principlesSelect2 == 38) { zasady = [8,28,1,'']; }
          if(principlesSelect1 == 32 && principlesSelect2 == 39) { zasady = [35,1,10,28]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 1) { zasady = [25,2,13,15]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 2) { zasady = [6,13,1,25]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 3) { zasady = [1,17,13,12]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 4) { zasady = [41,'','','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 5) { zasady = [1,17,13,16]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 6) { zasady = [18,16,15,39]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 7) { zasady = [1,16,35,15]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 8) { zasady = [4,18,39,31]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 9) { zasady = [18,13,34,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 10) { zasady = [28,13,35,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 11) { zasady = [2,32,12,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 12) { zasady = [15,34,29,28]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 13) { zasady = [32,35,30,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 14) { zasady = [32,40,3,28]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 15) { zasady = [29,3,8,25]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 16) { zasady = [1,16,25,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 17) { zasady = [26,27,13,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 18) { zasady = [13,17,1,24]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 19) { zasady = [1,13,24,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 21) { zasady = [35,34,2,10]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 22) { zasady = [2,19,13,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 23) { zasady = [28,32,2,24]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 24) { zasady = [4,10,27,22]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 25) { zasady = [4,28,10,34]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 26) { zasady = [12,35,'','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 27) { zasady = [17,27,8,40]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 28) { zasady = [25,13,2,34]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 29) { zasady = [1,32,35,23]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 30) { zasady = [2,25,28,39]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 32) { zasady = [2,5,12,'']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 33) { zasady = [41,'','','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 34) { zasady = [12,26,1,32]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 35) { zasady = [15,34,1,16]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 36) { zasady = [32,26,12,17]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 37) { zasady = [41,'','','']; }
          if(principlesSelect1 == 33 && principlesSelect2 == 38) { zasady = [1,34,12,3]; }
          if(principlesSelect1 == 33 && principlesSelect2 == 39) { zasady = [15,1,28,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 1) { zasady = [2,27,35,11]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 2) { zasady = [2,27,35,11]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 3) { zasady = [1,28,10,25]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 4) { zasady = [3,18,31,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 5) { zasady = [15,13,32,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 6) { zasady = [16,25,'','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 7) { zasady = [25,2,35,11]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 8) { zasady = [1,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 9) { zasady = [34,9,'','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 10) { zasady = [1,11,10,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 11) { zasady = [13,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 12) { zasady = [1,13,2,4]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 13) { zasady = [2,35,'','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 14) { zasady = [1,11,2,9]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 15) { zasady = [11,29,28,27]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 16) { zasady = [1,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 17) { zasady = [4,10,'','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 18) { zasady = [15,1,13,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 19) { zasady = [15,1,28,16]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 21) { zasady = [15,10,32,2]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 22) { zasady = [15,1,32,19]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 23) { zasady = [2,35,34,27]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 25) { zasady = [32,1,10,25]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 26) { zasady = [2,28,10,25]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 27) { zasady = [11,10,1,16]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 28) { zasady = [10,2,13,'']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 29) { zasady = [25,10,'','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 30) { zasady = [35,10,2,16]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 32) { zasady = [1,35,11,10]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 33) { zasady = [1,12,26,15]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 34) { zasady = [41,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 35) { zasady = [7,1,4,16]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 36) { zasady = [35,1,13,11]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 37) { zasady = [41,'','','']; }
          if(principlesSelect1 == 34 && principlesSelect2 == 38) { zasady = [34,35,7,13]; }
          if(principlesSelect1 == 34 && principlesSelect2 == 39) { zasady = [1,32,10,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 1) { zasady = [1,6,15,8]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 2) { zasady = [19,15,29,16]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 3) { zasady = [35,1,29,2]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 4) { zasady = [1,35,16,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 5) { zasady = [35,30,29,7]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 6) { zasady = [15,16,'','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 7) { zasady = [15,35,29,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 9) { zasady = [35,10,14,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 10) { zasady = [15,17,20,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 11) { zasady = [35,16,'','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 12) { zasady = [15,37,1,8]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 13) { zasady = [35,30,14,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 14) { zasady = [35,3,32,6]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 15) { zasady = [13,1,35,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 16) { zasady = [2,16,'','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 17) { zasady = [27,2,3,35]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 18) { zasady = [6,22,26,1]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 19) { zasady = [19,35,29,13]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 21) { zasady = [19,1,29,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 22) { zasady = [18,15,1,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 23) { zasady = [15,10,2,13]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 25) { zasady = [35,28,'','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 26) { zasady = [3,35,15,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 27) { zasady = [35,13,8,24]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 28) { zasady = [35,5,1,10]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 30) { zasady = [35,11,32,31]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 31) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 32) { zasady = [1,13,31,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 33) { zasady = [15,34,1,16]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 34) { zasady = [1,16,7,4]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 35) { zasady = [41,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 36) { zasady = [15,29,37,28]; }
          if(principlesSelect1 == 35 && principlesSelect2 == 37) { zasady = [1,'','','']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 38) { zasady = [27,34,35,'']; }
          if(principlesSelect1 == 35 && principlesSelect2 == 39) { zasady = [35,28,6,37]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 1) { zasady = [26,30,34,36]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 2) { zasady = [2,26,35,39]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 3) { zasady = [1,19,26,24]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 4) { zasady = [26,'','','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 5) { zasady = [14,1,13,16]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 6) { zasady = [6,36,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 7) { zasady = [34,26,6,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 8) { zasady = [1,16,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 9) { zasady = [34,10,28,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 10) { zasady = [26,16,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 11) { zasady = [19,1,35,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 12) { zasady = [29,13,28,15]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 13) { zasady = [2,22,17,19]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 14) { zasady = [2,13,28,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 15) { zasady = [10,4,28,15]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 17) { zasady = [2,17,13,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 18) { zasady = [24,17,13,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 19) { zasady = [27,2,29,28]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 21) { zasady = [20,19,30,34]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 22) { zasady = [10,35,13,2]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 23) { zasady = [35,10,28,29]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 24) { zasady = [41,'','','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 25) { zasady = [6,29,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 26) { zasady = [13,3,27,10]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 27) { zasady = [13,35,1,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 28) { zasady = [2,26,10,34]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 29) { zasady = [26,24,32,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 30) { zasady = [22,19,29,40]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 31) { zasady = [19,1,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 32) { zasady = [27,26,1,13]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 33) { zasady = [27,9,26,24]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 34) { zasady = [1,13,'','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 35) { zasady = [29,15,28,37]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 36) { zasady = [41,'','','']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 37) { zasady = [15,10,37,28]; }
          if(principlesSelect1 == 36 && principlesSelect2 == 38) { zasady = [15,1,24,'']; }
          if(principlesSelect1 == 36 && principlesSelect2 == 39) { zasady = [12,17,28,'']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 1) { zasady = [27,26,28,13]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 2) { zasady = [6,13,28,1]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 3) { zasady = [16,17,26,24]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 4) { zasady = [26,'','','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 5) { zasady = [2,13,18,17]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 6) { zasady = [2,39,30,16]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 7) { zasady = [29,1,4,16]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 8) { zasady = [2,18,26,31]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 9) { zasady = [3,4,16,35]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 10) { zasady = [36,28,40,19]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 11) { zasady = [35,36,37,32]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 12) { zasady = [27,13,1,39]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 13) { zasady = [11,22,39,30]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 14) { zasady = [27,3,15,28]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 15) { zasady = [19,29,39,25]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 16) { zasady = [25,34,6,35]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 17) { zasady = [3,27,35,16]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 18) { zasady = [2,24,26,'']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 19) { zasady = [35,38,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 20) { zasady = [19,35,16,'']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 21) { zasady = [19,1,16,10]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 22) { zasady = [35,3,15,19]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 23) { zasady = [1,18,10,24]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 24) { zasady = [35,33,27,22]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 25) { zasady = [18,28,32,9]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 26) { zasady = [3,27,29,18]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 27) { zasady = [27,40,28,8]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 28) { zasady = [26,24,32,28]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 29) { zasady = [41,'','','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 30) { zasady = [22,19,29,28]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 31) { zasady = [2,21,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 32) { zasady = [5,28,11,29]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 33) { zasady = [2,5,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 34) { zasady = [12,26,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 35) { zasady = [1,15,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 36) { zasady = [15,10,37,28]; }
          if(principlesSelect1 == 37 && principlesSelect2 == 37) { zasady = [41,'','','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 38) { zasady = [34,21,'','']; }
          if(principlesSelect1 == 37 && principlesSelect2 == 39) { zasady = [35,18,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 1) { zasady = [28,26,18,35]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 2) { zasady = [28,26,35,10]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 3) { zasady = [14,13,17,28]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 4) { zasady = [23,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 5) { zasady = [17,14,13,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 6) { zasady = [41,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 7) { zasady = [35,13,16,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 8) { zasady = [41,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 9) { zasady = [28,10,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 10) { zasady = [2,35,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 11) { zasady = [13,35,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 12) { zasady = [15,32,1,13]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 13) { zasady = [18,1,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 14) { zasady = [25,13,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 15) { zasady = [6,9,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 16) { zasady = [41,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 17) { zasady = [26,2,19,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 18) { zasady = [8,32,19,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 19) { zasady = [2,32,13,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 20) { zasady = [41,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 21) { zasady = [28,2,27,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 22) { zasady = [23,28,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 23) { zasady = [35,10,18,5]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 24) { zasady = [35,33,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 25) { zasady = [24,28,35,30]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 26) { zasady = [35,13,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 27) { zasady = [11,27,32,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 28) { zasady = [28,26,10,34]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 29) { zasady = [28,26,18,23]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 30) { zasady = [2,33,'','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 31) { zasady = [2,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 32) { zasady = [1,26,13,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 33) { zasady = [1,12,34,3]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 34) { zasady = [1,35,13,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 35) { zasady = [27,4,1,35]; }
          if(principlesSelect1 == 38 && principlesSelect2 == 36) { zasady = [15,24,10,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 37) { zasady = [34,27,25,'']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 38) { zasady = [41,'','','']; }
          if(principlesSelect1 == 38 && principlesSelect2 == 39) { zasady = [5,12,35,26]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 1) { zasady = [35,26,24,37]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 2) { zasady = [28,27,15,3]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 3) { zasady = [18,4,28,38]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 4) { zasady = [30,7,14,26]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 5) { zasady = [10,26,34,31]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 6) { zasady = [10,35,17,7]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 7) { zasady = [2,6,34,10]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 8) { zasady = [35,37,10,2]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 9) { zasady = [41,'','','']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 10) { zasady = [28,15,10,36]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 11) { zasady = [10,37,14,'']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 12) { zasady = [14,10,34,40]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 13) { zasady = [35,3,22,39]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 14) { zasady = [29,28,10,18]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 15) { zasady = [35,10,2,18]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 16) { zasady = [20,10,16,38]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 17) { zasady = [35,21,28,10]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 18) { zasady = [26,17,19,1]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 19) { zasady = [35,10,38,19]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 20) { zasady = [1,'','','']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 21) { zasady = [35,20,10,'']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 22) { zasady = [28,10,29,35]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 23) { zasady = [28,10,35,23]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 24) { zasady = [13,15,23,'']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 25) { zasady = [41,'','','']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 26) { zasady = [35,38,'','']; }
          if(principlesSelect1 == 39 && principlesSelect2 == 27) { zasady = [1,35,10,38]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 28) { zasady = [1,10,34,28]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 29) { zasady = [18,10,32,1]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 30) { zasady = [22,35,13,24]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 31) { zasady = [35,22,18,39]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 32) { zasady = [35,28,2,24]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 33) { zasady = [1,28,7,19]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 34) { zasady = [1,32,10,25]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 35) { zasady = [1,35,28,37]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 36) { zasady = [12,17,28,24]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 37) { zasady = [35,18,27,2]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 38) { zasady = [5,12,35,26]; }
          if(principlesSelect1 == 39 && principlesSelect2 == 39) { zasady = [41,'','','']; }
        
        
        
        
        
        
          let principlesAnimation = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
          let principlesTitle = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
          let principlesText = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
          let principlesExample = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];
        
        
          principlesAnimation[1] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[1] = "1. Segmentation";
          principlesText[1] = "<ul type=square><li>Divide the object into independent parts.</li><li>Make the object easy to disassemble.</li><li>Increase the degree of fragmentation or segmentation of the object.</li></ul>";
          principlesExample[1] = "<ul type=square><li>Patent USA Nr. 2859791. Ogumienie kół samochodowych, składające się z 12 niezależnych sekcji. Podział ogumienia zrealizowano dla podniesienia niezawodności. To jednak nie jedyny powód dla wykorzystywania tak \"silnej\" metody. Rozdrobnienie - to jedna z wiodących tendencji współczesnej techniki.</li><li>Patent Nr 168195. czerpak jednoczerpakowej koparki z jednolitą, półkolistą krawędzią tnącą, różniący się tym, że dla zapewnienia szybkiej i wygodnej wymiany nakładki skrawającej, wykonano ją z oddzielnych, rozbieralnych sekcji.</li><li>Patent Nr 168195. czerpak jednoczerpakowej koparki z jednolitą, półkolistą krawędzią tnącą, różniący się tym, że dla zapewnienia szybkiej i wygodnej wymiany nakładki skrawającej, wykonano ją z oddzielnych, rozbieralnych sekcji.</li></ul>";
        
          principlesAnimation[2] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[2] = "2. Separation";
          principlesText[2] = "<ul type=square><li>Separate any interfering parts or properties from the object, or single out the only necessary part (or property) of the object.</li></ul>";
          principlesExample[2] = "<ul type=square><li>Patent Nr 153533.Patent Nr 153533. Patent Nr 153533. Wyposażenie, zabezpieczające przed promieniowaniem rentgenowskim, różniące się tym, że dla ochrony przed promieniowaniem jonizującym głowy, barków, kręgosłupa, rdzenia kręgowego i gonad pacjenta, przy rentgenografii np. klatki piersiowej, składa się z oddzielnych osłon i pionowej, odpowiadającej pozycji kręgosłupa listwy, wykonanej z materiału nie przepuszczającego promieniowania rentgenowskiego. <br>Celowość takiego rozwiązania - oczywista. Wynalazek powoduje \"obcięcie\" najbardziej szkodliwej części strumienia promieniowania. Informację o wynalazku opublikowano w 1962 roku, chociaż to proste i oczywiste rozwiązanie mogło pojawić się znacznie wcześniej. <br>Przywykliśmy rozpatrywać wiele obiektów jak złożenie tradycyjnych i trwale połączonych elementów. Do elementów obiektu \"helikopter\" - zaliczamy także zbiorniki paliwa. Rzeczywiście, zwykły helikopter musi wozić paliwo. Jednakże w tych przypadkach, gdy helikopter kursuje po określonej trasie, paliwo można zostawić na ziemi. W elektrycznym helikopterze spalinowy silnik zastępuje silnik elektryczny, i zbiornika paliwa w ogóle nie ma. (za to są akumulatory! przyp. tłum.) W rozwiązaniu patentowym Nr 257301 \"bak\" jest, ale jest oddzielony od człowieka (Rys. 01) <br><img src=\"principles_img/2.png\" alt=\"rys.01\"><br><b>Rys. 1</b> Zasada wyodrębnienia: dawniej ratownik górniczy nosił plecakowy aparat chłodzący, a teraz znajduje się on w oddzielnym przewoźnym pojemniku.<br></li><li>Zderzenia samolotów z ptakami bywają przyczyną ciężkich katastrof. W USA opatentowano najrozmaitsze sposoby wypędzania ptaków z terenu lotnisk (mechaniczne strachy, rozpylanie naftaliny, itp.) Najlepszym okazało się głośne odtwarzanie krzyku przerażonych ptaków, nagranego na taśmie magnetofonowej! Oddzielić krzyk od ptaka - rozwiązanie niezwykłe, ale charakterystyczne dla zasady wyodrębnienia.</li></ul>";
        
          principlesAnimation[3] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[3] = "3. Local quality";
          principlesText[3] = "<ul type=square><li>Change the object’s structure from uniform to non-uniform, change the external environment (or external influence) from uniform to non-uniform.</li><li>Ensure that each part of the object functions in conditions most suitable for its operation.</li><li>Ensure that each part of the object fulfills a different and useful function.</li></ul>";
          principlesExample[3] = "<ul type=square><li>Patent Nr 256708 - sposób tłumienia pyłu w kopalnianych wyrobiskach, znamienny tym, że w celu uniknięcia rozprzestrzeniania się pyłu po terenie wyrobiska i usunięcia go z miejsca emisji strumieniem powietrza wentylacji, tłumienie prowadzi się jednocześnie drobno kroplistym i grubo kroplistym strumieniem wody, tak, że wokół stożka mgły wodnej tworzy się stożek grubo kroplistej wody.</li><li>Patent Nr 280328: sposób suszenia ziarna ryżu znamienny tym, że w celu ograniczenia zjawiska pękania ziarna, ryż przed suszeniem jest sortowany na frakcje, poddawane następnie suszeniu oddzielnie, każda w optymalnych dla swej wielkości warunkach.</li></ul>";
        
          principlesAnimation[4] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[4] = "4. Asymmetry";
          principlesText[4] = "<ul type=square><li>Change the shape of the object from symmetrical to asymmetrical.</li><li>If the object is asymmetrical, increase its degree of asymmetry.</li></ul>";
          principlesExample[4] = "<ul type=square><li>Zaciski z przesuniętymi szczękami. W odróżnieniu od zwykłych, pozwalają zaciskać i chwytać w położeniu pionowym długie kształtowniki.</li><li>Zasada asymetrii: elektrody pieca łukowego przemieszczono w stronę przeciwną do okna wsadowego, co stworzyło wolną przestrzeń dla ciągłego załadunku pieca.<br><img src=\"principles_img/4.png\" alt=\"rys.4\"><br><b>Rys.2</b></li><li>Reflektory samochodu powinny pracować w różnych warunkach: prawy powinien oświetlać drogę jasno i daleko, lewy tak, żeby nie oślepiać kierowców jadących z na przeciw. Wymagania różne, a sposób montażu reflektorów jednakowy. Dopiero niedawno powstała idea asymetrycznych świateł samochodów: prawe oświetla drogę na odległość ok. 25 m, lewe znacznie dalej.</li><li>Patent USA Nr 3435875 Asymetryczna opona posiada jeden bok o podwyższonej trwałości i odporności na uderzenia o krawężnik chodnika.</li></ul>";
        
          principlesAnimation[5] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[5] = "5. Merging";
          principlesText[5] = "<ul type=square><li>Bring closer together (or merge) identical or similar objects, assemble identical or similar parts to perform parallel operations.</li><li>Make operations contiguous or parallel; bring them together in time.</li></ul>";
          principlesExample[5] = "<ul type=square><li>Patent Nr 235547. Robocze oprzyrządowanie koparki wieloczerpakowej, zawierającej wirnik czerpakowy, osadzony na ramieniu wysięgowym, znamienne tym, że w celu zmniejszenia oporu urabiania zmarzniętego gruntu zaopatrzone jest w instalację do ogrzewania zmarzliny, posiadającą dysze zamontowane na sektorach czerpaka po obu jego stronach. Dawniej trzeba było zatrzymywać koparkę, żeby rozgrzać grunt, a teraz dysze podające gorąca wodę pozwalają na ciągłą, nieprzerwaną pracę. </br> <img src=\"principles_img/5_1.png\" alt=\"rys.5.1\"><br><b>Rys. 5.1</b></li><li>Patent Nr 134155. urządzenie ratunkowe, służące do wyprowadzania osób, znajdujących się w powietrznych komorach zatopionych statków, z zastosowaniem masek nagłownych, znamienne tym, że dla podniesienia efektywności akcji ratunkowej prowadzonej przez płetwonurków, wykonane jest w formie jednej lub dwóch masek nagłownych, zaopatrzonych w węże z końcówkami, umożliwiającymi podłączenie ich do systemu powietrznego skafandra płetwonurka, który reguluje dawkowanie powietrza do masek.<br><img src=\"principles_img/5_2.png\" alt=\"rys. 5.2\"><br><b>Rys. 5.2</b></li></ul>";
        
          principlesAnimation[6] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[6] = "6. Universality";
          principlesText[6] = "<ul type=square><li>Make a part of the object, or the entire object perform multiple functions; eliminate the need for other parts.</li></ul>";
          principlesExample[6] = "<ul type=square><li>W Japonii rozpatrywano projekt zainstalowania na tankowcach instalacji do przerobu ropy naftowej. Oznaczałoby to wykorzystanie czasu transportu na jednoczesny przerób ropy.</li><li>Patent Nr 160100. Sposób transportowania materiałów - na przykład liści tytoniu - do suszarni z pomocą hydrotransportu znamienny tym, że dla jednoczesnej realizacji procesu mycia liści i zachowania ich barwy wykorzystano wodę ogrzaną do temperatury 80-85°C.</li></ul>";
        
          principlesAnimation[7] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[7] = "7. \“Nested doll\”";
          principlesText[7] = "<ul type=square><li>Place one object inside another; place each object, in turn, inside the other.</li><li>Pass one part through a cavity in the other.</li></ul>";
          principlesExample[7] = "<ul type=square><li>Patent Nr 186781. Ultradźwiękowy koncentrator sprężystych drgań składający się z połączonych ze sobą półfalowych odcinków, znamienny tym, że dla zmniejszenia jego długości i podniesienia trwałości półfalowe odcinki są wykonane w formie stożków wstawionych jeden w drugi.<br><img src=\"principles_img/7_1.png\" alt=\"rys. 7.1\"><br><b>Rys. 7.1</b> Kompaktowy ultradźwiękowy koncentrator: 1 i 2 półstożki.</li><li>Patent Nr 110596. Sposób przechowywania i transportu różnorodnych co do lepkości produktów naftowych w ładowniach jednostek pływających, znamienny tym, że w celu zmniejszenia strat ciepła wysokolepkich produktów, przechowuje się je w pojemnikach zanurzonych w niskolepkich produktach wypełniających komory transportowe.</li><li>Szerokość ślimaka dozującego zmienia się, wkręcając jedną sekcję w drugą. <br><img src=\"principles_img/7_2.png\" alt=\"rys. 7.2\"><br><b>Rys. 7.2</b></li></ul>";
        
          principlesAnimation[8] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[8] = "8. Anti-weight";
          principlesText[8] = "<ul type=square><li>To compensate for the weight of the object, merge it with other objects that provide some support.</li><li>To compensate for the weight of the object, make it interact with the environment (e.g., use aerodynamic, hydrodynamic, buoyancy, and other forces).</li></ul>";
          principlesExample[8] = "<ul type=square><li>Patent Nr 187700. Sposób wpuszczania i wyciągania ze szczeliny skalnej urządzenia do wybuchowej eksploatacji górotworu, znamienny tym, że w celu obniżenia kosztów i uproszczenia robót strzałowych, opuszczanie urządzenia prowadzi się pod działaniem ciężaru własnego, a wyciąganie ze szczeliny - z pomocą silniczka rakietowego</li><li>Przy budowie turbogeneratora wysokiej mocy powstał problem: jak zmniejszyć nacisk wału turbogeneratora na łożyska? Problem rozwiązano w ten sposób, że nad turbogeneratorem umieszczono silny elektromagnes, kompensujący nacisk generatora na łożyska.</li><li>Niekiedy pojawia się problem odwrotny: jak skompensować zbyt mały ciężar. Przy budowie i eksploatacji elektrowozów kopalnianych powstała sprzeczność techniczna: dla zwiększenia siły uciągu trzeba powiększyć ciężar elektrowozu, zaś dla zmniejszenia jego masy trzeba zaprojektować elektrowóz możliwie lekkim. Grupa pracowników Petersburskiego Instytutu Górniczego opracowała i zastosowała proste urządzenie pozwalające usunąć sprzeczność. W napędzanych kołach elektrowozu zainstalowano mocne elektromagnesy, których pole wiąże koła z szynami, zwiększając półtorakrotnie siłę sprzężenia kół z szynami, bez zwiększania masy elektrowozu.</li></ul>";
        
          principlesAnimation[9] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[9] = "9. Preliminary anti-action";
          principlesText[9] = "<ul type=square><li>If it is necessary to perform an action with both harmful and useful effects, a counteraction should be performed first to control the harmful effects.</li><li>Create stresses in the object in advance to oppose known undesirable working stresses later on.</li></ul>";
          principlesExample[9] = "<ul type=square><li>Patent Nr. 84355. Odkuwkę tarczy turbiny - jeszcze gorącą - nakłada się na wirujący wał. Normalnie, w rozgrzanej odkuwce, w miarę ochładzania pojawiają się naprężenia promieniowo ściskające. W obracającej się odkuwce - siły odśrodkowe (dopóki gorąca odkuwka nie utraciła plastyczności) wywołują naprężenia i rozciąganie o przeciwnym zwrocie. Gdy detal całkowicie ostygnie, naprężenia promieniowe ściskające pojawiają się, ale znacznie niższe.</li><li>Na tej zasadzie oparta jest cała technologia strunobetonowych elementów budowlanych: żeby element żelbetowy lepiej pracował na rozciąganie, trzeba go wstępnie ścisnąć.</li><li>Jak - przykładowo - zrealizować wał o większej wytrzymałości nie powiększając jego średnicy? Rozwiązanie tego zadania pokazano na Rys. 9. Wał składa się z koncentrycznie zmontowanych rur, wstępnie skręconych w stronę przeciwną o określone obliczeniowo kąty. Inaczej mówiąc - wał zostaje wstępnie naprężony w stronę przeciwną niż ta, w którą odkształca się podczas normalnej pracy. Roboczy moment skręcający powinien więc najpierw zlikwidowć to wstępne naprężenie, po czym dopiero następuje deformacja w \"normalnym\" kierunku. Złożony wał jest o połowę lżejszy niż równoważny mu wytrzymałościowo wał jednolity.<br><img src=\"principles_img/9.png\" alt=\"rys. 9\"><br><b>Rys.9</b> Zasada wstępnego naprężenia: rury tworzące złożony wał, skręcane są wcześniej w stronę przeciwną do roboczych odkształceń.</li></ul>";
        
          principlesAnimation[10] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[10] = "10. Preliminary action";
          principlesText[10] = "<ul type=square><li>Make any changes in the object (either fully or partially) before such changes are required.</li><li>Pre-arrange objects so that they can be quickly activated without losing time delivering them.</li></ul>";
          principlesExample[10] = "<ul type=square><li>Patent Nr 61056. Sadzonki wielu upraw warzywno - jagodowych, posadzone do gruntu nie zawsze należycie się ukorzeniają, z powodu zbyt małego zapasu substancji odżywczych jakie powinna zawierać sadzonka. Zgodnie z wynalazkiem zaleca się wcześniejsze nasycenie sadzonek substancjami odżywczymi, zanurzając je w wannie z roztworem odpowiednich nawozów.</li><li>Patent Nr 162919. Sposób zdejmowania opatrunków gipsowych z pomocą brzeszczotu drutowego, znamienny tym, że w celu uniknięcia urazów i ułatwienia czynności zdejmowania opatrunku, brzeszczot nasmarowany odpowiednim smarem umieszcza się w cienkiej rurce polietylenowej i zawczasu układa się wzdłuż opatrywanej np. nogi. Dzięki temu rozcinanie gipsu prowadzi się w kierunku od ciała pacjenta na zewnątrz, bez obawy o uraz.</li><li>Ciekawostką jest sposób barwienia drewna jeszcze przed jego ścięciem: barwniki, podane do gleby nasycają drzewo, wędrując w górę wraz z sokami pobieranymi przez korzenie i zabarwiają całą jego objętość.</li></ul>";
        
          principlesAnimation[11] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[11] = "11. In-advance cushioning";
          principlesText[11] = "<ul type=square><li>Prepare an emergency equipment beforehand to compensate for any objects that are not reliable.</li></ul>";
          principlesExample[11] = "<ul type=square><li>Patent Nr 264626. Sposób obniżenia toksycznego oddziaływania związków chemicznych z pomocą odpowiednich dodatków, znamienny tym, że w celu zmniejszenia niebezpieczeństwa zatrucia związkami chemicznymi, a także produktami ich przemiany w organizmie, dodatki są dodawane bezpośrednio do komponentów związków chemicznych, już w trakcie procesu ich syntezy.</li><li>Patent Nr 297361. Sposób zapobiegania rozprzestrzenianiu się pożarów lasu metodą stwarzenia pasów ochronnych z roślin, znamienny tym, że w celu podniesienia ich ognioodporności, do gruntu podaje się tolerowane biologicznie, chemiczne środki, hamujące proces ich zapłonu.</li><li>Patent USA 2879821: metalowa tarcza umieszczona wewnątrz opony koła samochodowego, pozwalająca na kontynuację jazdy na uszkodzonej oponie bez obawy jej zniszczenia.</li><li>Zasadę \"zawczasu podłożonej poduszki\" można wykorzystywać nie tylko dla podniesienia niezawodności. Oto charakterystyczny przykład. W związku z tym, że w amerykańskich bibliotekach często giną książki, wynalazca Emanuel Trikilis zaproponował umieszczanie w grzbietach książek namagnesowanej blaszki. W momencie wydawania wypożyczonej książki, bibliotekarz rozmagnesowuje blaszkę w specjalnym urządzeniu elektrycznym. Jeśli jednak ktoś zechce wynieść niezarejstrowaną książkę z wypożyczalni, to zainstalowany w drzwiach detektor zareaguje na schowany w grzbiecie magnes i uruchomi alarm.</li><li>Alpejska stacja górskiego pogotowia ratunkowego w Szwajcarii zastosowała analogiczną metodę dla szybkiego odnajdywania osób przysypanych lawiną śnieżną. Obecnie narciarz lub mieszkaniec wysokogórskich terenów zagrożonych lawinami, obowiązkowo nosiprzy sobie niewielki magnes. W wypadku zasypania lawiną, magnes ten pozwala wykryć ofiarę nawet pod trzechmetrową warstwą śniegu.</li></ul>";
        
          principlesAnimation[12] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[12] = "12. Equipotentiality";
          principlesText[12] = "<ul type=square><li>In any potential field, limit position changes (e.g. change operating conditions to eliminate the need to raise or lower objects in a gravity field).</li></ul>";
          principlesExample[12] = "<ul type=square><li>Patent Nr 264769. Zaproponowano urządzenie do przemieszczania dużych tłoczników w rejonie pracy prasy. Urządzenie ma postać przymocowanej do stołu prasy przystawki rolkowej.</li><li>Patent Nr 110661. Kontenerowóz, w którym ładunek nie jest podnoszony na poziom podłogi skrzyni ładunkowej, a tylko unoszony podnośnikami hydraulicznymi i ustawiany na niskiej ramie. Pojazd taki może obejść się bez dźwigu i przewozić znacznie wyższe kontenery.</li></ul>";
        
          principlesAnimation[13] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[13] = "13. The other way around";
          principlesText[13] = "<ul type=square><li>Invert the action(s) taken to solve the problem (e.g. instead of cooling the object, heat it).</li><li>Make movable parts (or the external environment) stationary, and stationary parts movable.</li><li>Turn the object (or process) “upside down”.</li></ul>";
          principlesExample[13] = "<ul type=square><li>Patent Nr 184649. Sposób oczyszczania odlewów i odkuwek w złożu ściernym, znamienny tym, że w celu uproszczenia procesu, ruchy wibracyjne wykonuje obrabiany detal.</li><li>Patent Nr 109942. Wynalazek ten porusza ważny problem odlewania wielkogabarytowych cienkościennych elementów korpusowych. Przy odlewaniu takich detali wskazane jest, żeby ciekły metal wypełniał formę od góry, a krzepnięcie następowało od dołu do góry. Ale wlewanie metalu metodą \"deszczową\" jest dopuszczalne z wysokości ok. 15 cm, inaczej metal utleni się lub nasyci gazami. A co zrobić gdy forma ma 2 - 3 m wysokości? Jeśli podawać metal od dołu, to pierwsze jego porcje zakrzepną, nie zdążywszy podnieść się do góry. Wynalazca rozwiązał ten problem prosto i błyskotliwie: metal płynie rurami, sięgającymi dna formy odlewniczej. W miarę wypełniania formy opuszcza się ją w dół i w ten sposób każda porcja metalu jest podawana tam, gdzie powinna zakrzepnąć. (Rys.08) Zasada odwrotności: w odróżnieniu od zwykłego sposobu zalewania porusza się forma, a wlewający się w nią metal pozostaje nieruchomym. Odlewanie zwykle prowadzi się tak, że porusza się metal, a forma pozostaje nieruchoma. Tu wszystko na odwrót: porusza się forma, a wlewany w nią metal pozostaje nieruchomym. To pozwoliło \"połączyć niepołączalne\": ciągłość napełniania formy i krzepnięcie metalu od dołu do góry, tak jak przy \"deszczowej\" metodzie.<br><img src=\"principles_img/13.png\" alt=\"rys. 13\"><br><b>Rys.13</b> Zasada ruchomej formy odlewniczej.</li></ul>";
        
          principlesAnimation[14] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[14] = "14. Spheroidality – Curvature";
          principlesText[14] = "<ul type=square><li>Instead of using rectilinear parts, surfaces, or forms, use curvilinear ones; change from flat surfaces to spherical ones; from cube-shaped (parallelepiped) parts to ball-shaped structures.</li><li>Use rollers, balls, spirals, domes.</li><li>Go from linear to rotary motion; use centrifugal forces.</li></ul>";
          principlesExample[14] = "<ul type=square><li>Patent RFN Nr 1085073. Urządzenie do wspawywania rur w dno sitowe, w którym rolę elektrod pełnią ruchome kulki.</li><li>Patent Nr 262045. Organ wykonawczy samobieżnego kombajnu górniczego, pracującego metoda elektrycznego rozspajania górotworu, znamienny tym, że w celu podniesienia efektywności rozspajania twardospoistych skał, elektrody rozspajające wykonano w postaci swobodnie obracających się dysków, osadzonych na izolującej elektrycznie osi.</li><li>Patent Nr 260874. Sposób oddzielenia nici kordu od gumy, na przykład w zużytych oponach samochodowych, metodą zanurzania opony w cieczach naftopochodnych, z obróbką wysokociśnieniowym strumieniem płynu, mechanicznym rozczesywaniem nici i ich obcinaniem, znamienny tym, że w celu podniesienia wydajności procesu obróbkę opony prowadzi się, wprawiając ją w ruch obrotowy z dużą prędkością wywołującą siły odśrodkowe, osłabiające gumę.</li></ul>";
        
          principlesAnimation[15] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[15] = "15. Dynamization";
          principlesText[15] = "<ul type=square><li>Allow changes (or design such changes) in the characteristics of the object, external environment, or process that optimize the object, or that optimize the operating conditions.</li><li>Divide the object into parts capable of moving relative to each other.</li><li>If the object (or process) is rigid or inflexible, make it movable or adaptable.</li></ul>";
          principlesExample[15] = "<ul type=square><li>Patent Nr 317390. Płetwy do pływania znamienne tym, że w celu zapewnienia regulacji sztywności jej roboczej części (płetwy właściwej) koniecznej dla dostosowania jej do różnych warunków pływania i nurkowania, posiada ona wewnętrzne komory wypełnione nieściśliwym płynem, którego ciśnienie statyczne można zmieniać w zależności od potrzeb, na brzegu bądź pod wodą.</li><li>Patent Nr 161247 - Barka transportowa, której korpus ma cylindryczną postać, znamienna tym, że w celu zmniejszenia niebezpieczeństwa osiadania na mieliznach przy pełnym obciążeniu, korpus składa się z dwóch przegubowo połączonych półcylindrów.</li><li>Patent Nr 174748 - Samochód z przegubowo połączonymi sekcjami ramy, które mogą się obracać względem siebie z pomocą siłowników hydraulicznych. Taki pojazd cechuje wyższa zdolność pokonywania przeszkód terenowych.</li><li>Patent Nr 162580 - Sposób produkowania chłodzonych przewodów elektrycznych, z kanałami utworzonymi przez rurki, skręcone razem z przewodami elektrycznymi, metodą wstępnego wypełniania rurek substancją usuwaną po wykonaniu przewodów. Żeby uprościć technologię, w charakterze wypełniacza użyto parafiny, którą po zakończeniu procesu produkcji kabla wytapia się i w ten sposób usuwa z rurek.</li></ul>";
        
            principlesAnimation[16] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[16] = "16. Partial or excessive actions";
            principlesText[16] = "<ul type=square><li>If 100% of an effect is hard to achieve using a given method for solving a problem, then by using “lightly less” or “slightly more” of the same method, the problem may be considerably easier to solve.</li></ul>";
            principlesExample[16] = "<ul type=square><li>Zasada nadmiernego działania: żeby móc podawać równomiernie proszek z pomocą rury 1, sypie się go do leja zasypowego z naddatkiem, który zsypuje się do pojemnika, skąd zabierany jest z powrotem przez podajnik, ale lej zasypowy zawsze jest wypełniony do brzegów.<br><img src=\"principles_img/16.png\" alt=\"rys. 16\"><br><b>Rys. 16</b></li><li>Patent Nr 181897 - Sposób walki z gradem, oparty na krystalizacji z pomocą reagentów (np. jodku srebra) chmury gradowej, znamienny tym, ze w celu znacznego zmniejszenia zużycia reagentów i środków jego podawania do chmury, realizuje się krystalizacje nie całej chmury, a tylko jej najbardziej grubokroplistą część.</li></ul>";
        
            principlesAnimation[17] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[17] = "17. Transition to another dimension";
            principlesText[17] = "<ul type=square><li>Move the object in two- or three-dimensional space.</li><li>Use a multistory arrangement for the objects instead of a single-story arrangement.</li><li>Tilt or re-orient the object, put it on its side.</li><li>Use a different side of the given area.</li></ul>";
            principlesExample[17] = "<ul type=square><li>Patent Nr 150938 - Dioda prostująca, znamienna tym, że w celu powiększenia jej mocy zastosowano w niej profilowany element przejścia, zawierający tzw. \"dziury elektronowe\" i profilowany styk oporowy. Przejście od płaskiej formy kontaktu do przestrzennej, pozwala przy utrzymaniu gabarytów diody, uzyskać dużą powierzchnię czynną półprzewodnika i w konsekwencji dużą moc.</li><li>Patent Nr 180555 - Sposób mechanizacji wymiany wagoników w poziomej, przechodniej sztolni, znamienny tym, że w celu uniknięcia uszkodzeń konstrukcji zadaszenia i mechanizmów rozjazdów, wymiana załadowanych wagoników na puste prowadzona jest metodą przenoszenia pustego wagonika z obrotem o kąt 90° nad zestawem wagoników przygotowanych pod załadunek.</li><li>Patent Nr 259449 - Urządzanie do grafomagnetycznej defektoskopii, znamienne tym, że w celu podwyższenia czasu pracy, pierścieniowa taśma magnetyczna wykonana z dwustronnym pokryciem magnetycznym, wykonana jest w postaci tzw. wstążki Möbiusa.</li><li>Patent Nr 244783 - Cieplarnia dla całorocznej uprawy warzyw i owoców znamienna tym, że w celu lepszego wykorzystania promieniowania słonecznego jest zaopatrzona we wklęsły odbijający ekran ustawionym obrotowo po północnej stronie cieplarni.</li></ul>";
        
            principlesAnimation[18] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[18] = "18. Mechanical vibration";
            principlesText[18] = "<ul type=square><li>Cause the object to oscillate or vibrate.</li><li>Increase its frequency (even up to the ultrasonic).</li><li>Use the object’s resonant frequency.</li><li>Use piezoelectric vibrators instead of mechanical ones.</li><li>Use combined ultrasonic and electromagnetic field oscillations.</li></ul>";
            principlesExample[18] = "<ul type=square><li>Patent Nr 220380 - Metoda wibrołukowego napawania i spawania detali pod warstwą topnika z zastosowaniem elektrody drgającej z niską częstotliwością, znamienny tym, że w celu podniesienia jakości napawanego materiału, na drgania niskiej częstotliwości nakłada się drgania o częstotliwości ultradźwiękowej rzędu 20 kHz</li><li>Patent Nr 307896 - Metoda bezodpadowego cięcia drewna z pomocą narzędzia o zmiennej geometrii ostrza, znamienny tym, że w celu zmniejszenia sił skrawania, ciecie realizuje się drgającym narzędziem, przy czym częstotliwość drgań bliska jest częstotliwości drgań własnych obrabianego drewna.</li><li>Patent USA Nr 3239283 - Tarcie spoczynkowe wyraźnie obniża czułość precyzyjnych przyrządów pomiarowych, przeszkadza w płynności ruchu wskazówek, dźwigni i innych ruchomych elementów osadzonych obrotowo w łożyskach. Żeby tego uniknąć, łożyska wprawia się w drgania i elementy aparatu cały czas wykonują drobne oscylacje.</li><li>Dwaj Amerykanie John Bross i Wiliam Laubendorfer opracowali konstrukcję łożyska, którego tulejka wykonana jest z piezoelektrtycznego materiału i z obu stron pokryta elektroprzewodzącą powłoką. Do tej powłoki przylutowane są elektrody, którymi podawany jest prąd zmienny, powodujący drgania.</li></ul>";
        
            principlesAnimation[19] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[19] = "19. Periodic action";
            principlesText[19] = "<ul type=square><li>Instead of continuous action, use periodic or pulsating actions.</li><li>If an action is already periodic, change the periodic magnitude or frequency.</li><li>Use pauses between impulses to perform a different action.</li></ul>";
            principlesExample[19] = "<ul type=square><li>Patent Nr 267772 - Znany jest sposób obserwacji procesu spawania łukiem elektrycznym z wykorzystaniem dodatkowego oświetlenia. Jednakowoż przy dodatkowym oświetleniu, jednocześnie z poprawą widoczności stałego i płynnego metalu, znajdującego się w obszarze łuku, pogarsza się widoczność plazmowo - gazowej fazy łuku ( typowa techniczna sprzeczność! ) Zaproponowany sposób znamienny tym, że jasność dodatkowego oświetlenia zmienia się okresowo od zera do wartości przewyższającej jasność łuku. To pozwala pogodzić obserwację łuku z obserwacją topienia się elektrody i nakładania metalu.</li><li>Patent Nr 02622. Sposób kontroli działania termopary metodą podgrzewania jej i kontroli wartości siły elektromotorycznej, znamienny tym, że w celu zmniejszenia czasu kontroli termoparę nagrzewa się okresowymi impulsami prądu, a w przerwach pomiędzy impulsami sprawdza się wartość SEM.</li></ul>";
        
            principlesAnimation[20] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[20] = "20. Continuity of useful action";
            principlesText[20] = "<ul type=square><li>Carry on work continuously; make all parts of the object work at full load, all the time.</li><li>Eliminate all idle or intermittent actions or work.</li></ul>";
            principlesExample[20] = "<ul type=square><li>Patent Nr 126440 - Metoda wielowrzecionowego wiercenia otworów geologicznych dwoma kompletami rur wiertarskich. Przy jednoczesnym wierceniu dwóch - trzech otworów stosowany jest wirnik z kilkoma wrzecionami, włączanymi do pracy niezależnie jeden od drugiego i dwa komplety dłut, kolejno podnoszonych i opuszczanych w otwór dla wymiany zużytych dłut. Operacje wymiany dłut wykonuje się równolegle w czasie wiercenia jednego z otworów, bez zatrzymywania maszyny.</li><li>Patent Nr 268926 - Metoda transportu półfabrykatu cukru na statkach, znamienna tym, że w celu obniżenia kosztów transportu metodą wykorzystania pustych przebiegów, wykorzystuje tankowce, które po rozładowaniu produktów naftowych lub innych ciekłych substancji, po oczyszczeniu i umyciu załadowuje się tzw. surowym cukrem.</li></ul>";
        
            principlesAnimation[21] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[21] = "21. Skipping";
            principlesText[21] = "<ul type=square><li>Conduct a process, or certain stages of it (e.g. destructible, harmful or hazardous operations) at high speed.</li></ul>";
            principlesExample[21] = "<ul type=square><li>Patent Nr 241484 - Sposób szybkościowego nagrzewania metalowych półfabrykatów w strumieniu gazu znamienny tym, że w celu podniesienia wydajności i zmniejszenia strat zawartości węgla, gaz podaje się z szybkością nie mniejszą niż 200 m/sec, przy zachowaniu natężenia strumienia na całej długości kontaktu z półfabrykatem.</li><li>Patent Nr 112889 - przy rozładunku barki do transportu drewna, nachyla się ją z pomocą barki z urządzeniem dźwigowym. Żeby do wody zrzucić cały ładunek drewna, zachodzi potrzeba znacznego nachylenia barki transportowej, co bywa niebezpieczne. Proponowany sposób polega na szybkim nachylaniu barki o niezbyt duży kąt. Siły bezwładności powodują rozładowanie barki przy zachowaniu niezbyt dużego kąta nachylenia.</li><li>Patent RFN Nr 1134821 - urządzenie do przecinania cienkościennych rur o dużej średnicy, z tworzywa sztucznego. Szczególna cechą urządzenia jest tak duża szybkość cięcia, że rura nie zdąży się zdeformować.</li></ul>";
        
            principlesAnimation[22] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[22] = "22. \“Blessing in disguise\”";
            principlesText[22] = "<ul type=square><li>Use harmful factors (particularly, effects that are detrimental to the environment or surroundings) in such a way as to achieve a positive effect.</li><li>Eliminate the primary harmful action by adding it to another harmful action to resolve the problem.</li><li>Amplify a harmful factor to such a degree that it is no longer harmful.</li></ul>";
            principlesExample[22] = "<ul type=square><li>Sama w sobie zasada jest prosta: trzeba dopuścić to, co jest niedopuszczalne, niech będzie! Tylko, że tu myśl wynalazcy często natrafia na barierę psychologiczną.</li><li>Członek - korespondent Akademii Nauk ZSRR P. Wołogdin, w artykule \"Droga uczonego\" (\"Leningradzki almanach\", 1953, Nr 5 ) pisał, że jeszcze w dwudziestych latach pracował nad zastosowaniem prądów o wysokiej częstotliwości do nagrzewania metali. Doświadczenia wykazały, że metale nagrzewały się tylko na powierzchni. Nie udawało się \"wpędzić\" prądu o wysokiej częstotliwości do wnętrza kształtki i próby przerwano. W następstwie tego Wołogdin niejednokrotnie ubolewał, że nie wykorzystał tego \"ujemnego wyniku\" doświadczeń: przemysł mógł otrzymać o wiele lat wcześniej metodę hartowania stalowych detali z pomocą prądu wysokiej częstotliwości, niż stało się to w rzeczywistości.</li><li>B.R.Łazarenko i I.N. Łazarenko pracowali nad problemem walki z elektroerozją metali. Prąd elektryczny \"zjadał\" metal w miejscu kontaktu styków przekaźników i nie udawało się nic z tym zjawiskiem zrobić. Próbowano zastosować twarde i bardzo twarde stopy na styki, niestety wszystko bezskutecznie. Badacze próbowali umieszczać styki w różnych cieczach, ale erozja zachodziła jeszcze intensywniej. W pewnym momencie badacze zrozumieli, że ten \"negatywny rezultat\" można gdzieś indziej wykorzystać i całą pracę skierowano w \"przeciwnym kierunku\". 3 kwietnia 1943 r. wynalazcy otrzymali patent na elektroiskrową obróbkę metali.</li><li>Patent Nr 145 511 - na Rys. 22.1 A, pokazano ruchome połączenie dwóch części szczękowej rozdrabniarki. Ruchomość uzyskuje się dzięki kulistemu kształtowi żeliwnej końcówki. Szyjka tej końcówki jest najsłabszym ogniwem konstrukcji i tu zwykle następuje złamanie. Można oczywiście wykonać mocniejszą szyjkę, A jeśli zawczasu \"złamiemy\" szyjkę? Wtedy przekształci się ona w cylindryczną tulejkę, której nie sposób złamać. - Rys. 22.1 B<br> <img src=\"principles_img/22_1.png\" alt=\"rys. 22.1\"><br> <b>Rys. 22.1</b></li><li>Patent Nr. 152 492 Dla ochrony kabli podziemnych przed uszkodzeniami, spowodowanymi przez tworzenie się w gruncie zmarzlinowych szczelin, zawczasu wykonuje się wąskie nacięcia \"szczeliny\" po bokach w stunku do trasy kabla. (Rys. 22.2)<br> <img src=\"principles_img/22_2.png\" alt=\"rys. 22.2\"><br> <b>Rys. 22.2</b> Sztuczne \"szczeliny\" - nacięcia, chronią kabel przed zmarzlinowymi pęknięciami.</li></ul>";
        
            principlesAnimation[23] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[23] = "23. Feedback";
            principlesText[23] = "<ul type=square><li>Introduce feedback (referring back, cross-checking) to improve a process or an action.</li><li>If feedback is already used, change it.</li></ul>";
            principlesExample[23] = "<ul type=square><li>Patent Nr 283997 - Wewnątrz chłodni wieżowej wiatr tworzy wirujące strefy, które obniżają głębokość strefy ochłodzonej wody. Żeby podnieść efektywność chłodzenia, w sekcjach chłodni zainstalowano czujniki temperatury i wg. ich wskazań automatycznie reguluje się ilość podawanej wody.</li><li>Patent Nr 167229. Sposób automatycznego rozruchu przenośnika, znamienny tym, że w celu zaoszczędzenia energii elektrycznej potrzebnej w chwili uruchamiania silnika przenośnika, mierzy się moc zużywaną przez silnik podczas pracy przenośnika, ustala się ją dla chwili zatrzymywania przenośnika i otrzymany sygnał, odwrotnie proporcjonalny do ciężaru masy przenoszonej, podaje się na silnik w chwili załączania przenośnika.</li><li>Patent Nr 239245. Sposób automatycznej regulacji procesu rektyfikacji metodą oddziaływania na wydatek skroplin w kolumnie w zależności od temperatury i ciśnienia na wyjściu produktu, znamienny tym, że w celu stabilizacji zawartości jednego z komponentów w trójskładnikowej mieszaninie, dodatkowo wprowadza się korektę zależną od ciężaru właściwego produktu. wyjściowego</li></ul>";
        
            principlesAnimation[24] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[24] = "24. Intermediary";
            principlesText[24] = "<ul type=square><li>Use an intermediary carrier article or intermediary process.</li><li>Merge one object temporarily with another (which can be easily removed).</li></ul>";
            principlesExample[24] = "<ul type=square><li>Patent Nr 177436. Sposób doprowadzania prądu elektrycznego do płynnego (roztopionego) metalu znamienny tym, że w celu obniżenia strat energii elektrycznej, prąd do roztapianego metalu podaje się za pośrednictwem chłodzonych elektrod poprzez pośredniczący płynny metal, którego temperatura topnienia jest niższa, a gęstość i temperatura wrzenia wyższe od metalu przetwarzanego.</li><li>Patent Nr 178005. Sposób nanoszenia lotnego inhibitora korozji atmosferycznej na powierzchnię chronioną, znamienny tym, że dla otrzymania równomiernego pokrycia wewnętrznych powierzchni złożonych detali, przedmuchuje się przez nie gorące powietrze, nasycone parami inhibitora.</li></ul>";
        
            principlesAnimation[25] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[25] = "25. Self-service";
            principlesText[25] = "<ul type=square><li>Make the object serve itself by performing auxiliary helpful functions.</li><li>Use waste resources, energy, or substances.</li></ul>";
            principlesExample[25] = "<ul type=square><li>Patent Nr 261207. Aparat do śrutowania, którego korpus jest wyłożony odpornymi na ścierania płytkami, znamienny tym, że w celu podwyższenia trwałości oblicówki, płytki wykonane są jako magnesy stałe, utrzymujące na swojej powierzchni warstwę śrucin. Na ściankach aparatu powstaje dzięki temu ustawicznie odnawiająca się, ochronna warstwa śrucin.</li><li>Patent Nr 307584. Sposób wykonania kanałów irygacyjnych składanych z elementów, znamienny tym, że w celu uproszczenia transportu elementów, po zamontowaniu początkowego odcinka kanału, jego końce zamyka się tymczasowymi zastawkami i gotowy odcinek kanału zalewa się wodą i następne odcinki, także zamknięte zastawkami spławia się po tym odcinku kanału.</li><li>Patent Nr 108625. Sposób chłodzenia prostownikowych diod półprzewodnikowych, znamienny tym, że w celu poprawy warunków wymiany ciepła, zastosowano półprzewodnikowy termoelement, którego prądem roboczym jest prąd przechodzący przed diodę po wyprostowaniu.</li></ul>";
        
            principlesAnimation[26] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[26] = "26. Copying";
            principlesText[26] = "<ul type=square><li>Instead of an unavailable, expensive, fragile object, use simpler, inexpensive copies.</li><li>Replace the object or process with optical copies.</li><li>If visible optical copies are already used, move to infrared or ultraviolet copies.</li></ul>";
            principlesExample[26] = "<ul type=square><li>Patent Nr 86560. Poglądowa pomoc szkoleniowa dla nauki geodezji wykonana w postaci mapy plastycznej (panneau), znamienna tym, że w celu szkoleniowego, geodezyjnego zdejmowania z panneau planu sytuacyjnego terenu, jest ono wykonane w wg danych z pomiarów tachimetrycznych i charakterystyczne punkty terenu wyposażono w miniaturowe łaty geodezyjne.</li><li>Niekiedy konieczne jest (dla celów pomiarowych lub kontrolnych), nałożenie dwóch obiektów, których fizycznie nałożyć na siebie się nie da. W takich przypadkach celowe jest stosowanie kopii optycznych. Tak był - przykładowo - rozwiązany problem przestrzennej orientacji na zdjęciach rentgenowskich. Zwykłe rentgenowskie zdjęcie nie pozwala określić, w jakiej odległości od powierzchni ciała znajduje się chore miejsce. Stereoskopowe zdjęcia dają ogólny obraz, ale i w tym przypadku \"pomiary\" trzeba robić na oko; przecież do wnętrza ciała linijki wsunąć się nie da! Trzeba więc \"nałożyć nienakładalne\": ciało człowieka i linijkę!</li><li>Nowosymbirski wynalazca F.I.Aksenow rozwiązał to zadanie, metodą zastosowania optycznego nakładania. Wg jego sposobu stereoskopowe rentgenowskie zdjęcia klatki piersiowej nakłada się na stereoskopowe zdjęcia sześciennej kratkowej klatki. Analizując w stereoskopie nałożone na siebie zdjęcia - lekarz widzi \"wewnątrz\" klatki piersiowej chorego sześcian, odgrywający role przestrzennej siatki współrzędnych.</li><li>W ogóle w wielu przypadkach wygodniej jest operować nie obiektami, a ich optycznymi kopiami. Przykładowo: kanadyjska firma Cutter Pallp, wykorzystuje specjalne stanowisko fotograficzne do pomiaru kubatury pni drzewnych, przewożonych na platformach kolejowych. Wg danych firmy fotograficzny pomiar transportu papierówki jest o ok. 50 do 60% krótszy od ręcznego, a błąd określenia kubatury nie przekracza 1 - 2 %</li><li>Patent Nr 180829 - nowy sposób kontroli kształtu wewnętrznych powierzchni sferycznych detali. W detal wlewa się słabo odbijający światło płyn i następnie, zmieniając jego poziom, prowadzi się fotografowanie na tę samą klatkę kolorowego filmu. Na zdjęciu uzyskuje się koncentryczne kręgi. Porównując otrzymane w ten sposób linie, z liniami teoretycznymi, z dużą dokładnością określa się wielkość odchyłek kształtu detalu.</li></ul>";
        
            principlesAnimation[27] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[27] = "27. Cheap short-living objects";
            principlesText[27] = "<ul type=square><li>Replace an expensive object with a multitude of inexpensive objects that compromise certain qualities (service life, for instance).</li></ul>";
            principlesExample[27] = "<ul type=square><li>Zasady aseptyki wymagają, gotowania strzykawek nie krócej niż 45 minut. Tymczasem w wielu przypadkach zachodzi konieczność podania lekarstwa jak można najszybciej. We wszechzwiązkowym naukowo-badawczym instytucie instrumentów medycznych opracowano strzykawkętubkę do jednorazowego użytku. Jest to cienkościenne naczynie z plastiku, na którego ustniku jest osadzona sterylna igła, zabezpieczona kołpaczkiem. Korpus strzykawki - tubki w warunkach zakładu napełnia się lekarstwem i zamyka przez zalutowanie tworzywem. Taka strzykawka jest gotowa do użycia w ciągu dwóch sekund; wystarczy zdjąć kołpaczek osłaniający igłę. W czasie wstrzykiwania lekarstwo z tubki wyciska się, po czym zużytą strzykawkę - tubkę wyrzuca się.</li><li>Patent USA Nr 3430629. Pieluszka jednorazowego użytku. Zawiera wkład, pochłaniający typu bibuły. Istnieje dużo patentów tego typu: na jednorazowe termometry, torby foliowe na śmieci, szczotki do zębów itd.</li></ul>";
        
            principlesAnimation[28] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[28] = "28. Mechanics substitution";
            principlesText[28] = "<ul type=square><li>Replace mechanical means with sensory (optical, acoustic, taste or smell) means.</li><li>Use electric, magnetic and electromagnetic fields to interact with the object.</li><li>Change from static to movable fields, from unstructured fields to structured.</li><li>Use fields in conjunction with field-activated (e.g. ferromagnetic) particles.</li></ul>";
            principlesExample[28] = "<ul type=square><li>Patent Nr 154459. </li></ul>";
        
            principlesAnimation[29] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[29] = "29. Pneumatics and hydraulics";
            principlesText[29] = "<ul type=square><li>Use gas and liquid parts of the object instead of solid parts (e.g. inflatable, filled with liquids, air cushioned, hydrostatic, hydro-reactive).</li></ul>";
            principlesExample[29] = "<ul type=square><li>Patent Nr 243809. Celem wynalazku jest zwiększenie ciągu i podniesienie wysokości rozpraszania odprowadzanych gazów. Osiągnięto to w ten sposób, że korpus komina (Rys.29) wykonany jest w formie stożkowej spirali 1, której rurowe zwoje wyposażone są w dysze 2 i połączone z rurowymi słupami 3, których dolne końce podłączone są do kompresora 4. Przy włączeniu kompresora 4, powietrze wznosi się wzdłuż słupów 3, wpada do spiralnych zwojów korpusu i wylatując z dysz 2, tworzy powietrzną \"ścianę\".<br> <img src=\"principles_img/29.png\" alt=\"rys. 29\"><br> <b>Rys. 29</b> Zamiast masywnego komina - ażurowa konstrukcja: spirala z rury, zaopatrzona na zwojach w dysze, przez które doprowadza się sprężone powietrze, tworzące \"ściankę\".</li><li>Patent Nr 312630. Sposób natryskowego malowania wielkogabarytowych wyrobów z odciąganiem par rozpuszczalnika z mgły lakierowej przez wentylacyjny system ssący, znamienny tym, że w celu zmniejszenia potrzebnej dla malowania przestrzeni, wokół malowanego obiektu tworzy się powietrzną kurtynę sięgającą na wysokość przewyższającą wysokość obiektu, której górne warstwy zawirowywuje się z pomocą podłogowego ssącego systemu. Wynalazek ten pokonuje taką sama techniczna sprzeczność jak w poprzednim przykładzie. Dlatego też podobne są i rozwiązania: pneumościanka zamiast cylindrycznej osłony.</li><li>Patent Nr 264675. Obsada kulistego zbiornika, zawierająca fundament, znamienna tym, że w celu obniżenia naprężeń w powłoce zbiornika, fundament obsady wykonano w formie wypełnionego cieczą basenu z wgiętą pokrywą z elastycznego materiału, przyjmującą kształt opierającej się na niej powłoki zbiornika.</li><li>Patent Nr 243177. Urządzenie dla przeniesienia nacisku obsady kafara na fundament, znamienne tym, że w celu zapewnienia równomiernego przekazania nacisku na fundament, jest wykonane w formie płaskiego, zamkniętego zbiornika, wypełnionego cieczą.</li></ul>";
        
            principlesAnimation[30] = "Animacja<br>Dostępne wkrótce";
            principlesTitle[30] = "30. Flexible shells and thin films";
            principlesText[30] = "<ul type=square><li>Use flexible shells and thin films instead of three-dimensional structures.</li><li>Isolate the object from the external environment using flexible shells and thin films.</li></ul>";
            principlesExample[30] = "<ul type=square><li>Żeby zmniejszyć straty wilgoci, parującej z liści drzew, amerykańscy badacze opryskują je polietylenowym \"deszczem\". Na liściach tworzy się cieniutka plastyczna warstwa. Roślina okryta plastikową \"kołdrą\" rozwija się normalnie dzięki temu, że polietylen znacznie łatwiej przepuszcza tlen i dwutlenek węgla, niż wodę.</li><li>Patent Nr 312826. Metoda ekstrakcji w układzie ciecz - ciecz, znamienna tym, że w celu intensyfikacji procesu wymiany masy, strugę jednej fazy podaje się przez warstwę gazu na powierzchnię drugiej fazy, przemieszczającą się cienką warstewką po twardej powierzchni.</li></ul>";
        
              principlesAnimation[31] = "Animacja<br>Dostępne wkrótce";
              principlesTitle[31] = "31. Porous materials";
              principlesText[31] = "<ul type=square><li>Make the object porous or add porous elements (inserts, coatings, etc.).</li><li>If the object is already porous, use the pores to introduce a useful substance or function.</li></ul>";
              principlesExample[31] = "<ul type=square><li>Patent Nr 262092. Sposób ochrony powierzchni ścianek naczynia przed odkładaniem się twardych i lepkich cząstek ze znajdującego się wewnątrz produktu, znamienny tym, że w celu podniesienia efektywności ochrony i obniżenia strat energii wewnątrz naczynia, wykonanego z porowatego materiału, podaje się przez jego ścianki nie tworzący narostów płyn, pod ciśnieniem wyższym niż ciśnienie wewnątrz naczynia.</li><li>Patent Nr 283264. Sposób wprowadzania dodatków w płynny metal, z pomocą ognioodpornych materiałów, znamienny tym, że w celu poprawienia warunków wprowadzania dodatków, w metal zanurza się porowatyy materiał ognioodporny, uprzednio przesycony materiałem dodatku.</li><li>Patent Nr 187135. System parownikowego chłodzenia maszyn elektrycznych, znamienny tym, że dla wykluczenia konieczności doprowadzania czynnika chłodzącego do maszyny, części robocze i pojedyncze elementy konstrukcyjne są wykonane z materiałów porowatych, na przykład z porowatych spiekanych proszków stali, przesyconych płynnym czynnikiem chłodzącym, który podczas pracy maszyny paruje i w ten sposób zapewnia krótkotrwałe, intensywne i równomierne chłodzenie.</li><li>Maszyny zawsze budowano z masywnych ( nieprzenikliwych ) materiałów. Inercja myślenia prowadzi do tego, że zadania, łatwo rozwiązywalne przy wykorzystaniu materiałów porowatych, zbyt często próbuje się rozwiązać przez wprowadzanie specjalnych urządzeń w system, zachowując masywność wszystkich pozostałych elementów. Tymczasem wysoko zorganizowanej maszynie właściwa jest przenikalność - przykładem mogą służyć dowolne, żywe organizmy, poczynając od komórki, a kończąc na człowieku.</li><li>Wewnętrzne przemieszczanie substancji - jedna z ważnych funkcji wielu maszyn. \"Gruba\" maszyna realizuje tę funkcję z pomocą rur, pomp, itp. Precyzyjna, \"delikatna\" maszyna - z pomocą porowatych materiałów i sił molekularnych.</li></ul>";
        
              principlesAnimation[32] = "Animacja<br>Dostępne wkrótce";
              principlesTitle[32] = "32. Color changes";
              principlesText[32] = "<ul type=square><li>Change the color of the object or its external environment.</li><li>Change the transparency of the object or its external environment.</li></ul>";
              principlesExample[32] = "<ul type=square><li>W kuźniach i odlewniach, w zakładach metalurgicznych, wszędzie, gdzie potrzebna jest ochrona pracowników przed wysoką temperaturą, stosuje się wodne kurtyny. Takie kurtyny dobrze zabezpieczają pracowników przed działaniem niewidocznych (podczerwonych) promieni, jednakowoż oślepiająco jasne promieniowanie roztopionych metali, bez przeszkód przechodzi przez cienką płynną warstwę. Żeby zabezpieczyć przed nim pracowników, pracownicy polskiego Instytutu Ochrony Pracy zaproponowali metodę zabarwiania wody, z której tworzy się kurtyna wodna, pozostając przeźroczystą, w pełni zatrzymuje niewidzialne promieniowanie cieplne i w odpowiednim stopniu osłabia siłę promieniowania widzialnego.</li><li>Patent Nr 165645. Do roztworu utrwalającego wprowadza się barwnik, którym odwracalnie nasyca się warstwa światłoczuła i który nie zabarwia kartonu podkładowego, ani celuloidowego. Barwnik przy kolejnym płukaniu w wodzie powinien zostać wypłukany z warstwy światłoczułej. Szybkość wypłukiwania barwnika z warstwy światłoczułej w przybliżeniu równa jest szybkości wypłukiwania tiosiarczanu sodu lub jest nieco niższa. Zanik zabarwienia zdjęcia wywołanego wprowadzonym barwnikiem, świadczy o zakończeniu procesu płukania z resztek soli, którymi przeprowadza się utrwalanie.</li></ul>";
        
              principlesAnimation[33] = "Animacja<br>Dostępne wkrótce";
              principlesTitle[33] = "33. Homogeneity";
              principlesText[33] = "<ul type=square><li>Make objects interacting with any given object of the same material (or material with identical properties).</li></ul>";
              principlesExample[33] = "<ul type=square><li>Patent Nr 957599. Odlewnicze koryto do obróbki roztopionego metalu drganiami akustycznymi lub ultradźwiękowymi, przy pomocy nadajnika drgań, umieszczanego w roztopionym metalu, znamienny tym, że znajdującą się w kontakcie z roztopionym metalem część nadajnika wykonano z tego samego metalu co i obrabiany stop lub z jeden z jego składników i często roztapia się w płynnym metalu, a pozostała część nadajnika (falowodu ) skutkiem tego ochładza się i zachowuje wytrzymałość.</li><li>Patent Nr 234800. Sposób smarowania chłodzonego łożyska ślizgowego znamienny tym, żew celu poprawienia smarowania w warunkach podwyższonej temperatury, w charakterze środka smarnego zastosowano ten sam materiał, z którego wykonana jest panewka łożyska.</li><li>Patent Nr 180340. Sposób oczyszczania gazów od pyłów zawierających roztopione cząstki, znamienny tym, że w celu podwyższenia efektywności procesu, gazy przepuszcza się przez substancję znajdująca się w stanie płynnym i identyczną ze składem chemicznym zanieczyszczeń.</li><li>Patent Nr 259298. Sposób spawania metali, w którym spawane krawędzie ustawia się ze szczeliną, do której podaje się dodatkowy materiał z następującym po tym nagrzewem spawanych krawędzi, znamienny tym, że w celu poprawienia spawania, w charakterze materiału dodatkowego wykorzystuje się lotne związki tych samych materiałów co spawane.</li></ul>";
        
              principlesAnimation[34] = "Animacja<br>Dostępne wkrótce";
              principlesTitle[34] = "34. Discarding and recovering";
              principlesText[34] = "<ul type=square><li>Eliminate portions of the object that have fulfilled their function (discard by dissolving, evaporating, etc.) or modify these during the operation of the object.</li><li>Conversely, restore consumable parts of the object during the operation of the object.</li></ul>";
              principlesExample[34] = "<ul type=square><li>Patent USA Nr 3174550. Przy awaryjnym lądowaniu, do benzyny w zbiornikach samolotu jest dodawany środek spieniający, przekształcający paliwo w substancję niepalną.</li><li>Patent USA Nr 3160950. Żeby przy starcie rakiety nie uszkodzić czułej aparatury naukowo - badawczej, zalewa się ją pianoplastem, który wypełniwszy rolę amortyzatora, szybko odparowuje w warunkach kosmicznych.</li><li>Nietrudno zauważyć, że ta zasada, to dalszy rozwój zasady dynamizacji: obiekt zmienia się w procesie działania, ale zmienia się znacznie silniej. Samolot ze zmieniającą się w czasie lotu geometria skrzydeł - to zasada dynamizacji. Rakieta, odrzucająca wykorzystane zbiorniki paliwa - zasada odrzucania.</li><li>Patent Nr 222322. Sposób produkcji mikrosprężyn śrubowych, znamienny tym, że w celu podniesienia wydajności, rdzeń do nawijania wykonuje się z plastiku, który usuwa się przez zanurzenie w rozpuszczalniku.</li><li>Patent Nr 235979. Sposób produkcji gumowych kul - separatorów, znamienny tym, że celu nadania kuli odpowiednich wymiarów, jej rdzeń formuje się ze zmielonej kredy z wodą, suszy i po wulkanizacji rozpuszcza się przez wprowadzenie cieczy z pomocą igły strzykawkowej.</li><li>Patent Nr 159783. Sposób produkcji profili rurowych, znamienny tym, że w celu uzyskania różnorodnych co do kształtu i wielkości produktów, walcuje się pospawane pakiety, wypełnione materiałem ognioodpornym, na przykład proszkiem magnezytowym, z następnym usunięciem wypełniacza.</li><li>Patent Nr 182492. Sposób kompensacji zużycia nieprofilowanej elektrody-narzędzia przy elektroerozyjnej obróbce elektroprzewodzących materiałów, znamienny tym, że w celu powiększenia czasu pracy elektrody-narzędzia, na jej roboczą powierzchnię w procesie obróbki nieprzerwanie napływa warstwa metalu.</li><li>Patent Nr 212672. Przy hydrotransporcie kwaśnej pulpy wodno ściernej, ścianki rurociągu szybko się zużywają. Ochrona ich wyłożenia wewnętrznego jest pracochłonna, prowadzi do zwiększenia średnicy zewnętrznej rurociągu. Opisany sposób ochrony rur zakłada utworzenie na ich wewnętrznej powierzchni warstwy ochronnej (wyprawy). W tym celu do transportowanej pulpy okresowo wprowadza się roztwór wapna. W ten sposób wewnętrzne ścianki rurociągu są zawsze zabezpieczone przed zużyciem, a przekrój rurociągu zmniejsza się nieznacznie, ponieważ wyprawa zmniejsza się na skutek działania ściernej i kwaśnej pulpy.</li></ul>";
        
              principlesAnimation[35] = "Animacja<br>Dostępne wkrótce";
              principlesTitle[35] = "35. Parameter changes";
              principlesText[35] = "<ul type=square><li>Change the object’s physical state (e.g. to a gas, liquid, or solid).</li><li>Change the concentration or consistency.</li><li>Change the degree of flexibility.</li><li>Change the temperature.</li></ul>";
              principlesExample[35] = "<ul type=square><li>Patent Nr 265068. Sposób prowadzenia procesu wymiany masy w systemie gaz - lepka ciecz, znamienny tym, że w celu intensyfikacji procesu, lepką ciecz przed podaniem do aparatu wstępnie poddaje się saturacji gazem.</li><li>Patent Nr 222781. Dozownik materiałów sypkich, na przykład nawozów mineralnych i pestycydów, wykonany w formie ślimaka osadzonego w korpusie z otworem wylotowym, znamienny tym, że w celu zyskania możliwości regulacji skoku, śrubowa powierzchnia ślimaka jest wykonana z elastycznego materiału ze spiralnymi sprężynami na wewnętrznej i zewnętrznej powierzchni (Rys. 35).<br> <img src=\"principles_img/35.png\" alt=\"rys. 35\"><br> <b>Rys. 35</b> W dozowniku materiałów sypkich ślimak wykonany jest z elastycznego materiału ze sprężynami spiralnymi, co pozwala regulować skok ślimaka.</li></ul>";
        
              principlesAnimation[36] = "Animacja<br>Dostępne wkrótce";
              principlesTitle[36] = "36. Phase transitions";
              principlesText[36] = "<ul type=square><li>Use phenomena occurring during phase transitions (e.g. volume changes, loss or absorption of heat, etc.).</li></ul>";
              principlesExample[36] = "<ul type=square><li>Patent Nr 225851. Sposób chłodzenia różnych obiektów z pomocą cyrkulującego po zamkniętym obwodzie ciekłego czynnika, znamienny tym, że w celu zmniejszenia ilości cyrku</li></ul>";
        
              principlesAnimation[37] = "Animacja<br>Dostępne wkrótce";
              principlesTitle[37] = "37. Thermal expansion";
              principlesText[37] = "<ul type=square><li>Use thermal expansion (or contraction) of materials.</li><li>If thermal expansion is being used, use multiple materials with different thermal expansion coefficients.</li></ul>";
              principlesExample[37] = "<ul type=square><li>Patent Nr 309758. Sposób ciągnienia rur na ruchomym kalibratorze wnętrza, przy obniżonych temperaturach, znamienny tym, że w celu utworzenia luzu między rurą a kalibratorem po ciągnieniu, dla wyciągnięcia go z rury bez zacierania, w ochłodzoną rurę przed ciągnięciem wprowadza się podgrzany na przykład do 50 - 100°? kalibrator, wyciągnięcie którego po deformacji przeprowadza się po wyrównaniu temperatury rury i narzędzia.</li><li>Patent Nr 312642. Sposób przygotowania wtłaczania na gorąco detali, wykonanych w postaci koncentrycznie zmontowanych tulejek, wykonanych z różnych materiałów, znamienny tym, że w celu otrzymania wielowarstwowych detali z naprężeniem warstw, każda tulejka wykonana jest z materiału, którego współczynnik rozszerzalności termicznej jest wyższy od współczynnika rozszerzalności liniowej materiału tulejki wewnętrznej.</li><li>Patent Nr 242127. Urządzenie do mikroprzemieszczania obiektu roboczego, na przykład uchwytu kryształów w ich hodowli z roztworu, znamienne tym, że w celu zapewnienia maksymalnej płynności ruchu składa się ono z dwóch prętów elektrycznie podgrzewanych i ochładzanych wg zadanego programu, znajdujących się w zamocowanych na suportach termokomorach i kolejno przemieszczających obiekt w potrzebnym kierunku.</li></ul>";
        
              principlesAnimation[38] = "Animacja<br>Dostępne wkrótce";
              principlesTitle[38] = "38. Strong oxidants";
              principlesText[38] = "<ul type=square><li>Replace air with oxygen-enriched air.</li><li>Replace enriched air with pure oxygen.</li><li>Expose air or oxygen to ionizing radiation.</li><li>Use ozonized oxygen.</li><li>Replace ozonized (or ionized) oxygen with ozone.</li></ul>";
              principlesExample[38] = "<ul type=square><li>Spiekanie i opalanie dyspersyjnego materiału z zastosowaniem intensyfikacji procesu żarzenia drogą przedmuchiwania powietrzem wzbogaconym w tlen, łukowo - plazmowe cięcie metali, przy czym w charakterze tnącego gazu stosuje się czysty tlen,</li><li>Intensyfikacja procesu aglomeracji rud drogą jonizacji utleniacza i gazowego paliwa przed podaniem w warstwę rudy.</li></ul>";
        
              principlesAnimation[39] = "Animacja<br>Dostępne wkrótce";
              principlesTitle[39] = "39. Inert atmosphere";
              principlesText[39] = "<ul type=square><li>Replace a normal environment with an inert one.</li><li>Add neutral parts, or inert additives to the object.</li></ul>";
              principlesExample[39] = "Brak przykładów";
        
              principlesAnimation[40] = "Animacja<br>Dostępne wkrótce";
              principlesTitle[40] = "40. Composite materials";
              principlesText[40] = "<ul type=square><li>Change from uniform to composite (multiple) materials.</li></ul>";
              principlesExample[40] = "<ul type=square><li>Patent USA Nr 3553820. Lekkie wytrzymałe, trudnotopliwe detale, wykonane na bazie aluminium i wzmocnione włókniną z pokrytych tantalem włókien węglowych. Takie wyroby charakteryzują się wysokim modułem sprężystości i wykorzystuje się je w charakterze materiałów do budowy statków powietrznych i morskich.</li><li>Patent Nr 147225. Sposób zapisu, wykorzystujący atrament, zawierający drobne magnetyczne cząsteczki. W odróżnieniu od zwykłych, magnetyczny atrament można sterować polem magnetycznym.</li><li>Interesującym materiałem kompozytowym jest połączenie substancji niskotopliwej (np. stopu Wooda) z włóknami trudnotopliwej substancji (np. stali). Taki materiał łatwo się topi, a po zastygnięciu posiada wysoka wytrzymałość. Stopniowo zachodzi proces dyfuzji cząsteczek lutowia i włókien, w rezultacie czego tworzy się materiał o wysokiej temperaturze topnienia.</li><li>Zawiesina cząstek krzemienia w smarze stałym - zdolna krzepnąć w polu elektrycznym.</li><li>Materiały kompozytowe to \"wynalazek\" przyrody i są szeroko w niej wykorzystywane. Tak np. drewno - jest kompozytem celulozy i ligniny. Włókna celulozy posiadają wysoką wytrzymałość na zrywanie, ale łatwo się wyginają. Lignina wiąże je w jedną całość i nadaje materiałowi sztywność.</li><li>Materiały porowate, o których była mowa w zasadzie 31, są kompozycją powietrza i ciała stałego. Ani powietrze, ani ciało stałe nie posiadają tych właściwości, jakie posiada ciało porowate.</li></ul>";

              principlesAnimation[41] = "Animacja<br>Dostępne wkrótce";
          principlesTitle[41] = "No solutions found for the given parameters";
          principlesText[41] = "";
          principlesExample[41] = "<ul type=square><li>Patent USA Nr 3553820. Lekkie wytrzymałe, trudnotopliwe detale, wykonane na bazie aluminium i wzmocnione włókniną z pokrytych tantalem włókien węglowych. Takie wyroby charakteryzują się wysokim modułem sprężystości i wykorzystuje się je w charakterze materiałów do budowy statków powietrznych i morskich.</li><li>Patent Nr 147225. Sposób zapisu, wykorzystujący atrament, zawierający drobne magnetyczne cząsteczki. W odróżnieniu od zwykłych, magnetyczny atrament można sterować polem magnetycznym.</li><li>Interesującym materiałem kompozytowym jest połączenie substancji niskotopliwej (np. stopu Wooda) z włóknami trudnotopliwej substancji (np. stali). Taki materiał łatwo się topi, a po zastygnięciu posiada wysoka wytrzymałość. Stopniowo zachodzi proces dyfuzji cząsteczek lutowia i włókien, w rezultacie czego tworzy się materiał o wysokiej temperaturze topnienia.</li><li>Zawiesina cząstek krzemienia w smarze stałym - zdolna krzepnąć w polu elektrycznym.</li><li>Materiały kompozytowe to \"wynalazek\" przyrody i są szeroko w niej wykorzystywane. Tak np. drewno - jest kompozytem celulozy i ligniny. Włókna celulozy posiadają wysoką wytrzymałość na zrywanie, ale łatwo się wyginają. Lignina wiąże je w jedną całość i nadaje materiałowi sztywność.</li><li>Materiały porowate, o których była mowa w zasadzie 31, są kompozycją powietrza i ciała stałego. Ani powietrze, ani ciało stałe nie posiadają tych właściwości, jakie posiada ciało porowate.</li></ul>";
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
                if(principlesSelect1 == 0 || principlesSelect2 == 0) {
        
                  let principlesContent = document.getElementById('content_area_principles_content');
                  principlesContent.innerHTML = "<div id=content_area_info>Select two parameters</div>";
        
                } else if(principlesSelect1 != 0 && principlesSelect2 != 0 ) {
                  
                      if(zasady[0] == '')
                      {
                        let principlesContent = document.getElementById('content_area_principles_content');
                        principlesContent.innerHTML = "<div id=content_area_info>No solutions found for the given parameters</div>";
                      }
                      else
                      {
                        console.log("Code is Being Exe");
                        let contentWindow = ['', '', '', ''];
                        for(let i = 0; i < 4; i++) {
                          if(zasady[i] != '') {
                              contentWindow[i] = "<div id=content_window><div id=content_window_principles_animation>" + principlesAnimation[zasady[i]] + "</div><div id=content_window_principles_text><div id=content_window_title class=small>" + principlesTitle[zasady[i]] + "</div> <a id=content_window_text>" + principlesText[zasady[i]] + "</a></div><div id=content_window_show_more class=\"accordion\"><div id=content_window_show_more_text class=text1><span id=content_window_show_more_text>View examples</span><span id=content_window_show_more_icon></span></div><div id=content_window_show_more_text class=text2><span id=content_window_show_more_text>Hide examples</span><span id=content_window_show_more_icon></span></div></div>  </div> </div>";
                          }
                        }
                        let principlesContent = document.getElementById('content_area_principles_content');
                        principlesContent.innerHTML = contentWindow[0] + contentWindow[1] + contentWindow[2] + contentWindow[3];

                      }
                  }
        
                  /*if(checkName == 'showAll') {
        
                      document.getElementById("principlesSelect1").value = 0;
                      document.getElementById("principlesSelect2").value = 0;
        
                      let contentWindow = [''];
                      let contentAllWindows = '';
                      for(let i = 1; i < 41; i++) {
                            contentWindow[i] = "<div id=content_window><div id=content_window_principles_animation>" + principlesAnimation[i] + "</div><div id=content_window_principles_text><div id=content_window_title class=small>" + principlesTitle[i] + "</div> <a id=content_window_text>" + principlesText[i] + "</a></div><div id=content_window_show_more class=\"accordion\"><div id=content_window_show_more_text class=text1><span id=content_window_show_more_text>View examples</span><span id=content_window_show_more_icon></span></div><div id=content_window_show_more_text class=text2><span id=content_window_show_more_text>Hide examples</span><span id=content_window_show_more_icon></span></div></div> <div class='panel'> <div id=content_window_example>" + principlesExample[i] + "</div> </div> </div>";
                            contentAllWindows += contentWindow[i];
                      }
                      let principlesContent = document.getElementById('content_area_principles_content');
                      principlesContent.innerHTML = contentAllWindows;
                      accordion();
                    }*/
                    
        }   
console.log("code executed 2");

    // Funky squirly v
 
});


    



    




