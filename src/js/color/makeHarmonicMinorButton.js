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

