'use strict';

const faqHeadline = document.querySelectorAll('.faq__headline');

faqHeadline.forEach(function(faq) {
    faq.addEventListener('click', function() {
        faq.classList.toggle('engage');
    })
})