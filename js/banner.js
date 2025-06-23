// Banner Color Shuffle Functionality
let currentBannerPalette = 0;
const bannerBackgrounds = [
    { background: '#24292e', circleColor: '#fff', accent: '#2ea44f', primary: '#0366d6' }, // Default GitHub dark
    { background: '#0366d6', circleColor: '#fff', accent: '#0366d6', primary: '#0366d6' }, // GitHub blue
    { background: '#2ea44f', circleColor: '#fff', accent: '#2ea44f', primary: '#2ea44f' }, // GitHub green
    { background: '#6f42c1', circleColor: '#fff', accent: '#6f42c1', primary: '#6f42c1' }, // GitHub purple
    { background: '#d73a49', circleColor: '#fff', accent: '#d73a49', primary: '#d73a49' }, // GitHub red
];

// Function to shuffle banner colors
function shuffleBannerColors() {
    currentBannerPalette = (currentBannerPalette + 1) % bannerBackgrounds.length;
    const newColors = bannerBackgrounds[currentBannerPalette];
    
    // Update banner background
    document.getElementById('banner-container').style.background = newColors.background;
    
    // Update circle colors
    const circles = ['circle-small', 'circle-medium', 'circle-large', 'circle-xlarge', 'circle-xxlarge'];
    circles.forEach(circleId => {
        const circle = document.getElementById(circleId);
        if (circle) {
            circle.style.background = newColors.circleColor;
        }
    });
    
    // Update site accent colors by changing CSS variables
    document.documentElement.style.setProperty('--accent-color', newColors.accent);
    document.documentElement.style.setProperty('--primary-color', newColors.primary);
    
    // Add rotation animation to the button
    const shuffleButton = document.getElementById('banner-shuffle');
    shuffleButton.classList.add('rotating');
    setTimeout(() => {
        shuffleButton.classList.remove('rotating');
    }, 500);
}



// Function to apply a palette to the site
function applyPaletteToSite(palette) {
    // Update banner background
    document.getElementById('banner-container').style.background = palette.background;
    
    // Update circle colors
    const circles = ['circle-small', 'circle-medium', 'circle-large', 'circle-xlarge', 'circle-xxlarge'];
    circles.forEach(circleId => {
        const circle = document.getElementById(circleId);
        if (circle) {
            circle.style.background = palette.circleColor;
        }
    });
    
    // Update site accent colors by changing CSS variables
    document.documentElement.style.setProperty('--accent-color', palette.accent);
    document.documentElement.style.setProperty('--primary-color', palette.primary);
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for shuffle button
    const shuffleButton = document.getElementById('banner-shuffle');
    if (shuffleButton) {
        shuffleButton.addEventListener('click', shuffleBannerColors);
    }
    
    // Add banner palettes from the color palettes collection if available
    if (typeof colorPalettes !== 'undefined') {
        // Only add a subset of palettes to avoid too many options
        const paletteTypes = ['sequential', 'categorical', 'diverging'];
        let addedCount = 0;
        
        paletteTypes.forEach(type => {
            // Get a few palettes of each type
            const typePalettes = colorPalettes.filter(p => p.type === type).slice(0, 2);
            
            typePalettes.forEach(palette => {
                if (palette.colors.length >= 2) {
                    const mainColor = palette.colors[0];
                    const accentColor = palette.colors[Math.floor(palette.colors.length / 2)];
                    
                    bannerBackgrounds.push({
                        background: mainColor,
                        circleColor: palette.colors[palette.colors.length - 1],
                        accent: accentColor,
                        primary: mainColor
                    });
                    addedCount++;
                }
            });
        });
        
        console.log(`Added ${addedCount} color palettes for banner themes`);
    }
});
