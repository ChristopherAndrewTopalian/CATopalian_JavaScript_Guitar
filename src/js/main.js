// shortcuts.js

function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichMessage)
{
    let result = console.log(whichMessage);
    return result;
}

function ct(whichText)
{
    let result = document.createTextNode(whichText);
    return result;
}

function gr(whichId)
{
    let result =  ge(whichId).getBoundingClientRect();
    return result;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// College of Scripting Music & Science
// Send Donations to paypal.me/keystonermarch

// worldVariables.js

let online = false;

let isChordMode = true;
let isRecordMode = true;

let originalColors = { };

let notesPlayed = [];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// fifthString.js

let fifthString = [
    {
        noteName: 'a2',
        fileName: 'a2_note',
        type: 'natural',
        id: 'a2_5',
        string: 5
    },

    {
        noteName: 'a#2',
        fileName: 'asharp2_note',
        type: 'sharp',
        id: 'asharp_5',
        string: 5
    },

    {
        noteName: 'b2',
        fileName: 'b2_note',
        type: 'natural',
        id: 'b2_5',
        string: 5
    },

    {
        noteName: 'c3',
        fileName: 'c3_note',
        type: 'natural',
        id: 'c3_5',
        string: 5
    },

    {
        noteName: 'c#3',
        fileName: 'csharp3_note',
        type: 'sharp',
        id: 'csharp3_5',
        string: 5
    },

    {
        noteName: 'd3',
        fileName: 'd3_note',
        type: 'natural',
        id: 'd3_5',
        string: 5
    },

    {
        noteName: 'd#3',
        fileName: 'dsharp3_note',
        type: 'sharp',
        id: 'dsharp3_5',
        string: 5
    },

    {
        noteName: 'e3',
        fileName: 'e3_note',
        type: 'natural',
        id: 'e3_5',
        string: 5
    },

    {
        noteName: 'f3',
        fileName: 'f3_note',
        type: 'natural',
        id: 'f3_5',
        string: 5
    },

    {
        noteName: 'f#3',
        fileName: 'fsharp3_note',
        type: 'sharp',
        id: 'fsharp3_5',
        string: 5
    },

    {
        noteName: 'g3',
        fileName: 'g3_note',
        type: 'natural',
        id: 'g3_5',
        string: 5
    },

    {
        noteName: 'g#3',
        fileName: 'gsharp3_note',
        type: 'sharp',
        id: 'gsharp3_5',
        string: 5
    },

    {
        noteName: 'a3',
        fileName: 'a3_note',
        type: 'natural',
        id: 'a3_5',
        string: 5
    },

    {
        noteName: 'a#3',
        fileName: 'asharp3_note',
        type: 'sharp',
        id: 'asharp3_5',
        string: 5
    },

    {
        noteName: 'b3',
        fileName: 'b3_note',
        type: 'natural',
        id: 'b3_5',
        string: 5
    },

    {
        noteName: 'c4',
        fileName: 'c4_note',
        type: 'natural',
        id: 'c4_5',
        string: 5
    },

    {
        noteName: 'c#4',
        fileName: 'csharp4_note',
        type: 'sharp',
        id: 'csharp4_5',
        string: 5
    },

    {
        noteName: 'd4',
        fileName: 'd4_note',
        type: 'natural',
        id: 'd4_5',
        string: 5
    },

    {
        noteName: 'd#4',
        fileName: 'dsharp4_note',
        type: 'sharp',
        id: 'dsharp4_5',
        string: 5
    },

    {
        noteName: 'e4',
        fileName: 'e4_note',
        type: 'natural',
        id: 'e4_5',
        string: 5
    },

    {
        noteName: 'f4',
        fileName: 'f4_note',
        type: 'natural',
        id: 'f4_5',
        string: 5
    },
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// firstString.js

let firstString = [
    {
        noteName: 'e4',
        fileName: 'e4_note',
        type: 'natural',
        id: 'e4_1',
        string: 1
    },

    {
        noteName: 'f4',
        fileName: 'f4_note',
        type: 'natural',
        id: 'f4_1',
        string: 1
    },

    {
        noteName: 'f#4',
        fileName: 'fsharp4_note',
        type: 'sharp',
        id: 'fsharp4_1',
        string: 1
    },

    {
        noteName: 'g4',
        fileName: 'g4_note',
        type: 'natural',
        id: 'g4_1',
        string: 1
    },

    {
        noteName: 'g#4',
        fileName: 'gsharp4_note',
        type: 'sharp',
        id: 'gsharp4_1',
        string: 1
    },

    {
        noteName: 'a4',
        fileName: 'a4_note',
        type: 'natural',
        id: 'a4_1',
        string: 1
    },

    {
        noteName: 'a#4',
        fileName: 'asharp4_note',
        type: 'sharp',
        id: 'asharp4_1',
        string: 1
    },

    {
        noteName: 'b4',
        fileName: 'b4_note',
        type: 'natural',
        id: 'b4_1',
        string: 1
    },

    {
        noteName: 'c5',
        fileName: 'c5_note',
        type: 'natural',
        id: 'c5_1',
        string: 1
    },

    {
        noteName: 'c#5',
        fileName: 'csharp5_note',
        type: 'sharp',
        id: 'csharp5_1',
        string: 1
    },

    {
        noteName: 'd5',
        fileName: 'd5_note',
        type: 'natural',
        id: 'd5_1',
        string: 1
    },

    {
        noteName: 'd#5',
        fileName: 'dsharp5_note',
        type: 'sharp',
        id: 'dsharp5_1',
        string: 1
    },

    {
        noteName: 'e5',
        fileName: 'e5_note',
        type: 'natural',
        id: 'e5_1',
        string: 1
    },

    {
        noteName: 'f5',
        fileName: 'f5_note',
        type: 'natural',
        id: 'f5_1',
        string: 1
    },

    {
        noteName: 'f#5',
        fileName: 'fsharp5_note',
        type: 'sharp',
        id: 'fsharp5_1',
        string: 1
    },

    {
        noteName: 'g5',
        fileName: 'g5_note',
        type: 'natural',
        id: 'g5_1',
        string: 1
    },

    {
        noteName: 'g#5',
        fileName: 'gsharp5_note',
        type: 'sharp',
        id: 'gsharp5_1',
        string: 1
    },

    {
        noteName: 'a5',
        fileName: 'a5_note',
        type: 'natural',
        id: 'a5_1',
        string: 1
    },

    {
        noteName: 'a#5',
        fileName: 'asharp5_note',
        type: 'sharp',
        id: 'asharp5_1',
        string: 1
    },

    {
        noteName: 'b5',
        fileName: 'b5_note',
        type: 'natural',
        id: 'b5_1',
        string: 1
    },

    {
        noteName: 'c6',
        fileName: 'c6_note',
        type: 'natural',
        id: 'c6_1',
        string: 1
    },
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// fourthString.js

let fourthString = [
    {
        noteName: 'd3',
        fileName: 'd3_note',
        type: 'natural',
        id: 'd3_4',
        string: 4
    },

    {
        noteName: 'd#3',
        fileName: 'dsharp3_note',
        type: 'sharp',
        id: 'dsharp3_4',
        string: 4
    },

    {
        noteName: 'e3',
        fileName: 'e3_note',
        type: 'natural',
        id: 'e3_4',
        string: 4
    },

    {
        noteName: 'f3',
        fileName: 'f3_note',
        type: 'natural',
        id: 'f3_4',
        string: 4
    },

    {
        noteName: 'f#3',
        fileName: 'fsharp3_note',
        type: 'sharp',
        id: 'fsharp3_4',
        string: 4
    },

    {
        noteName: 'g3',
        fileName: 'g3_note',
        type: 'natural',
        id: 'g3_4',
        string: 4
    },

    {
        noteName: 'g#3',
        fileName: 'gsharp3_note',
        type: 'sharp',
        id: 'gsharp3_4',
        string: 4
    },

    {
        noteName: 'a3',
        fileName: 'a3_note',
        type: 'natural',
        id: 'a3_4',
        string: 4
    },

    {
        noteName: 'a#3',
        fileName: 'asharp3_note',
        type: 'sharp',
        id: 'asharp3_4',
        string: 4
    },

    {
        noteName: 'b3',
        fileName: 'b3_note',
        type: 'natural',
        id: 'b3_4',
        string: 4
    },

    {
        noteName: 'c4',
        fileName: 'c4_note',
        type: 'natural',
        id: 'c4_4',
        string: 4
    },

    {
        noteName: 'c#4',
        fileName: 'csharp4_note',
        type: 'sharp',
        id: 'csharp4_4',
        string: 4
    },

    {
        noteName: 'd4',
        fileName: 'd4_note',
        type: 'natural',
        id: 'd4_4',
        string: 4
    },

    {
        noteName: 'd#4',
        fileName: 'dsharp4_note',
        type: 'sharp',
        id: 'dsharp4_4',
        string: 4
    },

    {
        noteName: 'e4',
        fileName: 'e4_note',
        type: 'natural',
        id: 'e4_4',
        string: 4
    },

    {
        noteName: 'f4',
        fileName: 'f4_note',
        type: 'natural',
        id: 'f4_4',
        string: 4
    },

    {
        noteName: 'f#4',
        fileName: 'fsharp4_note',
        type: 'sharp',
        id: 'fsharp4_4',
        string: 4
    },

    {
        noteName: 'g4',
        fileName: 'g4_note',
        type: 'natural',
        id: 'g4_4',
        string: 4
    },

    {
        noteName: 'g#4',
        fileName: 'gsharp4_note',
        type: 'sharp',
        id: 'gsharp4_4',
        string: 4
    },

    {
        noteName: 'a4',
        fileName: 'a4_note',
        type: 'natural',
        id: 'a4_4',
        string: 4
    },

    {
        noteName: 'a#4',
        fileName: 'asharp4_note',
        type: 'sharp',
        id: 'asharp4_4',
        string: 4
    },
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// harmonicMinor.js

let aHarmonicMinorScale = [ "a", "b", "c", "d", "e", "f", "gsharp" ];

let asharpHarmonicMinorScale = [ "asharp", "c", "csharp", "dsharp", "f", "fsharp", "a" ];

let bHarmonicMinorScale = [ "b", "csharp", "d", "e", "fsharp", "g", "asharp" ];

let cHarmonicMinorScale = [ "c", "d", "dsharp", "f", "g", "gsharp", "b" ];

let csharpHarmonicMinorScale = [ "csharp", "dsharp", "e", "fsharp", "gsharp", "a", "c" ];

let dHarmonicMinorScale = [ "d", "e", "f", "g", "a", "asharp", "csharp" ];

let dsharpHarmonicMinorScale = [ "dsharp", "f", "fsharp", "gsharp", "asharp", "b", "d" ];

let eHarmonicMinorScale = [ "e", "fsharp", "g", "a", "b", "c", "dsharp" ];

let fHarmonicMinorScale = [ "f", "g", "gsharp", "asharp", "c", "csharp", "e" ];

let fsharpHarmonicMinorScale = [ "fsharp", "gsharp", "a", "b", "csharp", "d", "f" ];

let gHarmonicMinorScale = [ "g", "a", "asharp", "c", "d", "dsharp", "fsharp" ];

let gsharpHarmonicMinorScale = [ "gsharp", "asharp", "b", "csharp", "dsharp", "e", "g" ];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// secondString.js

let secondString = [
    {
        noteName: 'b3',
        fileName: 'b3_note',
        type: 'natural',
        id: 'b3_2',
        string: 2
    },

    {
        noteName: 'c4',
        fileName: 'c4_note',
        type: 'natural',
        id: 'c4_2',
        string: 2
    },

    {
        noteName: 'c#4',
        fileName: 'csharp4_note',
        type: 'sharp',
        id: 'csharp4_2',
        string: 2
    },

    {
        noteName: 'd4',
        fileName: 'd4_note',
        type: 'natural',
        id: 'd4_2',
        string: 2
    },

    {
        noteName: 'd#4',
        fileName: 'dsharp4_note',
        type: 'sharp',
        id: 'dsharp4_2',
        string: 2
    },

    {
        noteName: 'e4',
        fileName: 'e4_note',
        type: 'natural',
        id: 'e4_2',
        string: 2
    },

    {
        noteName: 'f4',
        fileName: 'f4_note',
        type: 'natural',
        id: 'f4_2',
        string: 2
    },

    {
        noteName: 'f#4',
        fileName: 'fsharp4_note',
        type: 'sharp',
        id: 'fsharp4_2',
        string: 2
    },

    {
        noteName: 'g4',
        fileName: 'g4_note',
        type: 'natural',
        id: 'g4_2',
        string: 2
    },

    {
        noteName: 'g#4',
        fileName: 'gsharp4_note',
        type: 'sharp',
        id: 'gsharp4_2',
        string: 2
    },

    {
        noteName: 'a4',
        fileName: 'a4_note',
        type: 'natural',
        id: 'a4_2',
        string: 2
    },

    {
        noteName: 'a#4',
        fileName: 'asharp4_note',
        type: 'sharp',
        id: 'asharp4_2',
        string: 2
    },

    {
        noteName: 'b4',
        fileName: 'b4_note',
        type: 'natural',
        id: 'b4_2',
        string: 2
    },

    {
        noteName: 'c5',
        fileName: 'c5_note',
        type: 'natural',
        id: 'c5_2',
        string: 2
    },

    {
        noteName: 'c#5',
        fileName: 'csharp5_note',
        type: 'sharp',
        id: 'csharp5_2',
        string: 2
    },

    {
        noteName: 'd5',
        fileName: 'd5_note',
        type: 'natural',
        id: 'd5_2',
        string: 2
    },

    {
        noteName: 'd#5',
        fileName: 'dsharp5_note',
        type: 'sharp',
        id: 'dsharp5_2',
        string: 2
    },

    {
        noteName: 'e5',
        fileName: 'e5_note',
        type: 'natural',
        id: 'e5_2',
        string: 2
    },

    {
        noteName: 'f5',
        fileName: 'f5_note',
        type: 'natural',
        id: 'f5_2',
        string: 2
    },

    {
        noteName: 'f#5',
        fileName: 'fsharp5_note',
        type: 'sharp',
        id: 'fsharp5_2',
        string: 2
    },

    {
        noteName: 'g5',
        fileName: 'g5_note',
        type: 'natural',
        id: 'g5_2',
        string: 2
    }
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// sixthString.js

let sixthString = [
    {
        noteName: 'e2',
        fileName: 'e2_note',
        type: 'natural',
        id: 'e2_6',
        string: 6
    },

    {
        noteName: 'f2',
        fileName: 'f2_note',
        type: 'natural',
        id: 'f2_6',
        string: 6
    },

    {
        noteName: 'f#2',
        fileName: 'fsharp2_note',
        type: 'sharp',
        id: 'fsharp_6',
        string: 6
    },

    {
        noteName: 'g2',
        fileName: 'g2_note',
        type: 'natural',
        id: 'g2_6',
        string: 6
    },

    {
        noteName: 'g#2',
        fileName: 'gsharp2_note',
        type: 'sharp',
        id: 'gsharp2_6',
        string: 6
    },

    {
        noteName: 'a2',
        fileName: 'a2_note',
        type: 'natural',
        id: 'a2_6',
        string: 6
    },

    {
        noteName: 'a#2',
        fileName: 'asharp2_note',
        type: 'sharp',
        id: 'asharp2_6',
        string: 6
    },

    {
        noteName: 'b2',
        fileName: 'b2_note',
        type: 'natural',
        id: 'b2_6',
        string: 6
    },

    {
        noteName: 'c3',
        fileName: 'c3_note',
        type: 'natural',
        id: 'c3_6',
        string: 6
    },

    {
        noteName: 'c#3',
        fileName: 'csharp3_note',
        type: 'sharp',
        id: 'csharp3_6',
        string: 6
    },

    {
        noteName: 'd3',
        fileName: 'd3_note',
        type: 'natural',
        id: 'd3_6',
        string: 6
    },

    {
        noteName: 'd#3',
        fileName: 'dsharp3_note',
        type: 'sharp',
        id: 'dsharp3_6',
        string: 6
    },

    {
        noteName: 'e3',
        fileName: 'e3_note',
        type: 'natural',
        id: 'e3_6',
        string: 6
    },

    {
        noteName: 'f3',
        fileName: 'f3_note',
        type: 'natural',
        id: 'f3_6',
        string: 6
    },

    {
        noteName: 'f#3',
        fileName: 'fsharp3_note',
        type: 'sharp',
        id: 'fsharp3_6',
        string: 6
    },

    {
        noteName: 'g3',
        fileName: 'g3_note',
        type: 'natural',
        id: 'g3_6',
        string: 6
    },

    {
        noteName: 'g#3',
        fileName: 'gsharp3_note',
        type: 'sharp',
        id: 'gsharp3_6',
        string: 6
    },

    {
        noteName: 'a3',
        fileName: 'a3_note',
        type: 'natural',
        id: 'a3_6',
        string: 6
    },

    {
        noteName: 'a#3',
        fileName: 'asharp3_note',
        type: 'sharp',
        id: 'asharp3_6',
        string: 6
    },

    {
        noteName: 'b3',
        fileName: 'b3_note',
        type: 'natural',
        id: 'b3_6',
        string: 6
    },

    {
        noteName: 'c4',
        fileName: 'c4_note',
        type: 'natural',
        id: 'c4_6',
        string: 6
    },
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// thirdString.js

let thirdString = [
    {
        noteName: 'g3',
        fileName: 'g3_note',
        type: 'natural',
        id: 'g3_3',
        string: 3
    },

    {
        noteName: 'g#3',
        fileName: 'gsharp3_note',
        type: 'sharp',
        id: 'gsharp3_3',
        string: 3
    },

    {
        noteName: 'a3',
        fileName: 'a3_note',
        type: 'natural',
        id: 'a3_3',
        string: 3
    },

    {
        noteName: 'a#3',
        fileName: 'asharp3_note',
        type: 'sharp',
        id: 'asharp3_3',
        string: 3
    },

    {
        noteName: 'b3',
        fileName: 'b3_note',
        type: 'natural',
        id: 'b3_3',
        string: 3
    },

    {
        noteName: 'c4',
        fileName: 'c4_note',
        type: 'natural',
        id: 'c4_3',
        string: 3
    },

    {
        noteName: 'c#4',
        fileName: 'csharp4_note',
        type: 'sharp',
        id: 'csharp4_3',
        string: 3
    },

    {
        noteName: 'd4',
        fileName: 'd4_note',
        type: 'natural',
        id: 'd4_3',
        string: 3
    },

    {
        noteName: 'd#4',
        fileName: 'dsharp4_note',
        type: 'sharp',
        id: 'dsharp4_3',
        string: 3
    },

    {
        noteName: 'e4',
        fileName: 'e4_note',
        type: 'natural',
        id: 'e4_3',
        string: 3
    },

    {
        noteName: 'f4',
        fileName: 'f4_note',
        type: 'natural',
        id: 'f4_3',
        string: 3
    },

    {
        noteName: 'f#4',
        fileName: 'fsharp4_note',
        type: 'sharp',
        id: 'fsharp4_3',
        string: 3
    },

    {
        noteName: 'g4',
        fileName: 'g4_note',
        type: 'natural',
        id: 'g4_3',
        string: 3
    },

    {
        noteName: 'g#4',
        fileName: 'gsharp4_note',
        type: 'sharp',
        id: 'gsharp4_3',
        string: 3
    },

    {
        noteName: 'a4',
        fileName: 'a4_note',
        type: 'natural',
        id: 'a4_3',
        string: 3
    },

    {
        noteName: 'a#4',
        fileName: 'asharp4_note',
        type: 'sharp',
        id: 'asharp4_3',
        string: 3
    },

    {
        noteName: 'b4',
        fileName: 'b4_note',
        type: 'natural',
        id: 'b4_3',
        string: 3
    },

    {
        noteName: 'c5',
        fileName: 'c5_note',
        type: 'natural',
        id: 'c5_3',
        string: 3
    },

    {
        noteName: 'c#5',
        fileName: 'csharp5_note',
        type: 'sharp',
        id: 'csharp5_3',
        string: 3
    },

    {
        noteName: 'd5',
        fileName: 'd5_note',
        type: 'natural',
        id: 'd5_3',
        string: 3
    },

    {
        noteName: 'd#5',
        fileName: 'dsharp5_note',
        type: 'sharp',
        id: 'dsharp5_3',
        string: 3
    }
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeChord

function makeChord()
{
    let chordButton = ce('button');
    chordButton.textContent = 'Chord';
    chordButton.onclick = function()
    {
        isChordMode = true;
    };
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeChosenScale.js

function makeChosenScale()
{
    let result = ce('div');
    result.id = 'chosenScale';
    result.style.position = 'absolute';
    result.style.left = '200px';
    result.style.top = 0 + 'px';
    ba(result);
}

//----//

// makes a div for the currently chosen
// scale information to be shown

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeColorDefaultButton.js

function makeColorDefaultButton()
{
    let theButton = ce('button');
    theButton.textContent = 'Color Default';
    theButton.style.position = 'absolute';
    theButton.style.right = 160 + 'px';
    theButton.style.top = 0 + 'px';
    theButton.onclick = function()
    {
        colorNotesDefault();
    };
    ba(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeDedication.js

function makeDedication()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDivDedication';
    mainDiv.className = 'mainDiv';
    mainDiv.style.zIndex = 3000;
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = 0 + 'px';
    mainDiv.style.bottom = 5 + 'px';
    mainDiv.style.width = 270 + 'px';
    mainDiv.style.height = 20 + 'px';
    mainDiv.style.border = 'solid 2px rgb(0, 0, 0)';
    mainDiv.style.borderRadius = '8px';
    mainDiv.style.paddingLeft = '4px';
    mainDiv.style.paddingRight = '4px';
    mainDiv.style.paddingTop = '8px';
    mainDiv.style.paddingBottom = '8px';
    ba(mainDiv);

    // makeElementDraggable(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.style.display = 'flex';
    subDiv.style.alignItems = 'center';
    subDiv.style.justifyContent = 'center';
    subDiv.style.textAlign = 'center';
    subDiv.style.flexDirection = 'column';
    subDiv.className = 'textStyle002';
    subDiv.style.height = '4vh';
    mainDiv.append(subDiv);

    //-//

    // subDiv.append(ce('hr'));

    //-//

    let titleAndLink = ce('a');
    titleAndLink.href = 'https://github.com/ChristopherAndrewTopalian/';
    titleAndLink.target = '_blank';
    titleAndLink.style.fontWeight = 'bold';
    titleAndLink.textContent = 'Topalian JavaScript Guitar';
    subDiv.append(titleAndLink);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeGuitar.js

function makeGuitar()
{
    let mainDiv = ce('div');
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.style.display = 'flex';
    subDiv.style.flexDirection = 'row';
    subDiv.style.gap = 2 + 'px';
    subDiv.style.cursor = 'pointer';
    mainDiv.append(subDiv);

    //-//

    let stringSix = ce('div');
    stringSix.style.display = 'flex';
    stringSix.style.flexDirection = 'column';
    stringSix.style.gap = 3 + 'px';
    subDiv.append(stringSix);

    //-//

    for (let i = 0; i < sixthString.length; i++)
    { 
        let note = ce('div');
        note.id = sixthString[i].id;
        note.className = 'noteStyle';
        note.textContent = sixthString[i].noteName;
        note.onclick = function()
        {
            cl(sixthString[i].noteName);
            audioPlay(sixthString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(sixthString[i].id);
                ge('notesContainer').innerHTML = notesPlayed;

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }

            if (isRecordMode == false)
            {
                // playMode is active when
                // isRecordMode is false
            }

            if (isChordMode == true)
            {
                // 
            }
        };
        stringSix.append(note);
    }

    //-//

    let stringFive = ce('div');
    stringFive.style.display = 'flex';
    stringFive.style.flexDirection = 'column';
    stringFive.style.gap = 3 + 'px';
    subDiv.append(stringFive);

    //-//

    for (let i = 0; i < fifthString.length; i++)
    { 
        let note = ce('div');
        note.id = fifthString[i].id;
        note.className = 'noteStyle';
        note.textContent = fifthString[i].noteName;
        note.onclick = function()
        {
            cl(fifthString[i].noteName);
            audioPlay(fifthString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(fifthString[i].id);
                ge('notesContainer').innerHTML = notesPlayed;

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }
        };
        stringFive.append(note);
    }

    //-//

    let stringFourth = ce('div');
    stringFourth.style.display = 'flex';
    stringFourth.style.flexDirection = 'column';
    stringFourth.style.gap = 3 + 'px';
    subDiv.append(stringFourth);

    //-//

    for (let i = 0; i < fourthString.length; i++)
    { 
        let note = ce('div');
        note.id = fourthString[i].id;
        note.className = 'noteStyle';
        note.textContent = fourthString[i].noteName;
        note.onclick = function()
        {
            cl(fourthString[i].noteName);
            audioPlay(fourthString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(fourthString[i].id);
                ge('notesContainer').innerHTML = notesPlayed;

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }
        };
        stringFourth.append(note);
    }

    //-//

    let stringThird = ce('div');
    stringThird.style.display = 'flex';
    stringThird.style.flexDirection = 'column';
    stringThird.style.gap = 3 + 'px';
    subDiv.append(stringThird);

    //-//

    for (let i = 0; i < thirdString.length; i++)
    { 
        let note = ce('div');
        note.id = thirdString[i].id;
        note.className = 'noteStyle';
        note.textContent = thirdString[i].noteName;
        note.onclick = function()
        {
            cl(thirdString[i].noteName);
            audioPlay(thirdString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(thirdString[i].id);
                ge('notesContainer').innerHTML = notesPlayed;

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }
        };
        stringThird.append(note);
    }

    //-//

    let stringSecond = ce('div');
    stringSecond.style.display = 'flex';
    stringSecond.style.flexDirection = 'column';
    stringSecond.style.gap = 3 + 'px';
    subDiv.append(stringSecond);

    //-//

    for (let i = 0; i < secondString.length; i++)
    { 
        let note = ce('div');
        note.id = secondString[i].id;
        note.className = 'noteStyle';
        note.textContent = secondString[i].noteName;
        note.onclick = function()
        {
            cl(secondString[i].noteName);
            audioPlay(secondString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(secondString[i].id);
                ge('notesContainer').innerHTML = notesPlayed;

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }
        };
        stringSecond.append(note);
    }

    //-//

    let stringFirst = ce('div');
    stringFirst.style.display = 'flex';
    stringFirst.style.flexDirection = 'column';
    stringFirst.style.gap = 3 + 'px';
    subDiv.append(stringFirst);

    //-//

    for (let i = 0; i < firstString.length; i++)
    { 
        let note = ce('div');
        note.id = firstString[i].id;
        note.className = 'noteStyle';
        note.textContent = firstString[i].noteName;
        note.onclick = function()
        {
            cl(firstString[i].noteName);
            audioPlay(firstString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(firstString[i].id);
                ge('notesContainer').innerHTML = notesPlayed;

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }
        };
        stringFirst.append(note);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeNotesContainer.js

function makeNotesContainer()
{
    let notesContainer = ce('div');
    notesContainer.id = 'notesContainer';
    notesContainer.style.position = 'absolute';
    notesContainer.style.left = 160 + 'px';
    notesContainer.style.top = 25 + 'px';
    notesContainer.style.width = 400 + 'px';
    notesContainer.style.height = 200 + 'px';
    notesContainer.style.overflow = 'scroll';
    notesContainer.style.border = 'solid 1px rgb(255, 255, 255)';
    //notesContainer.style.wordWrap = 'break-word';
    notesContainer.style.overflowWrap = 'break-word';
    //notesContainer.style.whiteSpace = 'normal';
    // notesContainer.contentEditable = 'true';
    ba(notesContainer);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeNotesHorizontalContainer.js

function makeNotesHorizontalContainer()
{
    let mainDiv = ce('div');
    mainDiv.id = 'notesHorizontalContainer';
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = '165px';
    mainDiv.style.bottom = 55 + 'px';
    mainDiv.style.height = 140 + 'px';
    mainDiv.style.width = 400 + 'px';
    mainDiv.style.border = 'solid 1px rgb(255, 255, 255)';
    mainDiv.style.overflowX = 'scroll';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'row';
    ba(mainDiv);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

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

// makePlayModeButton.js

function makePlayModeButton()
{
    let theButton = ce('button');
    theButton.textContent = 'Play Mode';
    theButton.style.position = 'absolute';
    theButton.style.left = 400 + 'px';
    theButton.style.bottom = 10 + 'px';
    theButton.onclick = function()
    {
        clearInterval(timer001);

        isRecordMode = false;
        // play mode is on when
        // isRecordMode is false

        ge('mode').textContent = 'Play Mode';
    };
    ba(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

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

// makeRecordPlayStatus.js

function makeRecordPlayStatus()
{
    let mode = ce('div');
    mode.id = 'mode';
    mode.textContent = 'Record Mode';
    mode.style.position = 'absolute';
    mode.style.left = 300 + 'px';
    mode.style.bottom = 30 + 'px';
    ba(mode);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

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

// colorNotesDefault.js

function colorNotesDefault()
{
    for (let x = 0; x < fretNotes.length; x++)
    {
        if (ge(fretNotes[x].id))
        {
            ge(fretNotes[x].id).className = 'noteStyle';
        }
    }
    
    /*else if (fretNotes[x].type == 'sharp')
    {
        ge(fretNotes[x].id).style.backgroundColor = 'rgb(0, 100, 100)';
    }*/

}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

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

// makeColorNotesButton.js

function makeColorNotesButton()
{
    let theButton = ce('button');
    theButton.style.position = 'absolute';
    theButton.style.right = 0 + 'px';
    theButton.style.top = 0 + 'px';
    theButton.textContent = 'Color Natural Notes';
    theButton.className = 'buttonStyle001';
    theButton.onmouseover = function()
    {
        hoverSound();
    };
    theButton.onclick = function()
    {
        clickSound();
        colorNaturalNotes();
    };
    ba(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeHarmonicMinorContainer.js

function makeHarmonicMinorContainer()
{
    let mainDiv = ce('div');
    mainDiv.id = 'harmonicMinorContainer';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = '700px';
    mainDiv.style.top = '50px';
    mainDiv.style.height = 300 + 'px';
    mainDiv.style.overflowY = 'scroll';
    mainDiv.innerHTML = 'HARMONIC<br>MINOR';
    mainDiv.style.textAlign = 'center';
    ba(mainDiv);

    makeElementDraggable(mainDiv);
}

function makeHarmonicMinorButton(whichScale)
{
    let theButton = ce('button');
    theButton.textContent = whichScale[0].toUpperCase();
    theButton.title = whichScale;
    theButton.className = 'buttonStyle001';
    theButton.onmouseover = function()
    {
        hoverSound();
    };
    theButton.onclick = function()
    {
        clickSound();
        colorNotesDefault();
        colorTheScale(whichScale);
    };
    ge('harmonicMinorContainer').append(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeMajorButton.js

function makeMajorContainer()
{
    let mainDiv = ce('div');
    mainDiv.id = 'majorContainer';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'column';
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = '600px';
    mainDiv.style.top = '50px';
    mainDiv.style.height = 300 + 'px';
    mainDiv.style.overflowY = 'scroll';
    mainDiv.textContent = 'MAJOR';
    mainDiv.style.textAlign = 'center';
    ba(mainDiv);

    makeElementDraggable(mainDiv);
}

function makeMajorButton(whichScale)
{
    let theButton = ce('button');
    theButton.textContent = whichScale[0].toUpperCase();
    theButton.title = whichScale;
    theButton.className = 'buttonStyle001';
    theButton.onmouseover = function()
    {
        hoverSound();
    };
    theButton.onclick = function()
    {
        clickSound();
        colorNotesDefault();
        colorTheScale(whichScale);
    };
    ge('majorContainer').append(theButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// audioPlay.js

function audioPlay(noteId, volume)
{
    let audioElement = ge(noteId);

    if (audioElement)
    {
        audioElement.volume = volume;
        audioElement.currentTime = 0.05;
        audioElement.play();
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

// loadSounds.js

function loadSounds(whichArray)
{
    for (let x = 0; x < whichArray.length; x++)
    {
        let theSound = ce('audio');

        if (online == false)
        {
            theSound.src = whichArray[x].soundFileOffline;
        }
        else
        {
            theSound.src = whichArray[x].soundFileOnline;
        }

        theSound.id = whichArray[x].name + '_note';
        theSound.loop = false;
        theSound.volume = 1.0;
        ba(theSound);
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

// notes.js

let notes =
[
    {
        name: 'c1',
        soundFileOffline: 'src/media/notes/c1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/c1.mp4',
        octave: 1
    },

    {
        name: 'csharp1',
        soundFileOffline: 'src/media/notes/csharp1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/csharp1.mp4',
        octave: 1
    },

    {
        name: 'd1',
        soundFileOffline: 'src/media/notes/d1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/d1.mp4',
        octave: 1
    },

    {
        name: 'dsharp1',
        soundFileOffline: 'src/media/notes/dsharp1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/dsharp1.mp4',
        octave: 1
    },

    {
        name: 'e1',
        soundFileOffline: 'src/media/notes/e1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/e1.mp4',
        octave: 1
    },

    {
        name: 'f1',
        soundFileOffline: 'src/media/notes/f1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/f1.mp4',
        octave: 1
    },

    {
        name: 'fsharp1',
        soundFileOffline: 'src/media/notes/fsharp1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/fsharp1.mp4',
        octave: 1
    },

    {
        name: 'g1',
        soundFileOffline: 'src/media/notes/g1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/g1.mp4',
        octave: 1
    },

    {
        name: 'gsharp1',
        soundFileOffline: 'src/media/notes/gsharp1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/gsharp1.mp4',
        octave: 1
    },

    {
        name: 'a1',
        soundFileOffline: 'src/media/notes/a1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/a1.mp4',
        octave: 1
    },

    {
        name: 'asharp1',
        soundFileOffline: 'src/media/notes/asharp1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/asharp1.mp4',
        octave: 1
    },

    {
        name: 'b1',
        soundFileOffline: 'src/media/notes/b1.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/b1.mp4',
        octave: 1
    },

    {
        name: 'c2',
        soundFileOffline: 'src/media/notes/c2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/c2.mp4',
        octave: 2
    },

    {
        name: 'csharp2',
        soundFileOffline: 'src/media/notes/csharp2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/csharp2.mp4',
        octave: 2
    },

    {
        name: 'd2',
        soundFileOffline: 'src/media/notes/d2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/d2.mp4',
        octave: 2
    },

    {
        name: 'dsharp2',
        soundFileOffline: 'src/media/notes/dsharp2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/dsharp2.mp4',
        octave: 2
    },

    {
        name: 'e2',
        soundFileOffline: 'src/media/notes/e2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/e2.mp4',
        octave: 2
    },

    {
        name: 'f2',
        soundFileOffline: 'src/media/notes/f2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/f2.mp4',
        octave: 2
    },

    {
        name: 'fsharp2',
        soundFileOffline: 'src/media/notes/fsharp2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/fsharp2.mp4',
        octave: 2
    },

    {
        name: 'g2',
        soundFileOffline: 'src/media/notes/g2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/g2.mp4',
        octave: 2
    },

    {
        name: 'gsharp2',
        soundFileOffline: 'src/media/notes/gsharp2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/gsharp2.mp4',
        octave: 2
    },

    {
        name: 'a2',
        soundFileOffline: 'src/media/notes/a2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/a2.mp4',
        octave: 2
    },

    {
        name: 'asharp2',
        soundFileOffline: 'src/media/notes/asharp2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/asharp2.mp4',
        octave: 2
    },

    {
        name: 'b2',
        soundFileOffline: 'src/media/notes/b2.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/b2.mp4',
        octave: 2
    },

    {
        name: 'c3',
        soundFileOffline: 'src/media/notes/c3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/c3.mp4',
        octave: 3
    },

    {
        name: 'csharp3',
        soundFileOffline: 'src/media/notes/csharp3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/csharp3.mp4',
        octave: 3
    },

    {
        name: 'd3',
        soundFileOffline: 'src/media/notes/d3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/d3.mp4',
        octave: 3
    },

    {
        name: 'dsharp3',
        soundFileOffline: 'src/media/notes/dsharp3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/dsharp3.mp4',
        octave: 3
    },

    {
        name: 'e3',
        soundFileOffline: 'src/media/notes/e3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/e3.mp4',
        octave: 3
    },

    {
        name: 'f3',
        soundFileOffline: 'src/media/notes/f3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/f3.mp4',
        octave: 3
    },

    {
        name: 'fsharp3',
        soundFileOffline: 'src/media/notes/fsharp3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/fsharp3.mp4',
        octave: 3
    },

    {
        name: 'g3',
        soundFileOffline: 'src/media/notes/g3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/g3.mp4',
        octave: 3
    },

    {
        name: 'gsharp3',
        soundFileOffline: 'src/media/notes/gsharp3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/gsharp3.mp4',
        octave: 3
    },

    {
        name: 'a3',
        soundFileOffline: 'src/media/notes/a3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/a3.mp4',
        octave: 3
    },

    {
        name: 'asharp3',
        soundFileOffline: 'src/media/notes/asharp3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/asharp3.mp4',
        octave: 3
    },

    {
        name: 'b3',
        soundFileOffline: 'src/media/notes/b3.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/b3.mp4',
        octave: 3
    },

    {
        name: 'c4',
        soundFileOffline: 'src/media/notes/c4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/c4.mp4',
        octave: 4
    },

    {
        name: 'csharp4',
        soundFileOffline: 'src/media/notes/csharp4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/csharp4.mp4',
        octave: 4
    },

    {
        name: 'd4',
        soundFileOffline: 'src/media/notes/d4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/d4.mp4',
        octave: 4
    },

    {
        name: 'dsharp4',
        soundFileOffline: 'src/media/notes/dsharp4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/dsharp4.mp4',
        octave: 4
    },

    {
        name: 'e4',
        soundFileOffline: 'src/media/notes/e4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/e4.mp4',
        octave: 4
    },

    {
        name: 'f4',
        soundFileOffline: 'src/media/notes/f4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/f4.mp4',
        octave: 4
    },

    {
        name: 'fsharp4',
        soundFileOffline: 'src/media/notes/fsharp4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/fsharp4.mp4',
        octave: 4
    },

    {
        name: 'g4',
        soundFileOffline: 'src/media/notes/g4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/g4.mp4',
        octave: 4
    },

    {
        name: 'gsharp4',
        soundFileOffline: 'src/media/notes/gsharp4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/gsharp4.mp4',
        octave: 4
    },

    {
        name: 'a4',
        soundFileOffline: 'src/media/notes/a4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/a4.mp4',
        octave: 4
    },

    {
        name: 'asharp4',
        soundFileOffline: 'src/media/notes/asharp4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/asharp4.mp4',
        octave: 4
    },

    {
        name: 'b4',
        soundFileOffline: 'src/media/notes/b4.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/b4.mp4',
        octave: 4
    },

    {
        name: 'c5',
        soundFileOffline: 'src/media/notes/c5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/c5.mp4',
        octave: 5
    },

    {
        name: 'csharp5',
        soundFileOffline: 'src/media/notes/csharp5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/csharp5.mp4',
        octave: 5
    },

    {
        name: 'd5',
        soundFileOffline: 'src/media/notes/d5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/d5.mp4',
        octave: 5
    },

    {
        name: 'dsharp5',
        soundFileOffline: 'src/media/notes/dsharp5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/dsharp5.mp4',
        octave: 5
    },

    {
        name: 'e5',
        soundFileOffline: 'src/media/notes/e5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/e5.mp4',
        octave: 5
    },

    {
        name: 'f5',
        soundFileOffline: 'src/media/notes/f5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/f5.mp4',
        octave: 5
    },

    {
        name: 'fsharp5',
        soundFileOffline: 'src/media/notes/fsharp5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/fsharp5.mp4',
        octave: 5
    },

    {
        name: 'g5',
        soundFileOffline: 'src/media/notes/g5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/g5.mp4',
        octave: 5
    },

    {
        name: 'gsharp5',
        soundFileOffline: 'src/media/notes/gsharp5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/gsharp5.mp4',
        octave: 5
    },

    {
        name: 'a5',
        soundFileOffline: 'src/media/notes/a5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/a5.mp4',
        octave: 5
    },

    {
        name: 'asharp5',
        soundFileOffline: 'src/media/notes/asharp5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/asharp5.mp4',
        octave: 5
    },

    {
        name: 'b5',
        soundFileOffline: 'src/media/notes/b5.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/b5.mp4',
        octave: 5
    },

    {
        name: 'c6',
        soundFileOffline: 'src/media/notes/c6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/c6.mp4',
        octave: 6
    },

    {
        name: 'csharp6',
        soundFileOffline: 'src/media/notes/csharp6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/csharp6.mp4',
        octave: 6
    },

    {
        name: 'd6',
        soundFileOffline: 'src/media/notes/d6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/d6.mp4',
        octave: 6
    },

    {
        name: 'dsharp6',
        soundFileOffline: 'src/media/notes/dsharp6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/dsharp6.mp4',
        octave: 6
    },

    {
        name: 'e6',
        soundFileOffline: 'src/media/notes/e6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/e6.mp4',
        octave: 6
    },

    {
        name: 'f6',
        soundFileOffline: 'src/media/notes/f6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/f6.mp4',
        octave: 6
    },

    {
        name: 'fsharp6',
        soundFileOffline: 'src/media/notes/fsharp6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/fsharp6.mp4',
        octave: 6
    },

    {
        name: 'g6',
        soundFileOffline: 'src/media/notes/g6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/g6.mp4',
        octave: 6
    },

    {
        name: 'gsharp6',
        soundFileOffline: 'src/media/notes/gsharp6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/gsharp6.mp4',
        octave: 6
    },

    {
        name: 'a6',
        soundFileOffline: 'src/media/notes/a6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/a6.mp4',
        octave: 6
    },

    {
        name: 'asharp6',
        soundFileOffline: 'src/media/notes/asharp6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/asharp6.mp4',
        octave: 6
    },

    {
        name: 'b6',
        soundFileOffline: 'src/media/notes/b6.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/b6.mp4',
        octave: 6
    },

    {
        name: 'c7',
        soundFileOffline: 'src/media/notes/c7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/c7.mp4',
        octave: 7
    },

    {
        name: 'csharp7',
        soundFileOffline: 'src/media/notes/csharp7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/csharp7.mp4',
        octave: 7
    },

    {
        name: 'd7',
        soundFileOffline: 'src/media/notes/d7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/d7.mp4',
        octave: 7
    },

    {
        name: 'dsharp7',
        soundFileOffline: 'src/media/notes/dsharp7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/dsharp7.mp4',
        octave: 7
    },

    {
        name: 'e7',
        soundFileOffline: 'src/media/notes/e7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/e7.mp4',
        octave: 7
    },

    {
        name: 'f7',
        soundFileOffline: 'src/media/notes/f7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/f7.mp4',
        octave: 7
    },

    {
        name: 'fsharp7',
        soundFileOffline: 'src/media/notes/fsharp7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/fsharp7.mp4',
        octave: 7
    },

    {
        name: 'g7',
        soundFileOffline: 'src/media/notes/g7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/g7.mp4',
        octave: 7
    },

    {
        name: 'gsharp7',
        soundFileOffline: 'src/media/notes/gsharp7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/gsharp7.mp4',
        octave: 7
    },

    {
        name: 'a7',
        soundFileOffline: 'src/media/notes/a7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/a7.mp4',
        octave: 7
    },

    {
        name: 'asharp7',
        soundFileOffline: 'src/media/notes/asharp7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/asharp7.mp4',
        octave: 7
    },

    {
        name: 'b7',
        soundFileOffline: 'src/media/notes/b7.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/b7.mp4',
        octave: 7
    },

    {
        name: 'c8',
        soundFileOffline: 'src/media/notes/c8.mp4',
        soundFileOnline: 'https://javascriptbook.weebly.com/uploads/7/6/4/0/76407657/c8.mp4',
        octave: 8
    },
];

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

// sound.js

let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(frequency, duration, waveType, volume, detune, attackTime, releaseTime, panValue)
{
    let oscillator = audioCtx.createOscillator();
    // 'sine', 'square', 'sawtooth', 'triangle'
    oscillator.type = waveType;
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    oscillator.detune.setValueAtTime(detune, audioCtx.currentTime);

    let gainNode = audioCtx.createGain();
    let pannerNode = audioCtx.createStereoPanner();
    
    oscillator.connect(gainNode);
    gainNode.connect(pannerNode);
    pannerNode.connect(audioCtx.destination);

    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);

    // attack
    gainNode.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + attackTime);
    gainNode.gain.linearRampToValueAtTime(0, 

    // release
    audioCtx.currentTime + duration / 1000 - releaseTime);

    pannerNode.pan.setValueAtTime(panValue, audioCtx.currentTime);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration / 1000);
}

// 'sine', 'square', 'sawtooth', 'triangle'

function hoverSound()
{
    playTone(
        200,     // frequency
        250,     // duration
        'sine',  // waveType
        0.1,      // volume
        0,       // detune
        0.1,      // attackTime
        0.1,      // releaseTime
        0.0      // panValue -0.5 is left
    );
}

function clickSound()
{
    playTone(
        400,     // frequency
        500,     // duration
        'sine',  // waveType
        0.2,      // volume
        50,       // detune
        0.2,      // attackTime
        0.2,      // releaseTime
        -0.5      // panValue -0.5 is left
    );
}

function clickSound2()
{
    playTone(
        245,     // frequency
        500,     // duration
        'square',  // waveType
        0.01,      // volume
        0,       // detune
        0.1,      // attackTime
        0.2,      // releaseTime
        0.0      // panValue -0.5 is left
    );
}

function slideSound()
{
    playTone(
        300,     // frequency
        500,     // duration
        'triangle',  // waveType
        0.2,      // volume
        500,       // detune
        0.2,      // attackTime
        0.3,      // releaseTime
        -0.5      // panValue -0.5 is left
    );
}

function slideSound2()
{
    playTone(
        400,     // frequency
        500,     // duration
        'triangle',  // waveType
        0.2,      // volume
        500,       // detune
        0.2,      // attackTime
        0.3,      // releaseTime
        0.0      // panValue -0.5 is left
    );
}

function collisionSound1()
{
    playTone(
        600,     // frequency
        300,     // duration
        'sine',  // waveType
        0.2,      // volume
        0,       // detune
        0.1,      // attackTime
        0.3,      // releaseTime
        0.0      // panValue -0.5 is left
    );
}

function healingSound1()
{
    playTone(
        800,     // frequency
        100,     // duration
        'sine',  // waveType
        0.03,      // volume
        0,       // detune
        0.1,      // attackTime
        0.1,      // releaseTime
        0.0      // panValue -0.5 is left
    );
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

// makeElementDraggable.js

// creating event handler for mouse down
function createMouseDownHandler(element, state) {
    return function(e)
    {
        // ignore mouse down events on textarea or input elements
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
        {
            return;
        }

        e.preventDefault();

        state.startX = e.clientX;
        state.startY = e.clientY;

        document.onmousemove = createMouseMoveHandler(element, state);

        document.onmouseup = createMouseUpHandler();
    };
}

// creating event handler for mouse move
function createMouseMoveHandler(element, state) {
    return function(e)
    {
        // ignore mouse move events on textarea or input elements
        if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT')
        {
            return;
        }

        e.preventDefault();

        let deltaX = state.startX - e.clientX;
        let deltaY = state.startY - e.clientY;

        state.startX = e.clientX;
        state.startY = e.clientY;

        let newTop = element.offsetTop - deltaY;
        let newLeft = element.offsetLeft - deltaX;

        element.style.top = newTop + "px";
        element.style.left = newLeft + "px";
    };
}

// creating event handler for mouse up
function createMouseUpHandler()
{
    return function()
    {
        document.onmousemove = null;
        document.onmouseup = null;
    };
}

// make an element draggable
function makeElementDraggable(element)
{
    let state = { startX: 0, startY: 0 };

    element.onmousedown = createMouseDownHandler(element, state);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

// whenLoaded.js

function whenLoaded()
{
    loadSounds(notes);

    makeGuitar();

    makeChosenScale();
    makeNotesContainer();

    makeRecordModeButton();
    makePlayModeButton();
    makeRecordPlayStatus();

    makeColorNotesButton();
    makeColorDefaultButton();
    makeNotesPlayedButton();

    makeMajorContainer();
    makeMajorButton(cMajorScale);
    makeMajorButton(csharpMajorScale);
    makeMajorButton(dMajorScale);
    makeMajorButton(dsharpMajorScale);
    makeMajorButton(eMajorScale);
    makeMajorButton(fMajorScale);
    makeMajorButton(fsharpMajorScale);
    makeMajorButton(gMajorScale);
    makeMajorButton(gsharpMajorScale);
    makeMajorButton(aMajorScale);
    makeMajorButton(asharpMajorScale);
    makeMajorButton(bMajorScale);

    makeHarmonicMinorContainer();
    makeHarmonicMinorButton(aHarmonicMinorScale);
    makeHarmonicMinorButton(csharpHarmonicMinorScale);
    makeHarmonicMinorButton(dHarmonicMinorScale);
    makeHarmonicMinorButton(dsharpHarmonicMinorScale);
    makeHarmonicMinorButton(eHarmonicMinorScale);
    makeHarmonicMinorButton(fHarmonicMinorScale);
    makeHarmonicMinorButton(fsharpMajorScale);
    makeHarmonicMinorButton(gHarmonicMinorScale);
    makeHarmonicMinorButton(gsharpHarmonicMinorScale);
    makeHarmonicMinorButton(aHarmonicMinorScale);
    makeHarmonicMinorButton(asharpHarmonicMinorScale);
    makeHarmonicMinorButton(bHarmonicMinorScale);

    makeNotesHorizontalContainer();

    makeDedication();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

