function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


const dialogTile = document.querySelector(".modal");
const btnContact = document.querySelector(".contact-btn");
const closeBtn = document.querySelector(".close-btn");
// closeBtn.href = "#";

// closeBtn.addEventListener("click", () => closeModal());
// btnContact.addEventListener("click", () => displayModal());
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});


function toValidate(tagName, errorlabel, errorMsg, regex) {
    if (regex) {
      if (tagName.value == "") {
        document.getElementById(errorlabel).innerHTML = "Ce champ ne peut être vide";
        tagName.focus();
        return false;
      } else if (!regex.test(tagName.value)) {
        document.getElementById(errorlabel).innerHTML = errorMsg;
        tagName.focus();
        return false;
      } else {
        document.getElementById(errorlabel).innerHTML = "";
        return true;
      }
    } else {
      if (tagName.value == '') {
        document.getElementById(errorlabel).innerHTML = errorMsg;
        if (tagName.length == undefined) {
          tagName.focus();
        }
        return false;
      } else {
        document.getElementById(errorlabel).innerHTML = "";
        return true;
      }
    }
  
  }

function validate() {
    //avec regex
    let surname = document.forms["formulaire"]["surname"];
    let regexsurname = /^[A-za-z]{3,12}$/;
    let errorsurname = 'errorsurname';
    let errorMsgsurname = 'Veuillez entrez un prénom valide';
    if (!toValidate(surname,errorsurname,errorMsgsurname,regexsurname)) return false;
  
   //avec regex
    let name = document.forms["formulaire"]["name"];
    let regexname = /^[A-za-z]{3,12}$/;
    let errorname = 'errorname';
    let errorMsgname = 'Veuillez entrez un nom valide';
    if (!toValidate(name, errorname, errorMsgname, regexname)) return false;
  
    //avec regex
    let email = document.forms["formulaire"]["email"];
    let regexemail = /(.+)@(.+){2,}\.(.+){2,}/;
    let erroremail = 'erroremail';
    let errorMsgemail = 'Veuillez entrez un em@il valide';
    if (!toValidate(email, erroremail, errorMsgemail, regexemail)) return false;
  
    //sans regex
    let message = document.forms["formulaire"]["location"];
    let errormessage = 'errormessage';
    let errorMsgmessage = "Veuillez entrer un message valide";
    if (!toValidate(message, errormessage, errorMsgmessage)) return false;
    closeForm();
    return false;}