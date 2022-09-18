# Notli Notes

 Preparing for exams? You'll find help here.

Everyone knows the craziness of exam time - suddenly, you're dying to find revision books you've never bothered to read, and you can't go without a day without your notebook. But what if you lose your notebook? What if your notes go missing? You forgot to take notes on an important topic? It's easy to panic if that happens - it's happened to me many times before.

That's why I've decided to digitize all of my notebooks and school notes. Just like the open-source community and the open design movement, I've decided to make all of my notes free to use and modify. Hopefully, once others benefit from these notes, they can also contribute to the notes on their own.

*Note: Exam Reference Sheets has a new name: Notli! It will take some time to rename everything! So please be patient with me during this process!*

Read the notes by going to <https://songtech-0912.github.io/notli-notes/>. They can be downloaded as Markdown files (with the `.md` extension) and viewed offline as well. If you want to do that, download the [zip archive](https://github.com/Songtech-0912/Exam-Reference-Sheets/archive/refs/heads/main.zip) and the markdown files will be in the `src` folder.

## Overview

Notli is an **open collection** of notes on all sorts of topics, written in the plaintext [Markdown format](https://www.markdownguide.org/). The open nature of Markdown allows the notes to be accessible to anyone without specialized software. However, Markdown isn't the most fun format to view out-of-the-box, so I wrote a simple [Rust utility](notli/) to generate beautiful HTML pages from the Markdown source. The pages can be viewed online at Notli's official website [here](https://songtech-0912.github.io/Exam-Reference-Sheets). In case anyone was wondering, all of this is free and open-source!

Currently, notes are available for the following subjects:

- Honors Chemistry
- AP US History
- Honors Algebra
- AP Lang & Composition
- The Great Gatsby
- AP US Gov
- Honors Physics

⚠ Note that many of these notes are still incomplete due to lapses in development, but I still aspire to a high level of quality for them.

## Development

The Notli source code is divided like this:

* In the root of the repository, you'll find the base website's html, css, and js assets
* In the [notli](notli/) folder, you'll find the Rust-based `notli` utility, which generates HTML from the markdown notes
* In the [pages](pages/) folder, you will find the auto-generated HTML pages that `notli` creates
* In the [images](images/) folder, you'll find the supporting images used by the notes

### Prerequisites

I will assume you already have these installed (or know how to install these):

* [Node.js and NPM](https://nodejs.dev/download) (it is highly recommended you install [pnpm](https://pnpm.io/) as well)
* [The Rust build tools](https://www.rust-lang.org/learn/get-started)
* [Git](https://git-scm.com/downloads)

### Building from source

If you want to make changes to Notli's source, follow these easy steps to compile, build, and modify Notli locally.

#### Clone the repo

To clone the repo, run:

```
git clone https://github.com/songtech-0912/exam-reference-sheets.git
cd exam-reference-sheets
```

#### Get Just

Just is the command-line runner Notli uses: think of it like a Makefile but compatible with all operating systems. To install it, run:

```
cargo install just
```

Check that it works with:

```
just --version
```

#### Check all dependencies are satisfied

To check for dependencies, run:

```
just checkdeps
```

If that passes without errors, you can then install all libraries used by Notli:

```
just install
```

#### Generate the docs

Notli's docs are generated with the custom `notli` utility. To generate, run:

```
just htmlgen
```

#### Compile the site and create a development server

To compile the site in watch mode (every change you make updates the site), run:

```
just dev
```

However, if you want to compile in release mode, run:

```
just build
```

Then, with another terminal open, run:

```
just serve
```

## Uses

This project heavily leverages a lot of other open-source projects:

* The Rust programming language
* TailwindCSS
* KaTeX
* Pulldown and CommonMark

## Download

You can download these notes as PDFs if you wish.

> This will be implemented soon, but you can't right now

## Roadmap/Work in progress

- [x] Display formulas properly with Mathjax
  - Currently all LaTeX formulas are displayed verbatim as $$s which look horrible, which is why this is neccesary
- [x] Host the notes online with a website
- [x] Integrate TailwindCSS Typography to make notes look nice
- [x] Switch to KaTeX for correct chemical/mathematical equation rendering; currently work-in-progress
- [x] Big refactor
- [ ] Auto-format Markdown and HTML code with Prettier
- [ ] Full documentation on how to edit, modify or use GitHub with notes
- [ ] Publish PDF versions in GitHub Releases
- [ ] Include a search bar to easily find key terms in each of the notes
- [ ] Improve UI of website and do redesign

## Contribution

Contribution is really simple. You just need two things: a bit of time, and a text editor.

Firstly, **before you do anything**, read the [code of conduct](CODE_OF_CONDUCT.md). It should take no more than 3 minutes.

Next, start editing and writing! These notes are written in Markdown, which is very easy and fast to write, and can use a lot of themes. I personally use the [stackedit](https://stackedit.io) editor to edit these notes. Use whatever you see fit.

Remember that any contribution falls under the project's [license](LICENSE.md), to ensure that the project can remain free and open-source for all.
