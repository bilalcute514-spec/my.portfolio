
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");

    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });

    
    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
            navbar.classList.remove("show"); 
        });
    });

    
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent 😊");
        form.reset();
    });



    const hireBtn = document.getElementById("hireBtn");

    hireBtn.addEventListener("click", (e) => {
        e.preventDefault(); // link scroll stop
        alert("Thanks for hiring me! 😊 I will contact you soon.");
        
        
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    });