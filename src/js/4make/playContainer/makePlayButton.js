// makePlayButton.js

let counter = 0;
let timer001;

function makePlayButton()
{
    let playLoopButton = ce('button');
    playLoopButton.id = 'playLoopButton';
    playLoopButton.textContent = 'Play';
    playLoopButton.style.alignSelf = 'flex-start';
    playLoopButton.onclick = function()
    {
        // clear any existing loop
        clearInterval(timer001);

        // set to play mode
        isRecordMode = false;
        ge('mode').textContent = 'Play Mode';

        // reset counter
        counter = 0;

        // start the loop
        timer001 = setInterval(function()
        {
            // simulate clicking the note
            ge(notesPlayed[counter]).click();

            // highlight the current note
            ge(notesPlayed[counter]).style.border = 'solid 1px rgb(255, 255, 255)';

            // remove highlight after 200ms
            setTimeout(function()
            {
                ge(notesPlayed[counter]).style.border = 'solid 1px rgb(0, 0, 0)';
                // increment counter after highlighting
                counter += 1;

                // check if the sequence is done
                if (counter >= notesPlayed.length)
                {
                    clearInterval(timer001);
                    // reset counter for potential next play
                    counter = 0;
                }
            }, 200);

        }, 1000);
    };
    ge('playContainer').append(playLoopButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

