document.getElementById("footer-year").textContent = new Date().getFullYear();

// Floating Action Button functionality
const fabMain = document.getElementById("fabMain");
const fabMenu = document.getElementById("fabMenu");
const fabPhone = document.getElementById("fabPhone");
const fabWhatsApp = document.getElementById("fabWhatsApp");
const fabTelegram = document.getElementById("fabTelegram");

// Phone number (update with actual number)
const phoneNumber = "+79999999999"; // Format: +7 (999) 999-99-99
const whatsappNumber = "79999999999"; // Format: 79999999999 (without +)
const telegramUsername = "your_telegram_username"; // Update with your Telegram username

// Toggle menu
function toggleFabMenu() {
	fabMenu.classList.toggle("active");
}

// Close menu
function closeFabMenu() {
	fabMenu.classList.remove("active");
}

// Event listeners
fabMain.addEventListener("click", toggleFabMenu);

// Phone call
fabPhone.addEventListener("click", () => {
	window.location.href = `tel:${phoneNumber}`;
	closeFabMenu();
});

// WhatsApp
fabWhatsApp.addEventListener("click", () => {
	const message = encodeURIComponent(
		"Здравствуйте! Я хочу узнать больше о доме на Николиной горе.",
	);
	window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
	closeFabMenu();
});

// Telegram
fabTelegram.addEventListener("click", () => {
	window.open(`https://t.me/${telegramUsername}`, "_blank");
	closeFabMenu();
});

// Close menu when clicking outside
const fabContainer = document.querySelector(".fab-container");
document.addEventListener("click", (e) => {
	if (
		fabMenu.classList.contains("active") &&
		!fabContainer.contains(e.target)
	) {
		closeFabMenu();
	}
});
