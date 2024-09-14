// Ensure the DOM content is loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const sendButton = document.getElementById('sendButton');
    const userInput = document.getElementById('userInput');
    const chatArea = document.getElementById('chatArea');

    // Add event listener to the send button
    sendButton.addEventListener('click', () => {
        sendMessage();
    });

    // Optional: Add an event listener to send message on Enter key press
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Function to send a message and display it in the chat area
    function sendMessage() {
        const inputText = userInput.value.trim();
        if (inputText) {
            // Display user message
            const userMessage = document.createElement('div');
            userMessage.textContent = `You: ${inputText}`;
            userMessage.classList.add('user-message');
            chatArea.appendChild(userMessage);

            // Generate bot response
            const response = generateResponse(inputText);
            const botMessage = document.createElement('div');
            botMessage.textContent = `Bot: ${response}`;
            botMessage.classList.add('bot-message');
            chatArea.appendChild(botMessage);

            // Clear input field and scroll chat area
            userInput.value = '';
            chatArea.scrollTop = chatArea.scrollHeight; // Scroll to the bottom
        }
    }

    // Function to generate a response based on user input
    function generateResponse(input) {
        const lowerCaseInput = input.toLowerCase();
        for (let key in knowledgeBase) {
            if (lowerCaseInput.includes(key)) {
                return knowledgeBase[key];
            }
        }
        return "Sorry, I don't have information about that topic.";
    }
});

