"use strict";

const btn = document.getElementById("reg");

let table = "";
const userDisplay = (pass, fName, lName, gender, email) => {
  table += `<tr class="first">
  <td class="right">${fName + " " + lName}</td>
 <td class="right">${email}</td>
  <td class="right">${gender}</td>
  <td>${pass}</td>
 </tr>`;
  document.getElementById("tbody").innerHTML = table;
};

btn.addEventListener("click", function (event) {
  event.preventDefault();

  const pass = document.getElementById("pass").value;
  const passConfirm = document.getElementById("confirm").value;
  const fName = document.getElementById("fn").value;
  const lName = document.getElementById("ln").value;
  const email = document.getElementById("email").value;
  const male = document.getElementById("male");
  const female = document.getElementById("female");
  var gender = "";

  if (male.checked) {
    gender = male.value;
  } else {
    gender = female.value;
  }

  if (pass != passConfirm || pass == "") {
    throw new Error("Password cofirmation is wrong");
    return;
  } else {
    document.querySelector("table").style.display = "table";
    console.log(pass);
    userDisplay(pass, fName, lName, gender, email);
  }
});
