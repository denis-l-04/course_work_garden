let main_tag = document.body.children[1].children[3];

let font_size_factor = 0;

function update_font_size () {
	font_size = 2.5 * Math.pow(1.2, font_size_factor);
	main_tag.style.fontSize = font_size + "vh";
}

let serif_on = false; //с засечками ли шрифт

font_increase_button.onclick = function () {
	if (font_size_factor >= 12)
		return;
	font_size_factor += 1;
	update_font_size();
}
font_decrease_button.onclick = function () {
	if (font_size_factor <= -10)
		return;
	font_size_factor -= 1;
	update_font_size();
}
serif_button.onclick = function () {
	serif_on = !serif_on;
	if (serif_on){
		main_tag.style.fontFamily = "'Times New Roman', serif";
		serif_button.children[0].src = "images/serif.svg";
	}
	else {
		main_tag.style.fontFamily = "";
		serif_button.children[0].src = "images/sans.svg";
	}
}

let is_theme_dark = false;

theme_button.onclick = function () {
	is_theme_dark = !is_theme_dark;

	let panel = document.getElementById("settings"); //панель настроек
	if (is_theme_dark) {
		main_tag.parentElement.style.backgroundColor = "black";
		main_tag.classList.add("dark-theme");
		panel.classList.add("dark-theme");
		for (let i = 0; i<panel.children.length; ++i)
			panel.children[i].classList.add("dark-theme");
	}
	else {
		main_tag.parentElement.style.backgroundColor = "";
		main_tag.classList.remove("dark-theme");
		panel.classList.remove("dark-theme");
		for (let i = 0; i<panel.children.length; ++i)
			panel.children[i].classList.remove("dark-theme");
	}
}