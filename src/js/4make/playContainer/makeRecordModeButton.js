// makeRecordModeButton.js

function makeRecordModeButton()
{
    let theButton = ce('button');
    theButton.textContent = 'Record Mode';
    theButton.style.alignSelf = 'flex-start';
    theButton.onclick = function()
    {
        clearInterval(timer001);
    
        isRecordMode = true;
        // record mode is on when
        // isRecordMode is true

        ge('mode').textContent = 'Record Mode';
    };
    ge('middleContainer').append(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

