const form = document.getElementById("emailForm");
const email = document.getElementById("email");
const btn = document.getElementById("submitBtn");
const text = document.getElementById("btnText");
const spinner = document.getElementById("spinner");
const erreur = document.getElementById("messageErreur");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    erreur.textContent = "";

    // Validation JS
    const valeur = email.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (valeur === "") {
        erreur.textContent = "Veuillez entrer votre courriel.";
        email.focus();
        return;
    }

    if (!regex.test(valeur)) {
        erreur.textContent = "Veuillez entrer un courriel valide.";
        email.focus();
        return;
    }

    // Animation
    btn.disabled = true;
    btn.classList.add("scale-95");

    spinner.classList.remove("hidden");
    text.textContent = "Envoi...";

    setTimeout(() => {
        btn.classList.remove("scale-95");
    }, 150);

    setTimeout(() => {
        spinner.classList.add("hidden");
        text.textContent = "Envoyé ✓";
        btn.classList.replace("bg-blue-600", "bg-green-600");
    }, 2000);
});