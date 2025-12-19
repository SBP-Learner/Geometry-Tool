
document.querySelectorAll(".toggle-password").forEach(toggle => {
    toggle.addEventListener("click", function () {
        const passwordField = this.closest(".password-field");
        const input = passwordField.querySelector("input");
        const eyeOpen = passwordField.querySelector(".eye-open");
        const eyeClosed = passwordField.querySelector(".eye-closed");

        if (input.type === "password") {
            input.type = "text";
            eyeOpen.style.display = "block";
            eyeClosed.style.display = "none";
        } else {
            input.type = "password";
            eyeOpen.style.display = "none";
            eyeClosed.style.display = "block";
        }
    });
});

