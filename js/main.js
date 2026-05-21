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
var favSide = document.querySelector(".fav-side");
var emeSide = document.querySelector(".eme-side");
var allcontacts = [];

function addContact() {

  console.log("hiiiiiiiiiii")
  var contact = {
    name: inputName.value,
    phone: inputPhone.value,
    email: inputEmail.value,
    address: inputAddress.value,
    note: inputNote.value,
    fav: inputfav.value,
    eme: inputeme.value,
  }
  allcontacts.push(contact)

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

  var col1 = `
     <div class="body rounded-4 shadow " style="background-color: #ffffff;">
                                <div class="p-3">
                                    <div class="d-flex align-items-center">
                                        <div class="position-relative mx-2"
                                            style="width: 50px; height: 50px; border-radius: 10px; background-color: #E227CA;">
                                            <div>
                                                <div class="position-relative  mb-1  "
                                                    style="width: 20px; height: 20px; border-radius: 50%; background-color: #FFB900; margin-left: 2.4rem; ">
                                                    <i class="fa-solid fa-star position-absolute top-50 start-50 translate-middle fa-2xs "
                                                        style="color: rgb(255, 255, 255);"></i>
                                                </div>
                                            </div>
                                            <div class="position-absolute top-50 start-50 translate-middle"
                                                style="color: rgb(255, 255, 255);">NA</div>
                                            <div>
                                                <div class="position-relative  mt-3 "
                                                    style="width: 20px; height: 20px; border-radius: 50%; background-color: #FF2056; margin-left: 2.4rem;">
                                                    <i class="fa-solid fa-heart-pulse position-absolute top-50 start-50 translate-middle fa-2xs"
                                                        style="color: rgb(255, 255, 255);"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ms-3 contact-name-phone">
                                            <h5>${contact.name}</h5>
                                            <div class="position-relative "
                                                style="width: 22px; height: 22px; border-radius: 5px; background-color: #DBEAFE;">
                                                <i class="fa-solid fa-phone position-absolute top-50 start-50 translate-middle fa-2xs"
                                                    style="color:#2266FC;"></i>
                                                <p style="margin-left: 1.9rem; margin-top: 2px;">${contact.phone}</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="position-relative ms-2 mt-2 contact-email"
                                        style="width: 22px; height: 22px; border-radius: 5px; background-color: #EDE9FE;">
                                        <i class="fa-solid fa-envelope position-absolute top-50 start-50 translate-middle fa-2xs"
                                            style="color:#7F22FE;"></i>
                                        <p style="margin-left: 1.9rem; margin-top: 2px;">${contact.email}</p>
                                    </div>

                                    <div class="d-flex mt-2 contact-type">
                                        <div class="p-1 me-1 rounded-2"
                                            style="background-color: #FEF3C6; color: #BB5026;">school</div>
                                        <div class="p-1 rounded-2" style="background-color: #FFF1F2; color: #EC003F;">
                                            <i class="fa-solid fa-heart-pulse " style="color: #EC003F;"></i>Emergency
                                        </div>
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
                                            <i class="fa-solid fa-star position-absolute top-50 start-50 translate-middle fa-sm"
                                                style="color: #FFB900;"></i>
                                        </div>
                                        <div class="position-relative me-2  "
                                            style="width: 30px; height: 30px; border-radius: 5px; background-color: #FFEFF0;">
                                            <i class="fa-solid fa-heart-pulse position-absolute top-50 start-50 translate-middle fa-sm"
                                                style="color: #FF2056;"></i>
                                        </div>
                                        <div class="position-relative me-2  "
                                            style="width: 30px; height: 30px; border-radius: 5px; ">
                                            <i class="fa-solid fa-pen position-absolute top-50 start-50 translate-middle fa-sm"
                                                style="color: rgb(111, 111, 111);"></i>
                                        </div>
                                        <div class="position-relative   "
                                            style="width: 30px; height: 30px; border-radius: 5px;">
                                            <i class="fa-solid fa-envelope position-absolute top-50 start-50 translate-middle fa-sm"
                                                style="color: rgb(111, 111, 111);"></i>
                                        </div>

                                    </div>
                                </div>
                            </div>
  `
  cards.innerHTML += col1;

  addToFav(allcontacts)
  addFavSide(contact)
  addToEme(allcontacts)
  addEmeSide(contact)

}
function addToFav() {
  isChecked1 = inputfav.checked;
  console.log("hiiiiiiiiiii")
   
  if (isChecked1) {
     
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
                                    <h6>${allcontacts.length}</h6>
                                </div>
                            </div>
                        </div>
  `
    favCard.innerHTML = card2;

  }
 

}
function addFavSide() {
  isChecked1 = inputfav.checked;
  console.log("hiiiiiiiiiii")

  if (isChecked1) {
    var side1 = ` <div class="d-flex align-items-center ">
                                <div class="position-relative mx-2"
                                    style="width: 50px; height: 50px; border-radius: 10px; background-color: #E227CA;">

                                    <div class="position-absolute top-50 start-50 translate-middle"
                                        style="color: rgb(255, 255, 255);">NA</div>

                                </div>
                                <div class=" contact-name-phone">
                                    <h5>${contact.name}</h5>
                                    <p style=" margin-top: 2px;">${contact.phone}</p>


                                </div>
                            </div>
                            <div class="position-relative mt-4"
                                style="width: 30px; height: 30px; border-radius: 5px; background-color: #d0fae5;">
                                <i class="fa-solid fa-phone position-absolute top-50 start-50 translate-middle fa-2xs"
                                    style="color:#00BC7D;"></i>

                            </div>`
    favSide.innerHTML += side1;
  }
}
function addToEme() {
  isChecked2 = inputeme.checked;
  console.log("hiiiiiiiiiii")

  if (isChecked2) {
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
                                    <h6>${allcontacts.length}</h6>
                                </div>
                            </div>
                        </div>
  `
    emeCard.innerHTML = card3;
  }
}

function addEmeSide() {
  isChecked2 = inputeme.checked;
  console.log("hiiiiiiiiiii")

  if (isChecked2) {
    var side2 = `   <div class="d-flex align-items-center ">
                                <div class="position-relative mx-2"
                                    style="width: 50px; height: 50px; border-radius: 10px; background-color: #E227CA;">

                                    <div class="position-absolute top-50 start-50 translate-middle"
                                        style="color: rgb(255, 255, 255);">NA</div>

                                </div>
                                <div class=" contact-name-phone">
                                    <h5>${contact.name}</h5>
                                    <p style=" margin-top: 2px;">${contact.phone}</p>


                                </div>
                            </div>
                            <div class="position-relative mt-4 "
                                style="width: 30px; height: 30px; border-radius: 5px; background-color: #FFE4E6;">
                                <i class="fa-solid fa-phone position-absolute top-50 start-50 translate-middle fa-2xs"
                                    style="color:#FF2056;"></i>

                            </div>
`
    emeSide.innerHTML += side2;
  }
}