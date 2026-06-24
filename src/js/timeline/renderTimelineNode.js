// renderTimelineNode.js

function renderTimelineNode(noteData)
{
    let node = ce('div');

    // Physical styling for the sequencer node
    node.style.position = 'absolute';
    node.style.width = '40px';  // This represents duration
    node.style.height = '10px'; // Thickness of the visual node
    node.style.backgroundColor = 'rgba(0, 255, 255, 0.8)'; // A nice cyan color
    node.style.border = '1px solid white';

    // Geometry Translation (The Magic)
    // Left position (X-axis) = the current time
    node.style.left = timelineCurrentTime + 'px';

    // Bottom position (Y-axis) = pitchValue multiplied by scale
    // If pitch is 0, it sits at 0px. If pitch is 10, it sits at 100px.
    node.style.bottom = (noteData.pitchValue * 10) + 'px'; 

    // Append the freshly generated node to the timeline
    ge('notesHorizontalContainer').append(node);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

