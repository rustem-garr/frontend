const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('animate1')
            }
    });
});

const divPartners = document.querySelectorAll('.history-card')
const footer = document.querySelectorAll('.footer')
const footerSocial = document.querySelectorAll('.footer-social')

divPartners.forEach((el) => observer.observe(el));
footer.forEach((el3) => observer.observe(el3));
footerSocial.forEach((el4) => observer.observe(el4));
