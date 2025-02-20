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
   
        const comments = ["Innovate your dreams!", "Stay motivated!", "Think big, act bigger!", "Success starts with a step!"];
        let index = 0;
        
        function changeComment() {
            document.querySelector('.dynamic-text').textContent = comments[index];
            index = (index + 1) % comments.length;
        }
        
        setInterval(changeComment, 2000);
        changeComment();

