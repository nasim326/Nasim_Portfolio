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
        

const starCount = 100; // Number of stars
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.top = Math.random() * 100 + 'vh';
                star.style.left = Math.random() * 100 + 'vw';
                star.style.animationDuration = (Math.random() * 5 + 5) + 's';
                document.querySelector('.stars').appendChild(star);
            }
