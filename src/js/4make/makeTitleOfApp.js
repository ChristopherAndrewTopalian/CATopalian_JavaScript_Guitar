// makeTitleOfApp.js

function makeTitleOfApp()
{
    // Create the container brick
    let mainDiv = ce('div');
    mainDiv.className = 'mainDiv';
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = '0px';
    mainDiv.style.top = '0px';
    mainDiv.style.padding = '5px 10px';

    // Create the text brick
    let titleAndLink = ce('a');
    titleAndLink.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Guitar';
    titleAndLink.target = '_blank';
    titleAndLink.style.fontFamily = 'Arial';
    titleAndLink.style.fontWeight = 'bold';
    titleAndLink.textContent = 'CATopalian JavaScript Guitar';
    titleAndLink.style.fontSize = '14px';
    titleAndLink.style.textDecoration = 'none';
    titleAndLink.style.color = 'rgb(0, 255, 255)';

    // Snap the text brick inside the container brick (on the workbench)
    mainDiv.append(titleAndLink);

    // Hand the finished piece back to the factory manager
    return mainDiv; 
}






function makeTitleOfApp2()
{
    let mainDiv = ce('div');
    mainDiv.className = 'mainDiv';
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = 0 + 'px';
    mainDiv.style.top = 0 + 'px';
    mainDiv.style.padding = '5px 10px';
    ba(mainDiv);

    //-//

    let titleAndLink = ce('a');
    titleAndLink.href = 'https://github.com/ChristopherAndrewTopalian/CATopalian_JavaScript_Guitar';
    titleAndLink.target = '_blank';
    titleAndLink.style.fontFamily = 'Arial';
    titleAndLink.style.fontWeight = 'bold';
    titleAndLink.textContent = 'CATopalian JavaScript Guitar';
    titleAndLink.style.fontSize = '14px';
    titleAndLink.style.textDecoration = 'none';
    titleAndLink.style.color = 'rgb(0, 255, 255)';
    titleAndLink.style.lineHeight = '12px';
    mainDiv.append(titleAndLink);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

