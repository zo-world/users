const KEY_LS = "users";
function saveUser(user) {
  console.log("Saving user");
  let oldUsers = readUsers();
  console.log(oldUsers); //this is an object
  oldUsers.push(user);
  let val = JSON.stringify(oldUsers); // convert into string
  console.log(val); // this is an string (JSON)
  localStorage.setItem(KEY_LS, val);
}

function readUsers() {
  let users = localStorage.getItem(KEY_LS);

  if(!users) {//NOT users?
    //here the LS is empty
    console.log("No users :( ...");
    return []; //create the array
  }else{
    //if you get here the localStorafe has users
    console.log(" We have users :) ...");
    let listUsers = JSON.parse(users);//parse users back into
    return listUsers;
  }
}