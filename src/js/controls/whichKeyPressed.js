// whichKeyPressed.js

function colorFretBoardNote(whichFretboardNote)
{
    ge(whichFretboardNote).style.borderColor = 'rgb(255, 255, 255)';

    let formatted = whichFretboardNote.split('_');

    formatted = formatted + '_note';

    audioPlay(formatted, 1.0);

    setTimeout(function()
    {
        ge(whichFretboardNote).style.borderColor = 'rgb(0, 0, 0)';
    }, 500);
}

function whichKeyPressed(event)
{
    event.preventDefault();

    if (event.code === 'ShiftLeft')
    {
        colorFretBoardNote('e2_6');
        audioPlay('e2_note', 1.0);
    }

    else if (event.code === 'KeyZ')
    {
        colorFretBoardNote('f2_6');
        audioPlay('f2_note', 1.0);
    }

    else if (event.code === 'KeyX')
    {
        colorFretBoardNote('fsharp_6');
        audioPlay('fsharp2_note', 1.0); 
    }

    else if (event.code === 'KeyC')
    {
        colorFretBoardNote('g2_6');
        audioPlay('g2_note', 1.0);
    }

    else if (event.code === 'KeyV')
    {
        colorFretBoardNote('gsharp2_6');
        audioPlay('gsharp2_note', 1.0);
    }
    else if (event.code === 'KeyB')
    {
        colorFretBoardNote('a2_6');
        audioPlay('a2_note', 1.0);
    }
    else if (event.code === 'KeyN')
    {
        colorFretBoardNote('asharp2_6');
        audioPlay('asharp2_note', 1.0);
    }
    else if (event.code === 'KeyM')
    {
        colorFretBoardNote('b2_6');
        audioPlay('b2_note', 1.0);
    }
    else if (event.code === 'Comma')
    {
        colorFretBoardNote('c3_6');
        audioPlay('c3_note', 1.0);
    }
    else if (event.code === 'Period') // slash
    {
        colorFretBoardNote('csharp3_6');
        audioPlay('csharp3_note', 1.0);
    }
    else if (event.code === 'Slash') // slash
    {
        colorFretBoardNote('d3_6');
        audioPlay('d3_note', 1.0);
    }

    else if (event.code === 'ShiftRight')
    {
        colorFretBoardNote('dsharp3_6');
        audioPlay('dsharp3_note', 1.0);
    }

    //-//

    else if (event.code === 'CapsLock')
    {
        colorFretBoardNote('e3_6');
        audioPlay('e3_note', 1.0);
    }

    else if (event.code === 'KeyA')
    {
        colorFretBoardNote('f3_6');
        audioPlay('f3_note', 1.0);
    }

    else if (event.code === 'KeyS')
    {
        colorFretBoardNote('fsharp3_6');
        audioPlay('fsharp3_note', 1.0);
    }

    else if (event.code === 'KeyD')
    {

    }

    else if (event.code === 'KeyF')
    {

    }

    else if (event.code === 'KeyG')
    {

    }

    else if (event.code === 'KeyH')
    {

    }

    else if (event.code === 'KeyJ')
    {

    }

    else if (event.code === 'KeyK')
    {

    }

    else if (event.code === 'KeyL')
    {

    }

    else if (event.code === 'Semicolon')
    {

    }

    else if (event.code === 'Quote')
    {

    }

    //-//

    else if (event.code === 'Tab')
    {

    }

    else if (event.code === 'KeyQ')
    {

    }

    else if (event.code === 'KeyW')
    {

    }

    else if (event.code === 'KeyE')
    {

    }

    else if (event.code === 'KeyR')
    {

    }

    else if (event.code === 'KeyT')
    {

    }

    else if (event.code === 'KeyY')
    {

    }

    else if (event.code === 'KeyU')
    {

    }

    else if (event.code === 'KeyI')
    {

    }

    else if (event.code === 'KeyO')
    {

    }

    else if (event.code === 'KeyP')
    {

    }

    else if (event.code === 'BracketLeft')
    {

    }

    //-//

    else if (event.code === 'Backquote') // ~
    {

    }

    else if (event.code === 'Digit1')
    {

    }

    else if (event.code === 'Digit2')
    {

    }

    else if (event.code === 'Digit3')
    {

    }

    else if (event.code === 'Digit4')
    {

    }

    else if (event.code === 'Digit5')
    {

    }

    else if (event.code === 'Digit6')
    {

    }

    else if (event.code === 'Digit7')
    {

    }

    else if (event.code === 'Digit8')
    {

    }

    else if (event.code === 'Digit9')
    {

    }

    else if (event.code === 'Digit0')
    {

    }

    else if (event.code === 'Minus')
    {

    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

