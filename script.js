let arrAllNotes = [ 
  { "myNotes": [],
    "archivNotes": [],
    "trashNotes" : [],
  }
];

let arrAllNotesStorage = [ 
  { "myNotes": [],
    "archivNotes": [],
    "trashNotes" : [],
  }
];

// let localStorageData = [];
let noteIndex = 0;


function renderContent() {
  readFromLocalStorage('Notes', 'Archiv', 'Trash');
}

if (arrAllNotes[0].myNotes.length == 0) {
  noteIndex = 0;
}

function pushInputToArray() {
  const inputTitle = document.getElementById('inputNoteTitel')
  const inputNotes = document.getElementById("inputNotes");

  if (noteIndex >= 1 && inputTitle.value !== '' && inputNotes.value !== '') {
    arrAllNotes[0].myNotes.push({ 
    title :inputTitle.value,
    note : inputNotes.value, 
  });
  createNote();
  inputTitle.value = '';
  inputNotes.value = '';
  }
  else if (inputTitle.value !== '' && inputNotes.value !== ''){
    arrAllNotes[0].myNotes.push({ 
      title :inputTitle.value,
      note : inputNotes.value,
    });
    noteIndex = noteIndex + 1;
    createNote()
    inputTitle.value = '';
    inputNotes.value = '';
  }
};

function createNote() {
  renderMyNotes();
  writeToLocalStorage('myNotes','archivNotes','trashNotes');
  let strNotes = JSON.stringify(arrAllNotes[0].myNotes);
  console.log(strNotes);
}

function writeToLocalStorage(note1, note2, note3) {
  localStorage.setItem('Notes',JSON.stringify(arrAllNotes[0][note1]));
  localStorage.setItem('Archiv',JSON.stringify(arrAllNotes[0][note2]));
  localStorage.setItem('Trash',JSON.stringify(arrAllNotes[0][note3]));
}

function readFromLocalStorage(keyNote, keyArchiv, keyTrash) {
 let localStorageNotes = JSON.parse(localStorage.getItem(keyNote));
 let localStorageArchiv = JSON.parse(localStorage.getItem(keyArchiv));
 let localStorageTrash = JSON.parse(localStorage.getItem(keyTrash));

 if (localStorageNotes !== null) {
  arrAllNotes[0].myNotes = localStorageNotes;
  arrAllNotes[0].archivNotes = localStorageArchiv;
  arrAllNotes[0].trashNotes = localStorageTrash;
  renderMyNotes();
  renderArchiv();
  renderTrashNotes();
 }
}

function moveNotes(indexNote, startKey, destinationKey) {
  console.log(indexNote,startKey,destinationKey);
  let note = arrAllNotes[0][startKey].splice(indexNote, 1)[0];
  console.log(note);
  arrAllNotes[0][destinationKey].push(note);
  renderMyNotes();
  renderArchiv();
  renderTrashNotes();
  writeToLocalStorage('myNotes','archivNotes','trashNotes');
  
}

function renderMyNotes() {
  const renderNotes = document.getElementById('myNotes');
  renderNotes.innerHTML = '';
  if (arrAllNotes[0].myNotes.length !==0) {
    for (let iMyNote = 0; iMyNote < arrAllNotes[0].myNotes.length; iMyNote++) {
    renderNotes.innerHTML += noteTemplateHtml(iMyNote,arrAllNotes[0].myNotes[iMyNote].note,arrAllNotes[0].myNotes[iMyNote].title);
    }
  }
}



function renderTrashNotes() {
  const renderTrashNotes = document.getElementById('trashNotes');
  renderTrashNotes.innerHTML = '';
  if (arrAllNotes[0].trashNotes.length !==0) {
    for (let iTrashNote = 0; iTrashNote < arrAllNotes[0].trashNotes.length; iTrashNote++) {
      renderTrashNotes.innerHTML += trashNoteTemplateHtml(iTrashNote,arrAllNotes[0].trashNotes[iTrashNote].note,arrAllNotes[0].trashNotes[iTrashNote].title);
    }
  }
}



function renderArchiv() {
  const renderArchivNotes = document.getElementById('archivNotes');
  renderArchivNotes.innerHTML = '';
  if (arrAllNotes[0].archivNotes.length !==0) {
    for (let iArchivNote = 0; iArchivNote < arrAllNotes[0].archivNotes.length; iArchivNote++) {
      console.log(iArchivNote);
      renderArchivNotes.innerHTML += archivNoteTemplateHtml(iArchivNote,arrAllNotes[0].archivNotes[iArchivNote].note,arrAllNotes[0].archivNotes[iArchivNote].title);
    }
  }
}


function deleteTrash(index, arrayNote) {
  arrAllNotes[0][arrayNote].splice(index, 1)[index];
  renderTrashNotes();
  writeToLocalStorage('myNotes','archivNotes','trashNotes');
}