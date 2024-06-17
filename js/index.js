document.addEventListener("DOMContentLoaded", () => {
    const introTag = document.getElementById("esx_intro");
    const loopTag = document.getElementById("esx_loop");
    const progress = document.getElementById("progress");
    const notificationsContainer = document.getElementById("notifications");
    const messages = [
        "Cargando Los Santos...",
        "Desaparcando vehículos...",
        "Sincronizando scripts...",
        "Conectando a la base de datos...",
        "Cargando modelos...",
        "Verificando recursos...",
        "¡Bienvenido a Gamerol!"
    ];

    let messageIndex = 0;
    const notificationInterval = setInterval(() => {
        if (messageIndex >= messages.length) {
            clearInterval(notificationInterval);
        } else {
            const notification = document.createElement("div");
            notification.classList.add("notification");

            // <p> para el texto con la clase "notification-text"
            const text = document.createElement("p");
            text.classList.add("text_thing", "notification-text");
            text.textContent = messages[messageIndex];

            // <p> a la notificación
            notification.appendChild(text);

            notificationsContainer.appendChild(notification);

            setTimeout(() => {
                notification.classList.add("show");
            }, 100);

            messageIndex++;

            setTimeout(() => {
                notification.classList.remove("show");
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 5000);
        }
    }, 2000);

    let width = 0;
    const progressInterval = setInterval(() => {
        if (width >= 100) {
            clearInterval(progressInterval);
            introTag.onended = () => {
                introTag.style.display = "none";
                loopTag.loop = true;
                loopTag.play();
            };
        } else {
            width++;
            progress.style.width = width + "%";
        }
    }, 50); 
});
