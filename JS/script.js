// Initialize speechSynth API
const synth = window.speechSynthesis;

// DOM elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');

// Initialize Voice Array
let voices = [];

const getVoices = () => {
    voices = synth.getVoices();

    // loop through voices and create an option for each voice
    voices.forEach(voice => {

        // Create option element
        const option = document.createElement('option');

        // Fill in the option with the voice and language
        option.textContent = voice.name + '(' + voice.language +')'; 

        // Set the needed option attributes
        option.setAttribute('data-language', voice.language);
        option.setAttribute('data-name', voice.name);
        voiceSelect.appendChild(option)
    }); 
};

getVoices();

// The Voice list are loaded asynchronously to the page 
// An onVoicesChanged event is fired when they are loaded
// Therfore set your voices on the callback for that event listener 
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged= getVoices;
}

// To make it speak 
const speak = () => {
    // To check if it is already speaking
    if(synth.speaking) {
        console.error('Speaker is already speaking');
        return;
    }

    if (textInput.value !== '') {
        // To get the voice to speak text
        const speakText = new SpeechSynthesisUtterance(textInput.value);

        // To  end speech
        speakText.onEnd = e =>{
            console.log('Done Speaking');
        }

        // Event for When there is a speech error
        speakText.onerror = e => {
            console.error('Something went wrong');
        }

        // Selecting voices 
        const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
        
        
        // Another way of doing this
        
        // const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');

        
        // looping the voices

        const voice = voices.find(v => v.name === selectedVoice);
        if (voice) {
            speakText.voice = voice;
        }

        // Using the forEach method
        
        //voices.forEach(voice => {
        //    if (voice.name === selectedVoice) {
        //        speakText.voice = voice;

        //    }
        //});

        // Setting Pitch and Rate 
        speakText.pitch = pitch.value;
        speakText.rate = rate.value;

        //Making it speak 
        synth.speak(speakText);
    }

};


// Setting Event Listeners

// Text Form Submission 
textForm.addEventListener('submit', e => {
    e.preventDefault();
    speak(); 
    textInput.blur();
});


// Rate Value Change
rate.addEventListener('input', () => rateValue.textContent = rate.value);


// Pitch Value Change
pitch.addEventListener('input', () => pitchValue.textContent = pitch.value);


// To make it speak with voice selection without clicking on the button to say it
voiceSelect.addEventListener('change', () => speak());


if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = () => {
            getVoices();
            // Additional logic if needed
        };
    }
} else {
    console.error('Web Speech API is not supported in this browser.');
}