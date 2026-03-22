// Animated title
const staticPart = "🌙 Midnight-Ash | ";
const text = "Discord Theme";

let index = text.length;
let direction = -1;

setInterval(() => {
	document.title = staticPart + text.substring(0, index);

	if (index === 0) {
		direction = 1;
	} else if (index === text.length) {
		direction = -1;
	}

	index += direction;
}, 200);

// Copy URL function
function copyUrl() {
	const url = document.getElementById("url-text").textContent;
	const btn = document.getElementById("copyBtn");

	// Check if clipboard API is available
	if (navigator.clipboard && navigator.clipboard.writeText) {
		navigator.clipboard
			.writeText(url)
			.then(() => {
				btn.textContent = "Copied!";
				btn.classList.add("copied");
				setTimeout(() => {
					btn.textContent = "Copy";
					btn.classList.remove("copied");
				}, 2000);
			})
			.catch((err) => {
				console.error("Clipboard API failed:", err);
				fallbackCopy(url, btn);
			});
	} else {
		// Use fallback method
		fallbackCopy(url, btn);
	}
}

// Fallback copy method for browsers without clipboard API
function fallbackCopy(text, btn) {
	const textArea = document.createElement("textarea");
	textArea.value = text;
	textArea.style.position = "fixed";
	textArea.style.left = "-999999px";
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		const successful = document.execCommand("copy");
		if (successful) {
			btn.textContent = "Copied!";
			btn.classList.add("copied");
			setTimeout(() => {
				btn.textContent = "Copy";
				btn.classList.remove("copied");
			}, 2000);
		}
	} catch (err) {
		console.error("Fallback copy failed:", err);
		alert("Failed to copy. Please copy manually: " + text);
	}

	document.body.removeChild(textArea);
}

// Add event listener to copy button
document.addEventListener("DOMContentLoaded", () => {
	const copyBtn = document.getElementById("copyBtn");
	if (copyBtn) {
		copyBtn.addEventListener("click", copyUrl);
		console.log("Copy button event listener attached");
	} else {
		console.error("Copy button not found!");
	}
});
