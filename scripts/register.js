// Create the constructor for user
//email, password, first name, last name, age, address, phone number, color
function User(email, pass, fname, lname, age, address, phone, payment, color) {
  this.email = email;
  this.password = pass;
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.address = address;
  this.phone = phone;
  this.payment = payment;
  this.color = color;
}

function validateUser(user) {
  let valid = true;
  
  $("#txtEmail").removeClass("error");
  $("#txtPassword").removeClass("error");
  $("#txtFirstName").removeClass("error");
  $("#txtLastName").removeClass("error");
  $("#txtAge").removeClass("error");
  $("#txtAddress").removeClass("error");
  $("#txtPhoneNumber").removeClass("error");
  $("#txtColor").removeClass("error");
  
  
  if (user.email === "") {
    // if io get here it means that the email is empty
    valid = false;
    $("#txtEmail").addClass("error");
  }
  if (user.password === "") {
    // if io get here it means that the password is empty
    valid = false;
    $("#txtPassword").addClass("error");
  }
  if (user.fname === "") {
    valid = false;
    $("#txtFirstName").addClass("error");
  }
  if (user.lname === "") {
    valid = false
    $("#txtLastName").addClass("error");
  }
  if (user.age === "") {
    valid = false;
    $("#txtAge").addClass("error");
  }
  if (user.address === "") {
    valid = false;
    $("#txtAddress").addClass("error");
  }
  if (user.phone === "") {
    valid = false;
    $("#txtPhoneNumber").addClass("error");
  }
  if (user.payment === "") {
    valid = false;
    $("#txtPayment").addClass("error");
  }
  if (user.color === "") {
    valid = false;
    $("#txtColor").addClass("error");
  }
  return valid;
}

function register(){
  console.log("Register");
  let inputEmail = $("#txtEmail").val();
  let inputPassword = $("#txtPassword").val();
  let inputFirstName = $("#txtFirstName").val();
  let inputLastName = $("#txtLastName").val();
  let inputAge = $("#txtAge").val();
  let inputAddress = $("#txtAddress").val();
  let inputPhone = $("#txtPhone").val();
  let inputPayment = $("#selPayment").val();
  let inputColor = $("#txtColor").val();

  //create the newUser object
  let newUser = new User(inputEmail, inputPassword, inputFirstName, inputLastName, inputAge, inputAddress, inputPhone, inputPayment, inputColor);
  if (validateUser(newUser) === true) {
    //display the newUser on thhe console
    //display the newUser object
    saveUser(newUser);
    //clear the form
    $('input').val('');
  }
}

function init(){
  console.log("Init");
}

window.onload-init