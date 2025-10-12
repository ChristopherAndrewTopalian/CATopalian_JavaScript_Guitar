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

    makeScalesContainer();

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

    // MelodicMinor
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

    // Phrygian
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

    // PhrygianDominant
    makeScaleContainer('PhrygianDominant', 960, 50);
        makeScaleButton(aPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(aSharpPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(bPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(cPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(cSharpPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(dPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(dSharpPhrygian, 'PhrygianDominant');
        makeScaleButton(ePhrygianDominant, 'PhrygianDominant');
        makeScaleButton(fPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(fSharpPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(gPhrygianDominant, 'PhrygianDominant');
        makeScaleButton(gSharpPhrygianDominant, 'PhrygianDominant');

    //-//

    // HungarianMinor
    makeScaleContainer('HungarianMinor', 960, 50);
        makeScaleButton(aHungarianMinor, 'HungarianMinor');
        makeScaleButton(aSharpHungarianMinor, 'HungarianMinor');
        makeScaleButton(bHungarianMinor, 'HungarianMinor');
        makeScaleButton(cHungarianMinor, 'HungarianMinor');
        makeScaleButton(cSharpHungarianMinor, 'HungarianMinor');
        makeScaleButton(dHungarianMinor, 'HungarianMinor');
        makeScaleButton(dSharpHungarianMinor, 'HungarianMinor');
        makeScaleButton(eHungarianMinor, 'HungarianMinor');
        makeScaleButton(fHungarianMinor, 'HungarianMinor');
        makeScaleButton(fSharpHungarianMinor, 'HungarianMinor');
        makeScaleButton(gHungarianMinor, 'HungarianMinor');
        makeScaleButton(gSharpHungarianMinor, 'HungarianMinor');

    //-//

    // Locrian
    makeScaleContainer('Locrian', 960, 50);
        makeScaleButton(aHungarianMinor, 'Locrian');
        makeScaleButton(aSharpHungarianMinor, 'Locrian');
        makeScaleButton(bHungarianMinor, 'Locrian');
        makeScaleButton(cHungarianMinor, 'Locrian');
        makeScaleButton(cSharpHungarianMinor, 'Locrian');
        makeScaleButton(dHungarianMinor, 'Locrian');
        makeScaleButton(dSharpHungarianMinor, 'Locrian');
        makeScaleButton(eHungarianMinor, 'Locrian');
        makeScaleButton(fHungarianMinor, 'Locrian');
        makeScaleButton(fSharpHungarianMinor, 'Locrian');
        makeScaleButton(gHungarianMinor, 'Locrian');
        makeScaleButton(gSharpHungarianMinor, 'Locrian');

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

