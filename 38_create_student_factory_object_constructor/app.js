

function StudentFactoryObject(first, last, age, gender) {
  this.firstName = first; // Assign the 'first' parameter to the 'firstName' property
  this.lastName = last; // Assign the 'last' parameter to the 'lastName' property
  this.age = age; // Assign the 'age' parameter to the 'age' property
  this.gender = gender; // Assign the 'gender' parameter to the 'gender' property
  return `(firstName : ${this.firstName})  (lastName : ${this.lastName})  (age : ${this.age}) (gender :${this.gender})`
}




var elementIndex = 0;
function createObject() {


  var fname = document.getElementById('fname').value
  var lname = document.getElementById('lname').value
  var age = document.getElementById('age').value
  var gender = document.getElementById('gender').value


  var student1 = new StudentFactoryObject(fname, lname, age, gender);
  // Create a new instance of the 'StudentFactoryObject'
  // using the 'new' keyword and pass the arguments
 
//   document.getElementById('result').innerHTML = `
//     <div>{First Name : '${student1.firstName}',
//           Last Name : '${student1.lastName}',
//           Age : '${student1.age}',
//           Gender : '${student1.gender}'}
//     </div>
     

// `
document.getElementById('result').innerHTML = 
document.getElementById('result').innerHTML + 
`<input type="text" class="jsonData" id="`+elementIndex+`" value='`+JSON.stringify(student1)+`'><br>`;
elementIndex++;
}


