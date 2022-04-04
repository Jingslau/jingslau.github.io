//CSS ELEMETNS
var helloText = document.getElementById("welcomeText");
var textFiller = document.getElementById("fillerText");
var countdown = document.getElementById("countdown");
var motivationText = document.getElementById("motivationText");
var btn = document.getElementById("button");

//JS VARs
let date, hrs, mins, secs;


//main function to check which day it is, and which function to call
function clock() {
    date = new Date();
    let day = date.getDay();
    console.log(day);
    if (day == 0 || day == 6) {
        weekend();
    } else if (day == 5) {
        friday();
    } else {
        // otherDay();
        otherDay()
    }



    //Text to display if it is sun or sat
    function weekend() {
        helloText.innerHTML = "Juhu!";
        countdown.innerHTML = "Es ist Wochenende!";
        textFiller.innerHTML = "";
        btn.style.display = "none";
    }

    //Function to execute when it is friday
    function friday() {
        monthDay = date.getDate();
        hrs = date.getHours();
        mins = date.getMinutes();
        secs = date.getSeconds();

        hrs = hrs < 10 ? `0${hrs}` : hrs;
        mins = mins < 10 ? `0${mins}` : mins;
        secs = secs < 10 ? `0${secs}` : secs;


        if (hrs >= 14 || hrs < 7) {
            if ((((helloText.innerHTML != "Endlich!" &&
                            countdown.innerHTML != "Du hast frei!") &&
                        textFiller.innerHTML != "") &&
                    btn.style.display != "none")) {
                helloText.innerHTML = "Endlich!";
                countdown.innerHTML = "Du hast frei!";
                textFiller.innerHTML = "";
                btn.style.display = "none";
            }
        } else {
            if (hrs < 10) {
                if (helloText.innerHTML != "Guten Morgen!" &&
                    motivationText.innerHTML !=
                    "Ist es nicht schön so früh arbeiten zu müssen?") {
                    helloText.innerHTML = "Guten Morgen!";
                    motivationText.innerHTML =
                        "Ist es nicht schön so früh arbeiten zu müssen?";
                }
            }
            if (hrs == 10 || hrs > 10) {
                if (helloText.innerHTML != "Guten Tag!" &&
                    motivationText.innerHTML !=
                    "Der Morgen ist vorbei, aber der Tag ist noch lang...") {
                    helloText.innerHTML = "Guten Tag!";
                    motivationText.innerHTML =
                        "Der Morgen ist vorbei, aber der Tag ist noch lang...";
                }
            }


            if (hrs == 12 || hrs > 12) {
                if (motivationText.innerHTML != "Bald kannst du dich auf den Feierabend freuen!") {
                    motivationText.innerHTML = "Bald kannst du dich auf den Feierabend freuen!";
                }
            }
            if (hrs == 13 || hrs > 13) {
                if (motivationText.innerHTML !=
                    "Schau, gleich kannst du nach Hause!") {
                    motivationText.innerHTML =
                        "Schau, gleich kannst du nach Hause!";
                }
            }
            hrs = 13 - hrs;
            mins = 59 - mins;
            secs = 60 - secs;
            if (hrs < 10) {
                hrs = "0" + hrs;
            }
            if (mins < 10) {
                mins = "0" + mins;
            }
            if (secs < 10) {
                secs = "0" + secs;
            }
            let time = `${hrs}:${mins}:${secs}`;
            countdown.innerText = time;
        }
    }
}

function otherDay() {

    hrs = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();

    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;


    if (hrs >= 17 || hrs < 7) {
        if ((((helloText.innerHTML != "Endlich!" &&
                        countdown.innerHTML != "Du hast frei!") &&
                    textFiller.innerHTML != "") &&
                btn.style.display != "none")) {
            helloText.innerHTML = "Endlich!";
            countdown.innerHTML = "Du hast frei!";
            textFiller.innerHTML = "";
            btn.style.display = "none";
        }
    } else {
        if (hrs < 10) {
            if (helloText.innerHTML != "Guten Morgen!" &&
                motivationText.innerHTML !=
                "Ist es nicht schön so früh arbeiten zu müssen?") {
                helloText.innerHTML = "Guten Morgen!";
                motivationText.innerHTML =
                    "Ist es nicht schön so früh arbeiten zu müssen?";
            }
        }
        if (hrs == 10 || hrs > 10) {
            if (helloText.innerHTML != "Guten Tag!" &&
                motivationText.innerHTML !=
                "Der Morgen ist vorbei, aber der Tag ist noch lang...") {
                helloText.innerHTML = "Guten Tag!";
                motivationText.innerHTML =
                    "Der Morgen ist vorbei, aber der Tag ist noch lang...";
            }
        }

        if (hrs == 12 || hrs > 12) {
            if (motivationText.innerHTML != "Bald kannst du dich auf den Feierabend freuen!") {
                motivationText.innerHTML = "Bald kannst du dich auf den Feierabend freuen!";
            }
        }

        if (hrs == 14 || hrs > 14) {
            if (motivationText.innerHTML != "Schau, gleich kannst du nach Hause!") {
                motivationText.innerHTML = "Schau, gleich kannst du nach Hause!";
            }
        }
        if (hrs == 16 || hrs > 16) {
            if (motivationText.innerHTML !=
                "Nur noch eine Stunde!") {
                motivationText.innerHTML =
                    "Nur noch eine Stunde!";
            }
        }
        hrs = 16 - hrs;
        mins = 59 - mins;
        secs = 60 - secs;
        if (hrs < 10) {
            hrs = "0" + hrs;
        }
        if (mins < 10) {
            mins = "0" + mins;
        }
        if (secs < 10) {
            secs = "0" + secs;
        }
        let time = `${hrs}:${mins}:${secs}`;
        countdown.innerText = time;
    }
}


setInterval(clock, 1000);
clock();