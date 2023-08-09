// AOS
$(window).on("scroll", function () {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back",
  });
});

// Toggle Navigation Mobile View
const nav = document.querySelector(".nav-links");
const toggle = document.querySelector("#toggle");
const icon = document.querySelector(".icon");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  if ((toggle.classList.includes = "active")) {
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");
    nav.classList.toggle("active");
  }
});

// Multiple Page Active Link
const locationpath = window.location.pathname;
const navlocation = document.querySelectorAll(".link-nav");
navlocation.forEach((link) => {
  if (link.href.includes(`${locationpath}`)) {
    link.classList.add("active-status");
  }
});

// Scroll to Progress Count
function updateprogress() {
  const { scrollHeight, scrollTop } = document.documentElement;
  const progressper = `${
    (scrollTop / (scrollHeight - window.innerHeight)) * 100 + "%"
  }`;
  document
    .getElementById("progress-bar")
    .style.setProperty("--progress", progressper);
}
document.addEventListener("scroll", updateprogress);

// Scroll to Top Button
let scrolltop = document.getElementById("scroll-up-btn");
window.addEventListener("scroll", function () {
  scrolltop.classList.toggle("active", window.scrollY > 300);
});

// Scroll to show header

let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("show", window.scrollY > 100);
});

//   Owl Carosuel for Astronaut
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    items: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    smartSpeed: 1000,
    responsiveClass: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

// Active Mission Completed Task

let missioncontent = document.querySelectorAll(".main-handle-content-mission");
let galleymission = document.querySelectorAll(".image-gal-mis");

galleymission.forEach((file, index) => {
  file.addEventListener("click", () => {
    galleymission.forEach((file) => {
      file.classList.remove("activemode");
    });
    file.classList.add("activemode");

    missioncontent.forEach((content) => {
      content.classList.remove("activemode");
    });
    missioncontent[index].classList.add("activemode");
  });
});

// Carosuel of Discoveries Activities

$(document).ready(function () {
  $(".carousel").carousel({
    interval: false,
  });
});

// Active Discoveries Telescope Task
let spacetele = document.querySelectorAll(".content-space-tele");
let spacedot = document.querySelectorAll(".dot-nav-space-tele");
let highactive = document.querySelectorAll(".high-active");
let highdot = document.querySelectorAll(".high-dot");
let uniactive = document.querySelectorAll(".uni-active");
let unidot = document.querySelectorAll(".uni-dot");
let deepactive = document.querySelectorAll(".deep-active");
let dotdeep = document.querySelectorAll(".dot-deep");
let nebulaactive = document.querySelectorAll(".nebula-active");
let dotnebula = document.querySelectorAll(".dot-nebula");
let galaxiesactive = document.querySelectorAll(".galaxies-active");
let dotgalaxies = document.querySelectorAll(".dot-galaxies");
let clustersactive = document.querySelectorAll(".clusters-active");
let dotclusters = document.querySelectorAll(".dot-clusters");

// Space Tele
spacedot.forEach((dottask, index) => {
  dottask.addEventListener("click", () => {
    spacedot.forEach((dottask) => {
      dottask.classList.remove("activedot");
    });
    dottask.classList.add("activedot");

    spacetele.forEach((content) => {
      content.classList.remove("activedot");
    });
    spacetele[index].classList.add("activedot");
  });
});

// High Active
highdot.forEach((dottask, index) => {
  dottask.addEventListener("click", () => {
    highdot.forEach((dottask) => {
      dottask.classList.remove("activedot");
    });
    dottask.classList.add("activedot");

    highactive.forEach((content) => {
      content.classList.remove("activedot");
    });
    highactive[index].classList.add("activedot");
  });
});

// Uni Active
unidot.forEach((dottask, index) => {
  dottask.addEventListener("click", () => {
    unidot.forEach((dottask) => {
      dottask.classList.remove("activedot");
    });
    dottask.classList.add("activedot");

    uniactive.forEach((content) => {
      content.classList.remove("activedot");
    });
    uniactive[index].classList.add("activedot");
  });
});

// Deep Active
dotdeep.forEach((dottask, index) => {
  dottask.addEventListener("click", () => {
    dotdeep.forEach((dottask) => {
      dottask.classList.remove("activedot");
    });
    dottask.classList.add("activedot");

    deepactive.forEach((content) => {
      content.classList.remove("activedot");
    });
    deepactive[index].classList.add("activedot");
  });
});

// Nebula Active
dotnebula.forEach((dottask, index) => {
  dottask.addEventListener("click", () => {
    dotnebula.forEach((dottask) => {
      dottask.classList.remove("activedot");
    });
    dottask.classList.add("activedot");

    nebulaactive.forEach((content) => {
      content.classList.remove("activedot");
    });
    nebulaactive[index].classList.add("activedot");
  });
});

// Galaxies Active
dotgalaxies.forEach((dottask, index) => {
  dottask.addEventListener("click", () => {
    dotgalaxies.forEach((dottask) => {
      dottask.classList.remove("activedot");
    });
    dottask.classList.add("activedot");

    galaxiesactive.forEach((content) => {
      content.classList.remove("activedot");
    });
    galaxiesactive[index].classList.add("activedot");
  });
});

// Clusters Active
dotclusters.forEach((dottask, index) => {
  dottask.addEventListener("click", () => {
    dotclusters.forEach((dottask) => {
      dottask.classList.remove("activedot");
    });
    dottask.classList.add("activedot");

    clustersactive.forEach((content) => {
      content.classList.remove("activedot");
    });
    clustersactive[index].classList.add("activedot");
  });
});
