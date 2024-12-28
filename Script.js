// Add event listeners for button and Enter key
document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

// Function to handle sending a message
function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    // Display user message
    displayMessage(userInput, "user-message");

    // Generate bot reply
    const botReply = getBotReply(userInput);
    setTimeout(() => displayMessage(botReply, "bot-message"), 500);

    // Clear input field
    document.getElementById("userInput").value = "";
}

// Function to display messages
function displayMessage(message, messageType) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", messageType);
    messageDiv.textContent = message;

    const messagesContainer = document.getElementById("messages");
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
}

// Bot reply logic based on user input
function getBotReply(userMessage) {
    userMessage = userMessage.toLowerCase().trim();

    // Basic conversational responses
    const basicResponses = {
        "hello": "Hello! How can I assist you today?",
        "hi": "Hi there! What can I do for you?",
        "how are you": "I'm just a bot, but I'm here to help you!",
        "what is your name": "I am your friendly chatbot, ready to assist you.",
        "bye": "Goodbye! Have a great day!",
        "thank you": "You're welcome! Feel free to ask more questions.",
        "thanks": "You're welcome! Always here to help."
    };

    // Check for basic responses first
    if (basicResponses[userMessage]) {
        return basicResponses[userMessage];
    }

    // General knowledge questions
    const gkQuestions = [
        { question: "first president of the united states", answer: "George Washington." },
        { question: "red planet", answer: "Mars." },
        { question: "chemical symbol for water", answer: "H2O." },
        { question: "father of computer science", answer: "Alan Turing." },
        { question: "square root of 144", answer: "12." },
        { question: "artificial intelligence", answer: "AI is the simulation of human intelligence in machines." },
        { question: "speed of light", answer: "Approximately 299,792 km per second." },
        { question: "2 + 2", answer: "2 + 2 equals 4!" },
        { question: "invented the telephone", answer: "Alexander Graham Bell." },
        { question: "capital of france", answer: "Paris." },
        { question: "most abundant gas in earth's atmosphere", answer: "Nitrogen." },
        { question: "wrote romeo and juliet", answer: "William Shakespeare." },
        { question: "hardest natural substance", answer: "Diamond." },
        { question: "largest mammal", answer: "The blue whale." },
        { question: "smallest planet in the solar system", answer: "Mercury." },
        { question: "painted the mona lisa", answer: "Leonardo da Vinci." },
        { question: "capital of japan", answer: "Tokyo." },
        { question: "longest river in the world", answer: "The Nile." },
        { question: "chemical symbol o", answer: "Oxygen." },
        { question: "first man to step on the moon", answer: "Neil Armstrong." },
        { question: "national animal of india", answer: "The Bengal tiger." },
        { question: "largest desert in the world", answer: "The Sahara Desert." },
        { question: "iron man of india", answer: "Sardar Vallabhbhai Patel." },
        { question: "largest continent", answer: "Asia." },
        { question: "discovered penicillin", answer: "Alexander Fleming." },
        { question: "currency of japan", answer: "Yen." },
        { question: "nightingale of india", answer: "Sarojini Naidu." },
        { question: "tallest mountain in the world", answer: "Mount Everest." },
        { question: "planet closest to the sun", answer: "Mercury." },
        { question: "study of plants", answer: "Botany." },
        { question: "first woman to win a nobel prize", answer: "Marie Curie." },
        { question: "largest ocean in the world", answer: "The Pacific Ocean." },
        { question: "land of rising sun", answer: "Japan." },
        { question: "wrote the national anthem of india", answer: "Rabindranath Tagore." },
        { question: "chemical symbol for gold", answer: "Au." },
        { question: "smallest bone in the human body", answer: "The stapes." },
        { question: "invented the world wide web", answer: "Tim Berners-Lee." },
        { question: "largest island in the world", answer: "Greenland." },
        { question: "capital of australia", answer: "Canberra." },
        { question: "largest gland in the human body", answer: "The liver." },
        { question: "discovered gravity", answer: "Sir Isaac Newton." },
        { question: "national flower of india", answer: "The lotus." },
        { question: "freezing point of water in celsius", answer: "0 degrees celsius." },
        { question: "si unit of force", answer: "The newton." },
        { question: "missile man of india", answer: "Dr. A.P.J. Abdul Kalam." },
        { question: "longest bone in the human body", answer: "The femur." },
        { question: "most populous country in the world", answer: "China." },
        { question: "first prime minister of india", answer: "Jawaharlal Nehru." },
        { question: "boiling point of water in celsius", answer: "100 degrees celsius." },
        { question: "smallest unit of life", answer: "The cell." },
        { question: "country that gifted the statue of liberty to the usa", answer: "France." },
        { question: "main source of energy for earth", answer: "The Sun." },
        { question: "largest country by area", answer: "Russia." },
        { question: "organ responsible for pumping blood", answer: "The heart." },
        { question: "chemical formula for table salt", answer: "NaCl." },
        { question: "process of converting water vapor into liquid water", answer: "Condensation." },
        { question: "wrote the theory of relativity", answer: "Albert Einstein." },
        { question: "national game of india", answer: "Hockey." },
        { question: "first indian woman to go to space", answer: "Kalpana Chawla." },
        { question: "gas used by plants for photosynthesis", answer: "Carbon dioxide." },
        { question: "fastest land animal", answer: "The cheetah." },
        { question: "author of the origin of species", answer: "Charles Darwin." }
    ];

    // Search for partial match (case-insensitive) in the questions
    const matchedQuestion = gkQuestions.find(q => userMessage.includes(q.question));
    if (matchedQuestion) {
        return matchedQuestion.answer;
    }

    // Default response
    return "I'm sorry, I don't have an answer for that. Can you try rephrasing your question?";
}
