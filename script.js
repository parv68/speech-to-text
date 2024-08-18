window.speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();        
recognition.interimResults = true;
let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p)
recognition.addEventListener('result', (e) => {
    const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join('')
    p.textContent = transcript;
    if (e.results[0].isFinal) {
        p = document.createElement('p')
        words.appendChild(p)
    }
    if (transcript.includes('Unicorn')) {
        alert('You said unicorn!')
    }
})

recognition.addEventListener('end', recognition.start)
recognition.start();