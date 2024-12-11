document.addEventListener('DOMContentLoaded', () => {
function playGame(userchoices){
    console.log("User choice:", userchoices); 
    const choices = ['Snake', 'water', 'gun'];
    const randomIndex = Math.floor(Math.random() * choices.length);
     const computerchoice = choices[randomIndex];
     console.log("Computer choice:", computerchoice);

    let resultText = '' ;
    let resultsrc ='';
    let resultalt ='';

    if(userchoices === computerchoice){
        resultText = `Its a Draw both choose ${userchoices}`
        resultsrc = ' ./images/you draw.png'
        resultalt = 'draw'
    }else if (
        (userchoices === 'Snake' && computerchoice=== 'water')||
        (userchoices === 'water' && computerchoice=== 'gun')||
        (userchoices === 'gun' && computerchoice=== 'Snake')
    ) {
        resultText = `you have win the game ${userchoices} beat ${computerchoice}`
        resultsrc = './images/happy emoji.png'  
        resultalt = 'you won'
    }else if (
        (userchoices === 'water' && computerchoice=== 'Snake')||
        (userchoices === 'gun' && computerchoice=== 'water')||
        (userchoices === 'Snake' && computerchoice=== 'gun') 
    ) {
        resultText = `you lost ! computer choice ${computerchoice} and you choice ${userchoices}`
        resultsrc = './images/you lost.png'
        resultalt = 'you lost'
    }

    const resultTextElement = document.getElementById('resultText');
    const resultImageElement = document.getElementById('resultImage');

    resultTextElement.innerText = resultText; // Update text content
    resultImageElement.src = resultsrc; // Update image source
    resultImageElement.alt = resultalt; // Update image alt text
    resultImageElement.style.display = 'block'; 
    
}
    window.playGame = playGame; // Attach playGame to the global window object for use in HTML onclick
});
