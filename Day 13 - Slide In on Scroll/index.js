function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const slider = document.querySelectorAll('.slide-in');

  function checkSlide(e) {
    slider.forEach(sliderImg => {
        const sliderInAt = (window.scrollY + window.innerHeight) - sliderImg.height / 2;
        const imgBottom = sliderImg.offsetTop + sliderImg.height;
        const ifHalpSchown = sliderInAt > sliderImg.offsetTop;
        const isNotScrolledPast = window.scrollY < imgBottom;
        if (ifHalpSchown && isNotScrolledPast) {
            sliderImg.classList.add('active');
        } else {
            sliderImg.classList.remove('active');
        }
    })
  }

  window.addEventListener('scroll', debounce(checkSlide));
