// makePlayLoopButton.js

let counterLoop = 0;
let timerLoop001;

function makePlayLoopButton()
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
        ge('mode').textContent = 'Play Loop Mode';

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
                    // Restart the sequence by calling the same function again
                    // Add a small delay before restarting if needed
                    setTimeout(function() {
                        // Restart the loop
                        playLoopButton.onclick();
                    }, 500); // optional delay before restart
                }
            }, 200);

        }, 1000);
    };
    ge('playContainer').append(playLoopButton);
}

/*
let counterLoop = 0;
let timerLoop001;

function makePlayLoopButton()
{
    let playLoopButton = ce('button');
    playLoopButton.id = 'playLoopButton';
    playLoopButton.textContent = 'Play Loop';
    playLoopButton.onclick = function()
    {
        clearInterval(timerLoop001);

        // we make it play mode by false
        isRecordMode = false;

        ge('mode').textContent = 'Play Mode';

        counterLoop = 0;

        timerLoop001 = setInterval(function()
        {
            ge(notesPlayed[counterLoop]).click();

            // highlight the note being played

            ge(notesPlayed[counterLoop]).style.border = 'solid 1px rgb(255, 255, 255)';

            //  counterLoop++;

            setTimeout(function()
            {
                ge(notesPlayed[counterLoop]).style.border = 'solid 1px rgb(0, 0, 0)';

                //ge(notesPlayed[counterLoop]).style.backgroundColor = originalColors[counterLoop];
                counterLoop += 1;
            }, 200);

            if (counterLoop >= notesPlayed.length)
            {
                //clearInterval(timerLoop001);
                counterLoop = 0;
            }
        
        }, 1000);
    };
    ge('playContainer').append(playLoopButton);
}
    */

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

