function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'light-theme'){
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
 }

(function() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
    document.getElementById("toggle").addEventListener('click', (ev) => {
        toggleTheme();
        console.log('clicked!');
    });
})();