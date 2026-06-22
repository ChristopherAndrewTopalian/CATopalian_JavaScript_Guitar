// makeColorDefaultButton.js

function makeColorDefaultButton()
{
    let theButton = ce('button');
    theButton.textContent = 'Color Default';
    theButton.onclick = function()
    {
        colorNotesDefault();
    };
    // ge('colorContainer').append(theButton);
    return theButton;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

