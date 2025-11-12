// let api1 = fetch("http://127.0.0.1:54367/projects/");
// console.log(api1)
// api1.then((res)=>{
//   return res.json()
// }).then((res)=>{
//   console.log(res)
// })



// let api2 = fetch("http://127.0.0.1:54367/contact/");
// console.log(api2)
// api2.then((res)=>{
//   return res.json()
// }).then((res)=>{
//   console.log(res)
// })

// let displaydata = (res) => {
//     let table = document.getElementById('block');
//     // table.innerHTML = ''; 

//     res.forEach(element => {
//         table.innerHTML += `
//             <tr>
//                 <td>${element.name}</td>
//                 <td>${element.email}</td>
//                 <td>${element.message}</td>
//             </tr>
//         `;
//     });
// };




//async and await function to fetch data from api
// let example1 = async () => {
//   let api1 = await fetch("http://127.0.0.1:54367/projects/");
//   let data = await api1.json();
//   console.log(data);
// }
// example1()

// async function example2() {
//   let api2 = await fetch("http://127.0.0.1:54367/contact/");
//   let data = await api2.json();
//   let contact = data.contact
//   let table1 = document.querySelector('#tabale1')
//   contact.forEach((ele) => {
//   table1.innerHTML += `   
//   <tr>
//     <td>${ele.id}</td>
//     <td>${ele.name}</td>
//     <td>${ele.email}</td>
//     <td>${ele.message}</td>
//   </tr>
//   `
    
//   });
// }
// example2()


async function sendContact(name, email, message) {
  try {
    const res = await fetch("http://127.0.0.1:54367/contact/", { // change this
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Server responded ${res.status}: ${text}`);
    }
    return await res.json();
  } catch (err) {
    console.error("Contact send error:", err);
    alert("Something went wrong. Check console."); // or nicer UI
  }
}



document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  if (!form) {
    console.error("❌ contactForm not found in HTML.");
    return;
  }

  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // stop page reload

    const name = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    try {
      const response = await fetch("http://127.0.0.1:54367/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Something went wrong. Check console.");
    }
  });
});












'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}