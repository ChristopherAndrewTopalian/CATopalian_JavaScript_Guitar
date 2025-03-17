// makeDedication.js

function makeDedication()
{
    let mainDiv = ce('div');
    mainDiv.id = 'mainDivDedication';
    mainDiv.className = 'mainDiv';
    mainDiv.style.zIndex = 3000;
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = 0 + 'px';
    mainDiv.style.bottom = 5 + 'px';
    mainDiv.style.width = 270 + 'px';
    mainDiv.style.height = 20 + 'px';
    mainDiv.style.border = 'solid 2px rgb(0, 0, 0)';
    mainDiv.style.borderRadius = '8px';
    mainDiv.style.paddingLeft = '4px';
    mainDiv.style.paddingRight = '4px';
    mainDiv.style.paddingTop = '8px';
    mainDiv.style.paddingBottom = '8px';
    ba(mainDiv);

    // makeElementDraggable(mainDiv);

    //-//

    let subDiv = ce('div');
    subDiv.style.display = 'flex';
    subDiv.style.alignItems = 'center';
    subDiv.style.justifyContent = 'center';
    subDiv.style.textAlign = 'center';
    subDiv.style.flexDirection = 'column';
    subDiv.className = 'textStyle002';
    subDiv.style.height = '4vh';
    mainDiv.append(subDiv);

    //-//

    // subDiv.append(ce('hr'));

    //-//

    let titleAndLink = ce('a');
    titleAndLink.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Guitar';
    titleAndLink.target = '_blank';
    titleAndLink.style.fontWeight = 'bold';
    titleAndLink.textContent = 'CATopalian JavaScript Guitar';
    subDiv.append(titleAndLink);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

