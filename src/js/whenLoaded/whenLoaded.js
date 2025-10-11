// whenLoaded.js

function whenLoaded()
{
    loadSounds(notes);

    makeGuitar();

    // controls for playmode, recordmode
    makePlayContainer();
        makeRecordPlayStatus();
        makeNotesPlayedButton();
        makeRecordModeButton();
        makePlayModeButton();

    makeChosenScale();
    makeNotesContainer();

    makeColorNotesButton();
    makeColorDefaultButton();

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

    makeTitleOfApp();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

