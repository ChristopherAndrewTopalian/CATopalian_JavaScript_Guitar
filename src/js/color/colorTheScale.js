// colorTheScale.js

function colorTheScale(whichScale)
{
    for (let x = 0; x < fretNotes.length; x++)
    {
        //let noteOnly = fretNotes[x].id;

        let noteOnly = fretNotes[x].id.split("_")[0]; // extract 'd3' from 'd3_6'

        noteOnly = noteOnly.replace(/\d+/g, ""); // turns 'dsharp3 into dsharp

        for (let i = 0; i < whichScale.length; i++)
        {
            if (whichScale.includes(noteOnly))
            {
                ge(fretNotes[x].id).className = 'naturalNotes';
            }
        }
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

