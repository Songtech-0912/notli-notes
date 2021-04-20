// Setup Marked to support math equations with KaTeX
// Generate HTML from markdown
inputMD = document.getElementById("markdown").innerText;
generatedHTML = marked(inputMD);
document.getElementById("content").innerHTML = generatedHTML;

// Render math equations using KaTeX
document.addEventListener("DOMContentLoaded", function() {
  renderMathInElement(document.body, {
    // customised options
    // • auto-render specific keys, e.g.:
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false},
      {left: '\\(', right: '\\)', display: false},
      {left: '\\[', right: '\\]', display: true}
    ],
    // • rendering keys, e.g.:
    throwOnError: false,
    newLineInDisplayMode: true,
  });
});
