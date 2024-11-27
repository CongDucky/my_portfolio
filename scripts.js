// Kích hoạt GSAP và ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation cuộn cho mỗi section
gsap.utils.toArray('.section').forEach(section => {
    gsap.fromTo(section, 
        { opacity: 0, y: 50 }, 
        { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Kích hoạt khi section xuất hiện
                end: "top 20%",
                toggleActions: "play none none none"
            }
        }
    );
});

// Smooth scrolling (tuỳ chọn)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
