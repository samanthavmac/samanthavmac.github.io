const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");


const textArray = ["learning", "designing", "coding", "discovering"];
const typingDelay = 150;
const erasingDelay = 80;
const newTextDelay = 2500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
	if(charIndex < textArray[textArrayIndex].length) {
		if (!cursorSpan.classList.contains("cursortyping")) {
			cursorSpan.classList.add("cursortyping");
		}
		typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	} else {
		cursorSpan.classList.remove("cursortyping");
		setTimeout(erase, newTextDelay);

	}
}


function erase(){
	if(charIndex >= 0) {
		if (!cursorSpan.classList.contains("cursortyping")) {
			cursorSpan.classList.add("cursortyping");
		}
		typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
		charIndex--;
		setTimeout(erase, erasingDelay);
	}  else {
		cursorSpan.classList.remove("cursortyping");
		textArrayIndex++;
		if (textArrayIndex == textArray.length) {
			textArrayIndex = 0;
		}
		setTimeout(type, 100);
	}
}

document.addEventListener("DOMContentLoaded", function() {
	setTimeout(type, 2000);
});
