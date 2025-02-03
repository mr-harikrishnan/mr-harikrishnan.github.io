let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header  a')
window.onscroll = () =>{
    sections.forEach(sec =>{
        let top =  window.scrollY;
        let offset =  sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >=offset &&top <offset + height) {
          navLinks.forEach(Links => {
            Links.classList.remove('active');
            document.querySelector('header ul li  a[href*=' + id + ']').classList.add  ('active');
          });
        }
    });
  };


  document.querySelector('.flip-btn').addEventListener('click', function() {
    document.querySelector('.flip-card').classList.add('active');
});

document.querySelector('.flip-back-btn').addEventListener('click', function() {
    document.querySelector('.flip-card').classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".skill-card").forEach((card) => {
      let skillLevel = card.getAttribute("data-skill");
      let progressBar = card.querySelector(".progress-bar-fill");

      card.addEventListener("mouseover", function () {
          progressBar.style.width = skillLevel + "%";
      });

      card.addEventListener("mouseleave", function () {
          progressBar.style.width = "0%"; // Reset when hover stops
      });
  });
});



