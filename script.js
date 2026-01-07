// Tiny text mapping
const tinyTextMap = {
    'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ',
    'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ',
    'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ',
    'p': 'ᴘ', 'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ',
    'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x', 'y': 'ʏ',
    'z': 'ᴢ',
    'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ',
    'F': 'ғ', 'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ',
    'K': 'ᴋ', 'L': 'ʟ', 'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ',
    'P': 'ᴘ', 'Q': 'ǫ', 'R': 'ʀ', 'S': 's', 'T': 'ᴛ',
    'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x', 'Y': 'ʏ',
    'Z': 'ᴢ'
};

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all nav items and sections
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        document.querySelectorAll('.section').forEach(section => section.classList.remove('active'));
        
        // Add active class to clicked nav item
        this.classList.add('active');
        
        // Show corresponding section
        const sectionId = this.getAttribute('data-section');
        document.getElementById(sectionId).classList.add('active');
    });
});

// Get elements
const normalTextArea = document.getElementById('normalText');
const tinyTextArea = document.getElementById('tinyText');
const copyBtn = document.getElementById('copyBtn');

// Gradient elements
const gradientInput = document.getElementById('gradientInput');
const gradientOutput = document.getElementById('gradientOutput');
const gradientPreview = document.getElementById('gradientPreview');
const copyGradientBtn = document.getElementById('copyGradientBtn');
const formatSelect = document.getElementById('formatSelect');
const colorStopsContainer = document.getElementById('colorStops');
const addColorBtn = document.getElementById('addColorBtn');
const removeColorBtn = document.getElementById('removeColorBtn');

// Formatting state
const formattingState = {
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    obfuscated: false
};

// Minecraft formatting codes
const formatCodes = {
    bold: '&l',
    italic: '&o',
    underline: '&n',
    strikethrough: '&m',
    obfuscated: '&k'
};

// Color stops array
let colorStops = [
    { color: '#37ACE6', position: 0 },
    { color: '#54B66F', position: 100 }
];

// Convert text to tiny text
function convertToTiny(text) {
    return text.split('').map(char => tinyTextMap[char] || char).join('');
}

// Event listener for input
normalTextArea.addEventListener('input', function() {
    const converted = convertToTiny(this.value);
    tinyTextArea.value = converted;
});

// Copy to clipboard
copyBtn.addEventListener('click', function() {
    tinyTextArea.select();
    tinyTextArea.setSelectionRange(0, 99999); // For mobile devices
    
    navigator.clipboard.writeText(tinyTextArea.value).then(() => {
        // Change button text temporarily
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        
        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        alert('Failed to copy text');
    });
});

// ===== COORDINATES CONVERTER =====

const overworldX = document.getElementById('overworldX');
const overworldY = document.getElementById('overworldY');
const overworldZ = document.getElementById('overworldZ');
const netherX = document.getElementById('netherX');
const netherY = document.getElementById('netherY');
const netherZ = document.getElementById('netherZ');
const copyOverworld = document.getElementById('copyOverworld');
const copyNether = document.getElementById('copyNether');

// Convert Overworld to Nether
function overworldToNether() {
    const x = parseFloat(overworldX.value) || 0;
    const y = parseFloat(overworldY.value) || 0;
    const z = parseFloat(overworldZ.value) || 0;
    
    netherX.value = Math.round(x / 8);
    netherY.value = Math.round(y);
    netherZ.value = Math.round(z / 8);
}

// Convert Nether to Overworld
function netherToOverworld() {
    const x = parseFloat(netherX.value) || 0;
    const y = parseFloat(netherY.value) || 0;
    const z = parseFloat(netherZ.value) || 0;
    
    overworldX.value = Math.round(x * 8);
    overworldY.value = Math.round(y);
    overworldZ.value = Math.round(z * 8);
}

// Event listeners for coordinate inputs
overworldX.addEventListener('input', overworldToNether);
overworldY.addEventListener('input', overworldToNether);
overworldZ.addEventListener('input', overworldToNether);

netherX.addEventListener('input', netherToOverworld);
netherY.addEventListener('input', netherToOverworld);
netherZ.addEventListener('input', netherToOverworld);

// Copy buttons
copyOverworld.addEventListener('click', function() {
    const coords = `${overworldX.value} ${overworldY.value} ${overworldZ.value}`;
    navigator.clipboard.writeText(coords).then(() => {
        const originalText = copyOverworld.textContent;
        copyOverworld.textContent = 'Copied!';
        copyOverworld.classList.add('copied');
        
        setTimeout(() => {
            copyOverworld.textContent = originalText;
            copyOverworld.classList.remove('copied');
        }, 2000);
    });
});

copyNether.addEventListener('click', function() {
    const coords = `${netherX.value} ${netherY.value} ${netherZ.value}`;
    navigator.clipboard.writeText(coords).then(() => {
        const originalText = copyNether.textContent;
        copyNether.textContent = 'Copied!';
        copyNether.classList.add('copied');
        
        setTimeout(() => {
            copyNether.textContent = originalText;
            copyNether.classList.remove('copied');
        }, 2000);
    });
});

// ===== GRADIENT TEXT GENERATOR =====

// Render color stops
function renderColorStops() {
    colorStopsContainer.innerHTML = '';
    
    colorStops.forEach((stop, index) => {
        const stopDiv = document.createElement('div');
        stopDiv.className = 'color-stop';
        stopDiv.innerHTML = `
            <div class="color-stop-number">Color ${index + 1}</div>
            <div class="color-stop-picker">
                <input type="color" value="${stop.color}" data-index="${index}" class="color-picker">
                <input type="text" value="${stop.color.toUpperCase()}" data-index="${index}" class="color-text">
            </div>
            <div class="color-stop-position">
                <label>Position:</label>
                <input type="range" min="0" max="100" value="${stop.position}" data-index="${index}" class="position-slider">
                <input type="number" min="0" max="100" value="${stop.position}" data-index="${index}" class="position-number">
                <span>%</span>
            </div>
        `;
        colorStopsContainer.appendChild(stopDiv);
    });
    
    // Add event listeners to newly created elements
    document.querySelectorAll('.color-picker').forEach(picker => {
        picker.addEventListener('input', function() {
            const index = parseInt(this.dataset.index);
            colorStops[index].color = this.value;
            document.querySelector(`.color-text[data-index="${index}"]`).value = this.value.toUpperCase();
            generateGradient();
        });
    });
    
    document.querySelectorAll('.color-text').forEach(input => {
        input.addEventListener('input', function() {
            if (/^#[0-9A-F]{6}$/i.test(this.value)) {
                const index = parseInt(this.dataset.index);
                colorStops[index].color = this.value;
                document.querySelector(`.color-picker[data-index="${index}"]`).value = this.value;
                generateGradient();
            }
        });
    });
    
    document.querySelectorAll('.position-slider').forEach(slider => {
        slider.addEventListener('input', function() {
            const index = parseInt(this.dataset.index);
            colorStops[index].position = parseInt(this.value);
            document.querySelector(`.position-number[data-index="${index}"]`).value = this.value;
            generateGradient();
        });
    });
    
    document.querySelectorAll('.position-number').forEach(input => {
        input.addEventListener('input', function() {
            const value = Math.max(0, Math.min(100, parseInt(this.value) || 0));
            const index = parseInt(this.dataset.index);
            colorStops[index].position = value;
            document.querySelector(`.position-slider[data-index="${index}"]`).value = value;
            this.value = value;
            generateGradient();
        });
    });
}

// Add color stop
addColorBtn.addEventListener('click', function() {
    const newPosition = colorStops.length > 0 ? 
        Math.round((colorStops[colorStops.length - 1].position + 100) / 2) : 50;
    
    colorStops.push({
        color: '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase(),
        position: Math.min(newPosition, 100)
    });
    renderColorStops();
    generateGradient();
});

// Remove color stop
removeColorBtn.addEventListener('click', function() {
    if (colorStops.length > 1) {
        colorStops.pop();
        renderColorStops();
        generateGradient();
    }
});

// Helper function to parse hex color
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// Helper function to convert RGB to hex
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Interpolate between two colors
function interpolateColor(color1, color2, factor) {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    
    const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
    const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
    const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);
    
    return { r, g, b };
}

// Get color at position with multiple stops
function getColorAtPosition(position) {
    // Sort stops by position
    const sortedStops = [...colorStops].sort((a, b) => a.position - b.position);
    
    // Find the two stops to interpolate between
    let beforeStop = sortedStops[0];
    let afterStop = sortedStops[sortedStops.length - 1];
    
    for (let i = 0; i < sortedStops.length - 1; i++) {
        if (position >= sortedStops[i].position && position <= sortedStops[i + 1].position) {
            beforeStop = sortedStops[i];
            afterStop = sortedStops[i + 1];
            break;
        }
    }
    
    // If position is before first stop or after last stop
    if (position <= sortedStops[0].position) return sortedStops[0].color;
    if (position >= sortedStops[sortedStops.length - 1].position) return sortedStops[sortedStops.length - 1].color;
    
    // Calculate interpolation factor
    const range = afterStop.position - beforeStop.position;
    const factor = range === 0 ? 0 : (position - beforeStop.position) / range;
    
    return interpolateColor(beforeStop.color, afterStop.color, factor);
}

// Generate gradient text
function generateGradient() {
    const text = gradientInput.value;
    if (!text) {
        gradientOutput.value = '';
        gradientPreview.innerHTML = '';
        return;
    }
    
    const format = formatSelect.value;
    const chars = text.split('');
    const length = chars.length;
    
    let output = '';
    let previewHTML = '';
    
    // Build formatting codes string
    let formatString = '';
    if (formattingState.bold) formatString += formatCodes.bold;
    if (formattingState.italic) formatString += formatCodes.italic;
    if (formattingState.underline) formatString += formatCodes.underline;
    if (formattingState.strikethrough) formatString += formatCodes.strikethrough;
    if (formattingState.obfuscated) formatString += formatCodes.obfuscated;
    
    chars.forEach((char, index) => {
        const position = length > 1 ? (index / (length - 1)) * 100 : 0;
        const color = getColorAtPosition(position);
        const colorObj = typeof color === 'string' ? hexToRgb(color) : color;
        const hex = typeof color === 'string' ? color : rgbToHex(color.r, color.g, color.b);
        
        // Format output based on selection
        let colorCode;
        if (format === '&#') {
            colorCode = `&#${hex.substring(1)}${formatString}${char}`;
        } else if (format === 'hex') {
            colorCode = `${hex}${formatString}${char}`;
        } else if (format === 'rgb') {
            const rgb = hexToRgb(hex);
            colorCode = `rgb(${rgb.r},${rgb.g},${rgb.b})${formatString}${char}`;
        }
        
        output += colorCode;
        
        // Build preview with CSS styles
        let styles = `color: ${hex};`;
        if (formattingState.bold) styles += ' font-weight: bold;';
        if (formattingState.italic) styles += ' font-style: italic;';
        if (formattingState.underline) styles += ' text-decoration: underline;';
        if (formattingState.strikethrough) styles += ' text-decoration: line-through;';
        
        previewHTML += `<span style="${styles}">${char}</span>`;
    });
    
    gradientOutput.value = output;
    gradientPreview.innerHTML = previewHTML;
}

// Initialize color stops
renderColorStops();

// Format button event listeners
document.querySelectorAll('.format-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const format = this.dataset.format;
        formattingState[format] = !formattingState[format];
        this.classList.toggle('active');
        generateGradient();
    });
});

// Event listeners for gradient
gradientInput.addEventListener('input', generateGradient);
formatSelect.addEventListener('change', generateGradient);

// Copy gradient to clipboard
copyGradientBtn.addEventListener('click', function() {
    gradientOutput.select();
    gradientOutput.setSelectionRange(0, 99999);
    
    navigator.clipboard.writeText(gradientOutput.value).then(() => {
        const originalText = copyGradientBtn.textContent;
        copyGradientBtn.textContent = 'Copied!';
        copyGradientBtn.classList.add('copied');
        
        setTimeout(() => {
            copyGradientBtn.textContent = originalText;
            copyGradientBtn.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        alert('Failed to copy text');
    });
});
