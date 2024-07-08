// Create DOM elements for the minimap
let minimap = document.createElement('div');
let minimapSize = document.createElement('div');
let viewer = document.createElement('div');
let minimapContent = document.createElement('iframe');

// Set initial scale variables
let scale = 0.1;
let realScale;

// Set classes for the elements
minimap.className = 'minimap_container';
minimapSize.className = 'minimap_size';
viewer.className = 'minimap_viewer';
minimapContent.className = 'minimap_content';

// Append elements to the minimap container
minimap.append(minimapSize, viewer, minimapContent);
document.body.appendChild(minimap);

// Get the HTML content of the document and remove scripts
let html = document.documentElement.outerHTML.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script\s*>/gi, '');

// Log the HTML content for debugging
console.log('html', html);

// Write the HTML content to the iframe
let iframeDoc = minimapContent.contentWindow.document;
iframeDoc.open();
iframeDoc.write(html);
iframeDoc.close();

// Function to adjust dimensions based on window and document size
function getDimension() {
    let bodyWidth = document.body.clientWidth;
    let bodyRatio = document.body.clientHeight / bodyWidth;
    let winRatio = window.innerHeight / window.innerWidth;

    // Set minimap width and calculate real scale
    minimap.style.width = '15%';
    realScale = minimap.clientWidth / bodyWidth;

    // Set padding for minimapSize and viewer elements
    minimapSize.style.paddingTop = `${bodyRatio * 100}%`;
    viewer.style.paddingTop = `${winRatio * 100}%`;

    // Apply scale and dimensions to the minimapContent iframe
    minimapContent.style.transform = `scale(${realScale})`;
    minimapContent.style.width = `${(100 / realScale)}%`;
    minimapContent.style.height = `${(100 / realScale)}%`;
}

// Function to synchronize scrolling between the main window and the minimap
function trackScroll() {
    viewer.style.transform = `translateY(${window.scrollY * realScale}px)`;
}

// Flag to track if dragging is in progress
let isDragging = false;
let startY, startTop;

// Function to handle mouse down event
function handleMouseDown(event) {
    isDragging = true;
    startY = event.clientY;
    startTop = parseInt(viewer.style.transform.replace('translateY(', '').replace('px)', '')) || 0;
}

// Function to handle mouse move event
function handleMouseMove(event) {
    if (isDragging) {
        let deltaY = event.clientY - startY;
        let newTop = startTop + deltaY;
        
        // Limit top position to prevent dragging outside the minimap
        newTop = Math.max(0, Math.min(newTop, minimap.clientHeight - viewer.clientHeight));
        
        viewer.style.transform = `translateY(${newTop}px)`;
        
        // Synchronize main window scrolling
        window.scrollTo(0, newTop / realScale);
    }
}

// Function to handle mouse up event
function handleMouseUp() {
    isDragging = false;
}
// Function to handle minimap container click event
function handleContainerClick(event) {
    // Calculate the click position relative to the minimap container
    let clickY = event.clientY - minimap.getBoundingClientRect().top;
    
    // Calculate the position to scroll the viewer
    let scrollPosition = clickY - (viewer.clientHeight / 2);
    
    // Limit scroll position to prevent scrolling outside the minimap
    scrollPosition = Math.max(0, Math.min(scrollPosition, minimap.clientHeight - viewer.clientHeight));
    
    // Scroll the viewer
    viewer.style.transform = `translateY(${scrollPosition}px)`;
    
    // Synchronize main window scrolling
    window.scrollTo(0, scrollPosition / realScale);
}

// Add event listener for minimap container click
minimap.addEventListener('click', handleContainerClick);

// Add event listeners for mouse events
viewer.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('mouseup', handleMouseUp);


// Call getDimension function initially to set dimensions
getDimension();

// Add event listeners for scroll and resize events
window.addEventListener('scroll', trackScroll);
window.addEventListener('resize', getDimension);
