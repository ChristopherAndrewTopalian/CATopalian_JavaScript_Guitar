// colorTheScale.js

let aMajorScale = [ "a", "b", "csharp", "d", "e", "fsharp", "gsharp" ];

let asharpMajorScale = ["asharp", "c", "csharp", "dsharp", "f", "fsharp", "gsharp"];

let bMajorScale = [ "b", "csharp", "dsharp", "e", "fsharp", "gsharp", "asharp" ];

let cMajorScale = [ "c", "d", "e", "f", "g", "a", "b" ];

let csharpMajorScale = [ "csharp", "dsharp", "e", "fsharp", "gsharp", "asharp", "b" ];

let dMajorScale = [ "d", "e", "fsharp", "g", "a", "b", "csharp" ];

let dsharpMajorScale = [ "dsharp", "f", "fsharp", "gsharp", "asharp", "c", "csharp" ];

let eMajorScale = [ "e", "fsharp", "gsharp", "a", "b", "csharp", "dsharp" ];

let fMajorScale = [ "f", "g", "a", "asharp", "c", "d", "e" ];

let fsharpMajorScale = [ "fsharp", "gsharp", "asharp", "b", "csharp", "dsharp", "f" ];

let gMajorScale = [ "g", "a", "b", "c", "d", "e", "fsharp" ];

let gsharpMajorScale = [ "gsharp", "asharp", "b", "csharp", "dsharp", "f", "fsharp" ];

function colorTheScale(whichScale)
{
    ge('chosenScale').textContent = whichScale;

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
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

