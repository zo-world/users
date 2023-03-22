function displayUsers(usersArray){
  //travel the array
  let row = "";
  for(let i=0; i<usersArray.length; i++){
    //get each user
    let user = usersArray[i];
  //create the row
    row=`
    <tr>
      <td>${user.email}</td>
      <td>${user.fname}</td>
      <td>${user.lname}</td>
      <td>${user.age}</td>
      <td>${user.address}</td>
      <td>${user.payment}</td>
      <td>${user.phone}</td>
      <td style="background-color:${user.color};"></td>
    </tr>
    `;
    console.log(row);
    //append the row into the table (users.html)
    $("#usersTable").append(row);
  } 
    //** add the table under the users.html */
    
    console.log(usersArray);

}

function init(){
  let usersList = readUsers();
  displayUsers(usersList);
}

window.onload=init;