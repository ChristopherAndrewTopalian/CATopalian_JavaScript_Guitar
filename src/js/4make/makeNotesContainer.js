// makeNotesContainer.js

// notes as letters c4_2

function makeNotesContainer()
{
    let notesContainer = ce('div');
    notesContainer.id = 'notesContainer';
    notesContainer.title = 'notesContainer';
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

function makeNotesContainerAoo()
{
    let notesContainer = ce('div');
    notesContainer.id = 'notesContainerAoo';
    notesContainer.title = 'notesContainerAoo';
    notesContainer.contentEditable = 'true';
    notesContainer.style.width = 400 + 'px';
    notesContainer.style.height = 200 + 'px';
    notesContainer.style.border = 'solid 1px rgb(255, 255, 255)';
    //notesContainer.style.wordWrap = 'break-word';
    //notesContainer.style.overflowWrap = 'break-word';
    notesContainer.style.overflowX = 'scroll';
    //notesContainer.style.whiteSpace = 'normal';
    // notesContainer.contentEditable = 'true';
    ge('middleContainer').append(notesContainer);

    //-//

    let playAooBtn = ce('button');
    playAooBtn.textContent = 'Play';
    playAooBtn.onclick = function()
    {
        playSongAoo();
    };
    ge('middleContainer').append(playAooBtn);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

