window.addEventListener("load", (event) => {
    console.log("Page is fully loaded.")
    renderMathInElement(
        document.body,
        {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false},
            ],
            throwOnError: true
        }
    );
    console.log("KaTeX rendering done!")
});