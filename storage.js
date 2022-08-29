


showNotes();

// If user adds a note, add it to the localStorage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  if (addTitle.value == "") {
    return alert("please add title")
  }
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  //   console.log(notesObj);
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  //     let today=new Date();
  // let month=today.getMonth() = 1;
  // let year=today.getFullYear();
  // let date=today.getDate;
  // let currentDate=`${month}/${date}/${year}`
  // output.innerText=currentDate;

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <hr>
                        <p class="card-text"> ${element.text}</p>
                       
                       
                       
                        
                    
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        <button id="${index}"onclick="editNote(this.id)" class="btn btn-primary">Edit Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

// Function to delete a note
function deleteNote(index) {
  //   console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
// Function to Edit the Note
function editNote(index) {
  let notes = localStorage.getItem("notes");
  let addTitle = document.getElementById("addTitle");
  let addTxt = document.getElementById("addTxt");

  if (addTitle.value !== "" || addTxt.value !== "") {
    return alert("Please clear the form before editing a note")
  }

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  console.log(notesObj);

  notesObj.findIndex((element, index) => {
    addTitle.value = element.title;
    addTxt.value = element.text;
  })
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}




