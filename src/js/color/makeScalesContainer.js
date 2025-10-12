// makeScalesContainer.js

function makeScalesContainer()
{
    let scalesContainer = ce('div');
    scalesContainer.id = 'scalesContainer';
    scalesContainer.style.position = 'absolute';
    scalesContainer.style.left = '580px';
    scalesContainer.style.top = '30px';
    scalesContainer.style.display = 'flex';
    scalesContainer.style.flexDirection = 'row';
    scalesContainer.style.overflowX = 'scroll';
    scalesContainer.style.width = '170px';
    ba(scalesContainer);

    makeElementDraggable(scalesContainer);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

