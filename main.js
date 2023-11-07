// //GLOBAL VARIABLES
let formContainer = document.querySelector('.form-container');
let sortButton1 = document.querySelector('.sortButton');
let sortButton2 = document.querySelector('#sortButton2');


//HOUSES ARRAY 
const houses = [Gryffindor, Hufflepuff, Ravenclaw, Slytherin]



// // FUNCTIONS
// // const showForm = () => {
// //   let sortCard = document.querySelector('.container-1');

// //   sortCard.remove();

// //   sortCard.innerHTML = `<div class="form-container">
// //   <div class="form-container2" >
// //     <div class="card text-center">
// //       <div class="card-header">
// //         Featured
// //       </div>
// //       <div class="card-body">
// //         <h5 class="card-title">Enter First Year's Name Here!</h5>
// //         <a href="#" id='sortButton2'class="btn btn-primary">SORT!</a>
// //       </div>
// //       <div class="card-footer text-muted">
// //       2 days ago
// //       </div>
// //     </div>
// //   </div>
// // </div>`
// // }





const showForm = () => {
  let sortCard = document.querySelector('.container-1');

  if (sortCard) {
    sortCard.remove();
  }

  formContainer.innerHTML = `
    <div class="form-container">
      <div class="form-container2">
        <div class="card text-center">
          <div class="card-header">
            Featured
          </div>
          <div class="card-body">
            <h5 class="card-title">Enter First Year's Name Here!</h5>
            <a href="#" id='sortButton2' class="btn btn-primary">SORT!</a>
          </div>
          <div class="card-footer text-muted">
            2 days ago
          </div>
        </div>
      </div>
    </div>
  `;
};



function assignHouse() {
  const name = document.getElementById('nameInput').value;
  if (name.trim() !== '') {
    const randomHouse = houses[Math.floor(Math.random() * houses.length)];
    return randomHouse;
  }
}

function updateTable(name, house) {
  const table = document.getElementById('assignedNamesTable');
  const row = table.insertRow(-1);
  const nameCell = row.insertCell(0);
  const houseCell = row.insertCell(1);
  nameCell.innerHTML = name;
  houseCell.innerHTML = house;
}

//EVENT LISTENERS
sortButton1.addEventListener('click', showForm)
sortButton2.addEventListener('click', assignHouse)
