// colorNaturalNotes.js

let fretNotes = firstString.concat(secondString, thirdString, fourthString, fifthString, sixthString);

function colorNaturalNotes()
{
    // let theNotes = document.getElementsByTagName('div');
    colorNotesDefault();

    for (let x = 0; x < fretNotes.length; x++)
    {
        if (fretNotes[x].type == 'natural')
        {
            if (ge(fretNotes[x].id))
            {
                ge(fretNotes[x].id).className = 'naturalNotes';
                // ge(fretNotes[x].id).style.backgroundColor = 'rgb(100, 100, 100)';
            }
        }
        /*else if (fretNotes[x].type == 'sharp')
        {
            ge(fretNotes[x].id).style.backgroundColor = 'rgb(0, 100, 100)';
        }*/
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

