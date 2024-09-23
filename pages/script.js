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