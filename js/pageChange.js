const title = document.getElementById("title");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const text = document.getElementById("nav-text");
const aboutUs = document.getElementById("about-us");
const landing = document.getElementById("landing-grid");

var activeWindow = false;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function openAboutUs() {
  if (activeWindow == false) {
    aboutUs.style.height = "100vh";
    nav2.style.opacity = "0";
    nav3.style.opacity = "0";
    nav1.style = "border-top: 0px";
    nav1.style.width = "0px";
    title.style.opacity = "0";
    text.style.opacity = "0";
    await sleep(1200);
    nav1.style.position = "absolute";
    nav2.style.position = "absolute";
    nav3.style.position = "absolute";
    title.style.position = "absolute";
    nav1.style.top = "0px";
    nav2.style.top = "0px";
    nav3.style.top = "0px";
    title.style.top = "0px";
    nav1.style.left = "0px";
    nav2.style.left = "0px";
    nav3.style.left = "0px";
    title.style.left = "0px";

    text.style.visibility = "hidden";
    nav2.style.visibility = "hidden";
    nav3.style.visibility = "hidden";
    title.style.visibility = "hidden";

    nav1.style = "border-top: 0px";
    nav1.style.width = "100vw";
    aboutUs.style.visibility = "visible";
    aboutUs.style.width = "100vw";
    aboutUs.style.opacity = "1";

    nav1.style.pointerEvents = "none";
    activeWindow = true;
  }
}

async function closeAboutUs() {
  if (activeWindow === true) {
    console.log("test");
    aboutUs.style.opacity = "0";
    aboutUs.style.width = "0px";
    aboutUs.style.visibility = "hidden";
    nav1.style.width = "0px";
    await sleep(1200);
    nav1.style.position = "relative";
    nav2.style.position = "relative";
    nav3.style.position = "relative";
    title.style.position = "relative";
    nav2.style.visibility = "visible";
    nav3.style.visibility = "visible";
    title.style.visibility = "visible";
    text.style.visibility = "visible";
    text.style.opacity = "1";
    nav1.style = "border-top-width: 20px";
    aboutUs.style.height = "0px";
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
