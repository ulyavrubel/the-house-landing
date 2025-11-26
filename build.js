const fs = require("fs");
const path = require("path");

const DIST_DIR = "dist";

// Files and folders to copy
const items = ["index.html", "style.css", "index.js", "assets"];

// Clean and create dist directory
if (fs.existsSync(DIST_DIR)) {
	fs.rmSync(DIST_DIR, { recursive: true });
}
fs.mkdirSync(DIST_DIR);

// Copy a file or directory recursively
function copyRecursive(src, dest) {
	const stats = fs.statSync(src);

	if (stats.isDirectory()) {
		fs.mkdirSync(dest, { recursive: true });
		for (const item of fs.readdirSync(src)) {
			copyRecursive(path.join(src, item), path.join(dest, item));
		}
	} else {
		fs.copyFileSync(src, dest);
	}
}

// Copy each item
for (const item of items) {
	const src = path.join(__dirname, item);
	const dest = path.join(__dirname, DIST_DIR, item);

	if (fs.existsSync(src)) {
		copyRecursive(src, dest);
		console.log(`✓ Copied: ${item}`);
	} else {
		console.warn(`⚠ Not found: ${item}`);
	}
}

console.log(`\n✅ Build complete! Files copied to ${DIST_DIR}/`);
