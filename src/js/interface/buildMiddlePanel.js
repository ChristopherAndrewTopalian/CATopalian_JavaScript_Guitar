// buildMiddlePanel.js

function buildMiddlePanel()
{
    let mainDiv = ce('div');
    mainDiv.style.border = 'solid 1px white';

    mainDiv.append(makeNotesContainer());
    mainDiv.append(makeNotesContainerAoo());

    mainDiv.append(makeRecordModeButton());
    mainDiv.append(makePlayModeButton());
    mainDiv.append(makeNotesHorizontalContainer());
    mainDiv.append(makeAooSongTextArea());

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