let sidebar = document.createElement("nav");
sidebar.classList.add("sidebar");

let selector = ":is(h2, h3, h4, h5, h6)";
let headings = document.querySelectorAll(selector);
let headings_lookup = [];

headings.forEach((heading) => (
	headings_lookup[heading.textContent] = heading
))

link_names = Object.keys(headings_lookup);
link_names.forEach((name) => {
	let link = document.createElement("a");
	link.textContent = name;
	let node_type = headings_lookup[name].nodeName;
	switch (node_type) {
		// Do nothing for H2
		case "H3":
			link.classList.add("indent-link");
			break;
		case "H4":
			link.classList.add("indent-link-2");
			break;
		case "H5":
			link.classList.add("indent-link-3");
			break;
		case "H6":
			link.classList.add("indent-link-4");
			break;
		default:
	}
	document.querySelector("#sidebar").appendChild(link);
})

document.querySelector("#sidebar").addEventListener("click", (event) => {
	target = event.target.closest("a");
	let header = headings_lookup[target.textContent];
	header.scrollIntoView();
})
