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

    //-//

    // MajorDiatonic
    makeScaleContainer('MajorDiatonic', 580, 50);
        makeScaleButton(aMajorScale, 'MajorDiatonic');
        makeScaleButton(asharpMajorScale, 'MajorDiatonic');
        makeScaleButton(bMajorScale, 'MajorDiatonic');
        makeScaleButton(cMajorScale, 'MajorDiatonic');
        makeScaleButton(csharpMajorScale, 'MajorDiatonic');
        makeScaleButton(dMajorScale, 'MajorDiatonic');
        makeScaleButton(dsharpMajorScale, 'MajorDiatonic');
        makeScaleButton(eMajorScale, 'MajorDiatonic');
        makeScaleButton(fMajorScale, 'MajorDiatonic');
        makeScaleButton(fsharpMajorScale, 'MajorDiatonic');
        makeScaleButton(gMajorScale, 'MajorDiatonic');
        makeScaleButton(gsharpMajorScale, 'MajorDiatonic');

    //-//

    // MinorDiatonic
    makeScaleContainer('MinorDiatonic', 670, 50);
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

    //-//

    // HarmonicMinor
    makeScaleContainer('HarmonicMinor', 765, 50);
        makeScaleButton(aHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(asharpHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(bHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(cHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(csharpHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(dHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(dsharpHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(eHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(fHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(fsharpMajorScale, 'HarmonicMinor');
        makeScaleButton(gHarmonicMinorScale, 'HarmonicMinor');
        makeScaleButton(gsharpHarmonicMinorScale, 'HarmonicMinor');

    //-//

    // HarmonicMinor
    makeScaleContainer('MelodicMinor', 870, 50);
        makeScaleButton(aMelodicMinor, 'MelodicMinor');
        makeScaleButton(aSharpMelodicMinor, 'MelodicMinor');
        makeScaleButton(bMelodicMinor, 'MelodicMinor');
        makeScaleButton(cMelodicMinor, 'MelodicMinor');
        makeScaleButton(cSharpMelodicMinor, 'MelodicMinor');
        makeScaleButton(dMelodicMinor, 'MelodicMinor');
        makeScaleButton(dSharpMelodicMinor, 'MelodicMinor');
        makeScaleButton(eMelodicMinor, 'MelodicMinor');
        makeScaleButton(fMelodicMinor, 'MelodicMinor');
        makeScaleButton(fSharpMelodicMinor, 'MelodicMinor');
        makeScaleButton(gMelodicMinor, 'MelodicMinor');
        makeScaleButton(gSharpMelodicMinor, 'MelodicMinor');

    //-//

    // HarmonicMinor
    makeScaleContainer('Phrygian', 960, 50);
        makeScaleButton(aPhrygian, 'Phrygian');
        makeScaleButton(aSharpPhrygian, 'Phrygian');
        makeScaleButton(bPhrygian, 'Phrygian');
        makeScaleButton(cPhrygian, 'Phrygian');
        makeScaleButton(cSharpPhrygian, 'Phrygian');
        makeScaleButton(dPhrygian, 'Phrygian');
        makeScaleButton(dSharpPhrygian, 'Phrygian');
        makeScaleButton(ePhrygian, 'Phrygian');
        makeScaleButton(fPhrygian, 'Phrygian');
        makeScaleButton(fSharpPhrygian, 'Phrygian');
        makeScaleButton(gPhrygian, 'Phrygian');
        makeScaleButton(gSharpPhrygian, 'Phrygian');

    //-//

    makeNotesHorizontalContainer();

    makeTitleOfApp();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

