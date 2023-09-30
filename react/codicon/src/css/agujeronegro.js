function Nose() {
    const portal = document.getElementById('portal');

    for (let i = 0 ; i < 360; i++) {
        const chispa = document.createElement("div");
        chispa.className = "chispa";
        chispa.style.transform = 'rotate(' + i * 2 + 'deg)';
        let chispaTranslation = Math.random() * (120 - 100) + 100;
        chispa.style.transform += ' translateY(' + chispaTranslation + 'px)';
        portal.appendChild(chispa);
    }
}