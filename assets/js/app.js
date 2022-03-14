const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.nav__mobile-link')
const category_menu = $('.header-category-left')
const category_drop = $('.header-category-left-dropdown')


tabs.forEach((tabs) => {
        tabs.onclick = () => {
            $('.nav__mobile-link.active').classList.remove('active')
            tabs.classList.add('active')  
        
        }
    })

// Slider
var couter = 1
setInterval(() => {
    document.getElementById('radio' + couter).checked = true
    couter++
    if(couter > 3) {
        couter = 1
    }
}, 5000)

// category_menu.addEventListener('click', () => {
//     category_drop.style.display = 'block'
// })



productScroll();

function productScroll() {
  let slider1 = document.getElementById("slider1");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide1 = document.getElementById("slide1");
  let item = document.getElementById("slide1");

  var nextLength = next.length

  for (let i = 0; i < nextLength; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
         //translate items
      }else {
        position = nextLength -1
      }

      translateX(position);
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
      }
      else {
          position = 0
      }
      translateX(position);
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider1.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide1.style.left = position * -239 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}

// Product hot

productScroll2();

function productScroll2() {
  let slider2 = document.getElementById("slider2");
  let next2 = document.getElementsByClassName("pro-next2");
  let prev2 = document.getElementsByClassName("pro-prev2");
  let slide2 = document.getElementById("slide2");
  let item2 = document.getElementById("slide2");

  var nextLength2 = next2.length

  for (let i = 0; i < nextLength2; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev2[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
         //translate items
      }else {
        position = nextLength2 -1
      }

      translateX2(position);
    });

    next2[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems2()) {
        //avoid slide right beyond the last item
        position += 1;
      }
      else {
          position = 0
      }
      translateX2(position);
    });
  }

  function hiddenItems2() {
    //get hidden items
    let items = getCount2(item2, false);
    let visibleItems = slider2.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX2(position) {
  //translate items
  slide2.style.left = position * -239 + "px";
}

function getCount2(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount2(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}
