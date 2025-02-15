// makeRecordModeButton.js

function makeRecordModeButton()
{
    let theButton = ce('button');
    theButton.textContent = 'Record Mode';
    theButton.style.position = 'absolute';
    theButton.style.left = 200 + 'px';
    theButton.style.bottom = 10 + 'px';
    theButton.onclick = function()
    {
        clearInterval(timer001);
    
        isRecordMode = true;
        // record mode is on when
        // isRecordMode is true

        ge('mode').textContent = 'Record Mode';
    };
    ba(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

