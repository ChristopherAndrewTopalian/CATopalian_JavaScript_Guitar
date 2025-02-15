// makePlayModeButton.js

function makePlayModeButton()
{
    let theButton = ce('button');
    theButton.textContent = 'Play Mode';
    theButton.style.position = 'absolute';
    theButton.style.left = 400 + 'px';
    theButton.style.bottom = 10 + 'px';
    theButton.onclick = function()
    {
        clearInterval(timer001);

        isRecordMode = false;
        // play mode is on when
        // isRecordMode is false

        ge('mode').textContent = 'Play Mode';
    };
    ba(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

