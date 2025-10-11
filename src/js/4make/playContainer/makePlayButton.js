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
        clearInterval(timer001);

        // Set to play mode
        isRecordMode = false;
        ge('mode').textContent = 'Play Mode';

        // Reset counter
        counter = 0;

        // Start the loop
        timer001 = setInterval(function()
        {
            // Simulate clicking the note
            ge(notesPlayed[counter]).click();

            // Highlight the current note
            ge(notesPlayed[counter]).style.border = 'solid 1px rgb(255, 255, 255)';

            // Remove highlight after 200ms
            setTimeout(function()
            {
                ge(notesPlayed[counter]).style.border = 'solid 1px rgb(0, 0, 0)';
                // Increment counter after highlighting
                counter += 1;

                // Check if the sequence is done
                if (counter >= notesPlayed.length)
                {
                    clearInterval(timer001);
                    // Reset counter for potential next play
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

