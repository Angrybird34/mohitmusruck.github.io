const input = document.getElementById('terminal-input');
const output = document.getElementById('terminal-output');

const commands = {
    'help': 'Available commands: whoami, certs, projects, contact, clear',
    'whoami': 'Mohit Musruck: Cloud Tech Professional & Linux Admin based in Mauritius.',
    'certs': '• Advanced Linux SysAdmin <br> • Cloud Infrastructure Specialist (3 Years XP)',
    'projects': '• Apex-X Remote Control <br> • 500m² Automated Hydroponic Farm',
    'contact': 'Email: mohit@example.mu | Location: Rose Belle, Mauritius'
};

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = input.value.toLowerCase().trim();
        const newLine = document.createElement('div');
        
        if (cmd === 'clear') {
            output.innerHTML = '';
        } else if (commands[cmd]) {
            newLine.innerHTML = `<span class="prompt">mohit@cloud:~$</span> ${cmd}<br><span style="color:white">${commands[cmd]}</span>`;
            output.appendChild(newLine);
        } else {
            newLine.innerHTML = `<span class="prompt">mohit@cloud:~$</span> ${cmd}<br><span style="color:red">Command not found. Type 'help'.</span>`;
            output.appendChild(newLine);
        }

        input.value = '';
        output.scrollTop = output.scrollHeight; // Auto-scroll to bottom
    }
});
