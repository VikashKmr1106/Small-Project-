// "use strict";

// document.addEventListener("DOMContentLoaded", function() {
//     // Scroll back to top

//     var progressPath = document.querySelector('.progress-wrap path');
//     var pathLength = progressPath.getTotalLength();
//     progressPath.style.transition = "none";
//     progressPath.style.WebkitTransition = "none";
//     progressPath.style.strokeDasharray = pathLength + " " + pathLength;
//     progressPath.style.strokeDashoffset = pathLength;
//     progressPath.getBoundingClientRect();
//     progressPath.style.transition = "stroke-dashoffset 10ms linear";
//     progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

//     var updateProgress = function() {
//         var scroll = window.pageYOffset;
//         var height = document.body.scrollHeight - window.innerHeight;
//         var progress = pathLength - (scroll * pathLength / height);
//         progressPath.style.strokeDashoffset = progress;
//     };

//     updateProgress();

//     window.addEventListener("scroll", updateProgress);

//     var offset = 50;
//     var duration = 550;

//     window.addEventListener("scroll", function() {
//         if (window.pageYOffset > offset) {
//             document.querySelector('.progress-wrap').classList.add('active-progress');
//         } else {
//             document.querySelector('.progress-wrap').classList.remove('active-progress');
//         }
//     });

//     document.querySelector('.progress-wrap').addEventListener('click', function(event) {
//         event.preventDefault();
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//         return false;
//     });
// });

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  // let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });

  });
  scrollProgress.style.background = `conic-gradient(#232323 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
// window.onload = calcScrollValue;