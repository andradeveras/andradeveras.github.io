document.addEventListener("DOMContentLoaded", function () {
    new bootstrap.Carousel(document.querySelector("#tech-carousel"), {
        interval: 4000,
        wrap: true
    });
});


// Verifica se o modo escuro foi previamente ativado
const themeButton = document.getElementById("toggle-theme");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';  // Ícone de sol para indicar que está no modo escuro
} else {
    themeButton.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';  // Ícone de lua para indicar que está no modo claro
}

// Alterna entre o modo claro e o modo escuro
themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Salva a preferência do usuário
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeButton.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
    } else {
        localStorage.setItem("theme", "light");
        themeButton.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
    }
});







