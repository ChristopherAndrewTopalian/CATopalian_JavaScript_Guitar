// makeGuitar.js

function makeGuitar()
{
    let mainDiv = ce('div');
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.style.display = 'flex';
    subDiv.style.flexDirection = 'row';
    subDiv.style.gap = 2 + 'px';
    subDiv.style.cursor = 'pointer';
    mainDiv.append(subDiv);

    //-//

    // fretboardWood
    let fretboardWood = ce('div');
    fretboardWood.style.backgroundColor = 'rgba(73, 73, 73, 1)';
    fretboardWood.style.position = 'absolute';
    fretboardWood.style.left = '0px';
    fretboardWood.style.top = '30px';
    fretboardWood.style.width = '150px';
    fretboardWood.style.height = '500px';
    fretboardWood.style.zIndex = -1;
    ba(fretboardWood);

    /*
    // fretboardWood
    let fretboardWood = ce('img');
    fretboardWood.src = 'src/media/textures/screenshots/001.PNG';
    fretboardWood.style.position = 'absolute';
    fretboardWood.style.left = '0px';
    fretboardWood.style.top = '30px';
    fretboardWood.style.width = '150px';
    fretboardWood.style.height = '500px';
    fretboardWood.style.zIndex = -1;
    ba(fretboardWood);
    */

    //-//

    let stringSix = ce('div');
    stringSix.style.display = 'flex';
    stringSix.style.flexDirection = 'column';
    stringSix.style.gap = 3 + 'px';
    subDiv.append(stringSix);

    //-//

    for (let i = 0; i < sixthString.length; i++)
    { 
        let note = ce('div');
        note.id = sixthString[i].id;
        note.className = 'noteStyle';
        note.textContent = sixthString[i].noteName;
        note.onclick = function()
        {
            cl(sixthString[i].noteName);

            audioPlay(sixthString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(sixthString[i].id);

                //notesPlayedAoo.push('note:' + sixthString[i].id);

                notesPlayedAoo.push(
                {
                    note: sixthString[i].id,
                    duration: 2
                });

                // send notes to notesContainer
                ge('notesContainer').innerHTML = notesPlayed;

                ge("notesContainerAoo").innerHTML = JSON.stringify(notesPlayedAoo);

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }

            if (isRecordMode == false)
            {
                // playMode is active when
                // isRecordMode is false
            }

            if (isChordMode == true)
            {
                // 
            }
        };
        stringSix.append(note);
    }

    //-//

    let stringFive = ce('div');
    stringFive.style.display = 'flex';
    stringFive.style.flexDirection = 'column';
    stringFive.style.gap = 3 + 'px';
    subDiv.append(stringFive);

    //-//

    for (let i = 0; i < fifthString.length; i++)
    { 
        let note = ce('div');
        note.id = fifthString[i].id;
        note.className = 'noteStyle';
        note.textContent = fifthString[i].noteName;
        note.onclick = function()
        {
            cl(fifthString[i].noteName);
            audioPlay(fifthString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(fifthString[i].id);

                notesPlayedAoo.push(
                {
                    note: fifthString[i].id,
                    duration: 2
                });

                ge('notesContainer').innerHTML = notesPlayed;

                ge("notesContainerAoo").innerHTML = JSON.stringify(notesPlayedAoo);

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }
        };
        stringFive.append(note);
    }

    //-//

    let stringFourth = ce('div');
    stringFourth.style.display = 'flex';
    stringFourth.style.flexDirection = 'column';
    stringFourth.style.gap = 3 + 'px';
    subDiv.append(stringFourth);

    //-//

    for (let i = 0; i < fourthString.length; i++)
    { 
        let note = ce('div');
        note.id = fourthString[i].id;
        note.className = 'noteStyle';
        note.textContent = fourthString[i].noteName;
        note.onclick = function()
        {
            cl(fourthString[i].noteName);
            audioPlay(fourthString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(fourthString[i].id);

                notesPlayedAoo.push(
                {
                    note: fourthString[i].id,
                    duration: 2
                });

                ge('notesContainer').innerHTML = notesPlayed;

                ge("notesContainerAoo").innerHTML = JSON.stringify(notesPlayedAoo);

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }
        };
        stringFourth.append(note);
    }

    //-//

    let stringThird = ce('div');
    stringThird.style.display = 'flex';
    stringThird.style.flexDirection = 'column';
    stringThird.style.gap = 3 + 'px';
    subDiv.append(stringThird);

    //-//

    for (let i = 0; i < thirdString.length; i++)
    { 
        let note = ce('div');
        note.id = thirdString[i].id;
        note.className = 'noteStyle';
        note.textContent = thirdString[i].noteName;
        note.onclick = function()
        {
            cl(thirdString[i].noteName);
            audioPlay(thirdString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(thirdString[i].id);

                notesPlayedAoo.push(
                {
                    note: thirdString[i].id,
                    duration: 2
                });

                ge('notesContainer').innerHTML = notesPlayed;

                ge("notesContainerAoo").innerHTML = JSON.stringify(notesPlayedAoo);

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }
        };
        stringThird.append(note);
    }

    //-//

    let stringSecond = ce('div');
    stringSecond.style.display = 'flex';
    stringSecond.style.flexDirection = 'column';
    stringSecond.style.gap = 3 + 'px';
    subDiv.append(stringSecond);

    //-//

    for (let i = 0; i < secondString.length; i++)
    { 
        let note = ce('div');
        note.id = secondString[i].id;
        note.className = 'noteStyle';
        note.textContent = secondString[i].noteName;
        note.onclick = function()
        {
            cl(secondString[i].noteName);
            audioPlay(secondString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(secondString[i].id);

                notesPlayedAoo.push(
                {
                    note: secondString[i].id,
                    duration: 2
                });

                ge('notesContainer').innerHTML = notesPlayed;

                ge("notesContainerAoo").innerHTML = JSON.stringify(notesPlayedAoo);

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }
        };
        stringSecond.append(note);
    }

    //-//

    let stringFirst = ce('div');
    stringFirst.style.display = 'flex';
    stringFirst.style.flexDirection = 'column';
    stringFirst.style.gap = 3 + 'px';
    subDiv.append(stringFirst);

    //-//

    for (let i = 0; i < firstString.length; i++)
    { 
        let note = ce('div');
        note.id = firstString[i].id;
        note.className = 'noteStyle';
        note.textContent = firstString[i].noteName;
        note.onclick = function()
        {
            cl(firstString[i].noteName);
            audioPlay(firstString[i].fileName, 1.0);

            if (isRecordMode == true)
            {
                notesPlayed.push(firstString[i].id);

                notesPlayedAoo.push(
                {
                    note: firstString[i].id,
                    duration: 2
                });

                ge('notesContainer').innerHTML = notesPlayed;

                ge("notesContainerAoo").innerHTML = JSON.stringify(notesPlayedAoo);

                let clonedNote = this.cloneNode(true);

                ge('notesHorizontalContainer').append(clonedNote);
            }
        };
        stringFirst.append(note);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

