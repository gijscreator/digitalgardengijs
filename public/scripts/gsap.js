// airplane animation on button flying away when hovering on a button or a link (<a>)

const airplaneLinks = document.querySelectorAll(".primary.button, .secondary.button");

airplaneLinks.forEach(link => {

    const icon = link.querySelector(".airplanesvg");

    const timeline = gsap.timeline({paused: true});    

    // rotation of the nice airplane svg
    timeline.to(icon, {
        duration: 0.4,
        rotation: 180,
        fill: '#B9941D',
        ease: "power2.inOut",
        transformOrigin: "50% 50%"
    })

    // departure of the nice airplane svg
    .to(icon, {
        duration: 0.6,
        x: -400,   
        opacity: 0,
        ease: "power2.in"
    });

    link.addEventListener("mouseenter", () => timeline.play());
    link.addEventListener("mouseleave", () => timeline.reverse());
});

// airplane animation on button flying away when hovering on a button or a link (<a>)

gsap.to(".testje li p", { 
    opacity: 1, 
    y: 0,       
    duration: 1.5,
    ease: "power4.out",
    stagger: {
        each: 0.3,
        from: "end",
    }
});