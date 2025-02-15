// makeNotesContainer.js

function makeNotesContainer()
{
    let notesContainer = ce('div');
    notesContainer.id = 'notesContainer';
    notesContainer.style.position = 'absolute';
    notesContainer.style.left = 160 + 'px';
    notesContainer.style.top = 25 + 'px';
    notesContainer.style.width = 400 + 'px';
    notesContainer.style.height = 200 + 'px';
    notesContainer.style.overflow = 'scroll';
    notesContainer.style.border = 'solid 1px rgb(255, 255, 255)';
    //notesContainer.style.wordWrap = 'break-word';
    notesContainer.style.overflowWrap = 'break-word';
    //notesContainer.style.whiteSpace = 'normal';
    // notesContainer.contentEditable = 'true';
    ba(notesContainer);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

