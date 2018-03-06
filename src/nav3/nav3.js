function initNav3() {
  var menuItems = document.querySelectorAll('.nav3menu .item');
  if(menuItems.length > 0) {

    /* Add on click functions to menu items */
    for(const menuItem of menuItems) {
      menuItem.onclick = function() { selectNav3Section(menuItem); }
    }

    /* Default to the first section in the menu */
    var activeMenuItem = menuItems[0];
    var reqPage = getURLParameter('page');
    if ((reqPage !== undefined) && (reqPage !== null)) {
      for(const menuItem of menuItems) {
        if(menuItem.dataset.section == reqPage) {
          activeMenuItem = menuItem;
          break;
        }
      }
    }
    selectNav3Section(activeMenuItem);
  }
}

function selectNav3Section(selectedMenuItem) {
  /* Hide all document sections except for the active menu's section */
  for (const navSection of document.getElementsByClassName("nav3section")) {
    if(navSection.id == selectedMenuItem.dataset.section) {
      navSection.classList.remove("hide");
      changePageURL(navSection.id);
    } else {
      navSection.classList.add("hide");
    }
  }
  
  /* Select menu item for active 3rd level page */
  for (const menuItem of document.querySelectorAll('.nav3menu .item')) {
    if(menuItem.id == selectedMenuItem.id) {
      menuItem.classList.add("selected");      
    } else {
      menuItem.classList.remove("selected");
    }
  }
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function changePageURL(page) {
  if(history.pushState) {
    var newurl = location.origin + location.pathname + '?page='+page;
    window.history.pushState({path:newurl},'',newurl);
  }
}

