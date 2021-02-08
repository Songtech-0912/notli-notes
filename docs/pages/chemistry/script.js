// document.addEventListener("DOMContentLoaded", function () {
//   renderMathInElement(document.body, [
//     { left: "$$", right: "$$", display: true },
//     { left: "$", right: "$", display: false },
//     { left: "\\(", right: "\\)", display: false },
//     { left: "\\[", right: "\\]", display: true },
//   ]);
// });
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  },
  svg: {
    fontCache: 'global'
  }
};

inputMD = document.getElementById("markdown").innerText;
generatedHTML = marked(inputMD);
document.getElementById("content").innerHTML = generatedHTML;
