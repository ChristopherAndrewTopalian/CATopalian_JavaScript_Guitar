// makeDedication.js

function makeDedication()
{
    let mainDiv = ce('div');
    mainDiv.className = 'mainDiv';
    mainDiv.style.position = 'absolute';
    mainDiv.style.left = 500 + 'px';
    mainDiv.style.bottom = 0 + 'px';
    mainDiv.style.width = 70 + 'px';
    mainDiv.style.border = 'solid 2px rgb(0, 0, 0)';
    mainDiv.style.borderRadius = '8px';
    mainDiv.style.padding = '5px 10px';
    ba(mainDiv);

    //-//

    let titleAndLink = ce('a');
    titleAndLink.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Guitar';
    titleAndLink.target = '_blank';
    titleAndLink.style.fontWeight = 'bold';
    titleAndLink.textContent = 'CATopalian JavaScript Guitar';
    titleAndLink.style.fontSize = '14px';
    titleAndLink.style.textDecoration = 'none';
    titleAndLink.style.lineHeight = '12px';
    mainDiv.append(titleAndLink);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

