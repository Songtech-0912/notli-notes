# default recipe to display help information
default:
    @just --list

# runs `cargo run` to generate html from markdown sources
htmlgen:
    @echo Running notli utility to generate docs
    @just notli/ run

# compiles SCSS sources in JIT mode for development
dev:
    @echo Compiling css files for development...
    sass --watch ./scss/index.scss ./css/style.generated.css

# compiles SCSS sources to build release CSS files
build:
    @echo Compiling css files for release build...
    sass ./scss/index.scss ./css/style.generated.css

# creates a live development server for running Notli
serve:
    npx live-server

# formats code (TODO add prettier support)
format:
    @just notli/ format
