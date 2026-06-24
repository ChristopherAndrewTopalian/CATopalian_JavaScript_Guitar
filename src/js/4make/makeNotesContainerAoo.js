// makeNotesContainerAoo.js

function makeNotesContainerAoo()
{
    let mainDiv = ce('div');
    mainDiv.style.display = 'flex';

    let notesContainer = ce('div');
    notesContainer.id = 'notesContainerAoo';
    notesContainer.title = 'notesContainerAoo';
    notesContainer.contentEditable = 'true';
    notesContainer.style.width = 400 + 'px';
    notesContainer.style.height = 30 + 'px';
    notesContainer.style.border = 'solid 1px rgb(255, 255, 255)';
    //notesContainer.style.wordWrap = 'break-word';
    //notesContainer.style.overflowWrap = 'break-word';
    notesContainer.style.whiteSpace = 'nowrap';
    notesContainer.style.overflowX = 'scroll';
    //notesContainer.style.whiteSpace = 'normal';
    // notesContainer.contentEditable = 'true';
    //ge('middleContainer').append(notesContainer);
    mainDiv.append(notesContainer);

    //-//

    let playAooBtn = ce('button');
    playAooBtn.textContent = 'Play';
    playAooBtn.onclick = function()
    {
        playSongAoo();
    };
    //ge('middleContainer').append(playAooBtn);
    mainDiv.append(playAooBtn);

    return mainDiv;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

