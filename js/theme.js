const class_theme = document.getElementById("theme_toggle");

function fn_setTheme(inital) {
	let theme = window.sessionStorage.getItem('theme')
	let darkMode = false;

	//text mode required
	if (theme == null || theme == 'light')
		darkMode = (inital == true)? false : true ;
	else
		darkMode = (inital == true)? true : false;

	// set mode
	if (darkMode) {
		class_theme.href = "./css/theme_dark.css";
		window.sessionStorage.setItem('theme', 'dark');
	}
	else {
		class_theme.href = "./css/theme_light.css";
		window.sessionStorage.setItem('theme', 'light');
	}
}

fn_setTheme(true);