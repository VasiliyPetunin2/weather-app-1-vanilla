const container = document.querySelector('.container');
const switcherBtn = document.querySelector('.btn-switchTheme');
let switcherBtnIMG = Node;

for (node of switcherBtn.childNodes) {
    if (node.id === 'btn-switchThemeIMG') {
        switcherBtnIMG = node;
        break;
    }
}

switcherBtn.addEventListener('click', e => {
    e.stopPropagation;

    container.classList.toggle('dark');

    if (container.classList.contains('dark')) {
        switcherBtnIMG.setAttribute('src', 'images/darkTheme/SwitchThemeDark.svg');
    } else {
        switcherBtnIMG.setAttribute('src', 'images/SwitchThemeLight.svg');
    }
});