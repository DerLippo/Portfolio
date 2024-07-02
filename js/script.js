'use strict';
/*
1) find all hashtags
2) save all hashtags
3) display all hashtags
4) onclick hashtag, light them up in cv
*/

const navigationItems = document.querySelectorAll('.navigation__item');
const articles = document.querySelectorAll('.article');

// Toggle Article
const toggleArticle = function (e) {
  e.preventDefault();

  let dataType = this.getAttribute('data-type');

  // Toggle Active Navigation Item
  navigationItems.forEach(el => {
    el.classList.remove('navigation__item--active');
    if (el.getAttribute('data-type') === dataType) {
      el.classList.add('navigation__item--active');
    }
  });

  // Toggle Articles
  articles.forEach(el => {
    el.classList.remove('article--hidden');
    if (dataType === 'all') {
      el.classList.remove('article--hidden');
    } else if (el.getAttribute('data-type') !== dataType) {
      el.classList.add('article--hidden');
    }
  });
};

// Add eventListener to navigation items
navigationItems.forEach(el => el.addEventListener('click', toggleArticle));
