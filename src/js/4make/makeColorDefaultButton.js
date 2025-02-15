// makeColorDefaultButton.js

function makeColorDefaultButton()
{
    let theButton = ce('button');
    theButton.textContent = 'Color Default';
    theButton.style.position = 'absolute';
    theButton.style.right = 160 + 'px';
    theButton.style.top = 0 + 'px';
    theButton.onclick = function()
    {
        colorNotesDefault();
    };
    ba(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

