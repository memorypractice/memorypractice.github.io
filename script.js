document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('inputText');
    const removeLettersBtn = document.getElementById('removeLetters');
    const removeWordsBtn = document.getElementById('removeWords');
    const removeLinesBtn = document.getElementById('removeLines');
    const firstLettersBtn = document.getElementById('firstLetters');
    const removeCountInput = document.getElementById('removeCount');
    
    let originalInput = '';
    
    function disableButtons() {
        removeLettersBtn.disabled = true;
        removeWordsBtn.disabled = true;
        removeLinesBtn.disabled = true;
        firstLettersBtn.disabled = true;
    }
    
    function enableButtons() {
        removeLettersBtn.disabled = false;
        removeWordsBtn.disabled = false;
        removeLinesBtn.disabled = false;
        firstLettersBtn.disabled = false;
    }

    function updateInput(updatedText) {
        inputText.value = updatedText;
        enableButtons();
    }

    function removeRandomLetters(text, count) {
        const lettersToRemove = parseInt(count, 10);
        const letters = text.split('');
        const validIndices = letters.reduce((indices, char, index) => {
            if (char !== ' ') indices.push(index);
            return indices;
        }, []);
        
        for (let i = 0; i < lettersToRemove; i++) {
            const randomIndex = validIndices[Math.floor(Math.random() * validIndices.length)];
            letters.splice(randomIndex, 1);
            validIndices.splice(validIndices.indexOf(randomIndex), 1);
        }
        
        return letters.join('');
    }

    function removeRandomWords(text, count) {
        const wordsToRemove = parseInt(count, 10);
        const words = text.split(' ');
        const validIndices = words.reduce((indices, word, index) => {
            if (word.trim() !== '') indices.push(index);
            return indices;
        }, []);
        
        for (let i = 0; i < wordsToRemove; i++) {
            const randomIndex = validIndices[Math.floor(Math.random() * validIndices.length)];
            words.splice(randomIndex, 1);
            validIndices.splice(validIndices.indexOf(randomIndex), 1);
        }
        
        return words.join(' ');
    }

    function removeRandomLines(text, count) {
        const linesToRemove = parseInt(count, 10);
        const lines = text.split('\n');
        const validIndices = lines.reduce((indices, line, index) => {
            if (line.trim() !== '') indices.push(index);
            return indices;
        }, []);
        
        for (let i = 0; i < linesToRemove; i++) {
            const randomIndex = validIndices[Math.floor(Math.random() * validIndices.length)];
            lines.splice(randomIndex, 1);
            validIndices.splice(validIndices.indexOf(randomIndex), 1);
        }
        
        return lines.join('\n');
    }

    removeLettersBtn.addEventListener('click', function() {
        disableButtons();
        const removedText = removeRandomLetters(inputText.value, removeCountInput.value);
        updateInput(removedText);
    });

    removeWordsBtn.addEventListener('click', function() {
        disableButtons();
        const removedText = removeRandomWords(inputText.value, removeCountInput.value);
        updateInput(removedText);
    });

    removeLinesBtn.addEventListener('click', function() {
        disableButtons();
        const removedText = removeRandomLines(inputText.value, removeCountInput.value);
        updateInput(removedText);
    });

    firstLettersBtn.addEventListener('click', function() {
    disableButtons();
    const updatedText = inputText.value.replace(/(\S)\S*/g, '$1');
    updateInput(updatedText);
    });
});
