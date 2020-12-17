window.onscroll = function() {
  scrollFunction();
};

let navbar = document.getElementsByClassName("top-bar");

function scrollFunction() {
  if (navbar && window.pageYOffset >= 0) {
    navbar[0].classList.add("sticky");
    let logoImg = document.getElementById("logo-img");
    let signupItem = document.getElementById("item-signup");
    let itemLinks = document.getElementsByClassName("item-link");
    let toggler = document.getElementById("toggler");
    let items = document.getElementsByClassName("item");

    if (logoImg) {
      logoImg.classList.add("red");
    }
    if (signupItem) {
      signupItem.classList.add("show");
    }
    if (itemLinks) {
      for (let i = 0; i < itemLinks.length; i++) {
        itemLinks[i].classList.add("black");
      }
    }
    // if (items) {
    // 	for (let i = 0; i < items.length; i++) {
    // 		// items[i].classList.add('bg-white');
    // 		items[i].classList.remove('item-bg');
    // 	}
    // }
    if (toggler) {
      toggler.classList.add("text-dark");
    }
  }

  if (navbar && window.pageYOffset == 0) {
    navbar[0].classList.remove("sticky");
    let logoImg = document.getElementById("logo-img");
    let signupItem = document.getElementById("item-signup");
    let itemLinks = document.getElementsByClassName("item-link");
    let items = document.getElementsByClassName("item");

    if (logoImg) {
      logoImg.classList.remove("red");
    }
    if (signupItem) {
      signupItem.classList.remove("show");
    }
    if (itemLinks) {
      for (let i = 0; i < itemLinks.length; i++) {
        itemLinks[i].classList.remove("black");
      }
    }
    // if (items) {
    // 	for (let i = 0; i < items.length; i++) {
    // 		items[i].classList.remove('bg-white');
    // 		items[i].classList.add('item-bg');
    // 	}
    // }
    if (toggler) {
      toggler.classList.remove("text-dark");
    }
  }
}
