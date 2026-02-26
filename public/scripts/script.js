// Select dom elements 
const popover = document.querySelector('[popover]');
const menuText = document.querySelector('.menu');
const closeText = document.querySelector('.close');
const navLinks = ".hamburgermenu nav a";
const iconHam = document.querySelector('.icon-hamburger');
const iconClose = document.querySelector('.icon-close');

// GSAP plugin splittext
const menuSplit = new SplitText(menuText, { type: "chars" });
const closeSplit = new SplitText(closeText, { type: "chars" });

popover.addEventListener('toggle', (event) => {
    // Kill the animation that was playing so it wont appear wierdly when opening the menu fast
    gsap.killTweensOf([menuSplit.chars, closeSplit.chars, iconHam, iconClose, menuText, closeText]);
    
    const timeLine = gsap.timeline({ 
        defaults: { 
            duration: 0.4, 
            ease: "power4.out" 
        } 
    });

    if (event.newState === 'open') {
        // force the visability
        gsap.set([menuText, closeText], { 
            visibility: "visible", 
            opacity: 1 
        });
        
        gsap.set(closeSplit.chars, { 
            opacity: 0, 
            y: 30 
        });

        timeLine.to(iconHam, { 
            rotation: 90, 
            scale: 0.5, 
            opacity: 0 
        })
        .to(iconClose, { 
            rotation: 0, 
            scale: 1, 
            opacity: 1 
        }, "<")
        .to(menuSplit.chars, { 
            y: -30, 
            opacity: 0, 
            stagger: 0.02 
        }, "<")
        .to(closeSplit.chars, { 
            y: 0, 
            opacity: 1, 
            stagger: 0.02 
        }, "<0.1")
        .set(menuText, { 
            visibility: "hidden" 
        });

        gsap.fromTo(navLinks, 
            { 
                opacity: 0, 
                y: -20 
            }, 
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.6, 
                stagger: 0.05, 
                delay: 0.1, 
                overwrite: true 
            }
        );

    } else {
        // Force the visability
        gsap.set([menuText, closeText], { 
            visibility: "visible", 
            opacity: 1 
        });

        gsap.set(menuSplit.chars, { 
            opacity: 0, 
            y: -30 
        });

        timeLine.to(iconClose, { 
            rotation: -90, 
            scale: 0.5, 
            opacity: 0 
        })
        .to(iconHam, { 
            rotation: 0, 
            scale: 1, 
            opacity: 1 
        }, "<")
        .to(closeSplit.chars, { 
            y: 30, 
            opacity: 0, 
            stagger: 0.02 
        }, "<")
        .to(menuSplit.chars, { 
            y: 0, 
            opacity: 1, 
            stagger: 0.02 
        }, "<0.1")
        .set(closeText, { 
            visibility: "hidden" 
        });
            
        gsap.set(navLinks, { 
            opacity: 0, 
            y: -20 
        });
    }
});