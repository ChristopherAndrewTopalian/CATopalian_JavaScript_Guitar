// makePlayButton.js

let counter = 0;
let timer001;

function makePlayButton()
{
    let playLoopButton = ce('button');
    playLoopButton.id = 'playLoopButton';
    playLoopButton.textContent = 'Play Loop';

    playLoopButton.onclick = function()
    {
        // Clear any existing loop
        clearInterval(timerLoop001);

        // Set to play mode
        isRecordMode = false;
        ge('mode').textContent = 'Play Mode';

        // Reset counter
        counterLoop = 0;

        // Start the loop
        timerLoop001 = setInterval(function()
        {
            // Simulate clicking the note
            ge(notesPlayed[counterLoop]).click();

            // Highlight the current note
            ge(notesPlayed[counterLoop]).style.border = 'solid 1px rgb(255, 255, 255)';

            // Remove highlight after 200ms
            setTimeout(function()
            {
                ge(notesPlayed[counterLoop]).style.border = 'solid 1px rgb(0, 0, 0)';
                // Increment counter after highlighting
                counterLoop += 1;

                // Check if the sequence is done
                if (counterLoop >= notesPlayed.length)
                {
                    clearInterval(timerLoop001);
                    // Reset counter for potential next play
                    counterLoop = 0;
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

