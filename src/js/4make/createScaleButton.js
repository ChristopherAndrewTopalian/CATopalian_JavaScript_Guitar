// createScaleButton.js

function createScaleButton(scaleData)
{
    let btn = ce('button');
    btn.className = 'scaleButton';
    btn.textContent = scaleData.name;
    
    btn.onclick = function()
    {
        colorNotesDefault();
        colorTheScale(scaleData.data);
    };
    return btn;
}