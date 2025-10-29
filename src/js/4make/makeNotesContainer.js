// makeNotesContainer.js

function makeNotesContainer()
{
    let notesContainer = ce('div');
    notesContainer.id = 'notesContainer';
    notesContainer.style.width = 400 + 'px';
    notesContainer.style.height = 40 + 'px';
    notesContainer.style.border = 'solid 1px rgb(255, 255, 255)';
    //notesContainer.style.wordWrap = 'break-word';
    //notesContainer.style.overflowWrap = 'break-word';
    notesContainer.style.overflowX = 'scroll';
    //notesContainer.style.whiteSpace = 'normal';
    // notesContainer.contentEditable = 'true';
    ge('middleContainer').append(notesContainer);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

