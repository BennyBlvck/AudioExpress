# Audio Express Web Speech API 
Audio Express is a simple web application that leverages the Web Speech API to transform text input into spoken words. Users can customize the speech output by adjusting parameters such as rate, pitch, and selecting different voices.

![Audio Express Logo](/img/AudioExpressLogo.png)


## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/audio-express.git
    cd audio-express
    ```

2. Open `index.html` in your web browser.

3. You can also launch this from this link: ![AudioExpress](https://bennyblvck.github.io/AudioExpress/)

4. Start typing in the text input, customize the speech options, and click "Say It!".

## Usage

- Enter the text you want to be spoken into the textarea.
- Adjust the rate and pitch sliders to customize the speech parameters.
- Choose a different voice from the available options in the dropdown menu.
- Click the "Say It!" button to hear the spoken output.

## Dependencies

- [Bootstrap](https://getbootstrap.com): Version 5.2.3
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript): Vanilla JavaScript is used to interact with the Web Speech API.

## Supported Browsers

Audio Express relies on the Web Speech API, and its functionality may vary across different browsers. Please refer to the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) for information on browser compatibility.

## Features

- **Speech Synthesis**: Convert entered text into spoken words.
- **Voice Selection**: Choose from a variety of available voices.
- **Customization**: Adjust speech rate and pitch for a personalized experience.

## Initialization

The application initializes the Web Speech API and dynamically loads available voices. The rate and pitch values are updated in real-time as the user adjusts the corresponding sliders.

## License 

This project is licensed under the MIT License - see the LICENSE file for details. Your contributions and feedback are always welcome!
