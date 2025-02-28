

document.getElementById("burger-menu").addEventListener("click", function() {
    document.querySelector(".nav-menu").classList.toggle("active");
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) { 
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

