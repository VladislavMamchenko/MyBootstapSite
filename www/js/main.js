
 var elements = Array.from(document.getElementsByClassName("bg-light"));
 var elements2 = Array.from(document.getElementsByClassName("navbar-light"));
 var elements3 = Array.from(document.getElementsByClassName("text-light"));

function toggle() {
  for (let i = 0; i < elements.length; i++) {
      let el = elements[i];
      if(el.classList.contains('bg-light')){
          el.classList.add('bg-dark');
          el.classList.remove('bg-light');
      } else {
          el.classList.add('bg-light');
          el.classList.remove('bg-dark');
      }
  }
}

function toggle2() {
  for (let i = 0; i < elements2.length; i++) {
      let el2 = elements2[i];
      if(el2.classList.contains('navbar-light')){
          el2.classList.add('navbar-dark');
          el2.classList.remove('navbar-light');
      } else {
          el2.classList.add('navbar-light');
          el2.classList.remove('navbar-dark');
      }
  } 
}

function toggle3() {
  for (let i = 0; i < elements3.length; i++) {
      let el3 = elements3[i];
      if(el3.classList.contains('text-light')){
          el3.classList.add('text-dark');
          el3.classList.remove('text-light');
      } else {
          el3.classList.add('text-light');
          el3.classList.remove('text-dark');
      }
  } 
}

