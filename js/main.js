// 변수 선언
const introel = document.querySelector('header .mainmenu__intro');
const intro__basketel = document.querySelector('header .mainmenu__intro__basket')
const languageel = document.querySelector('header .mainmenu__language');
const language__basketel = languageel.querySelector('.mainmenu__language__basket');
const familysiteel = document.querySelector('footer .attachment__rightitem');
const familysite__basketel = familysiteel.querySelector('.familysite_basket');

//common function
function toggleShowClick(el, basketel) {
    el.addEventListener('click', function (event) {
      event.stopPropagation();
      basketel.classList.toggle('show');  
    })

    window.addEventListener('click', function() {
        basketel.classList.remove('show');
    })
}

// Header intro menu box
introel.addEventListener('mouseover', function () {
    intro__basketel.classList.toggle('show');
})

window.addEventListener('mouseout', function (event) {
    const from = event.relatedTarget;
    if (!introel.contains(from) && !intro__basketel.contains(from)) {
        intro__basketel.classList.remove('show');
    }
});

// Header language box
toggleShowClick(languageel, language__basketel);

// Footer family sites box
toggleShowClick(familysiteel, familysite__basketel);