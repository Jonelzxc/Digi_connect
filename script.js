window.addEventListener('scroll', function() {
    let elements = document.querySelectorAll('h1, h2, p, .product-list');
    elements.forEach(function(element) {
      let position = element.getBoundingClientRect().top;
      let screenPosition = window.innerHeight / 1.3;
      if (position < screenPosition) {
        element.style.animation = 'fadeInUp 1s forwards';
      }
    });
  });
  