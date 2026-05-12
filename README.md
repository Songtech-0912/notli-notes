# Notli Notes

> :warning: Notli will no longer receive any updates. The site will stay online, but no further developmental work will continue. All future notes articles will be published on my personal website, <https://jackysci.com/notes/>

 Preparing for exams? You'll find help here.

Everyone knows the craziness of exam time - suddenly, you're dying to find revision books you've never bothered to read, and you can't go without a day without your notebook. But what if you lose your notebook? What if your notes go missing? You forgot to take notes on an important topic? It's easy to panic if that happens - it's happened to me many times before.

That's why I've decided to digitize all of my high school notes. Just like the open-source community and the open design movement, I've decided to make all of my notes free to use and modify. Hopefully, once others benefit from these notes, they can also contribute to the notes on their own.

Read the notes by going to <https://songtech-0912.github.io/notli-notes/>. They can be downloaded as Markdown files (with the `.md` extension) and viewed offline as well. If you want to do that, download the [zip archive](https://github.com/Songtech-0912/notli-notes/archive/refs/heads/main.zip) and the markdown files will be in the `src` folder.

## Overview

Notli is an **open collection** of notes on all sorts of topics, written in the plaintext [Markdown format](https://www.markdownguide.org/). The open nature of Markdown allows the notes to be accessible to anyone without specialized software. However, Markdown isn't the most fun format to view out-of-the-box, so I wrote a simple [Rust utility](notli/) to generate beautiful HTML pages from the Markdown source. The pages can be viewed online at Notli's official website [here](https://songtech-0912.github.io/Exam-Reference-Sheets). In case anyone was wondering, all of this is free and open-source!

Notes are available for the following subjects:

- Honors Chemistry
- AP US History
- Honors Algebra
- AP Lang & Composition
- The Great Gatsby
- AP US Gov
- Honors Physics
- AP Physics C
- And more!

⚠ Note that many of these notes are still incomplete due to lapses in development, but I still aspire to a high level of quality for them.

## Development

Notli is a statically-generated site, meaning that it requires no server to run. It uses a **custom static site generator** written in Rust (`notli`) for generating the pages from its markdown source. The Notli source code is divided like this:

* In the root of the repository, you'll find the base website's html, css, and js assets
* In the [notli](notli/) folder, you'll find the Rust-based `notli` utility, which generates HTML from the markdown notes
* In the [pages](pages/) folder, you will find the auto-generated HTML pages that `notli` creates
* In the [images](images/) folder, you'll find the supporting images used by the notes

> **Note:** while in theory cross-platform, Notli's build instructions are designed primarily for building on Unix-style operating systems (specifically macOS/Linux). They may need to be altered for developing on Windows or other platforms.

### Prerequisites

I will assume you already have these installed (or know how to install these):

* [Node.js and NPM](https://nodejs.dev/download) (it is highly recommended you install [pnpm](https://pnpm.io/) as well)
* [The Rust build tools](https://www.rust-lang.org/learn/get-started)
* [Git](https://git-scm.com/downloads)

#### Dependency versions

- Just v1.41.0 (optional)
- Dart Sass v1.99.0
- Rust 2025 edition (rustc v1.9.2)
- Recent version of NodeJS/NPM

### Building from source

If you want to make changes to Notli's source, follow these easy steps to compile, build, and modify Notli locally.

#### Clone the repo

To clone the repo, run:

```
git clone https://github.com/songtech-0912/notli-notes.git
cd notli-notes
```

#### Get Just (optional)

[Just](https://just.systems/) is the command-line runner Notli uses: think of it like a Makefile but compatible with all operating systems. While it is technically optional it makes development a lot easier. To install it, run:

```
cargo install just
```

Check that it works with:

```
just --version
```

#### Generate the docs

Notli's docs are generated with the custom `notli` utility, written in Rust. To use it, run:

```
just htmlgen
```

Alternatively you can run the following command from the **root of the repo**:

```
cd notli/
cargo run
cd ..
```

Note that `notli` does **not** have live-reload ability, meaning that you'll have to run it whenever you make a change to the markdown source files.

#### Compile the site and create a development server

To compile the site in watch mode (so that every change you make updates the site), run:

```
just dev
# alternative
sass --watch ./scss/index.scss ./css/style.generated.css
```

However, if you want to compile in release mode, run:

```
just build
# alternative
sass ./scss/index.scss ./css/style.generated.css
```

Then, with another terminal open, run:

```
just serve
```

Note that instead of `just serve` you can open the `index.html` file in the root of the repo in your web browser instead; while less convenient (since you'll have to reload the site by hand) it should be able to show the site without any issue.

## Credits

This project heavily leverages a lot of other open-source projects:

* The Rust programming language
* KaTeX
* Pulldown and CommonMark

## Credits

Some images used are my custom images, some are linked from external resources and **not** my work. I have not fully completed crediting all the external images I use. Help with this would be appreciated.

## Contribution

Contribution is really simple. You just need two things: a bit of time, and a text editor.

Firstly, **before you do anything**, read the [code of conduct](CODE_OF_CONDUCT.md). It should take no more than 3 minutes.

Next, start editing and writing! These notes are written in Markdown, which is very easy and fast to write, and can use a lot of themes. I personally use the [stackedit](https://stackedit.io) editor to edit these notes. Use whatever you see fit.

Remember that any contribution falls under the project's [license](LICENSE.md), to ensure that the project can remain free and open-source for all.
