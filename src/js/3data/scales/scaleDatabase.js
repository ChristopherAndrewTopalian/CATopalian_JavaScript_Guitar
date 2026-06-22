// scaleDatabase.js

let scaleDatabase = [
    {
        category: "Major Diatonic",
        scales: [
            {
                name: "A Major",
                data: ["a", "b", "csharp", "d", "e", "fsharp", "gsharp"]
            },
            {
                name: "A# Major",
                data: ["asharp", "c", "csharp", "dsharp", "f", "fsharp", "gsharp"]
            },
            {
                name: "B Major",
                data: ["b", "csharp", "dsharp", "e", "fsharp", "gsharp", "asharp"]
            },
            {
                name: "C Major",
                data: ["c", "d", "e", "f", "g", "a", "b"]
            },
            {
                name: "C# Major",
                data: ["csharp", "dsharp", "e", "fsharp", "gsharp", "asharp", "b"]
            },
            {
                name: "D Major",
                data: ["d", "e", "fsharp", "g", "a", "b", "csharp"]
            },
            {
                name: "D# Major",
                data: ["dsharp", "f", "fsharp", "gsharp", "asharp", "c", "csharp"]
            },
            {
                name: "E Major",
                data: ["e", "fsharp", "gsharp", "a", "b", "csharp", "dsharp"]
            },
            {
                name: "F Major",
                data: ["f", "g", "a", "asharp", "c", "d", "e"]
            },
            {
                name: "F# Major",
                data: ["fsharp", "gsharp", "asharp", "b", "csharp", "dsharp", "f"]
            },
            {
                name: "G Major",
                data: ["g", "a", "b", "c", "d", "e", "fsharp"]
            },
            {
                name: "G# Major",
                data: ["gsharp", "asharp", "b", "csharp", "dsharp", "f", "fsharp"]
            }
        ]
    },

    {
        category: "Minor Diatonic",
        scales: [
            {
                name: "A Minor",
                data: ["a", "b", "c", "d", "e", "f", "g"]
            },
            {
                name: "A# Minor",
                data: ["asharp", "b", "csharp", "dsharp", "f", "fsharp", "gsharp"]
            },
            {
                name: "B Minor",
                data: ["b", "csharp", "d", "e", "fsharp", "g", "a"]
            },
            {
                name: "C Minor",
                data: ["c", "d", "dsharp", "f", "g", "gsharp", "asharp"]
            },
            {
                name: "C# Minor",
                data: ["csharp", "dsharp", "e", "fsharp", "gsharp", "a", "b"]
            },
            {
                name: "D Minor",
                data: ["d", "e", "f", "g", "a", "asharp", "c"]
            },
            {
                name: "D# Minor",
                data: ["dsharp", "f", "fsharp", "gsharp", "asharp", "b", "csharp"]
            },
            {
                name: "E Minor",
                data: ["e", "fsharp", "g", "a", "b", "c", "d"]
            },
            {
                name: "F Minor",
                data: ["f", "g", "gsharp", "asharp", "c", "d", "dsharp"]
            },
            {
                name: "F# Minor",
                data: ["fsharp", "gsharp", "a", "b", "csharp", "d", "e"]
            },
            {
                name: "G Minor",
                data: ["g", "a", "asharp", "c", "d", "dsharp", "f"]
            },
            {
                name: "G# Minor",
                data: ["gsharp", "asharp", "b", "csharp", "dsharp", "e", "fsharp"]
            }
        ]
    },

    {
        category: "Harmonic Minor",
        scales: [
            {
                name: "A Harmonic Minor", 
                data: ["a", "b", "c", "d", "e", "f", "gsharp"]
            },
            {
                name: "A# Harmonic Minor", 
                data: ["asharp", "c", "csharp", "dsharp", "f", "fsharp", "a"]
            },
            {
                name: "B Harmonic Minor", 
                data: ["b", "csharp", "d", "e", "fsharp", "g", "asharp"]
            },
            {
                name: "C Harmonic Minor", 
                data: ["c", "d", "dsharp", "f", "g", "gsharp", "b"]
            },
            {
                name: "C# Harmonic Minor", 
                data: ["csharp", "dsharp", "e", "fsharp", "gsharp", "a", "c"]
            },
            {
                name: "D Harmonic Minor", 
                data: ["d", "e", "f", "g", "a", "asharp", "csharp"]
            },
            {
                name: "D# Harmonic Minor", 
                data: ["dsharp", "f", "fsharp", "gsharp", "asharp", "b", "d"]
            },
            {
                name: "E Harmonic Minor", 
                data: ["e", "fsharp", "g", "a", "b", "c", "dsharp"]
            },
            {
                name: "F Harmonic Minor", 
                data: ["f", "g", "gsharp", "asharp", "c", "csharp", "e"]
            },
            {
                name: "F# Harmonic Minor", 
                data: ["fsharp", "gsharp", "a", "b", "csharp", "d", "f"]
            },
            {
                name: "G Harmonic Minor", 
                data: ["g", "a", "asharp", "c", "d", "dsharp", "fsharp"]
            },
            {
                name: "G# Harmonic Minor", 
                data: ["gsharp", "asharp", "b", "csharp", "dsharp", "e", "g"]
            }
        ]
    },

    {
        category: "Melodic Minor",
        scales: [
            {
                name: "A Melodic Minor", 
                data: ["a", "b", "c", "d", "e", "fsharp", "gsharp"]
            },
            {
                name: "A# Melodic Minor", 
                data: ["asharp", "b", "csharp", "dsharp", "e", "fsharp", "gsharp"]
            },
            {
                name: "B Melodic Minor", 
                data: ["b", "csharp", "d", "e", "fsharp", "gsharp", "asharp"]
            },
            {
                name: "C Melodic Minor", 
                data: ["c", "d", "dsharp", "f", "g", "a", "b"]
            },
            {
                name: "C# Melodic Minor", 
                data: ["csharp", "dsharp", "e", "fsharp", "gsharp", "asharp", "c"]
            },
            {
                name: "D Melodic Minor", 
                data: ["d", "e", "f", "g", "a", "b", "csharp"]
            },
            {
                name: "D# Melodic Minor", 
                data: ["dsharp", "e", "f", "g", "a", "b", "csharp"]
            },
            {
                name: "E Melodic Minor", 
                data: ["e", "fsharp", "g", "a", "b", "csharp", "dsharp"]
            },
            {
                name: "F Melodic Minor", 
                data: ["f", "g", "gsharp", "asharp", "c", "d", "e"]
            },
            {
                name: "F# Melodic Minor", 
                data: ["fsharp", "gsharp", "a", "b", "csharp", "dsharp", "e"]
            },
            {
                name: "G Melodic Minor", 
                data: ["g", "a", "asharp", "c", "d", "dsharp", "f"]
            },
            {
                name: "G# Melodic Minor", 
                data: ["gsharp", "asharp", "b", "csharp", "dsharp", "e", "fsharp"]
            }
        ]
    },
    {
        category: "Phrygian",
        scales: [
            {
                name: "A Phrygian",
                data: ["a", "b", "c", "d", "e", "f", "g"]
            },
            {
                name: "A# Phrygian",
                data: ["asharp", "b", "c", "d", "e", "f", "g"]
            },
            {
                name: "B Phrygian",
                data: ["b", "csharp", "d", "e", "fsharp", "g", "a"]
            },
            {
                name: "C Phrygian",
                data: ["c", "d", "dsharp", "f", "g", "gsharp", "asharp"]
            },
            {
                name: "C# Phrygian",
                data: ["csharp", "dsharp", "e", "fsharp", "gsharp", "a", "b"]
            },
            {
                name: "D Phrygian",
                data: ["d", "e", "f", "g", "a", "asharp", "c"]
            },
            {
                name: "D# Phrygian",
                data: ["dsharp", "e", "fsharp", "gsharp", "asharp", "b", "csharp"]
            },
            {
                name: "E Phrygian",
                data: ["e", "fsharp", "g", "a", "b", "c", "d"]
            },
            {
                name: "F Phrygian",
                data: ["f", "g", "gsharp", "asharp", "c", "csharp", "dsharp"]
            },
            {
                name: "F# Phrygian",
                data: ["fsharp", "gsharp", "a", "b", "csharp", "d", "e"]
            },
            {
                name: "G Phrygian",
                data: ["g", "a", "asharp", "c", "d", "dsharp", "f"]
            },
            {
                name: "G# Phrygian",
                data: ["gsharp", "asharp", "b", "csharp", "dsharp", "e", "fsharp"]
            }
        ]
    },
    {
        category: "Phrygian Dominant",
        scales: [
            {
                name: "A Phrygian Dominant", 
                data: ["a", "b", "csharp", "d", "e", "f", "g"]
            },
            {
                name: "A# Phrygian Dominant",
                data: ["asharp", "b", "csharp", "d", "e", "f", "g"]
            },
            {
                name: "B Phrygian Dominant", 
                data: ["b", "csharp", "dsharp", "e", "fsharp", "g", "a"]
            },
            {
                name: "C Phrygian Dominant", 
                data: ["c", "d", "dsharp", "f", "g", "gsharp", "asharp"]
            },
            {
                name: "C# Phrygian Dominant",
                data: ["csharp", "dsharp", "e", "fsharp", "gsharp", "a", "b"]
            },
            {
                name: "D Phrygian Dominant", 
                data: ["d", "e", "fsharp", "g", "a", "asharp", "c"]
            },
            {
                name: "D# Phrygian Dominant",
                data: ["dsharp", "f", "fsharp", "gsharp", "asharp", "b", "csharp"]
            },
            {
                name: "E Phrygian Dominant", 
                data: ["e", "fsharp", "gsharp", "a", "b", "c", "d"]
            },
            {
                name: "F Phrygian Dominant", 
                data: ["f", "g", "gsharp", "asharp", "c", "csharp", "dsharp"]
            },
            {
                name: "F# Phrygian Dominant",
                data: ["fsharp", "gsharp", "asharp", "b", "csharp", "d", "e"]
            },
            {
                name: "G Phrygian Dominant", 
                data: ["g", "a", "asharp", "c", "d", "dsharp", "f"]
            },
            {
                name: "G# Phrygian Dominant",
                data: ["gsharp", "asharp", "b", "csharp", "dsharp", "e", "fsharp"]
            }
        ]
    },
    {
        category: "Hungarian Minor",
        scales: [
            {
                name: "A Hungarian Minor", 
                data: ["a", "b", "c", "dsharp", "e", "f", "g"]
            },
            {
                name: "A# Hungarian Minor", 
                data: ["asharp", "b", "csharp", "dsharp", "e", "fsharp", "gsharp"]
            },
            {
                name: "B Hungarian Minor", 
                data: ["b", "csharp", "d", "e", "fsharp", "g", "a"]
            },
            {
                name: "C Hungarian Minor", 
                data: ["c", "d", "dsharp", "f", "g", "gsharp", "asharp"]
            },
            {
                name: "C# Hungarian Minor", 
                data: ["csharp", "dsharp", "e", "fsharp", "gsharp", "a", "b"]
            },
            {
                name: "D Hungarian Minor", 
                data: ["d", "e", "f", "gsharp", "a", "asharp", "c"]
            },
            {
                name: "D# Hungarian Minor", 
                data: ["dsharp", "f", "fsharp", "gsharp", "asharp", "b", "csharp"]
            },
            {
                name: "E Hungarian Minor", 
                data: ["e", "fsharp", "g", "asharp", "b", "c", "d"]
            },
            {
                name: "F Hungarian Minor", 
                data: ["f", "g", "gsharp", "asharp", "b", "csharp", "dsharp"]
            },
            {
                name: "F# Hungarian Minor", 
                data: ["fsharp", "gsharp", "a", "b", "csharp", "d", "e"]
            },
            {
                name: "G Hungarian Minor", 
                data: ["g", "a", "asharp", "c", "d", "dsharp", "f"]
            },
            {
                name: "G# Hungarian Minor", 
                data: ["gsharp", "asharp", "b", "csharp", "dsharp", "e", "fsharp"]
            }
        ]
    },
    {
        category: "Locrian",
        scales: [
            {
                name: "A Locrian",
                data: ["a", "b", "c", "d", "e", "f", "g"]
            },
            {
                name: "A# Locrian",
                data: ["asharp", "b", "csharp", "dsharp", "e", "fsharp", "gsharp"]
            },
            {
                name: "B Locrian",
                data: ["b", "c", "d", "e", "f", "g", "a"]
            },
            {
                name: "C Locrian",
                data: ["c", "csharp", "dsharp", "f", "fsharp", "gsharp", "asharp"]
            },
            {
                name: "C# Locrian",
                data: ["csharp", "d", "e", "fsharp", "g", "a", "b"]
            },
            {
                name: "D Locrian",
                data: ["d", "dsharp", "f", "g", "gsharp", "asharp", "c"]
            },
            {
                name: "D# Locrian",
                data: ["dsharp", "e", "fsharp", "gsharp", "a", "b", "csharp"]
            },
            {
                name: "E Locrian",
                data: ["e", "f", "g", "a", "b", "c", "d"]
            },
            {
                name: "F Locrian",
                data: ["f", "fsharp", "gsharp", "asharp", "b", "csharp", "dsharp"]
            },
            {
                name: "F# Locrian",
                data: ["fsharp", "g", "a", "b", "c", "d", "e"]
            },
            {
                name: "G Locrian",
                data: ["g", "gsharp", "asharp", "c", "csharp", "dsharp", "f"]
            },
            {
                name: "G# Locrian",
                data: ["gsharp", "a", "b", "csharp", "d", "e", "fsharp"]
            }
        ]
    }
];

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

