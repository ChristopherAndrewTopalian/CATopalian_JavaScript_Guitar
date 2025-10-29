// makeAooSongTextArea.js

let songDefault = [
    {"note":"a2_6","duration":2},{"note":"e3_5","duration":2},{"note":"g2_6","duration":2},{"note":"b2_5","duration":2},
    {"note":"f2_6","duration":2},
    {"note":"a2_5","duration":2},
    {"note":"rest-1","duration":2},
];

function makeAooSongTextArea()
{
    let aooContainer = ce('div');
    aooContainer.id = 'aooContainer';
    aooContainer.style.display = 'flex';
    aooContainer.style.flexDirection = 'column';
    ge('middleContainer').append(aooContainer);
    
    //-//

    let aooTextarea = ce('textarea');
    aooTextarea.id = 'aooTextarea';
    aooTextarea.value = JSON.stringify(songDefault);
    aooTextarea.style.width = '300px';
    aooTextarea.style.height = '100px';
    aooTextarea.style.marginTop = '10px';
    aooContainer.append(aooTextarea);

    //-//

    let playAooButton = ce('button');
    playAooButton.textContent = 'Play';
    playAooButton.onclick = function()
    {
         playSongAooFromTextarea();
    };
    playAooButton.style.alignSelf = 'flex-start';
    aooContainer.append(playAooButton);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

