const sidebar = document.getElementById('sidebar');
const header = document.getElementById('header');
const sidelogo = document.getElementById('side-logo');
const sidebtn = document.getElementById('side-btn');
const sidetop = document.getElementById('side-top');
const sidelabel = document.getElementById('side-label');
const sidelinks = document.querySelectorAll('.side-link');
const listTexts = document.querySelectorAll('.list-text');
const itemIcon = document.getElementsByClassName('side-icons')[0];
const listItems = document.querySelectorAll('.list-item');
const sideIcons = document.querySelectorAll('.item-icon');
const toggle = document.getElementById('short');
const toggle1 = document.getElementById('med');
const itemside = document.querySelectorAll('.list-item');
const laptopView = window.matchMedia("(max-width: 1024px)");
const desktopViewL = window.matchMedia("(max-width: 1440px)");

function queryCheck(laptopView) {
    if (laptopView.matches) {
        sidebtn.addEventListener('mouseover', function () {
            toggle.style.width = "30px";
            toggle1.style.width = "30px";
        })
        sidebtn.addEventListener('mouseout', function () {
            toggle.style.width = "10px";
            toggle1.style.width = "20px";
        })
    } else {
        sidebtn.addEventListener('mouseover', function () {
            toggle.style.width = "40px";
            toggle1.style.width = "40px";
        })
        sidebtn.addEventListener('mouseout', function () {
            toggle.style.width = "20px";
            toggle1.style.width = "30px";
        })
    }
}
queryCheck(laptopView);
laptopView.addListener(queryCheck);


function toggleSide() {
    sidebar.classList.toggle('changeWidthSidebar');
    header.classList.toggle('changeWidthContainer');
    sidelogo.classList.toggle('hideElement');
    sidebtn.classList.toggle('changeDirection');
    sidetop.classList.toggle('changeJustify');

    sidelogo.style.animation = `opacity 0.5 ease forwards 0.5s`;

    sidelinks.forEach(sidelink => {
        sidelink.classList.toggle('color')
    });

    listItems.forEach(listItem => {
        listItem.classList.toggle('hideElement');
    });

    listTexts.forEach((listText, index) => {
        listText.style.animation = `opacity 0.5 ease forwards ${index / 7 + 1}s`;
    });

    itemside.forEach((item, index) => {
        item.style.animation = `opacity 0.5 ease forwards ${index / 7 + 1}s`;
    });
    itemIcon.classList.toggle('hideElement');
    sideIcons.forEach((sideIcon, index) => {
        sideIcon.style.animation = `opacity 0.5 ease forwards ${index / 7 + 1}s`;
    });
    sidelabel.classList.toggle('changeFontSize');

    function queryCheck(laptopView) {
        if (laptopView.matches) {
            sidelabel.classList.toggle('changeFontSize2');
        } else if (desktopViewL.matches) {
            sidelabel.classList.toggle('changeFontSize');
        }
    }
    queryCheck(laptopView);
}

sidelinks.forEach(sidelink => {
    sidelink.addEventListener('click', function () {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '')
        this.className += " active"
    })
});

sideIcons.forEach(sideIcon => {
    sideIcon.addEventListener('click', function () {
        const current = document.getElementsByClassName('active2');
        current[0].className = current[0].className.replace('active2', '')
        this.className += " active2"
    })
});