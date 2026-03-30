const tinyTextMap = {
    a: 'ᵃ', b: 'ᵇ', c: 'ᶜ', d: 'ᵈ', e: 'ᵉ', f: 'ᶠ', g: 'ᵍ', h: 'ʰ', i: 'ᶦ', j: 'ʲ',
    k: 'ᵏ', l: 'ˡ', m: 'ᵐ', n: 'ⁿ', o: 'ᵒ', p: 'ᵖ', q: 'ᵠ', r: 'ʳ', s: 'ˢ', t: 'ᵗ',
    u: 'ᵘ', v: 'ᵛ', w: 'ʷ', x: 'ˣ', y: 'ʸ', z: 'ᶻ',
    A: 'ᴬ', B: 'ᴮ', C: 'ᶜ', D: 'ᴰ', E: 'ᴱ', F: 'ᶠ', G: 'ᴳ', H: 'ᴴ', I: 'ᴵ', J: 'ᴶ',
    K: 'ᴷ', L: 'ᴸ', M: 'ᴹ', N: 'ᴺ', O: 'ᴼ', P: 'ᴾ', Q: 'ᵠ', R: 'ᴿ', S: 'ˢ', T: 'ᵀ',
    U: 'ᵁ', V: 'ⱽ', W: 'ᵂ', X: 'ˣ', Y: 'ʸ', Z: 'ᶻ',
    0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹'
};

const formatCodes = {
    bold: '&l',
    italic: '&o',
    underline: '&n',
    strikethrough: '&m',
    obfuscated: '&k'
};

const formattingState = {
    bold: false,
    italic: false,
    underline: false,
    strikethrough: false,
    obfuscated: false
};

let colorStops = [
    { color: '#37ACE6', position: 0 },
    { color: '#54B66F', position: 100 }
];

const emojiEntries = [
    { emoji: '😀', name: 'Grinning Face', tags: ['happy', 'smile', 'face'] },
    { emoji: '😎', name: 'Cool Face', tags: ['cool', 'glasses', 'swag'] },
    { emoji: '🔥', name: 'Fire', tags: ['fire', 'nether', 'hot', 'flame'] },
    { emoji: '💎', name: 'Diamond', tags: ['diamond', 'gem', 'rich', 'ore'] },
    { emoji: '⛏️', name: 'Pickaxe', tags: ['pickaxe', 'mine', 'tool', 'mining'] },
    { emoji: '🗡️', name: 'Sword', tags: ['sword', 'weapon', 'pvp', 'fight'] },
    { emoji: '🛡️', name: 'Shield', tags: ['shield', 'defense', 'combat'] },
    { emoji: '🏹', name: 'Bow', tags: ['bow', 'arrow', 'ranged', 'combat'] },
    { emoji: '🎯', name: 'Target', tags: ['target', 'aim', 'pvp', 'goal'] },
    { emoji: '⭐', name: 'Star', tags: ['star', 'favorite', 'shine'] },
    { emoji: '✨', name: 'Sparkles', tags: ['sparkle', 'magic', 'shine'] },
    { emoji: '🌈', name: 'Rainbow', tags: ['rainbow', 'gradient', 'color'] },
    { emoji: '❤️', name: 'Red Heart', tags: ['heart', 'love', 'health'] },
    { emoji: '💚', name: 'Green Heart', tags: ['heart', 'green', 'nature'] },
    { emoji: '💙', name: 'Blue Heart', tags: ['heart', 'blue', 'ocean'] },
    { emoji: '💜', name: 'Purple Heart', tags: ['heart', 'purple', 'magic'] },
    { emoji: '🧡', name: 'Orange Heart', tags: ['heart', 'orange', 'warm'] },
    { emoji: '💛', name: 'Yellow Heart', tags: ['heart', 'yellow', 'gold'] },
    { emoji: '🖤', name: 'Black Heart', tags: ['heart', 'black', 'dark'] },
    { emoji: '🤍', name: 'White Heart', tags: ['heart', 'white', 'clean'] },
    { emoji: '☠️', name: 'Skull', tags: ['skull', 'danger', 'death', 'pvp'] },
    { emoji: '👑', name: 'Crown', tags: ['crown', 'king', 'rank'] },
    { emoji: '🪙', name: 'Coin', tags: ['coin', 'economy', 'money'] },
    { emoji: '📦', name: 'Box', tags: ['box', 'crate', 'loot', 'storage'] },
    { emoji: '🎁', name: 'Gift', tags: ['gift', 'reward', 'crate'] },
    { emoji: '🧭', name: 'Compass', tags: ['compass', 'travel', 'coords'] },
    { emoji: '🌍', name: 'Overworld', tags: ['earth', 'overworld', 'world'] },
    { emoji: '🌙', name: 'Moon', tags: ['moon', 'night', 'dark'] },
    { emoji: '☀️', name: 'Sun', tags: ['sun', 'day', 'light'] },
    { emoji: '⚡', name: 'Lightning', tags: ['lightning', 'power', 'speed'] },
    { emoji: '🌊', name: 'Wave', tags: ['water', 'ocean', 'wave'] },
    { emoji: '🌿', name: 'Leaves', tags: ['leaf', 'nature', 'forest'] },
    { emoji: '🍀', name: 'Luck', tags: ['luck', 'clover', 'lucky'] },
    { emoji: '🪓', name: 'Axe', tags: ['axe', 'tool', 'wood', 'combat'] },
    { emoji: '🐉', name: 'Dragon', tags: ['dragon', 'end', 'boss'] },
    { emoji: '👾', name: 'Mob', tags: ['mob', 'monster', 'game'] },
    { emoji: '🧨', name: 'TNT', tags: ['tnt', 'explosion', 'boom'] },
    { emoji: '🏆', name: 'Trophy', tags: ['trophy', 'winner', 'rank'] },
    { emoji: '🚀', name: 'Rocket', tags: ['rocket', 'elytra', 'fast'] },
    { emoji: '🪄', name: 'Magic Wand', tags: ['magic', 'wand', 'enchanted'] }
];

document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();

        document.querySelectorAll('.nav-item').forEach((navItem) => {
            navItem.classList.remove('active');
        });

        document.querySelectorAll('.section').forEach((section) => {
            section.classList.remove('active');
        });

        item.classList.add('active');
        document.getElementById(item.dataset.section).classList.add('active');
    });
});

const normalTextArea = document.getElementById('normalText');
const tinyTextArea = document.getElementById('tinyText');
const copyBtn = document.getElementById('copyBtn');

const gradientInput = document.getElementById('gradientInput');
const gradientOutput = document.getElementById('gradientOutput');
const gradientPreview = document.getElementById('gradientPreview');
const copyGradientBtn = document.getElementById('copyGradientBtn');
const formatSelect = document.getElementById('formatSelect');
const colorStopsContainer = document.getElementById('colorStops');
const addColorBtn = document.getElementById('addColorBtn');
const removeColorBtn = document.getElementById('removeColorBtn');

const overworldX = document.getElementById('overworldX');
const overworldY = document.getElementById('overworldY');
const overworldZ = document.getElementById('overworldZ');
const netherX = document.getElementById('netherX');
const netherY = document.getElementById('netherY');
const netherZ = document.getElementById('netherZ');
const copyOverworld = document.getElementById('copyOverworld');
const copyNether = document.getElementById('copyNether');
const emojiSearch = document.getElementById('emojiSearch');
const clearEmojiSearch = document.getElementById('clearEmojiSearch');
const emojiGrid = document.getElementById('emojiGrid');
const emojiResultsCount = document.getElementById('emojiResultsCount');

function copyText(button, value, replaceLabel = true) {
    navigator.clipboard.writeText(value).then(() => {
        const originalText = button.textContent;
        const originalMarkup = button.innerHTML;

        if (replaceLabel) {
            button.textContent = 'Copied!';
        }

        button.classList.add('copied');

        setTimeout(() => {
            if (replaceLabel) {
                button.textContent = originalText;
            } else {
                button.innerHTML = originalMarkup;
            }

            button.classList.remove('copied');
        }, 2000);
    }).catch(() => {
        alert('Failed to copy text');
    });
}

function convertToTiny(text) {
    return text.split('').map((char) => tinyTextMap[char] || char).join('');
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    if (!result) {
        return null;
    }

    return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    };
}

function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

function interpolateColor(color1, color2, factor) {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);

    return {
        r: Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor),
        g: Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor),
        b: Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor)
    };
}

function getColorAtPosition(position) {
    const sortedStops = [...colorStops].sort((left, right) => left.position - right.position);

    if (position <= sortedStops[0].position) {
        return sortedStops[0].color;
    }

    if (position >= sortedStops[sortedStops.length - 1].position) {
        return sortedStops[sortedStops.length - 1].color;
    }

    let beforeStop = sortedStops[0];
    let afterStop = sortedStops[sortedStops.length - 1];

    for (let index = 0; index < sortedStops.length - 1; index += 1) {
        if (position >= sortedStops[index].position && position <= sortedStops[index + 1].position) {
            beforeStop = sortedStops[index];
            afterStop = sortedStops[index + 1];
            break;
        }
    }

    const range = afterStop.position - beforeStop.position;
    const factor = range === 0 ? 0 : (position - beforeStop.position) / range;

    return interpolateColor(beforeStop.color, afterStop.color, factor);
}

function generateGradient() {
    const text = gradientInput.value;

    if (!text) {
        gradientOutput.value = '';
        gradientPreview.innerHTML = '';
        return;
    }

    let formatString = '';
    Object.entries(formattingState).forEach(([key, enabled]) => {
        if (enabled) {
            formatString += formatCodes[key];
        }
    });

    const chars = [...text];
    const length = chars.length;
    let output = '';
    let previewHtml = '';

    chars.forEach((char, index) => {
        const position = length > 1 ? (index / (length - 1)) * 100 : 0;
        const color = getColorAtPosition(position);
        const hex = typeof color === 'string' ? color.toUpperCase() : rgbToHex(color.r, color.g, color.b);
        const rgb = hexToRgb(hex);

        if (formatSelect.value === 'minecraft') {
            output += `&#${hex.slice(1)}${formatString}${char}`;
        } else if (formatSelect.value === 'hex') {
            output += `${hex}${formatString}${char}`;
        } else {
            output += `rgb(${rgb.r},${rgb.g},${rgb.b})${formatString}${char}`;
        }

        let styles = `color: ${hex};`;
        if (formattingState.bold) styles += ' font-weight: bold;';
        if (formattingState.italic) styles += ' font-style: italic;';
        if (formattingState.underline) styles += ' text-decoration: underline;';
        if (formattingState.strikethrough) styles += ' text-decoration: line-through;';
        if (formattingState.obfuscated) styles += ' filter: blur(0.6px);';

        previewHtml += `<span style="${styles}">${char}</span>`;
    });

    gradientOutput.value = output;
    gradientPreview.innerHTML = previewHtml;
}

function renderColorStops() {
    colorStopsContainer.innerHTML = '';

    colorStops.forEach((stop, index) => {
        const stopElement = document.createElement('div');
        stopElement.className = 'color-stop';
        stopElement.innerHTML = `
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

        colorStopsContainer.appendChild(stopElement);
    });

    document.querySelectorAll('.color-picker').forEach((picker) => {
        picker.addEventListener('input', () => {
            const index = Number(picker.dataset.index);
            colorStops[index].color = picker.value.toUpperCase();
            document.querySelector(`.color-text[data-index="${index}"]`).value = picker.value.toUpperCase();
            generateGradient();
        });
    });

    document.querySelectorAll('.color-text').forEach((input) => {
        input.addEventListener('input', () => {
            if (!/^#[0-9A-F]{6}$/i.test(input.value)) {
                return;
            }

            const index = Number(input.dataset.index);
            const normalized = input.value.toUpperCase();
            colorStops[index].color = normalized;
            document.querySelector(`.color-picker[data-index="${index}"]`).value = normalized;
            generateGradient();
        });
    });

    document.querySelectorAll('.position-slider').forEach((slider) => {
        slider.addEventListener('input', () => {
            const index = Number(slider.dataset.index);
            const value = Number(slider.value);
            colorStops[index].position = value;
            document.querySelector(`.position-number[data-index="${index}"]`).value = value;
            generateGradient();
        });
    });

    document.querySelectorAll('.position-number').forEach((input) => {
        input.addEventListener('input', () => {
            const index = Number(input.dataset.index);
            const value = Math.max(0, Math.min(100, Number(input.value) || 0));
            colorStops[index].position = value;
            input.value = value;
            document.querySelector(`.position-slider[data-index="${index}"]`).value = value;
            generateGradient();
        });
    });
}

function renderEmojiEntries(filterText = '') {
    const normalizedFilter = filterText.trim().toLowerCase();
    const filteredEntries = emojiEntries.filter((entry) => {
        if (!normalizedFilter) {
            return true;
        }

        const searchableText = `${entry.name} ${entry.tags.join(' ')}`.toLowerCase();
        return searchableText.includes(normalizedFilter);
    });

    emojiResultsCount.textContent = `${filteredEntries.length} ${filteredEntries.length === 1 ? 'emoji' : 'emojis'}`;
    emojiGrid.innerHTML = '';

    if (filteredEntries.length === 0) {
        emojiGrid.innerHTML = '<div class="emoji-empty">No emojis matched that search. Try words like heart, sword, fire, or magic.</div>';
        return;
    }

    filteredEntries.forEach((entry) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'emoji-card';
        card.innerHTML = `
            <span class="emoji-symbol">${entry.emoji}</span>
            <span class="emoji-name">${entry.name}</span>
            <span class="emoji-tags">${entry.tags.join(' • ')}</span>
        `;

        card.addEventListener('click', () => {
            copyText(card, entry.emoji, false);
        });

        emojiGrid.appendChild(card);
    });
}

function overworldToNether() {
    const x = Number(overworldX.value) || 0;
    const y = Number(overworldY.value) || 0;
    const z = Number(overworldZ.value) || 0;

    netherX.value = Math.round(x / 8);
    netherY.value = Math.round(y);
    netherZ.value = Math.round(z / 8);
}

function netherToOverworld() {
    const x = Number(netherX.value) || 0;
    const y = Number(netherY.value) || 0;
    const z = Number(netherZ.value) || 0;

    overworldX.value = Math.round(x * 8);
    overworldY.value = Math.round(y);
    overworldZ.value = Math.round(z * 8);
}

normalTextArea.addEventListener('input', () => {
    tinyTextArea.value = convertToTiny(normalTextArea.value);
});

copyBtn.addEventListener('click', () => {
    copyText(copyBtn, tinyTextArea.value);
});

copyGradientBtn.addEventListener('click', () => {
    copyText(copyGradientBtn, gradientOutput.value);
});

gradientInput.addEventListener('input', () => {
    localStorage.setItem('gradientText', gradientInput.value);
    generateGradient();
});
formatSelect.addEventListener('change', generateGradient);

document.querySelectorAll('.format-btn').forEach((button) => {
    button.addEventListener('click', () => {
        const { format } = button.dataset;
        formattingState[format] = !formattingState[format];
        button.classList.toggle('active');
        generateGradient();
    });
});

addColorBtn.addEventListener('click', () => {
    const lastPosition = colorStops[colorStops.length - 1]?.position ?? 50;
    const newPosition = Math.min(Math.round((lastPosition + 100) / 2), 100);
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()}`;

    colorStops.push({
        color: randomColor,
        position: newPosition
    });

    renderColorStops();
    generateGradient();
});

removeColorBtn.addEventListener('click', () => {
    if (colorStops.length <= 1) {
        return;
    }

    colorStops.pop();
    renderColorStops();
    generateGradient();
});

[overworldX, overworldY, overworldZ].forEach((input) => {
    input.addEventListener('input', overworldToNether);
});

[netherX, netherY, netherZ].forEach((input) => {
    input.addEventListener('input', netherToOverworld);
});

copyOverworld.addEventListener('click', () => {
    copyText(copyOverworld, `${overworldX.value} ${overworldY.value} ${overworldZ.value}`);
});

copyNether.addEventListener('click', () => {
    copyText(copyNether, `${netherX.value} ${netherY.value} ${netherZ.value}`);
});

emojiSearch.addEventListener('input', () => {
    renderEmojiEntries(emojiSearch.value);
});

clearEmojiSearch.addEventListener('click', () => {
    emojiSearch.value = '';
    renderEmojiEntries('');
    emojiSearch.focus();
});

gradientInput.value = localStorage.getItem('gradientText') ?? '🏴Hello';
renderColorStops();
overworldToNether();
generateGradient();
renderEmojiEntries();