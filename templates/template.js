function noteTemplateHtml(index ,note, title ) {
    return `<div class="templateDesign"><p>${title}</p><div class="postionNoteText"><span> ${note}</span></div> 
    <div class="btnNotePosition">
     <button class="butNotesDesign" onclick="moveNotes(${index},'myNotes','archivNotes')">A</button>
     <button class="butNotesDesign" onclick="moveNotes(${index},'myNotes','trashNotes')">X</button>
     </div>
     </div>`;
  }

function trashNoteTemplateHtml(index ,note, title ) {
    return `<div class="templateDesign"><p>${title}</p><div class="postionNoteText"><span> ${note}</span></div> 
    <div class="btnNotePosition">
     <button class="butNotesDesign" onclick="moveNotes(${index},'trashNotes','archivNotes')">A</button>
     <button class="butNotesDesign" onclick="deleteTrash(${index},'trashNotes')">X</button>
     </div>
     </div>`;
  }


function archivNoteTemplateHtml(index ,note, title ) {
    return `<div class="templateDesign"><p>${title}</p><div class="postionNoteText"><span> ${note}</span></div> 
    <div class="btnNotePosition">
     <button class="butNotesDesign" onclick="moveNotes(${index},'archivNotes','myNotes')">N</button>
     <button class="butNotesDesign" onclick="moveNotes(${index},'archivNotes','trashNotes')">X</button>
     </div>
     </div>`;
  }
  