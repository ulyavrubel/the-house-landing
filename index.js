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

function callPhone() {
	window.location.href = `tel:${phoneNumber}`;
}

// Phone call
fabPhone.addEventListener("click", () => {
	callPhone();
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
