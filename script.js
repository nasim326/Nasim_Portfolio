/* script.js */

        const navLinks = document.querySelectorAll('.nav-item');
        window.addEventListener('scroll', () => {
            let fromTop = window.scrollY;
            navLinks.forEach(link => {
                let section = document.querySelector(link.getAttribute('href'));
                if (
                    section.offsetTop <= fromTop + 50 &&
                    section.offsetTop + section.offsetHeight > fromTop + 50
                ) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    link.classList.add('active');
                }
            });
        });
   
        const textArray = ["website designer", "developer", "freelancer", "creative artist"];
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const textElement = document.getElementById("changingText");
            let currentText = textArray[index];


if (isDeleting) {
                textElement.textContent = currentText.substring(0, charIndex--);
            } else {
                textElement.textContent = currentText.substring(0, charIndex++);
            }

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentText.length) {
                speed = 2000; // Pause before deleting
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % textArray.length; // Move to the next text
                speed = 500; // Pause before typing new text
            }

            setTimeout(typeEffect, speed);
        }

        typeEffect(); // Start typing effect
        

// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to add the 'show' class when in viewport
function animateOnScroll() {
  const elementsToAnimate = document.querySelectorAll('.animate-up, .animate-down');
  elementsToAnimate.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('show');
    }
  });
}

// Trigger the animation on scroll and on page load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
function openWebsite(url) {
  window.open(url, '_blank');
}

function expandCard(index) {
    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
	card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
	card.classList.remove('active');
        }
    });
    activeIndex = index;
}

function closeCard(event) {
    event.stopPropagation();  // Prevent triggering expandCard
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.classList.remove('active', 'hidden');
    });
    activeIndex = null;
}
