const title = document.getElementById("title");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const text = document.getElementById("nav-text");
const aboutUs = document.getElementById("about-us");

var activeWindow = false;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function openAboutUs() {
  if (activeWindow == false) {
    nav2.style.opacity = "0";
    nav3.style.opacity = "0";
    nav1.style = "border-top: 0px";
    title.style.opacity = "0";
    nav1.style.width = "0px";

    text.style.display = "none";
    await sleep(1200);
    nav2.style.display = "none";
    nav3.style.display = "none";
    title.style.display = "none";
    nav1.style = "border-top: 0px";
    nav1.style.width = "100vw";

    aboutUs.style.opacity = "1";
    aboutUs.style.display = "grid";
    nav1.style.pointerEvents = "none";
    activeWindow = true;
  }
}

async function closeAboutUs() {
  if (activeWindow === true) {
    console.log("test");
    aboutUs.style.opacity = "0";
    aboutUs.style.display = "none";
    nav1.style.width = "0px";
    await sleep(1200);
    nav1.style = "border-top-width: 20px";

    title.style.opacity = "1";
    nav2.style.opacity = "1";
    nav3.style.opacity = "1";
    nav1.style.width = "100%";
    nav1.style.opacity = "1";
    text.style.opacity = "1";
    text.style.display = "grid";
    nav2.style.display = "grid";
    nav3.style.display = "grid";
    title.style.display = "grid";
    activeWindow = false;
  }
}
