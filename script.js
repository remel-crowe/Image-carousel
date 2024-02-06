const nextDom = document.getElementById("next");
const prevDom = document.getElementById("prev");
const carousel = document.querySelector(".carousel");
const listItem = document.querySelector(".carousel .list");
const thumbnail = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};

let timeRunning = 500;
let runTimeout;

function showSlider(type) {
  let itemSLider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  if (type === "next") {
    listItem.appendChild(itemSLider[0]);
    thumbnail.appendChild(itemThumbnail[0]);
    carousel.classList.add("next");
  } else {
    let lastPosition = itemSLider.length - 1;
    listItem.prepend(itemSLider[lastPosition]);
    thumbnail.prepend(itemThumbnail[lastPosition]);
    carousel.classList.add("prev");
  }

  clearTimeout(runTimeout);

  runTimeout = setTimeout(() => {
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
  }, timeRunning);
}
