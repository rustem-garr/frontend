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
const consultingDetails = document.querySelectorAll('.consulting-details')
const soonTraining = document.querySelectorAll('.soon-training')
const searchParams = document.querySelectorAll('.search-params')
const footer = document.querySelectorAll('.footer')
const footerSocial = document.querySelectorAll('.footer-social')

divPartners.forEach((el) => observer.observe(el));
consultingDetails.forEach((el1) => observer.observe(el1));
searchParams.forEach((el2) => observer.observe(el2));
soonTraining.forEach((el22) => observer.observe(el22));
footer.forEach((el3) => observer.observe(el3));
footerSocial.forEach((el4) => observer.observe(el4));
