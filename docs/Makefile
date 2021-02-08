build:
	@echo "\033[1;35m• Bundling CSS assets...\033[0m"
	@npx tailwindcss-cli@latest build ./css/tailwind.css -o ./css/tailwind.output.css
	@echo "\033[32m(✓) Compilation finished successfully\033[0m"

dist:
	@echo "\036[1;35m• Preparing CSS for subpages...\033[0m"
	@cd ./pages/chemistry
	@npm install
	@npm run dist
	@echo "\033[32m(✓) Pages built successfully\033[0m"
	@echo "\033[35mGo to http://localhost:5000 to see the result\033[0m"

