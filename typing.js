// Typing effect for hero header
const text = "Welcome to My Tech Portfolio";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = typeWriter;