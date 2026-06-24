// buildMiddlePanel.js

function buildMiddlePanel()
{
    let mainDiv = ce('div');
    mainDiv.style.border = 'solid 1px white';

    mainDiv.append(makeNotesHorizontalContainer());

    mainDiv.append(makeRecordModeButton());
    mainDiv.append(makePlayModeButton());

    mainDiv.append(makeAooSongTextArea());

    mainDiv.append(makeNotesContainer());
    mainDiv.append(makeNotesContainerAoo());
    //-//

    let playContainer = ce('div');
    playContainer.id = 'playContainer';
    playContainer.style.marginTop = '10px';
    mainDiv.append(playContainer);

    //-//

    playContainer.append(makeRecordPlayStatus());
    playContainer.append(makePlayButton());
    playContainer.append(makePlayLoopButton());

    //-//

    let colorContainer = ce('div');
    colorContainer.id = 'colorContainer';
    colorContainer.style.marginBottom = '10px';
    mainDiv.append(colorContainer);

    //-//

    colorContainer.append(makeColorNotesButton());
    colorContainer.append(makeColorDefaultButton());

    return mainDiv;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian

