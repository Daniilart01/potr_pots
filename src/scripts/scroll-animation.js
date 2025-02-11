'use strict';

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('visible');
    }
  });
}

const observer = new IntersectionObserver(onEntry);
const elements = document.querySelectorAll('.animated');

for (const elm of elements) {
  observer.observe(elm);
}
