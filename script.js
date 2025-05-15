function changeIntroText() {
  const intro = document.getElementById('intro-text');
  intro.textContent = "This new text was added dynamically using JavaScript!";
}

function changeStyle() {
  const section = document.getElementById('dynamic-section');
  section.style.backgroundColor = "#e0f7fa";
  section.style.border = "2px dashed #00796b";
  section.style.padding = "1rem";
}

function addParagraph() {
  const div = document.getElementById('paragraphs');
  const p = document.createElement('p');
  p.textContent = "This is a new paragraph added via JavaScript!";
  div.appendChild(p);
}

function removeParagraph() {
  const div = document.getElementById('paragraphs');
  if (div.lastElementChild) {
    div.removeChild(div.lastElementChild);
  }
}
