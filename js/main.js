var inputName = document.getElementById("exampleInputName");
var inputPhone = document.getElementById("exampleInputPhone");
var inputEmail = document.getElementById("exampleInputEmail1");
var inputAddress = document.getElementById("exampleInputAddress");
var inputNote = document.getElementById("exampleInputArea");
var inputfav = document.getElementById("exampleCheck1");
var isChecked1;
var inputeme = document.getElementById("exampleCheck2");
var isChecked2;
var cards = document.querySelector(".cards");
var totCard = document.querySelector(".tot-card");
var favCard = document.querySelector(".fav-card");
var emeCard = document.querySelector(".eme-card");
var textCard = document.querySelector(".txt-card");
var favSide = document.querySelector(".fav-side");
var emeSide = document.querySelector(".eme-side");
var allcontacts = JSON.parse(localStorage.getItem("allcontacts")) || [];
var modal=document.getElementById("exampleModal")
var form = document.getElementById("form")
var searchInput = document.getElementById("searchinput")
var contactCategory = document.getElementById("contact-Categor")
var currentIndex = -1;
var nameAleart = document.querySelector(".nameAlert")
var phoneAleart = document.querySelector(".phoneAleart")
var emailAleart = document.querySelector(".emailAleart")


window.onload = function () {
  displayContacts(allcontacts);
  displayFav();
  displayeme();
  renderFavSide();
  renderEmeSide();
};
function addContact() {

  console.log("hiiiiiiiiiii")
  var contact = {
    name: inputName.value,
    phone: inputPhone.value,
    email: inputEmail.value,
    address: inputAddress.value,
    note: inputNote.value,
    category: contactCategory.value,
    fav: inputfav.checked,
    eme: inputeme.checked,
    
  }

  allcontacts.push(contact);

  localStorage.setItem("allcontacts", JSON.stringify(allcontacts));

  var card1 = `
  <div class="body rounded-4 shadow p-3" style="background-color: #ffffff;">
                            <div class="d-flex align-items-center">
                                <div class="position-relative mx-2"
                                    style="width: 50px; height: 50px; border-radius: 10px; background-color: #1965FE;">
                                    <i class="fa-solid fa-users position-absolute top-50 start-50 translate-middle"
                                        style="color: rgb(255, 255, 255);"></i>
                                </div>
                                <div>
                                    <h5>Total</h5>
                                    <h6>${allcontacts.length}</h6>
                                </div>
                            </div>
                        </div>
  `
  totCard.innerHTML = card1;

  var text=`
  <div class=" all-contacts ">
                            <h5>All Contacts</h5>
                            <h6>Manage and organize your ${allcontacts.length} contacts</h6>
                        </div>`
    textCard.innerHTML = text;

displayContacts(allcontacts);
sweatAlert(contact)
  addToFav( contact)
addFavSide(contact)
  addToEme(allcontacts , contact)
  addEmeSide(contact)
   form.reset();

}
function displayContacts(list) {
  cards.innerHTML = "";
var card1 = `
  <div class="body rounded-4 shadow p-3" style="background-color: #ffffff;">
                            <div class="d-flex align-items-center">
                                <div class="position-relative mx-2"
                                    style="width: 50px; height: 50px; border-radius: 10px; background-color: #1965FE;">
                                    <i class="fa-solid fa-users position-absolute top-50 start-50 translate-middle"
                                        style="color: rgb(255, 255, 255);"></i>
                                </div>
                                <div>
                                    <h5>Total</h5>
                                    <h6>${allcontacts.length}</h6>
                                </div>
                            </div>
                        </div>
  `
  totCard.innerHTML = card1;
  
  for (let i = 0; i < allcontacts.length; i++) {
    let contact = allcontacts[i];
   
    cards.innerHTML += `
       <div class="body rounded-4 shadow  col-6  " style="background-color: #ffffff; margin="10px">
                                <div class="p-3">
                                    <div class="d-flex align-items-center">
                                        <div class="position-relative mx-2"
                                            style="width: 50px; height: 50px; border-radius: 10px; background-color: #E227CA;">
                                            <div>
                                            ${contact.fav?`<div class="position-relative  mb-1  "
                                                    style="width: 20px; height: 20px; border-radius: 50%; background-color: #FFB900; margin-left: 2.4rem; ">
                                                    <i class="fa-solid fa-star position-absolute top-50 start-50 translate-middle fa-2xs "
                                                        style="color: rgb(255, 255, 255);"></i>
                                                </div>`:`<div class="position-relative  mb-1 d-none "
                                                    style="width: 20px; height: 20px; border-radius: 50%; background-color: #FFB900; margin-left: 2.4rem; ">
                                                    <i class="fa-solid fa-star position-absolute top-50 start-50 translate-middle fa-2xs "
                                                        style="color: rgb(255, 255, 255);"></i>
                                                </div>`}
                                                
                                            </div>
                                            <div class="position-absolute top-50 start-50 translate-middle"
                                                style="color: rgb(255, 255, 255);">${contact.name.charAt(0).toUpperCase()}</div>
                                            <div>
                                            ${contact.eme?` <div class="position-relative  mt-3 "
                                                    style="width: 20px; height: 20px; border-radius: 50%; background-color: #FF2056; margin-left: 2.4rem;">
                                                    <i class="fa-solid fa-heart-pulse position-absolute top-50 start-50 translate-middle fa-2xs"
                                                        style="color: rgb(255, 255, 255);"></i>
                                                </div>
                                            </div>`:`<div class="position-relative  mt-3 d-none"
                                                    style="width: 20px; height: 20px; border-radius: 50%; background-color: #FF2056; margin-left: 2.4rem;">
                                                    <i class="fa-solid fa-heart-pulse position-absolute top-50 start-50 translate-middle fa-2xs"
                                                        style="color: rgb(255, 255, 255);"></i>
                                                </div>
                                            </div>`}
                                               
                                        </div>
                                        <div class="ms-3 contact-name-phone">
                                            <h5>${list[i].name}</h5>
                                            <div class="position-relative "
                                                style="width: 22px; height: 22px; border-radius: 5px; background-color: #DBEAFE;">
                                                <i class="fa-solid fa-phone position-absolute top-50 start-50 translate-middle fa-2xs"
                                                    style="color:#2266FC;"></i>
                                                <p style="margin-left: 1.9rem; margin-top: 2px;">${list[i].phone}</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="position-relative ms-2 mt-2 contact-email"
                                        style="width: 22px; height: 22px; border-radius: 5px; background-color: #EDE9FE;">
                                        <i class="fa-solid fa-envelope position-absolute top-50 start-50 translate-middle fa-2xs"
                                            style="color:#7F22FE;"></i>
                                        <p style="margin-left: 1.9rem; margin-top: 2px;">${list[i].email}</p>
                                    </div>

                                    <div class="d-flex mt-2 contact-type">
                                    ${contact.category=="1"?` <div class="p-1 me-1 rounded-2"
                                            style="background-color: #DBEAFE; color: #006eff;">Family</div>`:` <div class="p-1 me-1 rounded-2 d-none"
                                            style="background-color: #DBEAFE; color: #006eff;">Family</div>`}
                                    ${contact.category=="2"?` <div class="p-1 me-1 rounded-2"
                                            style="background-color: #DBFCE7; color: #2A8436;">Friends</div>`:` <div class="p-1 me-1 rounded-2 d-none"
                                            style="background-color: #DBFCE7; color: #2A8436;">Friends</div>`}
                                    ${contact.category=="3"?`<div class="p-1 me-1 rounded-2"
                                            style="background-color: #F3E8FF; color: #8258EB;">Work</div>`:`<div class="p-1 me-1 rounded-2 d-none"
                                            style="background-color: #F3E8FF; color: #8258EB;">Work</div>`}
                                    ${contact.category=="4"?`<div class="p-1 me-1 rounded-2"
                                            style="background-color: #FEF3C6; color: #BB5026;">school</div>`:`<div class="p-1 me-1 rounded-2 d-none"
                                            style="background-color: #FEF3C6; color: #BB5026;">school</div>`}
                                             ${contact.category=="5"?`<div class="p-1 me-1 rounded-2"
                                            style="background-color: #F3F4F6; color: #36415D;">Other</div>`:`<div class="p-1 me-1 rounded-2 d-none"
                                            style="background-color: #F3F4F6; color: #36415D;">Other</div>`}
                                        
                                            ${contact.eme?` <div class="p-1 rounded-2" style="background-color: #FFF1F2; color: #EC003F;">
                                            <i class="fa-solid fa-heart-pulse " style="color: #EC003F;"></i>Emergency
                                        </div>`:` <div class="p-1 rounded-2 d-none" style="background-color: #FFF1F2; color: #EC003F;">
                                            <i class="fa-solid fa-heart-pulse " style="color: #EC003F;"></i>Emergency
                                        </div>`}
                                      
                                    </div>
                                </div>
                                <div
                                    class="bg-body-tertiary p-2 rounded-bottom-4 d-flex justify-content-between p-3 px-3">
                                    <div class="d-flex">
                                        <div class="position-relative me-2  "
                                            style="width: 30px; height: 30px; border-radius: 5px; background-color: #D0FAE5;">
                                            <i class="fa-solid fa-phone position-absolute top-50 start-50 translate-middle fa-sm"
                                                style="color: #23A97C;"></i>
                                        </div>
                                        <div class="position-relative   "
                                            style="width: 30px; height: 30px; border-radius: 5px; background-color: #EDE9FE;">
                                            <i class="fa-solid fa-envelope position-absolute top-50 start-50 translate-middle fa-sm"
                                                style="color: #7F22FE;"></i>
                                        </div>
                                    </div>
                                    <div class="d-flex">
                                        <div class="position-relative me-2  "
                                            style="width: 30px; height: 30px; border-radius: 5px; background-color: #FEF3C6;">
                                            <i  class="fa-solid fa-star position-absolute top-50 start-50 translate-middle fa-sm"
                                                style="color: #FFB900;"></i>
                                        </div>
                                        <div class="position-relative me-2  "
                                            style="width: 30px; height: 30px; border-radius: 5px; background-color: #FFEFF0;">
                                            <i class="fa-solid fa-heart-pulse position-absolute top-50 start-50 translate-middle fa-sm"
                                                style="color: #FF2056;"></i>
                                        </div>
                                        <div class="position-relative me-2  "
                                            style="width: 30px; height: 30px; border-radius: 5px; ">
                                            <i onclick="updateContact(${i})" class="fa-solid fa-pen position-absolute top-50 start-50 translate-middle fa-sm"
                                                style="color: rgb(111, 111, 111);"></i>
                                        </div>
                                        <div class="position-relative   "
                                            style="width: 30px; height: 30px; border-radius: 5px;">
                                            <i onclick="deletContact(${i})" class="fa-solid fa-trash position-absolute top-50 start-50 translate-middle fa-sm"
                                                style="color: rgb(111, 111, 111);"></i>
                                        </div>

                                    </div>
                                </div>
                            </div>
    `;
  }
}
function sweatAlert(){
   
      Swal.fire({
  title: "Contact Added!",
  text: `norhan was added successfully`,
  icon: "success"
}).then(() => {
     modal = bootstrap.Modal.getInstance(modal);
    modal.hide();
  });
}
function addToFav(contact) {
   
  isChecked1 = inputfav.checked;
  console.log("hiiiiiiiiiii")
    localStorage.setItem("allcontacts", JSON.stringify(allcontacts));
  if (contact.fav) {
     
    var card2 = `
   <div class="body rounded-4 shadow p-3" style="background-color: #ffffff;">
                            <div class="d-flex align-items-center">
                                <div class="position-relative mx-2"
                                    style="width: 50px; height: 50px; border-radius: 10px; background-color: #FF8500;">
                                    <i class="fa-solid fa-star position-absolute top-50 start-50 translate-middle"
                                        style="color: rgb(255, 255, 255);"></i>
                                </div>
                                <div>
                                    <h5>Favorites</h5>
                                    <h6>${allcontacts.filter(c => c.fav).length}</h6>
                                </div>
                            </div>
                        </div>
  `
    favCard.innerHTML = card2;
      // localStorage.setItem("favCard",JSON.stringify(favCard))
   
  }
}
function displayFav(){
  var favCount = allcontacts.filter(c => c.fav).length;
   var card2 = `
   <div class="body rounded-4 shadow p-3" style="background-color: #ffffff;">
                            <div class="d-flex align-items-center">
                                <div class="position-relative mx-2"
                                    style="width: 50px; height: 50px; border-radius: 10px; background-color: #FF8500;">
                                    <i class="fa-solid fa-star position-absolute top-50 start-50 translate-middle"
                                        style="color: rgb(255, 255, 255);"></i>
                                </div>
                                <div>
                                    <h5>Favorites</h5>
                                    <h6>${favCount}</h6>
                                </div>
                            </div>
                        </div>
  `
    favCard.innerHTML = card2;
}
function addFavSide(contact) {

  if (contact.fav) {

  favSide.innerHTML += `
    <div class="d-flex align-items-center justify-content-between">

      <div class="d-flex align-items-center">

        <div class="position-relative mx-2"
          style="width: 50px; height: 50px; border-radius: 10px; background-color: #E227CA;">

          <div class="position-absolute top-50 start-50 translate-middle text-white">
             ${contact.name.charAt(0).toUpperCase()}
          </div>

        </div>

        <div class="contact-name-phone">
          <h5>${contact.name}</h5>
          <p style="margin-top:2px;">${contact.phone}</p>
        </div>

      </div>

      <div class="position-relative mt-4"
        style="width:30px;height:30px;border-radius:5px;background:#d0fae5;">

        <i class="fa-solid fa-phone position-absolute top-50 start-50 translate-middle fa-2xs"
          style="color:#00BC7D;"></i>

      </div>

    </div>
  `};
}
function renderFavSide() {

  favSide.innerHTML = "";

  for (let contact of allcontacts) {
    addFavSide(contact);
  }
}
function addToEme(contact) {
  contact.eme = inputeme.checked;
  console.log("hiiiiiiiiiii")
localStorage.setItem("allcontacts", JSON.stringify(allcontacts));
  if (contact.eme) {
    var card3 = `
  <div class="body rounded-4 shadow p-3" style="background-color: #ffffff;">
                            <div class="d-flex align-items-center">
                                <div class="position-relative mx-2"
                                    style="width: 50px; height: 50px; border-radius: 10px; background-color: #F3073A;">
                                    <i class="fa-solid fa-heart-pulse position-absolute top-50 start-50 translate-middle"
                                        style="color: rgb(255, 255, 255);"></i>
                                </div>
                                <div>
                                    <h5>Emergency</h5>
                                    <h6>${allcontacts.filter(f => f.eme).length}</h6>
                                </div>
                            </div>
                        </div>
  `
    emeCard.innerHTML = card3;
  }
}
function displayeme(){
  var emeCount = allcontacts.filter(c => c.eme).length;
    var card3 = `
  <div class="body rounded-4 shadow p-3" style="background-color: #ffffff;">
                            <div class="d-flex align-items-center">
                                <div class="position-relative mx-2"
                                    style="width: 50px; height: 50px; border-radius: 10px; background-color: #F3073A;">
                                    <i class="fa-solid fa-heart-pulse position-absolute top-50 start-50 translate-middle"
                                        style="color: rgb(255, 255, 255);"></i>
                                </div>
                                <div>
                                    <h5>Emergency</h5>
                                    <h6>${emeCount}</h6>
                                </div>
                            </div>
                        </div>
  `
    emeCard.innerHTML = card3;
}
function addEmeSide(contact) {
  isChecked2 = inputeme.checked;
  console.log("hiiiiiiiiiii")

  if (contact.eme) {
    var side2 = `    <div class="d-flex align-items-center justify-content-between ">
                                <div class="d-flex align-items-center">
                                <div class="position-relative mx-2"
                                    style="width: 50px; height: 50px; border-radius: 10px; background-color: #E227CA;">

                                    <div class="position-absolute top-50 start-50 translate-middle"
                                        style="color: rgb(255, 255, 255);">${contact.name.charAt(0).toUpperCase()}</div>

                                </div>
                                <div class=" contact-name-phone">
                                    <h5>${contact.name}</h5>
                                    <p style=" margin-top: 2px;">${contact.phone}</p>


                                </div></div>
                               <div class="position-relative mt-4 ms-5 "
                                style="width: 30px; height: 30px; border-radius: 5px; background-color: #FFE4E6;">
                                <i class="fa-solid fa-phone position-absolute top-50 start-50 translate-middle fa-2xs"
                                    style="color:#FF2056;"></i>

                            </div>
                            </div>
                            
`
    emeSide.innerHTML += side2;
  }
}
function renderEmeSide() {

  emeSide.innerHTML = "";

  for (let contact of allcontacts) {
    addEmeSide(contact);
  }
}
function closeForm(){
     modal = bootstrap.Modal.getInstance(modal);
    modal.hide();
}
function deletContact(index) {
 Swal.fire({
  title: "Delete Contact?",
  text: `Are you sure you want to delete body? This action cannot be undone.`,
  icon: "warning",
   showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete it!"
}).then((result) => {if (result.isConfirmed) {
  allcontacts.splice(index, 1);
  localStorage.setItem("allcontacts", JSON.stringify(allcontacts));
  displayContacts(allcontacts);
  totCard.innerHTML = `
    <div class="body rounded-4 shadow p-3" style="background-color: #ffffff;">
      <div class="d-flex align-items-center">
        <div class="position-relative mx-2"
          style="width: 50px; height: 50px; border-radius: 10px; background-color: #1965FE;">
          <i class="fa-solid fa-users position-absolute top-50 start-50 translate-middle"
            style="color: white;"></i>
        </div>
        <div>
          <h5>Total</h5>
          <h6>${allcontacts.length}</h6>
        </div>
      </div>
    </div>
  `;
  let favCount = allcontacts.filter(c => c.fav).length;

  favCard.innerHTML = `
    <div class="body rounded-4 shadow p-3" style="background-color: #ffffff;">
      <div class="d-flex align-items-center">
        <div class="position-relative mx-2"
          style="width: 50px; height: 50px; border-radius: 10px; background-color: #FF8500;">
          <i class="fa-solid fa-star position-absolute top-50 start-50 translate-middle"
            style="color: white;"></i>
        </div>
        <div>
          <h5>Favorites</h5>
          <h6>${favCount}</h6>
        </div>
      </div>
    </div>
  `;
   let emeCount = allcontacts.filter(c => c.eme).length;
    emeCard.innerHTML = ` <div class="body rounded-4 shadow p-3" style="background-color: #ffffff;">
                            <div class="d-flex align-items-center">
                                <div class="position-relative mx-2"
                                    style="width: 50px; height: 50px; border-radius: 10px; background-color: #F3073A;">
                                    <i class="fa-solid fa-heart-pulse position-absolute top-50 start-50 translate-middle"
                                        style="color: rgb(255, 255, 255);"></i>
                                </div>
                                <div>
                                    <h5>Emergency</h5>
                                    <h6>${emeCount}</h6>
                                </div>
                            </div>
                        </div>`;
  renderFavSide();
  renderEmeSide();
    Swal.fire({
        title: "Deleted!",
        text: "The contact has been deleted.",
        icon: "success"
      });
    }
  });
}
function updateContact(index){
  console.log("hiiiiupdate")
  
   currentIndex = index;

  var contact = allcontacts[index];

  inputName.value = contact.name;
  inputPhone.value = contact.phone;
  inputEmail.value = contact.email;
  inputAddress.value = contact.address;
  inputNote.value = contact.note;

  inputfav.checked = contact.fav;
  inputeme.checked = contact.eme;

  var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
  myModal.show();
 
}
function saveUpdate() {

  var contact = {
    name: inputName.value,
    phone: inputPhone.value,
    email: inputEmail.value,
    address: inputAddress.value,
    note: inputNote.value,
    category: contactCategory.value,
    fav: inputfav.checked,
    eme: inputeme.checked
  };

  if (currentIndex === -1) {
    allcontacts.push(contact);
  } else {
    allcontacts[currentIndex] = contact;
     Swal.fire({
  title: "Contact updated!",
  text: `contact has been updated successfully`,
  icon: "success"})
    currentIndex = -1;
  }

  localStorage.setItem("allcontacts", JSON.stringify(allcontacts));

  displayContacts(allcontacts);

  form.reset();

  bootstrap.Modal.getInstance(document.getElementById('exampleModal')).hide();
}
function search(){
    console.log("hiiSearch")
    var searchlist=[]
    for(var i=0;i<allcontacts.length ; i++){
        contact=allcontacts[i]
        if(contact.name.toLowerCase().includes(searchInput.value.toLowerCase())||contact.email.toLowerCase().includes(searchInput.value.toLowerCase())||String(contact.phone).includes(searchInput.value) ){

        searchlist.push(allcontacts[i])
        }
        
    }
    displayContacts(searchlist)
}

function validateName(){
   var regex=/[A-Z][a-z]/
   if(regex.test(inputName.value)){
      if(nameAleart.classList.contains("d-block")){
        nameAleart.classList.replace("d-block","d-none",)
       }
   }else{
    nameAleart.classList.replace("d-none","d-block")
   }
}

inputName.addEventListener("blur",function(){
  validateName()
})

function validatePhone(){
   var regex2=/^01(0|1|2|5)[0-9]{8}$/
   if(regex2.test(inputPhone.value)){
       if(phoneAleart.classList.contains("d-block")){
        phoneAleart.classList.replace("d-block","d-none",)
       }
   }else{
    phoneAleart.classList.replace("d-none","d-block")
   }
}

inputPhone.addEventListener("blur",function(){
  validatePhone()
})

function validateEmail(){
   var regexemail=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
   if(regexemail.test(inputEmail.value)){
     if(emailAleart.classList.contains("d-block")){
        emailAleart.classList.replace("d-block","d-none",)
       }
   }else{
    emailAleart.classList.replace("d-none","d-block")
   }
}

inputEmail.addEventListener("blur",function(){
  validateEmail()
})
