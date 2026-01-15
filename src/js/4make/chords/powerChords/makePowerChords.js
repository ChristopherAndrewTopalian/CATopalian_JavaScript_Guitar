// makePowerChords.js

function makePowerChordsContainer()
{
    let powerChordsContainer = ce('div');
    powerChordsContainer.id = 'powerChordsContainer';
    powerChordsContainer.style.width = '140px';
    powerChordsContainer.style.height = '200px';
    powerChordsContainer.textContent = 'Power Chords';
    powerChordsContainer.style.overflowY = 'scroll';
    powerChordsContainer.style.display = 'flex';
    powerChordsContainer.style.flexDirection = 'column';
    ge('middleContainer').append(powerChordsContainer);
}

function makePowerChords(note001, note002)
{
    let powerChordButton = ce('div');
    powerChordButton.textContent = note001;
    powerChordButton.style.margin = '5px';
    powerChordButton.style.padding = '4px';
    powerChordButton.style.width = '100px';powerChordButton.style.height = '15px';
    powerChordButton.style.border = '1px solid rgb(255, 255, 255)';
    powerChordButton.style.borderRadius = '5px';
    powerChordButton.style.backgroundColor = 'rgb(0, 0, 0)';
    powerChordButton.style.cursor = 'pointer';

    // set the click event for the original button
    powerChordButton.onclick = function()
    {
        // play the notes
        audioPlay(note001, 1.0);
        audioPlay(note002, 1.0);
    };

    // append the original button to container
    ge('powerChordsContainer').append(powerChordButton);

    // when clicking, clone and set up each clone separately
    powerChordButton.onclick = function()
    {
        // Play original
        audioPlay(note001, 1.0);
        audioPlay(note002, 1.0);

        // clone the button
        let clone = powerChordButton.cloneNode(true);
        clone.textContent = note001;

        // position the clone
        clone.style.position = 'absolute';
        clone.style.left = '300px'; // or randomize
        clone.style.top = '400px';

        // make the clone draggable
        makeElementDraggable(clone);

        // add event listener for the clone to play notes
        clone.onclick = function()
        {
            audioPlay(note001, 1.0);
            audioPlay(note002, 1.0);
        };

        // append clone to the stage
        ba(clone);
    };
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

