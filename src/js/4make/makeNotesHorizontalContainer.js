// makeNotesHorizontalContainer.js

// visual notes as circles

function makeNotesHorizontalContainer()
{
    let mainDiv = ce('div');
    mainDiv.id = 'notesHorizontalContainer';
    mainDiv.title = 'notesHorizontalContainer';
    mainDiv.style.height = 70 + 'px';
    mainDiv.style.width = 400 + 'px';
    mainDiv.style.border = 'solid 1px rgb(255, 255, 255)';
    mainDiv.style.overflowX = 'scroll';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'row';
    ge('middleContainer').append(mainDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

