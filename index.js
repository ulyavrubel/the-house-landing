document.getElementById("footer-year").textContent = new Date().getFullYear();

// Navigation scroll behavior
function handleNavScroll() {
	const nav = document.getElementById("nav");
	if (!nav) return;

	if (window.innerWidth >= 769) {
		if (window.scrollY > 0) {
			nav.classList.add("scrolled");
		} else {
			nav.classList.remove("scrolled");
		}
	} else {
		nav.classList.remove("scrolled");
	}
}

const nav = document.getElementById("nav");
if (nav) {
	// Initial check
	handleNavScroll();

	// Listen to scroll events
	window.addEventListener("scroll", handleNavScroll);

	// Handle window resize to re-check on mobile/desktop switch
	window.addEventListener("resize", handleNavScroll);
}

// Floating Action Button functionality
const fabMain = document.getElementById("fabMain");
const fabMenu = document.getElementById("fabMenu");
const fabPhone = document.getElementById("fabPhone");
const fabWhatsApp = document.getElementById("fabWhatsApp");
const fabTelegram = document.getElementById("fabTelegram");

// Phone number (update with actual number)
const phoneNumber = "+79850861878"; // Format: +7 (999) 999-99-99
const whatsappNumber = "79850861878"; // Format: 79999999999 (without +)
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

function callPhone() {
	window.location.href = `tel:${phoneNumber}`;
}

function openWhatsApp() {
	const message = encodeURIComponent(
		"Здравствуйте! Я хочу забронировать просмотр дома на Николиной горе.",
	);
	window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
}

// https://wa.me/79850861878?text="Здравствуйте! Я хочу забронировать просмотр дома на Николиной горе."

function openTelegram() {
	window.open(`https://t.me/${telegramUsername}`, "_blank");
}

// Phone call
fabPhone.addEventListener("click", () => {
	callPhone();
	closeFabMenu();
});

// WhatsApp
fabWhatsApp.addEventListener("click", () => {
	openWhatsApp();
	closeFabMenu();
});

// // Telegram
// fabTelegram.addEventListener("click", () => {
// 	openTelegram();
// 	closeFabMenu();
// });

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

// biome-ignore lint/correctness/noUnusedVariables: <used in html>
function downloadPDF() {
	window.open("./assets/documents/presentation.pdf", "_blank");
}
