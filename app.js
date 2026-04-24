const boxes = document.querySelectorAll(".box");

    window.addEventListener("scroll", () => {
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight / 1.3;

        if (boxTop < triggerPoint) {
        box.classList.add("show");
        } else {
        box.classList.remove("show");
        }
    });
    });
