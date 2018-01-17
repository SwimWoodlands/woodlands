  function initNav3() {
    var menuItems = document.querySelectorAll('.nav3menu .item');
    for(const menuItem of menuItems) {
    	menuItem.onclick = function() { selectNav3section(menuItem); }
    }
    if(menuItems.length > 0) {
      /* Default to the first section in the menu */
      var activeMenuItem = menuItems[0];
			if(typeof window.location.hash != "undefined"){
	  		var fragmentId = window.location.hash.substr(1);
        for(const menuItem of menuItems) {
        	if(menuItem.id == fragmentId) {
          	activeMenuItem = menuItem;
            break;
          }
        }
			}
      selectNav3section(activeMenuItem);
    }
  }
  function selectNav3section(selectedMenuItem) {
		for (const navSection of document.getElementsByClassName("nav3section")) {
    	if(navSection.id == selectedMenuItem.dataset.section) {
        navSection.classList.remove("hide");
      } else {
        navSection.classList.add("hide");
      }
		}
    for (const menuItem of document.querySelectorAll('.nav3menu .item')) {
    	if(menuItem.id == selectedMenuItem.id) {
				menuItem.classList.add("selected");      
      } else {
        menuItem.classList.remove("selected");
      }
    }
  }

