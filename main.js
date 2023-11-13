
// // //GLOBAL VARIABLES
// let formContainer = document.querySelector('.showForm');
// let sortButton1 = document.querySelector('#sortButton1');
// let firstCard = document.querySelector('.container-1');
// let studentCard = document.querySelector('#cards-container');



// //HOUSES ARRAY 
// const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

// //STUDENTS ARRAY
// const students = [];


// const randomHouse = () => {
//   const randomHouse = Math.floor(Math.random() * houses.length)

//   const newHouse = houses[randomHouse]

//   return newHouse;
// }

// const createStudent = (e) => {
//   e.preventDefault();

//   const newStudentObject = {
//     id: students.length +1,
//     name: document.querySelector("#studentNameForm").value,
//     house: randomHouse(),
//   };

//   students.unshift(newStudentObject);
//   renderToDom(students);
//   form.reset();
// };




// //Functions
// const showForm = () => {
//   let domstring = '';
//   firstCard.innerHTML = '';

//   domstring += `
//     <div class="form-container">
//   <form id='form'>
//       <div class="form-container2">
//         <div class="card text-center">
//           <div class="card-body">
//             <h5 class="card-title">Enter First Year's Name Here!</h5>
//           <div class="form-group">
//             <input type="text" class="form-control" id="studentNameForm" placeholder="Enter Name Here">
//           </div>
//             <button id='sortButton2' class="btn btn-primary">SORT!</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   <form>
//   `;
//   formContainer.innerHTML = domstring
//   let sortButton2 = document.querySelector('#sortButton2');
//   sortButton2.addEventListener('click', createStudent);
// };



// //EVENT LISTENERS
// sortButton1.addEventListener('click', showForm)





// const renderToDom = (array) => {

//   // Create our domstring so we can push our cards to it
//   let domString = ""
//   // Loop over the array and create our pie cards
//   for(let student of array){

//   domString += 
//   `<div class="card" style="width: 18rem;">
//   <div class="card-body">
//   <h6 class="card-subtitle mb-2 text-body-secondary">${student.name}</h6>
//   <width="200" height="250" style="display:block; margin-left:auto; margin-right:auto;">
//   <p>${student.house}</p>
//   <div class='container'>
//     <button class='btn btn-danger' id='expel--${student.id}'>Expel</button>
//   </div>
//   </div>
// </div>`
// }
// studentCard.innerHTML = domString
// };





// form.addEventListener('submit',createPet);


// const deleteStudent = (event) => {
//   if (event.target.id.includes('expel')) {
//     const [,id] = event.target.id.split('--')
//     const index = students.findIndex (obj => obj.id === Number(id));
//     students.splice(index,1)
//     renderToDom(students);
//   }
// }

// showForm.addEventListener('click', deleteStudent)

// renderToDom(students)



// GLOBAL VARIABLES
let formContainer = document.querySelector('.showForm');
let sortButton1 = document.querySelector('#sortButton1');
let firstCard = document.querySelector('.container-1');
let studentCard = document.querySelector('#cards-container');
let armyCard = document.querySelector('#army-container'); // New container for expelled students

// HOUSES ARRAY
const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

// STUDENTS ARRAY
const students = [];
const expelledStudents = []; // New array for expelled students

// Randomly select a house
const randomHouse = () => {
  const randomHouseIndex = Math.floor(Math.random() * houses.length);
  return houses[randomHouseIndex];
};

// Create a new student
const createStudent = (e) => {
  e.preventDefault();

  const newStudentObject = {
    id: students.length + 1,
    name: document.querySelector("#studentNameForm").value,
    house: randomHouse(),
  };

  students.unshift(newStudentObject);
  renderToDom();
  form.reset();
};

// Show the form
const showForm = () => {
  let domstring = '';
  firstCard.innerHTML = '';

  domstring += `
    <div class="form-container">
      <form id='form'>
        <div class="form-container2">
          <div class="card text-center">
            <div class="card-body">
              <h5 class="card-title">Enter First Year's Name Here!</h5>
              <div class="form-group">
                <input type="text" class="form-control" id="studentNameForm" placeholder="Enter Name Here">
              </div>
              <button id='sortButton2' class="btn btn-primary">SORT!</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  `;
  formContainer.innerHTML = domstring;
  let sortButton2 = document.querySelector('#sortButton2');
  sortButton2.addEventListener('click', createStudent);
};

// Event listeners
sortButton1.addEventListener('click', showForm);

const renderToDom = () => {
  let studentsDomString = "";
  for (let student of students) {
    studentsDomString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-body-secondary">${student.name}</h6>
          <p>${student.house}</p>
          <div class='container'>
            <button class='btn btn-danger' id='expel--${student.id}'>Expel</button>
          </div>
        </div>
      </div>`;
  }
  studentCard.innerHTML = studentsDomString;

  let expelledDomString = "";
  for (let expelledStudent of expelledStudents) {
    expelledDomString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h6 class="card-subtitle mb-2 text-body-secondary">${expelledStudent.name}</h6>
          <p>${expelledStudent.house}</p>
        </div>
      </div>`;
  }
  armyCard.innerHTML = expelledDomString;
};

// Delete a student
const deleteStudent = (event) => {
  if (event.target.id.includes('expel')) {
    const [, id] = event.target.id.split('--');
    const expelledStudent = students.find(obj => obj.id === Number(id));
    students.splice(students.indexOf(expelledStudent), 1);
    expelledStudents.push(expelledStudent);
    renderToDom();
  }
};

studentCard.addEventListener('click', deleteStudent);

renderToDom();
