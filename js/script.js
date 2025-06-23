// PlotPals Main Script

// Sample color palettes data
const colorPalettes = [
    {
        name: "Viridis",
        type: "sequential",
        colors: ["#440154", "#482878", "#3e4989", "#31688e", "#26828e", "#1f9e89", "#35b779", "#6ece58", "#b5de2b", "#fde725"]
    },
    {
        name: "Inferno",
        type: "sequential",
        colors: ["#000004", "#1b0c41", "#4a0c6b", "#781c6d", "#a52c60", "#cf4446", "#ed6925", "#fb9b06", "#f7d13d", "#fcffa4"]
    },
    {
        name: "Plasma",
        type: "sequential",
        colors: ["#0d0887", "#41049d", "#6a00a8", "#8f0da4", "#b12a90", "#cc4778", "#e16462", "#f2844b", "#fca636", "#fcce25", "#f0f921"]
    },
    {
        name: "Magma",
        type: "sequential",
        colors: ["#000004", "#180f3d", "#440f76", "#721f81", "#9e2f7f", "#cd4071", "#f1605d", "#fd9668", "#feca8d", "#fcfdbf"]
    },
    {
        name: "Blues",
        type: "sequential",
        colors: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"]
    },
    {
        name: "YlGnBu",
        type: "sequential",
        colors: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"]
    },
    {
        name: "Greens",
        type: "sequential",
        colors: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"]
    },
    {
        name: "Purples",
        type: "sequential",
        colors: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"]
    },
    {
        name: "Oranges",
        type: "sequential",
        colors: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"]
    },
    {
        name: "Reds",
        type: "sequential",
        colors: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"]
    },
    {
        name: "Turbo",
        type: "sequential",
        colors: ["#30123b", "#4662d7", "#37a5fc", "#1ae4b6", "#72fe5e", "#c8ef34", "#faba39", "#f66b19", "#ca2a04", "#7a0403"]
    },
    {
        name: "Spectral",
        type: "diverging",
        colors: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"]
    },
    {
        name: "RdBu",
        type: "diverging",
        colors: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"]
    },
    {
        name: "BrBG",
        type: "diverging",
        colors: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"]
    },
    {
        name: "PiYG",
        type: "diverging",
        colors: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"]
    },
    {
        name: "PRGn",
        type: "diverging",
        colors: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"]
    },
    {
        name: "RdYlBu",
        type: "diverging",
        colors: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"]
    },
    {
        name: "RdYlGn",
        type: "diverging",
        colors: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"]
    },
    {
        name: "RdGy",
        type: "diverging",
        colors: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"]
    },
    {
        name: "PuOr",
        type: "diverging",
        colors: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"]
    },
    {
        name: "Category10",
        type: "categorical",
        colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
    },
    {
        name: "Tableau10",
        type: "categorical",
        colors: ["#4e79a7", "#f28e2c", "#e15759", "#76b7b2", "#59a14f", "#edc949", "#af7aa1", "#ff9da7", "#9c755f", "#bab0ab"]
    },
    {
        name: "Accent",
        type: "categorical",
        colors: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"]
    },
    {
        name: "Pastel1",
        type: "categorical",
        colors: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
    },
    {
        name: "Set1",
        type: "categorical",
        colors: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"]
    },
    {
        name: "Set2",
        type: "categorical",
        colors: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"]
    },
    {
        name: "Set3",
        type: "categorical",
        colors: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"]
    },
    {
        name: "Dark2",
        type: "categorical",
        colors: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"]
    },
    {
        name: "Paired",
        type: "categorical",
        colors: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"]
    },
    {
        name: "Colorblind-Friendly",
        type: "categorical",
        colors: ["#0072B2", "#E69F00", "#56B4E9", "#009E73", "#F0E442", "#D55E00", "#CC79A7", "#999999"]
    },
    {
        name: "IBM Carbon",
        type: "categorical",
        colors: ["#648fff", "#785ef0", "#dc267f", "#fe6100", "#ffb000", "#000000", "#ffffff"]
    },
    {
        name: "Sunset",
        type: "sequential",
        colors: ["#fcde9c", "#faa476", "#f0746e", "#e34f6f", "#dc3977", "#b9257a", "#7c1d6f"]
    },
    {
        name: "Ocean",
        type: "sequential",
        colors: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"]
    },
    {
        name: "Terrain",
        type: "sequential",
        colors: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"]
    },
    {
        name: "Cool-Warm",
        type: "diverging",
        colors: ["#3b4cc0", "#6f91f2", "#b0cbfa", "#dce9fd", "#fde0ef", "#fbb7d0", "#f272a1", "#b73779"]
    },
    {
        name: "Cividis",
        type: "sequential",
        colors: ["#00224e", "#123570", "#3b496c", "#575d6d", "#707173", "#8a8678", "#a59c74", "#c3b369", "#e1cc55", "#fee838"]
    },
    {
        name: "Sinebow",
        type: "categorical",
        colors: ["#ff4040", "#e78d0b", "#a7d503", "#58fc2a", "#18f472", "#00bfbf", "#1872f4", "#582afc", "#a703d5", "#e70b8d", "#ff4040"]
    },
    {
        name: "Cubehelix",
        type: "sequential",
        colors: ["#000000", "#182044", "#2c3f63", "#3c5d7e", "#4a7c91", "#5c9b9b", "#7bb89c", "#a5d09c", "#d4e4a3", "#f8f7b3"]
    },
    {
        name: "Warm-Grey",
        type: "sequential",
        colors: ["#e6d8ad", "#d3c191", "#c0ab76", "#ad955c", "#9a8043", "#876a29", "#74550f", "#613f00"]
    },
    {
        name: "Material Design",
        type: "categorical",
        colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50"]
    },
    {
        name: "Tailwind CSS",
        type: "categorical",
        colors: ["#ef4444", "#f97316", "#f59e0b", "#eab308", "#84cc16", "#22c55e", "#10b981", "#14b8a6", "#06b6d4", "#0ea5e9"]
    },
    {
        name: "Nightfall",
        type: "sequential",
        colors: ["#ffd780", "#eaaf63", "#d58a4a", "#c16936", "#a84a29", "#8e2b1d", "#730e14", "#57000d"]
    },
    {
        name: "Rainbow",
        type: "categorical",
        colors: ["#6e40aa", "#bf3caf", "#fe4b83", "#ff7847", "#e2b72f", "#aff05b", "#52f667", "#1ddfa3", "#23abd8", "#4c6edb", "#6e40aa"]
    }
];

// Visualization types with customization options
const visualizationTypes = [
    {
        name: "Heatmap",
        render: renderHeatmap,
        options: {
            rows: { type: "range", min: 4, max: 20, default: 8, label: "Rows" },
            cols: { type: "range", min: 4, max: 20, default: 10, label: "Columns" },
            colorScale: { type: "select", options: ["linear", "quantize", "quantile"], default: "quantize", label: "Color Scale" },
            showLabels: { type: "checkbox", default: true, label: "Show Labels" },
            showLegend: { type: "checkbox", default: true, label: "Show Legend" }
        }
    },
    {
        name: "Bar Chart",
        render: renderBarChart,
        options: {
            barCount: { type: "range", min: 3, max: 15, default: 8, label: "Number of Bars" },
            barPadding: { type: "range", min: 0.05, max: 0.5, step: 0.05, default: 0.1, label: "Bar Padding" },
            sortBars: { type: "select", options: ["none", "ascending", "descending"], default: "none", label: "Sort Bars" },
            showValues: { type: "checkbox", default: false, label: "Show Values" },
            showGrid: { type: "checkbox", default: true, label: "Show Grid" }
        }
    },
    {
        name: "Line Chart",
        render: renderLineChart,
        options: {
            lineCount: { type: "range", min: 1, max: 5, default: 3, label: "Number of Lines" },
            pointCount: { type: "range", min: 5, max: 30, default: 15, label: "Points per Line" },
            lineWidth: { type: "range", min: 1, max: 5, step: 0.5, default: 2, label: "Line Width" },
            showPoints: { type: "checkbox", default: true, label: "Show Points" },
            showArea: { type: "checkbox", default: false, label: "Show Area" },
            smoothing: { type: "checkbox", default: false, label: "Curve Smoothing" },
            showLegend: { type: "checkbox", default: false, label: "Show Legend" }
        }
    },
    {
        name: "Volcano Plot",
        render: renderVolcanoPlot,
        options: {
            pointCount: { type: "range", min: 50, max: 500, step: 50, default: 200, label: "Number of Points" },
            significanceThreshold: { type: "range", min: 1, max: 5, step: 0.5, default: 2, label: "Significance Threshold" },
            foldChangeThreshold: { type: "range", min: 0.5, max: 3, step: 0.5, default: 1, label: "Fold Change Threshold" },
            pointSize: { type: "range", min: 2, max: 8, default: 4, label: "Point Size" },
            showThresholdLines: { type: "checkbox", default: true, label: "Show Threshold Lines" },
            showLegend: { type: "checkbox", default: false, label: "Show Legend" }
        }
    }
];

// Current state
let currentVizIndex = 0;
let currentPalette = colorPalettes[0];
let currentVizOptions = {};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the page
    initializePalettes();
    initializeVisualization();
    setupEventListeners();
});

// Initialize palette cards
function initializePalettes() {
    const paletteContainer = document.querySelector('.palette-container');
    const template = document.getElementById('palette-card-template');
    
    colorPalettes.forEach(palette => {
        const card = template.content.cloneNode(true);
        
        // Set palette data
        card.querySelector('.palette-card').dataset.type = palette.type;
        card.querySelector('.palette-name').textContent = palette.name;
        card.querySelector('.palette-type').textContent = palette.type;
        
        // Create color swatches
        const swatchesContainer = card.querySelector('.palette-swatches');
        palette.colors.forEach(color => {
            const swatch = document.createElement('div');
            swatch.className = 'palette-swatch';
            swatch.style.backgroundColor = color;
            swatchesContainer.appendChild(swatch);
        });
        
        paletteContainer.appendChild(card);
    });
}

// Initialize visualization
function initializeVisualization() {
    updateVizDescription();
    initializeVizOptions();
    renderCurrentVisualization();
}

// We no longer need to update viz name since we use tabs

// Update visualization description
function updateVizDescription() {
    const vizType = visualizationTypes[currentVizIndex].name;
    const descriptions = {
        'Heatmap': 'Heatmaps display data values as colors in a grid, perfect for showing patterns in matrices.',
        'Bar Chart': 'Bar charts compare values across categories with rectangular bars proportional to the values.',
        'Line Chart': 'Line charts show trends over time or sequences by connecting data points with lines.',
        'Volcano Plot': 'Volcano plots display significance versus fold-change, commonly used in genomics to highlight differentially expressed genes.'
    };
    
    const descriptionElement = document.querySelector('.viz-description p');
    if (descriptionElement) {
        descriptionElement.textContent = descriptions[vizType] || 'This visualization demonstrates how the selected color palette appears in a real-world data visualization context.';
    }
}

// Render current visualization
// Initialize visualization options for the current visualization type
function initializeVizOptions() {
    const vizType = visualizationTypes[currentVizIndex];
    currentVizOptions = {};
    
    // Initialize with default values
    if (vizType.options) {
        Object.keys(vizType.options).forEach(key => {
            currentVizOptions[key] = vizType.options[key].default;
        });
    }
    
    // Generate options UI
    generateVizOptionsUI();
}

// Generate UI controls for the current visualization options
function generateVizOptionsUI() {
    const vizType = visualizationTypes[currentVizIndex];
    const optionsContainer = document.getElementById('viz-options');
    optionsContainer.innerHTML = '';
    
    if (!vizType.options) return;
    
    // Group options by category
    const optionCategories = {
        'Dimensions': [],
        'Appearance': [],
        'Display': []
    };
    
    // Categorize options based on their purpose
    Object.keys(vizType.options).forEach(key => {
        const option = vizType.options[key];
        
        // Categorize options based on key names and types
        if (key.includes('Count') || key.includes('rows') || key.includes('cols') || 
            key.includes('Size') || key.includes('Width') || key.includes('Threshold')) {
            optionCategories['Dimensions'].push({ key, option });
        } else if (key.includes('show') || key.includes('display')) {
            optionCategories['Display'].push({ key, option });
        } else {
            optionCategories['Appearance'].push({ key, option });
        }
    });
    
    // Create option boxes for each category
    Object.keys(optionCategories).forEach(category => {
        const options = optionCategories[category];
        
        // Skip empty categories
        if (options.length === 0) return;
        
        // Create category box
        const categoryBox = document.createElement('div');
        categoryBox.className = 'option-category-box';
        
        // Add category title
        const categoryTitle = document.createElement('h4');
        categoryTitle.className = 'option-category-title';
        categoryTitle.textContent = category;
        categoryBox.appendChild(categoryTitle);
        
        // Add options to this category
        options.forEach(({ key, option }) => {
            const optionGroup = document.createElement('div');
            optionGroup.className = 'option-group';
            
            // Create a flex container for each option
            const optionFlex = document.createElement('div');
            optionFlex.className = 'option-flex';
            
            const label = document.createElement('label');
            label.textContent = option.label;
            label.setAttribute('for', `option-${key}`);
            optionFlex.appendChild(label);
            
            let input;
            
            switch (option.type) {
                case 'range':
                    // Create a container for the range input and value display
                    const rangeContainer = document.createElement('div');
                    rangeContainer.className = 'range-container';
                    
                    input = document.createElement('input');
                    input.type = 'range';
                    input.id = `option-${key}`;
                    input.min = option.min;
                    input.max = option.max;
                    input.step = option.step || 1;
                    input.value = currentVizOptions[key];
                    
                    const valueDisplay = document.createElement('span');
                    valueDisplay.className = 'range-value';
                    valueDisplay.textContent = currentVizOptions[key];
                    
                    input.addEventListener('input', () => {
                        valueDisplay.textContent = input.value;
                    });
                    
                    rangeContainer.appendChild(input);
                    rangeContainer.appendChild(valueDisplay);
                    optionGroup.appendChild(optionFlex);
                    optionGroup.appendChild(rangeContainer);
                    break;
                    
                case 'select':
                    input = document.createElement('select');
                    input.id = `option-${key}`;
                    
                    option.options.forEach(optValue => {
                        const optElement = document.createElement('option');
                        optElement.value = optValue;
                        optElement.textContent = optValue.charAt(0).toUpperCase() + optValue.slice(1);
                        optElement.selected = optValue === currentVizOptions[key];
                        input.appendChild(optElement);
                    });
                    
                    optionFlex.appendChild(input);
                    optionGroup.appendChild(optionFlex);
                    break;
                    
                case 'checkbox':
                    input = document.createElement('input');
                    input.type = 'checkbox';
                    input.id = `option-${key}`;
                    input.checked = currentVizOptions[key];
                    
                    // Place checkbox to the right of the label
                    optionFlex.appendChild(input);
                    optionGroup.appendChild(optionFlex);
                    break;
            }
            
            categoryBox.appendChild(optionGroup);
        });
        
        // Add the category box to the options container
        optionsContainer.appendChild(categoryBox);
    });
}

// Update visualization options from input controls
function updateVizOptionsFromInputs() {
    const vizType = visualizationTypes[currentVizIndex];
    
    if (!vizType.options) return;
    
    Object.keys(vizType.options).forEach(key => {
        const option = vizType.options[key];
        const input = document.getElementById(`option-${key}`);
        
        if (!input) return;
        
        switch (option.type) {
            case 'range':
                currentVizOptions[key] = parseFloat(input.value);
                break;
                
            case 'select':
                currentVizOptions[key] = input.value;
                break;
                
            case 'checkbox':
                currentVizOptions[key] = input.checked;
                break;
        }
    });
}

function renderCurrentVisualization() {
    // Clear previous visualization
    const vizContainer = document.getElementById('visualization');
    vizContainer.innerHTML = '';
    
    // Render new visualization with options
    visualizationTypes[currentVizIndex].render(vizContainer, currentPalette.colors, currentVizOptions);
}

// Setup event listeners
function setupEventListeners() {
    // Visualization tabs
    document.querySelectorAll('.viz-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            // Update active tab
            document.querySelectorAll('.viz-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Update current visualization
            currentVizIndex = parseInt(tab.getAttribute('data-viz'));
            updateVizDescription();
            initializeVizOptions();
            renderCurrentVisualization();
        });
    });
    
    // Customization panel is now always visible by default
    
    // Apply customization button
    document.getElementById('apply-customization').addEventListener('click', () => {
        updateVizOptionsFromInputs();
        renderCurrentVisualization();
    });
    
    // Filter buttons
    document.querySelectorAll('.palette-nav-button').forEach(button => {
        button.addEventListener('click', (e) => {
            // Update active class
            document.querySelector('.palette-nav-button.active')?.classList.remove('active');
            button.classList.add('active');
            
            // Filter palettes
            const filter = button.dataset.filter;
            filterPalettes(filter);
        });
    });
    
    // Apply palette buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('apply-palette')) {
            const card = e.target.closest('.palette-card');
            const paletteName = card.querySelector('.palette-name').textContent;
            
            // Find palette by name
            currentPalette = colorPalettes.find(p => p.name === paletteName);
            renderCurrentVisualization();
        }
        
        // View palette details
        if (e.target.classList.contains('view-palette')) {
            const card = e.target.closest('.palette-card');
            const paletteName = card.querySelector('.palette-name').textContent;
            
            // Find palette by name
            const palette = colorPalettes.find(p => p.name === paletteName);
            openPaletteModal(palette);
        }
    });
    
    // Modal close buttons
    document.querySelector('.modal-close').addEventListener('click', closePaletteModal);
    document.querySelector('.modal-close-btn').addEventListener('click', closePaletteModal);
    
    // Apply palette from modal
    document.querySelector('.apply-palette-modal').addEventListener('click', () => {
        renderCurrentVisualization();
        closePaletteModal();
    });
    
    // Tab navigation
    document.querySelectorAll('.tab-nav-link').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            
            const tabId = tab.getAttribute('href');
            const tabContainer = tab.closest('.tabs');
            
            // Update active tab
            tabContainer.querySelector('.tab-nav-link.active').classList.remove('active');
            tab.classList.add('active');
            
            // Update active content
            tabContainer.querySelector('.tab-content.active').classList.remove('active');
            tabContainer.querySelector(tabId).classList.add('active');
        });
    });
    
    // Code copy buttons
    document.querySelectorAll('.code-copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const codeBlock = btn.closest('.code-block');
            const code = codeBlock.querySelector('code').textContent;
            
            copyToClipboard(code);
            showCopyNotification();
        });
    });
}

// Filter palettes by type
function filterPalettes(type) {
    const cards = document.querySelectorAll('.palette-card');
    
    cards.forEach(card => {
        if (type === 'all' || card.dataset.type === type) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Open palette detail modal
function openPaletteModal(palette) {
    // Set palette name and type
    document.querySelector('.modal-title').textContent = palette.name;
    document.querySelector('.palette-type-badge').textContent = palette.type;
    
    // Set current palette for apply button
    currentPalette = palette;
    
    // Generate full palette swatches
    const swatchesContainer = document.querySelector('.full-palette-swatches');
    swatchesContainer.innerHTML = '';
    
    // Create a single row of swatches
    const swatchRow = document.createElement('div');
    swatchRow.className = 'full-swatch-row';
    
    palette.colors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'full-swatch';
        swatch.style.backgroundColor = color;
        swatch.dataset.color = color;
        swatch.addEventListener('click', () => {
            copyToClipboard(color);
            showCopyNotification(`Copied ${color}`);
        });
        swatchRow.appendChild(swatch);
    });
    
    swatchesContainer.appendChild(swatchRow);
    
    // Generate color values
    const colorValuesContainer = document.querySelector('.color-values');
    colorValuesContainer.innerHTML = '';
    
    palette.colors.forEach(color => {
        const colorValue = document.createElement('div');
        colorValue.className = 'color-value';
        colorValue.dataset.color = color;
        colorValue.addEventListener('click', () => {
            copyToClipboard(color);
            showCopyNotification(`Copied ${color}`);
        });
        
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch-mini';
        swatch.style.backgroundColor = color;
        
        const hex = document.createElement('span');
        hex.className = 'color-hex';
        hex.textContent = color;
        
        colorValue.appendChild(swatch);
        colorValue.appendChild(hex);
        colorValuesContainer.appendChild(colorValue);
    });
    
    // Generate code examples
    generateCodeExamples(palette);
    
    // Show modal
    document.getElementById('palette-modal').classList.add('active');
}

// Close palette modal
function closePaletteModal() {
    document.getElementById('palette-modal').classList.remove('active');
}

// Generate code examples for different languages
function generateCodeExamples(palette) {
    // Python code example
    const pythonCode = generatePythonCode(palette);
    document.querySelector('#python-code code').textContent = pythonCode;
    
    // R code example
    const rCode = generateRCode(palette);
    document.querySelector('#r-code code').textContent = rCode;
    
    // JavaScript code example
    const jsCode = generateJavaScriptCode(palette);
    document.querySelector('#js-code code').textContent = jsCode;
}

// Generate Python code example
function generatePythonCode(palette) {
    const colorArray = JSON.stringify(palette.colors).replace(/"/g, '\'');
    let code = `# ${palette.name} - ${palette.type} palette\n`;
    
    if (palette.type === 'sequential' || palette.type === 'diverging') {
        code += `import matplotlib.pyplot as plt\nimport numpy as np\n\n`;
        code += `# Define the ${palette.name} palette\n`;
        code += `colors = ${colorArray}\n\n`;
        code += `# Create a colormap\n`;
        code += `cmap = plt.cm.colors.ListedColormap(colors)\n\n`;
        code += `# Example usage with a heatmap\n`;
        code += `data = np.random.rand(10, 10)\n`;
        code += `plt.figure(figsize=(8, 6))\n`;
        code += `plt.imshow(data, cmap=cmap)\n`;
        code += `plt.colorbar()\n`;
        code += `plt.title('${palette.name} Palette')\n`;
        code += `plt.show()\n`;
    } else { // categorical
        code += `import matplotlib.pyplot as plt\nimport numpy as np\n\n`;
        code += `# Define the ${palette.name} palette\n`;
        code += `colors = ${colorArray}\n\n`;
        code += `# Example usage with a bar chart\n`;
        code += `categories = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'][:len(colors)]\n`;
        code += `values = np.random.rand(len(categories)) * 100\n\n`;
        code += `plt.figure(figsize=(10, 6))\n`;
        code += `bars = plt.bar(categories, values, color=colors)\n`;
        code += `plt.title('${palette.name} Palette')\n`;
        code += `plt.show()\n`;
    }
    
    return code;
}

// Generate R code example
function generateRCode(palette) {
    const colorArray = JSON.stringify(palette.colors).replace(/"/g, '"');
    let code = `# ${palette.name} - ${palette.type} palette\n`;
    
    if (palette.type === 'sequential' || palette.type === 'diverging') {
        code += `library(ggplot2)\n\n`;
        code += `# Define the ${palette.name} palette\n`;
        code += `colors <- c(${palette.colors.map(c => `"${c}"`).join(', ')})\n\n`;
        code += `# Create a function to use this palette\n`;
        code += `${palette.name.toLowerCase()}_palette <- function(n) {\n`;
        code += `  colorRampPalette(colors)(n)\n`;
        code += `}\n\n`;
        code += `# Example usage with a heatmap\n`;
        code += `set.seed(123)\n`;
        code += `data <- expand.grid(x = 1:10, y = 1:10)\n`;
        code += `data$z <- runif(nrow(data))\n\n`;
        code += `ggplot(data, aes(x, y, fill = z)) +\n`;
        code += `  geom_tile() +\n`;
        code += `  scale_fill_gradientn(colors = colors) +\n`;
        code += `  theme_minimal() +\n`;
        code += `  labs(title = "${palette.name} Palette")\n`;
    } else { // categorical
        code += `library(ggplot2)\n\n`;
        code += `# Define the ${palette.name} palette\n`;
        code += `colors <- c(${palette.colors.map(c => `"${c}"`).join(', ')})\n\n`;
        code += `# Example usage with a bar chart\n`;
        code += `set.seed(123)\n`;
        code += `data <- data.frame(\n`;
        code += `  category = LETTERS[1:${Math.min(palette.colors.length, 10)}],\n`;
        code += `  value = runif(${Math.min(palette.colors.length, 10)}) * 100\n`;
        code += `)\n\n`;
        code += `ggplot(data, aes(x = category, y = value, fill = category)) +\n`;
        code += `  geom_col() +\n`;
        code += `  scale_fill_manual(values = colors) +\n`;
        code += `  theme_minimal() +\n`;
        code += `  labs(title = "${palette.name} Palette")\n`;
    }
    
    return code;
}

// Generate JavaScript code example
function generateJavaScriptCode(palette) {
    const colorArray = JSON.stringify(palette.colors);
    let code = `// ${palette.name} - ${palette.type} palette\n`;
    
    if (palette.type === 'sequential' || palette.type === 'diverging') {
        code += `// Define the ${palette.name} palette\n`;
        code += `const colors = ${colorArray};\n\n`;
        code += `// Example usage with D3.js for a heatmap\n`;
        code += `const width = 500;\n`;
        code += `const height = 400;\n`;
        code += `const cellSize = 40;\n`;
        code += `const rows = 10;\n`;
        code += `const cols = 10;\n\n`;
        code += `// Generate random data\n`;
        code += `const data = Array.from({ length: rows * cols }, () => Math.random());\n\n`;
        code += `// Create a color scale\n`;
        code += `const colorScale = d3.scaleQuantize()\n`;
        code += `  .domain([0, 1])\n`;
        code += `  .range(colors);\n\n`;
        code += `// Create SVG\n`;
        code += `const svg = d3.select('#visualization')\n`;
        code += `  .append('svg')\n`;
        code += `  .attr('width', width)\n`;
        code += `  .attr('height', height);\n\n`;
        code += `// Create heatmap cells\n`;
        code += `for (let i = 0; i < rows; i++) {\n`;
        code += `  for (let j = 0; j < cols; j++) {\n`;
        code += `    const index = i * cols + j;\n`;
        code += `    svg.append('rect')\n`;
        code += `      .attr('x', j * cellSize)\n`;
        code += `      .attr('y', i * cellSize)\n`;
        code += `      .attr('width', cellSize - 1)\n`;
        code += `      .attr('height', cellSize - 1)\n`;
        code += `      .attr('fill', colorScale(data[index]));\n`;
        code += `  }\n`;
        code += `}\n`;
    } else { // categorical
        code += `// Define the ${palette.name} palette\n`;
        code += `const colors = ${colorArray};\n\n`;
        code += `// Example usage with D3.js for a bar chart\n`;
        code += `const width = 500;\n`;
        code += `const height = 400;\n`;
        code += `const margin = { top: 20, right: 20, bottom: 30, left: 40 };\n\n`;
        code += `// Generate data\n`;
        code += `const data = Array.from({ length: colors.length }, (_, i) => ({\n`;
        code += `  category: \`Category \${i + 1}\`,\n`;
        code += `  value: Math.random() * 100\n`;
        code += `}));\n\n`;
        code += `// Create SVG\n`;
        code += `const svg = d3.select('#visualization')\n`;
        code += `  .append('svg')\n`;
        code += `  .attr('width', width)\n`;
        code += `  .attr('height', height);\n\n`;
        code += `const g = svg.append('g')\n`;
        code += `  .attr('transform', \`translate(\${margin.left},\${margin.top})\`);\n\n`;
        code += `// Create scales\n`;
        code += `const x = d3.scaleBand()\n`;
        code += `  .domain(data.map(d => d.category))\n`;
        code += `  .range([0, width - margin.left - margin.right])\n`;
        code += `  .padding(0.1);\n\n`;
        code += `const y = d3.scaleLinear()\n`;
        code += `  .domain([0, d3.max(data, d => d.value)])\n`;
        code += `  .range([height - margin.top - margin.bottom, 0]);\n\n`;
        code += `// Create bars\n`;
        code += `g.selectAll('.bar')\n`;
        code += `  .data(data)\n`;
        code += `  .enter().append('rect')\n`;
        code += `  .attr('class', 'bar')\n`;
        code += `  .attr('x', d => x(d.category))\n`;
        code += `  .attr('y', d => y(d.value))\n`;
        code += `  .attr('width', x.bandwidth())\n`;
        code += `  .attr('height', d => height - margin.top - margin.bottom - y(d.value))\n`;
        code += `  .attr('fill', (_, i) => colors[i]);\n`;
    }
    
    return code;
}

// Copy to clipboard utility
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Show copy notification
function showCopyNotification(message = 'Copied to clipboard!') {
    const notification = document.getElementById('copy-notification');
    notification.textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Visualization rendering functions
function renderHeatmap(container, colors, options = {}) {
    // Heatmap visualization with axes and labels
    const width = container.clientWidth;
    const height = 300;
    const margin = { top: 30, right: 80, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Apply customization options with defaults
    const rows = options.rows || 8;
    const cols = options.cols || 10;
    const colorScaleType = options.colorScale || 'quantize';
    const showLabels = options.hasOwnProperty('showLabels') ? options.showLabels : true;
    const showLegend = options.hasOwnProperty('showLegend') ? options.showLegend : true;
    
    const cellWidth = innerWidth / cols;
    const cellHeight = innerHeight / rows;
    
    // Generate random data matrix
    const data = Array.from({ length: rows }, () => 
        Array.from({ length: cols }, () => Math.random() * 100)
    );
    
    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Create color scale based on selected type
    let colorScale;
    switch (colorScaleType) {
        case 'linear':
            colorScale = d3.scaleLinear()
                .domain([0, 100])
                .range([colors[0], colors[colors.length - 1]]);
            break;
        case 'quantile':
            // Flatten the data for quantile scale
            const flatData = data.flat();
            colorScale = d3.scaleQuantile()
                .domain(flatData)
                .range(colors);
            break;
        case 'quantize':
        default:
            colorScale = d3.scaleQuantize()
                .domain([0, 100])
                .range(colors);
            break;
    }
    
    // Create x and y scales for axes
    const xScale = d3.scaleBand()
        .domain(d3.range(cols))
        .range([0, innerWidth]);
    
    const yScale = d3.scaleBand()
        .domain(d3.range(rows))
        .range([0, innerHeight]);
    
    // Add axes if labels are enabled
    if (showLabels) {
        // Add x-axis
        g.append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0,${innerHeight})`)
            .call(d3.axisBottom(xScale).tickFormat(i => `X${i+1}`));
        
        // Add y-axis
        g.append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(yScale).tickFormat(i => `Y${i+1}`));
    }
    
    // Add x-axis label
    g.append('text')
        .attr('class', 'x-axis-label')
        .attr('x', innerWidth / 2)
        .attr('y', innerHeight + margin.bottom - 10)
        .attr('text-anchor', 'middle')
        .text('X Dimension');
    
    // Add y-axis label
    g.append('text')
        .attr('class', 'y-axis-label')
        .attr('transform', 'rotate(-90)')
        .attr('x', -innerHeight / 2)
        .attr('y', -margin.left + 15)
        .attr('text-anchor', 'middle')
        .text('Y Dimension');
    
    // Create heatmap cells
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const value = data[i][j];
            g.append('rect')
                .attr('x', xScale(j))
                .attr('y', yScale(i))
                .attr('width', cellWidth)
                .attr('height', cellHeight)
                .attr('fill', colorScale(value))
                .attr('stroke', 'white')
                .attr('stroke-width', 0.5);
        }
    }
    
    // Add legend if enabled
    if (showLegend) {
        const legendWidth = 20;
        const legendHeight = innerHeight;
        const legendScale = d3.scaleLinear()
            .domain([0, 100])
            .range([legendHeight, 0]);
        
        const legendAxis = d3.axisRight(legendScale)
            .tickSize(3)
            .ticks(5);
        
        const legend = g.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${innerWidth + 20}, 0)`);
        
        // Create gradient for legend
        const defs = svg.append('defs');
        const gradient = defs.append('linearGradient')
            .attr('id', 'legend-gradient')
            .attr('x1', '0%')
            .attr('y1', '100%')
            .attr('x2', '0%')
            .attr('y2', '0%');
        
        // Add color stops
        colors.forEach((color, i) => {
            gradient.append('stop')
                .attr('offset', `${i * 100 / (colors.length - 1)}%`)
                .attr('stop-color', color);
        });
        
        // Draw legend rectangle
        legend.append('rect')
            .attr('width', legendWidth)
            .attr('height', legendHeight)
            .style('fill', 'url(#legend-gradient)');
        
        // Add legend axis
        legend.append('g')
            .attr('transform', `translate(${legendWidth}, 0)`)
            .call(legendAxis);
        
        // Add legend title
        legend.append('text')
            .attr('class', 'legend-title')
            .attr('x', legendWidth / 2)
            .attr('y', -10)
            .attr('text-anchor', 'middle')
            .text('Value');
    }
}

function renderBarChart(container, colors, options = {}) {
    // Bar chart visualization
    const width = container.clientWidth;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Apply customization options with defaults
    const barCount = options.barCount || 8;
    const barPadding = options.barPadding || 0.1;
    const sortBars = options.sortBars || 'none';
    const showValues = options.hasOwnProperty('showValues') ? options.showValues : false;
    const showGrid = options.hasOwnProperty('showGrid') ? options.showGrid : true;
    
    // Generate random data
    let data = Array.from({ length: barCount }, (_, i) => ({
        category: `Category ${i + 1}`,
        value: Math.random() * 100
    }));
    
    // Sort data if requested
    if (sortBars === 'ascending') {
        data.sort((a, b) => a.value - b.value);
    } else if (sortBars === 'descending') {
        data.sort((a, b) => b.value - a.value);
    }
    
    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Create scales
    const x = d3.scaleBand()
        .domain(data.map(d => d.category))
        .range([0, innerWidth])
        .padding(barPadding);
    
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .nice()
        .range([innerHeight, 0]);
    
    // Add grid lines if enabled
    if (showGrid) {
        g.append('g')
            .attr('class', 'grid')
            .call(d3.axisLeft(y)
                .tickSize(-innerWidth)
                .tickFormat('')
            )
            .style('stroke-opacity', 0.1);
    }
    
    // Add axes
    g.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x));
    
    g.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(y));
    
    // Add x-axis label
    g.append('text')
        .attr('class', 'x-axis-label')
        .attr('x', innerWidth / 2)
        .attr('y', innerHeight + margin.bottom - 10)
        .attr('text-anchor', 'middle')
        .text('Categories');
    
    // Add y-axis label
    g.append('text')
        .attr('class', 'y-axis-label')
        .attr('transform', 'rotate(-90)')
        .attr('x', -innerHeight / 2)
        .attr('y', -margin.left + 15)
        .attr('text-anchor', 'middle')
        .text('Values');
    
    // Add bars
    g.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.category))
        .attr('y', d => y(d.value))
        .attr('width', x.bandwidth())
        .attr('height', d => innerHeight - y(d.value))
        .attr('fill', (d, i) => colors[i % colors.length]);
        
    // Add value labels if enabled
    if (showValues) {
        g.selectAll('.value-label')
            .data(data)
            .enter()
            .append('text')
            .attr('class', 'value-label')
            .attr('x', d => x(d.category) + x.bandwidth() / 2)
            .attr('y', d => y(d.value) - 5)
            .attr('text-anchor', 'middle')
            .text(d => d.value.toFixed(1))
            .style('font-size', '10px')
            .style('fill', '#333');
    }
}

function renderLineChart(container, colors, options = {}) {
    // Line chart visualization
    const width = container.clientWidth;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Apply customization options with defaults
    const numLines = options.lineCount || 3;
    const numPoints = options.pointCount || 20;
    const lineWidth = options.lineWidth || 2;
    const showPoints = options.hasOwnProperty('showPoints') ? options.showPoints : false;
    const pointRadius = options.pointRadius || 3;
    const showArea = options.hasOwnProperty('showArea') ? options.showArea : false;
    const curveType = options.curveType || 'linear';
    
    // Generate random data for multiple lines
    const data = Array.from({ length: numLines }, (_, lineIndex) => {
        return Array.from({ length: numPoints }, (_, i) => ({
            x: i,
            y: Math.random() * 80 + 10 + (lineIndex * 5)
        }));
    });
    
    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    const x = d3.scaleLinear()
        .domain([0, numPoints - 1])
        .range([0, innerWidth]);
    
    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([innerHeight, 0]);
    
    // Add x-axis
    g.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x).ticks(5));
    
    // Add y-axis
    g.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(y));
    
    // Add x-axis label
    g.append('text')
        .attr('class', 'x-axis-label')
        .attr('x', innerWidth / 2)
        .attr('y', innerHeight + margin.bottom - 10)
        .attr('text-anchor', 'middle')
        .text('Time Points');
    
    // Add y-axis label
    g.append('text')
        .attr('class', 'y-axis-label')
        .attr('transform', 'rotate(-90)')
        .attr('x', -innerHeight / 2)
        .attr('y', -margin.left + 15)
        .attr('text-anchor', 'middle')
        .text('Values');
    
    // Add grid lines (optional)
    g.append('g')
        .attr('class', 'grid')
        .attr('opacity', 0.1)
        .call(d3.axisLeft(y)
            .tickSize(-innerWidth)
            .tickFormat(''));
    
    // Select curve type based on option
    let curveFunction;
    switch (curveType) {
        case 'linear':
            curveFunction = d3.curveLinear;
            break;
        case 'basis':
            curveFunction = d3.curveBasis;
            break;
        case 'cardinal':
            curveFunction = d3.curveCardinal;
            break;
        case 'step':
            curveFunction = d3.curveStep;
            break;
        default:
            curveFunction = d3.curveLinear;
    }
    
    const line = d3.line()
        .x(d => x(d.x))
        .y(d => y(d.y))
        .curve(curveFunction);
    
    // Create area generator if needed
    const area = d3.area()
        .x(d => x(d.x))
        .y0(innerHeight)
        .y1(d => y(d.y))
        .curve(curveFunction);
    
    // Add lines and optional areas
    data.forEach((lineData, i) => {
        // Add area if enabled
        if (showArea) {
            g.append('path')
                .datum(lineData)
                .attr('class', 'area')
                .attr('fill', colors[i])
                .attr('fill-opacity', 0.1)
                .attr('d', area);
        }
        
        // Add line
        g.append('path')
            .datum(lineData)
            .attr('class', 'line')
            .attr('fill', 'none')
            .attr('stroke', colors[i])
            .attr('stroke-width', lineWidth)
            .attr('d', line);
        
        // Add points if enabled
        if (showPoints) {
            g.selectAll(`.point-group-${i}`)
                .data(lineData)
                .enter()
                .append('circle')
                .attr('class', `point-group-${i}`)
                .attr('cx', d => x(d.x))
                .attr('cy', d => y(d.y))
                .attr('r', pointRadius)
                .attr('fill', colors[i]);
        }
    });
    
    // Add legend if enabled
    const showLegend = options.hasOwnProperty('showLegend') ? options.showLegend : true;
    
    if (showLegend) {
        const legend = svg.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${margin.left},${margin.top})`);
        
        data.forEach((_, i) => {
            const legendRow = legend.append('g')
                .attr('transform', `translate(0, ${i * 20})`);
            
            legendRow.append('rect')
                .attr('width', 15)
                .attr('height', 15)
                .attr('fill', colors[i]);
            
            legendRow.append('text')
                .attr('x', 20)
                .attr('y', 12)
                .text(`Series ${i + 1}`);
        });
    }
}

// Volcano Plot Visualization
function renderVolcanoPlot(container, colors, options = {}) {
    const width = container.clientWidth;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 50, left: 60 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    
    // Apply customization options with defaults
    const numPoints = options.pointCount || 100;
    const pointSize = options.pointSize || 4;
    const fcThreshold = options.foldChangeThreshold || 1; // log fold change threshold
    const showThresholdLines = options.hasOwnProperty('showThresholdLines') ? options.showThresholdLines : true;
    
    const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height);
    
    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
    
    // Generate random data for volcano plot
    // x: log2 fold change, y: -log10(p-value)
    const data = Array.from({ length: numPoints }, () => ({
        logFC: (Math.random() * 8) - 4, // -4 to 4
        pValue: Math.pow(10, -(Math.random() * 6)) // p-value from 1 to 10^-6
    }));
    
    // Calculate -log10(p-value)
    data.forEach(d => {
        d.negLogP = -Math.log10(d.pValue);
    });
    
    // Create scales
    const x = d3.scaleLinear()
        .domain([-4, 4])
        .range([0, innerWidth]);
    
    const y = d3.scaleLinear()
        .domain([0, 6])
        .range([innerHeight, 0]);
    
    // Add x-axis
    g.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(d3.axisBottom(x));
    
    // Add y-axis
    g.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(y));
    
    // Add x-axis label
    g.append('text')
        .attr('class', 'x-axis-label')
        .attr('x', innerWidth / 2)
        .attr('y', innerHeight + margin.bottom - 10)
        .attr('text-anchor', 'middle')
        .text('log₂ Fold Change');
    
    // Add y-axis label
    g.append('text')
        .attr('class', 'y-axis-label')
        .attr('transform', 'rotate(-90)')
        .attr('x', -innerHeight / 2)
        .attr('y', -margin.left + 15)
        .attr('text-anchor', 'middle')
        .text('-log₁₀(p-value)');
    
    // Calculate p-value threshold for -log10 scale
    const pThreshold = 2; // -log10(p-value) threshold
    
    // Add threshold lines if enabled
    if (showThresholdLines) {
        // Horizontal threshold line
        g.append('line')
            .attr('class', 'threshold')
            .attr('x1', 0)
            .attr('y1', y(pThreshold))
            .attr('x2', innerWidth)
            .attr('y2', y(pThreshold))
            .attr('stroke', '#888')
            .attr('stroke-width', 1)
            .attr('stroke-dasharray', '4');
        
        // Vertical threshold lines
        g.append('line')
            .attr('class', 'threshold')
            .attr('x1', x(-fcThreshold))
            .attr('y1', 0)
            .attr('x2', x(-fcThreshold))
            .attr('y2', innerHeight)
            .attr('stroke', '#888')
            .attr('stroke-width', 1)
            .attr('stroke-dasharray', '4');
        
        g.append('line')
            .attr('class', 'threshold')
            .attr('x1', x(fcThreshold))
            .attr('y1', 0)
            .attr('x2', x(fcThreshold))
            .attr('y2', innerHeight)
            .attr('stroke', '#888')
            .attr('stroke-width', 1)
            .attr('stroke-dasharray', '4');
    }
    
    // Function to determine point color based on significance
    const getPointColor = d => {
        if (d.negLogP >= pThreshold) {
            if (d.logFC >= fcThreshold) return colors[0]; // Upregulated
            if (d.logFC <= -fcThreshold) return colors[colors.length - 1]; // Downregulated
        }
        return '#888'; // Not significant
    };
    
    // Add points
    g.selectAll('.point')
        .data(data)
        .enter().append('circle')
        .attr('class', 'point')
        .attr('cx', d => x(d.logFC))
        .attr('cy', d => y(d.negLogP))
        .attr('r', pointSize)
        .attr('fill', d => getPointColor(d))
        .attr('opacity', 0.7)
        .attr('stroke', '#fff')
        .attr('stroke-width', 0.5);
    
    // Add legend if enabled
    const showLegend = options.hasOwnProperty('showLegend') ? options.showLegend : true;
    
    if (showLegend) {
        const legend = svg.append('g')
            .attr('class', 'legend')
            .attr('transform', `translate(${margin.left + 10},${margin.top + 10})`);
        
        const legendItems = [
            { label: 'Upregulated', color: colors[0] },
            { label: 'Not Significant', color: '#888' },
            { label: 'Downregulated', color: colors[colors.length - 1] }
        ];
        
        legendItems.forEach((item, i) => {
            const legendRow = legend.append('g')
                .attr('transform', `translate(0, ${i * 20})`);
            
            legendRow.append('circle')
                .attr('r', 5)
                .attr('fill', item.color)
                .attr('opacity', 0.7)
                .attr('stroke', '#fff')
                .attr('stroke-width', 0.5);
            
            legendRow.append('text')
                .attr('x', 15)
                .attr('y', 5)
                .attr('text-anchor', 'start')
                .style('font-size', '12px')
                .text(item.label);
        });
    }
}
