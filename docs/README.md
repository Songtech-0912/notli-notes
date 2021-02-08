# Exam Reference Notes Website

This is a fully static website that renders the source markdown files wonderfully (thanks to Tailwind and Marked and Mathjax).

View it live: <https://github.com/songtech-0912.github.io/exam-reference-sheets>

## Run it from source

First, there is *no need* to actually build from source. The website is fully static and doesn't require a webserver. You can just open the `index.html` file in your browser and it should work regardless. Unless you're making changes to the code, you don't have to run it from source.

However, compiling and building the website isn't hard, if that's what you want to do. Make sure you've got these installed:

* Python >= 3.0
* Node >= 12.13.0
* NPX (If you have NPM installed you will have NPX)
* GNU make or equivalent

Once you've checked that those are installed, you can run it like this:

```
git clone https://github.com/songtech-0912/exam-reference-sheets.git
cd exam-reference-sheets/docs
make build
make dist
```

*Windows users: Unfortunately, you might have to run this in WSL or Cygwin because Make and Bash are not installed by default on Windows*


