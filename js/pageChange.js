const title = document.getElementById("title");
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const text = document.getElementById("nav-text");
const navText = document.getElementById("nav-text-main");
const navText2 = document.getElementById("nav-text-main2");
const aboutUs = document.getElementById("about-us");
const landing = document.getElementById("landing-grid");
const music = document.getElementById("music");
const contact = document.getElementById("contact");
const footer = document.getElementById("footer");
const impressum = document.getElementById("impressum");
const logo = document.getElementById("logo");
const backButton = document.getElementById("back-impressum");
var impressumOpen = false;
var activeWindow = false;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function openImpressum() {
  if (activeWindow == false && impressumOpen == false) {
    footer.style.opacity = "0";
    logo.style.opacity = "0";
    await sleep(1200);
    logo.style.justifySelf = "center";
    logo.style.justifyItems = "center";

    impressum.style.width = "100%";
    impressum.style.height = "100%";
    backButton.style.opacity = "1";
    footer.style.height = "0px";
    title.style.gridTemplateRows = "20% 70% 10%";
    logo.style.opacity = "1";
    impressum.style.opacity = "1";
    impressum.style.gridRow = "2";
    impressumOpen = true;
  }
}

async function closeImpressum() {
  if (impressumOpen == true) {
    impressum.style.opacity = "0";
    backButton.style.opacity = "0";
    logo.style.opacity = "0";
    await sleep(1200);
    impressum.style.width = "0px";
    impressum.style.height = "0px";
    logo.style.justifySelf = "center";
    logo.style.justifyItems = "center";
    footer.style.height = "auto";
    impressum.style.gridRow = "3";
    title.style.gridTemplateRows = "90% 10%";
    await sleep(900);
    logo.style.opacity = "1";
    footer.style.opacity = "1";
    impressumOpen = false;
  }
}

async function openAboutUs() {
  closeImpressum();
  if (activeWindow == false) {
    aboutUs.style.height = "100vh";
    nav2.style.opacity = "0";
    nav3.style.opacity = "0";
    nav1.style = "border-top: 0px";
    navText.style.visibility = "hidden";
    navText.style.opacity = "0";
    navText.style.position = "absolute";
    nav1.style.width = "0px";
    title.style.opacity = "0";
    text.style.opacity = "0";
    await sleep(1200);
    nav1.style.position = "absolute";

    title.style.position = "absolute";
    nav1.style.top = "0px";

    title.style.top = "0px";
    nav1.style.left = "0px";

    title.style.left = "0px";

    text.style.visibility = "hidden";
    nav2.style.visibility = "hidden";
    nav3.style.visibility = "hidden";
    title.style.visibility = "hidden";

    nav1.style = "border-top: 0px";
    nav1.style.width = "100vw";
    aboutUs.style.visibility = "visible";
    aboutUs.style.width = "100vw";
    await sleep(700);
    aboutUs.style.opacity = "1";
    nav1.style.pointerEvents = "none";
    nav2.style.pointerEvents = "none";
    nav3.style.pointerEvents = "none";
    activeWindow = true;
  }
}

async function closeAboutUs() {
  if (activeWindow === true) {
    console.log("test");
    aboutUs.style.opacity = "0";
    await sleep(600);
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
    navText.style.visibility = "visible";
    navText.style.opacity = "1";
    navText.style.position = "relative";
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
    nav1.style.pointerEvents = "all";
    nav2.style.pointerEvents = "all";
    nav3.style.pointerEvents = "all";
    activeWindow = false;
  }
}

async function openMusic() {
  closeImpressum();
  if (activeWindow == false) {
    music.style.height = "100vh";
    nav1.style.opacity = "0";
    nav3.style.opacity = "0";
    nav2.style = "border-top: 0px";
    navText.style.visibility = "hidden";
    navText.style.opacity = "0";
    navText.style.position = "absolute";
    nav2.style.width = "0px";
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
    nav1.style.visibility = "hidden";
    nav3.style.visibility = "hidden";
    title.style.visibility = "hidden";

    nav2.style = "border-top: 0px";
    nav2.style.width = "100vw";
    music.style.visibility = "visible";
    music.style.width = "100vw";
    await sleep(700);
    music.style.opacity = "1";

    nav1.style.pointerEvents = "none";
    nav2.style.pointerEvents = "none";
    nav3.style.pointerEvents = "none";
    activeWindow = true;
  }
}

async function closeMusic() {
  if (activeWindow === true) {
    console.log("test");
    music.style.opacity = "0";
    await sleep(600);
    music.style.width = "0px";
    music.style.visibility = "hidden";
    nav2.style.width = "0px";
    await sleep(1200);
    nav1.style.position = "relative";
    nav2.style.position = "relative";
    nav3.style.position = "relative";
    title.style.position = "relative";
    nav1.style.visibility = "visible";
    nav3.style.visibility = "visible";
    title.style.visibility = "visible";
    text.style.visibility = "visible";
    text.style.opacity = "1";
    navText.style.visibility = "visible";
    navText.style.opacity = "1";
    navText.style.position = "relative";
    nav2.style = "border-top-width: 20px";
    music.style.height = "0px";
    title.style.opacity = "1";
    nav1.style.opacity = "1";
    nav3.style.opacity = "1";
    nav2.style.width = "100%";
    nav2.style.opacity = "1";
    text.style.opacity = "1";
    text.style.display = "grid";
    nav1.style.display = "grid";
    nav3.style.display = "grid";
    title.style.display = "grid";
    nav1.style.pointerEvents = "all";
    nav2.style.pointerEvents = "all";
    nav3.style.pointerEvents = "all";
    activeWindow = false;
  }
}

async function openContact() {
  closeImpressum();
  if (activeWindow == false) {
    nav3.style.borderTop = "0px";
    nav1.style.opacity = "0";
    nav2.style.opacity = "0";
    title.style.opacity = "0";
    contact.style.height = "100vh";
    await sleep(600);
    navText2.style.opacity = "0";
    nav3.style.width = "0px";
    await sleep(300);
    contact.style.visibility = "visible";
    contact.style.width = "100vw";
    await sleep(700);
    contact.style.opacity = "1";
    nav3.style.position = "absolute";
    nav3.style.width = "100vw";
    nav3.style.height = "100vh";

    nav1.style.pointerEvents = "none";
    nav2.style.pointerEvents = "none";
    activeWindow = true;
  }
}

async function closeContact() {
  console.log("test");
  contact.style.opacity = "0";
  await sleep(600);
  contact.style.width = "0px";
  contact.style.visibility = "hidden";
  nav3.style.width = "0px";
  await sleep(1200);
  nav1.style.position = "relative";
  nav2.style.position = "relative";
  nav3.style.position = "relative";
  title.style.position = "relative";
  nav1.style.visibility = "visible";
  nav2.style.visibility = "visible";
  title.style.visibility = "visible";
  text.style.visibility = "visible";
  text.style.opacity = "1";
  navText2.style.visibility = "visible";
  navText2.style.opacity = "1";
  navText2.style.position = "relative";
  nav3.style = "border-top-width: 20px";
  contact.style.height = "0px";
  title.style.opacity = "1";
  nav1.style.opacity = "1";
  nav2.style.opacity = "1";
  nav3.style.width = "100%";
  nav3.style.opacity = "1";
  text.style.opacity = "1";
  text.style.display = "grid";
  nav1.style.display = "grid";
  nav2.style.display = "grid";
  title.style.display = "grid";
  nav1.style.pointerEvents = "all";
  nav2.style.pointerEvents = "all";
  nav3.style.pointerEvents = "all";
  activeWindow = false;
}
