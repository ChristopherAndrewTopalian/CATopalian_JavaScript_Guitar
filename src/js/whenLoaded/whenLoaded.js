// whenLoaded.js

function whenLoaded()
{
    loadSounds(notes);

    makeGuitar();

    // controls for playmode, recordmode
    makePlayContainer();
        makeRecordPlayStatus();
        makePlayButton();
        makePlayLoopButton();
        makeRecordModeButton();
        makePlayModeButton();

    // controls for color adjusting
    makeColorContainer();
        makeColorNotesButton();
        makeColorDefaultButton();

    makeChosenScale();
    makeNotesContainer();

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

    //-//

    makeScaleContainer('MinorDiatonic', 775, 50);
        makeScaleButton(aMinorScale, 'MinorDiatonic');
        makeScaleButton(aSharpMinorScale, 'MinorDiatonic');
        makeScaleButton(bMinorScale, 'MinorDiatonic');
        makeScaleButton(cMinorScale, 'MinorDiatonic');
        makeScaleButton(cSharpMinorScale, 'MinorDiatonic');
        makeScaleButton(dMinorScale, 'MinorDiatonic');
        makeScaleButton(dSharpMinorScale, 'MinorDiatonic');
        makeScaleButton(eMinorScale, 'MinorDiatonic');
        makeScaleButton(fMinorScale, 'MinorDiatonic');
        makeScaleButton(fSharpMinorScale, 'MinorDiatonic');
        makeScaleButton(gMinorScale, 'MinorDiatonic');
        makeScaleButton(gSharpMinorScale, 'MinorDiatonic');

    makeNotesHorizontalContainer();

    makeTitleOfApp();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

