// buildInterface.js

function buildInterface()
{
    // THE TREE TRUNK
    let appRoot = ce('div');
    appRoot.id = 'guitarAppRoot';
    appRoot.style.display = 'flex'; // This puts left, middle, right side-by-side
    appRoot.style.flexDirection = 'row';

    // THE BIG BRANCHES
    let leftPanel = buildLeftPanel();
    let middlePanel = buildMiddlePanel();
    let rightPanel = buildRightPanel();

    // Snap the layout together
    appRoot.append(leftPanel, middlePanel, rightPanel);

    // Put the finished app on the shelf
    ba(appRoot);
}