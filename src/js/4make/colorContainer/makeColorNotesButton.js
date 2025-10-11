// makeColorNotesButton.js

function makeColorNotesButton()
{
    let theButton = ce('button');
    theButton.textContent = 'Color Natural Notes';
    theButton.className = 'buttonStyle001';
    theButton.onmouseover = function()
    {
        hoverSound();
    };
    theButton.onclick = function()
    {
        clickSound();
        colorNaturalNotes();
    };
    ge('colorContainer').append(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

