// makeNotesPlayedButton.js

let counter = 0;
let timer001;

function makeNotesPlayedButton()
{
    /*
    for (let i = 0; i < notesPlayed.length; i++)
    {
        originalColors[i] = ge(notesPlayed[i]).style.backgroundColor;
        //originalColors[i] = window.getComputedStyle(ge(notesPlayed[i])).backgroundColor;
    }
    */

    let theButton = ce('button');
    theButton.textContent = 'Play';
    theButton.style.position = 'absolute';
    theButton.style.left = 530 + 'px';
    theButton.style.top = 0 + 'px';
    theButton.onclick = function()
    {
        clearInterval(timer001);

        // we make it play mode by false
        isRecordMode = false;

        ge('mode').textContent = 'Play Mode';

        counter = 0;

        //let originalColor =  window.getComputedStyle(ge(notesPlayed[counter])).backgroundColor;

        timer001 = setInterval(function()
        {
            ge(notesPlayed[counter]).click();

            // highlight the note being played

            ge(notesPlayed[counter]).style.border = 'solid 1px rgb(255, 255, 255)';

            // ge(notesPlayed[counter]).style.backgroundColor = 'rgb(0, 213, 255)';

            /*
            if (counter >= notesPlayed.length)
            {
                clearInterval(timer001);
                // counter = counter - 1;
            }
            */

            //  counter++;

            setTimeout(function()
            {
                ge(notesPlayed[counter]).style.border = 'solid 1px rgb(0, 0, 0)';

                //ge(notesPlayed[counter]).style.backgroundColor = originalColors[counter];
                counter += 1;
            }, 200);
        
        }, 1000);
    };
    ba(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

