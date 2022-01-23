# default recipe to display help information
default:
    @just --list

# checks that all dependencies are satisfied
checkdeps:
    @echo Sorry, checkdeps is still WIP in the justfile

# installs all notli website dependencies
install:
    @npm install

# runs `cargo run` to generate html from markdown sources
htmlgen:
    @echo Running notli utility to generate docs
    @just notli/ run

# compiles TailwindCSS in JIT mode for development
dev:
    @echo Compiling css files for development...
    npx tailwindcss -i ./css/tailwind.css -o ./css/tailwind.output.css --watch

# compiles TailwindCSS to build release CSS files
build:
    @echo Compiling css files for release build...
    npx tailwindcss -i ./css/tailwind.css -o ./css/tailwind.output.css --minify

# creates a live development server for running Notli
serve:
    npx live-server

# formats code (TODO add prettier support)
format:
    @just notli/ format
