let headOne = document.querySelector(".landing .container h1");
setTimeout(() => {
  headOne.innerHTML = "I am Front-End Web Developer.";
}, 10000);
setTimeout(() => {
  headOne.style.display = "none";
}, 8000);
setTimeout(() => {
  let img = document.querySelector(".landing .container .img");
  let h1 = document.createElement("h1");
  let para = document.createElement("p");
  let text = document.createElement("div");
  text.className = "content";
  // let h2 = document.createElement("h2");
  // h2.className = "second-head";
  para.className = "info";
  h1.className = "first-head";
  para.innerHTML =
    "Brilliant and creative IT professional with Bachelor’s Degree in Information Technology and passionate about creating customized solutions seeks the position of <span>Front-end Developer</span> in an exciting and growing company where I can provide quality support to company’s IT team.";
  // h2.innerHTML = "";
  // h1.innerHTML = `" <span>H</span>i,<br>&nbsp;&nbsp;I<span>’am</span> Mahmoud Elsayed.<br>&nbsp;&nbsp;<span>I</span>’am <span>Front-End</span> Web Developer<span>.</span> "`;
  h1.innerHTML = "Hi,<br>I'm <span>Mahmoud Elsayed</span>.";
  img.before(text);
  text.append(h1);
  text.append(para);
  // cont.append(h2);
  h1.style.opacity = "0";
  para.style.opacity = "0";
  // h2.style.opacity = "0";
}, 8500);
setTimeout(() => {
  let firstHead = document.querySelector(".first-head");
  let parag = document.querySelector(".info");
  // let secondHead = document.querySelector(".second-head");
  firstHead.style.opacity = "100%";
  parag.style.opacity = "100%";
  let image = document.querySelector(".landing .container .img");
  image.style.opacity = "100%";

  // secondHead.style.opacity = "100%";
}, 8600);
// let bars = document.querySelector("header .container .bars");
// let nav = document.querySelector("header .container nav ul");
// // let a = document.querySelector("header .container nav ul li a");
// bars.onclick = function (e) {
//   nav.style.display = "flex";
//   nav.style.flexDirection = "column";
//   nav.style.position = "absolute";
//   nav.style.top = "100%";
//   nav.style.left = "0";
//   nav.style.width = "101%";
//   // if (e.target.tagName !== "a") {
//   //   nav.style.display = "none";
//   // }
// };
let container = document.querySelector(".landing .container");
setTimeout(function () {
  let changeRight = document.querySelectorAll(
    ".landing .container .changeBG"
  )[1];
  let changeLeft = document.querySelectorAll(
    ".landing .container .changeBG"
  )[0];
  let folder = document.querySelector(".landing .container .folder");
  let counter = 1;
  let active = document.querySelector(".landing .container .switch");
  active.style.opacity = "1";
  changeRight.onclick = function () {
    if (counter === 3) {
      counter = "";
    }
    let current = document.querySelector(
      `.landing .container .folder .folder${counter}`
    );
    Object.values(active.children).forEach(function (e) {
      e.classList.remove("active");
    });
    Object.values(folder.children).forEach(function (e) {
      e.style.display = "none";
    });
    if (counter === "") {
      folder.firstElementChild.style.display = "flex";
      active.firstElementChild.classList.add("active");
      counter = 1;
    } else {
      if (counter === 1) {
        active.firstElementChild.nextElementSibling.classList.add("active");
      } else if (counter === 2) {
        active.lastElementChild.classList.add("active");
      }
      Object.values(folder.children).forEach(function (e) {
        if (e === current) {
          e.nextElementSibling.style.display = "flex";
          ++counter;
        }
      });
    }
  };
  changeLeft.onclick = function () {
    if (counter === 1) {
      counter = "";
    }
    let current = document.querySelector(
      `.landing .container .folder .folder${counter}`
    );
    Object.values(active.children).forEach(function (e) {
      e.classList.remove("active");
    });
    Object.values(folder.children).forEach(function (e) {
      e.style.display = "none";
    });
    if (counter === "") {
      folder.lastElementChild.style.display = "flex";
      active.lastElementChild.classList.add("active");
      counter = 3;
    } else {
      if (counter === 2) {
        active.firstElementChild.classList.add("active");
      } else if (counter === 3) {
        active.firstElementChild.nextElementSibling.classList.add("active");
      }
      Object.values(folder.children).forEach(function (e) {
        if (e === current) {
          e.previousElementSibling.style.display = "flex";
          --counter;
        }
      });
    }
  };
  Object.values(active.children).forEach(function (e) {
    e.onclick = function () {
      Object.values(active.children).forEach(function (e) {
        e.classList.remove("active");
      });
      e.classList.add("active");
      if (e === active.firstElementChild) {
        Object.values(folder.children).forEach(function (e) {
          e.style.display = "none";
        });
        folder.firstElementChild.style.display = "flex";
        counter = 1;
      } else if (e === active.firstElementChild.nextElementSibling) {
        Object.values(folder.children).forEach(function (e) {
          e.style.display = "none";
        });
        folder.firstElementChild.nextElementSibling.style.display = "flex";
        counter = 2;
      } else {
        Object.values(folder.children).forEach(function (e) {
          e.style.display = "none";
        });
        folder.lastElementChild.style.display = "flex";
        counter = 3;
      }
    };
  });
}, 8600);

let setting = document.querySelector(".landing .color .setting");
let colors = document.querySelectorAll(".landing .color i");
let main = document.querySelector(":root");
if (window.localStorage.getItem("color")) {
  main.style.setProperty("--mainColor", window.localStorage.getItem("color"));
}
if (window.localStorage.getItem("color4")) {
  main.style.setProperty(
    "--fourth-color",
    window.localStorage.getItem("color4")
  );
}
colors.forEach(function (c) {
  c.onclick = function (e) {
    window.localStorage.setItem("color", e.target.dataset.color);
    if (e.target.dataset.color === "#2cd3bc") {
      window.localStorage.setItem("color4", "#40b3a3");
      main.style.setProperty("--fourth-color", "#40b3a3");
    } else if (e.target.dataset.color === "#e91e63") {
      window.localStorage.setItem("color4", "#bdbdbd");
      main.style.setProperty("--fourth-color", "#bdbdbd");
    } else if (e.target.dataset.color === "#8bc34a") {
      window.localStorage.setItem("color4", "#4caf50");
      main.style.setProperty("--fourth-color", "#4caf50");
    }
    main.style.setProperty("--mainColor", window.localStorage.getItem("color"));
    main.style.setProperty(
      "--fourth-color",
      window.localStorage.getItem("color4")
    );
  };
});
// console.log(window.localStorage.clear());
setting.onclick = function () {
  if (setting.parentElement.style.left === "0px") {
    setting.classList.replace("fa-angle-left", "fa-fill");
    setting.style.fontSize = "20px";
    setting.parentElement.style.left = "-60px";
  } else {
    setting.parentElement.style.left = "0";
    setting.classList.replace("fa-fill", "fa-angle-left");
    setting.style.fontSize = "25px";
  }
};
let up = document.querySelector(".to-up");
window.onscroll = function () {
  if (this.scrollY >= 1000) {
    up.style.right = "25px";
  } else {
    up.style.right = "-50px";
  }
};
up.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
let AllLis = document.querySelectorAll("header .container nav ul li");
AllLis.forEach(function (e) {
  e.onclick = function () {
    if (!(e.firstElementChild.href.substring(33) === "home")) {
      let section = document.querySelector(
        `.${e.firstElementChild.href.substring(33)}`
      );
      section.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      let section = document.querySelector(`.landing`);
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
});
