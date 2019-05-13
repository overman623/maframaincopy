(function() {
  const menuExpand = document.querySelector(".menu_expand-icon");
  const menuSearch = document.querySelector(".menu_search-icon");
  const mobileLayout = document.querySelector(".mobile_layout");
  const mobileNaviTitle = document.querySelector(".navigation_list__title");
  const navigationListColumn = document.querySelectorAll(
    ".navigation_list__column"
  );
  const navigationListTitle = document.querySelectorAll(
    ".navigation_list__title"
  );
  const subList = document.querySelectorAll(".sub_tab");
  const menu = document.querySelector(".menu");
  const contentsButton = document.querySelectorAll(".contents__button");

  var nowIndex = 0;
  var nowSubIndex = 0;
  var nowRightTab = 0;

  for (var j = 0; j < subList.length; j++) {
    (function(subIndex) {
      subList[subIndex].addEventListener("click", function(event) {
        if (nowSubIndex != subIndex) {
          console.log(nowSubIndex);
          subList[nowSubIndex].classList.remove("active");
        }
        event.currentTarget.classList.toggle("active");
        nowSubIndex = subIndex;
      });
    })(j);
  }

  for (var i = 0; i < navigationListColumn.length; i++) {
    (function(index) {
      navigationListTitle[index].addEventListener("click", function(event) {
        if (nowIndex != index) {
          navigationListColumn[nowIndex].classList.remove("active");
        }
        navigationListColumn[index].classList.toggle("active");
        nowIndex = index;
        console.log(nowSubIndex);
        subList[nowSubIndex].classList.remove("active");
      });
    })(i);
  }

  for (var i = 0; i < contentsButton.length; i++) {
    (function(index) {
      contentsButton[index].addEventListener("click", function(event) {
        if (nowRightTab != index) {
          contentsButton[nowRightTab].classList.remove("active");
        }
        event.currentTarget.classList.toggle("active");
        nowRightTab = index;
      });
    })(i);
  }

  menuExpand.addEventListener("click", function() {
    menuExpand.classList.toggle("toggled");
    menuSearch.classList.toggle("hide");
    mobileLayout.classList.toggle("toggle_menu"); //menu
    for (var i = 0; i < navigationListColumn.length; i++) {
      navigationListColumn[i].classList.remove("active");
    }
    subList[nowSubIndex].classList.remove("active");
    nowIndex = 0;
  });

  menuSearch.addEventListener("click", function() {
    menuSearch.classList.toggle("toggled");
    menuExpand.classList.toggle("hide");
    mobileLayout.classList.toggle("toggle_search"); //search
  });

  window.addEventListener("optimizedResize", function() {
    var w = document.documentElement.clientWidth;
    if (w >= 861) {
      menuExpand.classList.remove("toggled");
      mobileLayout.classList.remove("toggle_menu"); //menu
      menuSearch.classList.remove("hide");
    } else if (w >= 621 && w < 861) {
      menuSearch.classList.remove("toggled");
      menuExpand.classList.remove("hide");
      mobileLayout.classList.remove("toggle_search");
    }
  });
})();

(function() {
  var throttle = function(type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function() {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();

// handle event
