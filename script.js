document.addEventListener('DOMContentLoaded', function() {
    const shellInput = document.getElementById('shell-input');
    const flagInput = document.getElementById('input_flag');
    const outputDiv = document.getElementById('output');
    let fileList = ['secret.txt', 'site.html', 'family', 'pictures'];


    shellInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const command = shellInput.value.substring();
            executeCommand(command);
        }
    });

    flagInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            const value = flagInput.value.substring();

            if (value === "Gaufre") {
                window.location.replace('http://127.0.0.1:5500/french-cv.html')
            
            } else {
                alert("Mauvais Flag !")
            }
        }
    });

    function executeCommand(command) {
        switch (command.trim().toLowerCase()) {
            case 'ls':
                const result = fileList.join('<br>');
                displayOutput(result);
                break;
            default:
                displayOutput(`Command not found: ${command}`);
        }  
    }



    function displayOutput(output) {
        outputDiv.innerHTML += `<div>${output}</div>`;
        outputDiv.innerHTML  += '-------------------------';
    }
});