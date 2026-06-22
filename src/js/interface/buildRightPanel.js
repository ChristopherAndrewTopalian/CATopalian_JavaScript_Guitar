// buildRightPanel.js

function buildRightPanel()
{
    // The main container for the right side of the screen
    let panel = ce('div');
    panel.id = 'rightPanel';
    panel.style.display = 'flex';
    panel.style.flexDirection = 'row'; // Puts the columns side-by-side
    panel.style.gap = '10px';
    //panel.style.overflowX = 'scroll';

    // OUTER LOOP: Cycle through the Categories (Major, Harmonic, Locrian)
    for (let i = 0; i < scaleDatabase.length; i++)
    {
        let categoryData = scaleDatabase[i];

        // Build a column for this specific category
        let categoryColumn = ce('div');
        categoryColumn.style.display = 'flex';
        categoryColumn.style.flexDirection = 'column';
        
        // Build the title text at the top of the column
        let header = ce('div');
        header.textContent = categoryData.category;
        header.style.fontWeight = 'bold';
        header.style.marginBottom = '5px';
        header.style.textAlign = 'center';
        categoryColumn.append(header);

        // INNER LOOP: Cycle through the scales inside this specific category
        for (let j = 0; j < categoryData.scales.length; j++)
        {
            let scaleItem = categoryData.scales[j];
            
            // Ask the button factory to build the button, and snap it into the column
            let btn = createScaleButton(scaleItem);
            categoryColumn.append(btn);
        }

        // Snap the finished column into the main right panel
        panel.append(categoryColumn);
    }

    // Return the completed, fully-loaded Right Panel back to buildInterface!
    return panel;
}