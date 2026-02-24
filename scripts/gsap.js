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

    gsap.to(icon, {
        duration: 1,
        rotation: 0,
        x: 0,
        opacity: 1,
        fill: '#ffffff', 
        overwrite: "auto" 
    });

    link.addEventListener("mouseenter", () => timeline.play());
    link.addEventListener("mouseleave", () => timeline.reverse());
});