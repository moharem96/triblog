document.querySelector('#small-screens-navbar > div').addEventListener('click', function() {
  let ul = document.querySelector('#small-screens-navbar ul');
  ul.classList.toggle('show');
});

function setupSlider(section) {
  const slider = section.querySelector('.slider');
  const prevBtn = section.querySelector('.prev-btn');
  const nextBtn = section.querySelector('.next-btn');

  prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= slider.clientWidth;
  });

  nextBtn.addEventListener('click', () => {
    slider.scrollLeft += slider.clientWidth;
  });

  const slides = slider.querySelectorAll('.slide');
  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      if (section.id === 'articles') {
        const articleId = slide.getAttribute('data-article-id');
        if (articleId) {
          window.location.href = `article.html?id=${articleId}`;
        }
      } else {
        const url = slide.getAttribute('data-url');
        if (url) {
          if (!url.startsWith('http://') && !url.startsWith('https://')) { //abs. url
            url = 'http://' + url;
          }
          window.open(url, '_blank');
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('#header img');
  logo.addEventListener('click', () => {
    window.location.href = 'index.html';
  });

  const sliderSections = document.querySelectorAll('.im-sections, #articles');
  sliderSections.forEach(section => {
    setupSlider(section);
  });
});
