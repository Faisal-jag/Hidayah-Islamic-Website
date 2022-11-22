let prevScrollPos = window.pageYOffset;
  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    prevScrollPos < currentScrollPos
      ? document.querySelector("nav").classList.add("hide")
      : document.querySelector("nav").classList.remove("hide");
    prevScrollPos = currentScrollPos;
  };



  var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

function myFunction(x) {
  if (x.matches) { // If media query matches
   document.getElementById("dd1").className = "drop_down ";
   document.getElementById("ddc1").className = "drop_down_content";
   document.getElementById("ddb1").className = "drop_down_btn";
   document.getElementById("dd2").className = "drop_down ";
   document.getElementById("ddc2").className = "drop_down_content";
   document.getElementById("ddb2").className = "drop_down_btn";

   document.getElementById("iconlabel1").className = "icon_label";
   document.getElementById("iconlabel2").className = "icon_label";
   document.getElementById("iconlabel3").className = "icon_label";
   document.getElementById("iconlabel4").className = "icon_label";
   document.getElementById("iconlabel5").className = "icon_label";
  } else {
    document.getElementById("dd1").className = "drop_up";
    document.getElementById("ddc1").className = "drop_up_content";
    document.getElementById("ddb1").className = "drop_up_btn";
    document.getElementById("dd2").className = "drop_up";
    document.getElementById("ddc2").className = "drop_up_content";
    document.getElementById("ddb2").className = "drop_up_btn";

    document.getElementById("iconlabel1").className = "iconlabel";
    document.getElementById("iconlabel2").className = "iconlabel";
    document.getElementById("iconlabel3").className = "iconlabel";
    document.getElementById("iconlabel4").className = "iconlabel";
    document.getElementById("iconlabel5").className = "iconlabel";
  }
}






// sidebar js

function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

  // sidebar js end


//
//
//
//
//
//
//
//
//

 // script for scroll back to top button start
 let mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () {
   scrollFunction();
 };

 function scrollFunction() {
   if (
     document.body.scrollTop > 20 ||
     document.documentElement.scrollTop > 20
   ) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 }
 // script for scroll back to top button end