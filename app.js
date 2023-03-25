/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <Dev vimal Patel>
 *      Student ID: <160882213>
 *      Date:       <2023-03-17>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

let menu = document.getElementById("menu");
let chosenOne = document.getElementById("selected-artist");
let tableBody = document.getElementById("songs");

window.onload = () => {
  for (let i = 0; i < artists.length; i++) {
    let aButt = document.createElement("button");
    aButt.innerText = artists[i].name;
    aButt.classList.add("abut");
    menu.appendChild(aButt);
    aButt.onclick = function () {
      updateSongList(artists[i].aid);
    };
    aButt.onmouseover = function () {
      addDescription(artists[i].aid);
    };
  }
};

function updateSongList(aid) {
  let found = false;
  for (let i = 0; i < artists.length && !found; i++) {
    if (aid === artists[i].aid) {
      chosenOne.innerHTML = `<a href="${artists[i].link1}" target="_blank">${artists[i].name} <i class="fab fa-twitter"></i></a> <a href="${artists[i].link2}" target="_blank"><i class="fab fa-instagram"></i></a>`;
      found = true;
    }
  }

  tableBody.innerHTML = "";
  tableBody.innerText = "";

  for (let j = 0; j < songs.length; j++) {
    if (songs[j].aid === aid && !songs[j].flagged) {
      let tr = document.createElement("tr");

      let tdName = document.createElement("td");
      tdName.innerText = songs[j].title;
      let tdYear = document.createElement("td");
      tdYear.innerText = songs[j].year;
      let tdDuration = document.createElement("td");
      tdDuration.innerText = songs[j].length;

      tr.appendChild(tdName);
      tr.appendChild(tdYear);
      tr.appendChild(tdDuration);

      tableBody.appendChild(tr);
    }
  }

  tableBody.innerHTML = "";
  tableBody.innerText = "";

  for (let j = 0; j < songs.length; j++) {
    if (songs[j].aid === aid && !songs[j].flagged) {
      let tr = document.createElement("tr");

      let tdName = document.createElement("td");
      tdName.innerText = songs[j].title;
      let tdYear = document.createElement("td");
      tdYear.innerText = songs[j].year;
      let tdDuration = document.createElement("td");
      tdDuration.innerText = songs[j].length;

      tr.appendChild(tdName);
      tr.appendChild(tdYear);
      tr.appendChild(tdDuration);

      tableBody.appendChild(tr);
    }
  }
}

function addDescription(aid) {}
