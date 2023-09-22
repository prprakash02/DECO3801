document.addEventListener("DOMContentLoaded", () => {
	const chatbotToggler = document.querySelector(".chatbot-toggler");
	const closeBtn = document.querySelector(".close-btn");
	const chatbox = document.querySelector(".chatbox");
	const chatInput = document.querySelector(".chat-input textarea");
	const sendChatBtn = document.querySelector(".chat-input span");
  
	let userMessage = null; // Variable to store user's message
	const API_KEY = "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"; // Paste your API key here
	const inputInitHeight = chatInput.scrollHeight;
  
	const createChatLi = (message, className) => {
	  // Create a chat <li> element with the passed message and className
	  const chatLi = document.createElement("li");
	  chatLi.classList.add("chat", `${className}`);
	  let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
	  chatLi.innerHTML = chatContent;
	  chatLi.querySelector("p").textContent = message;
	  return chatLi; // return chat <li> element
	}
  
	const generateResponse = (chatElement) => {
	  const API_URL = "https://api.openai.com/v1/chat/completions";
	  const messageElement = chatElement.querySelector("p");
  
	  // Define the properties and message for the API request
	  const requestOptions = {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		  "Authorization": `Bearer ${API_KEY}`
		},
		body: JSON.stringify({
		  model: "gpt-3.5-turbo",
		  messages: [{role: "user", content: userMessage}],
		})
	  }
  
	  // Send POST request to the API, get a response, and set the response as paragraph text
	  fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
		messageElement.textContent = data.choices[0].message.content.trim();
	  }).catch(() => {
		messageElement.classList.add("error");
		messageElement.textContent = "Oops! Something went wrong. Please try again.";
	  }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
	}
  
	const handleChat = () => {
	  userMessage = chatInput.value.trim(); // Get the user-entered message and remove extra whitespace
	  if(!userMessage) return;
  
	  // Clear the input textarea and set its height to default
	  chatInput.value = "";
	  chatInput.style.height = `${inputInitHeight}px`;
  
	  // Append the user's message to the chatbox
	  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
	  chatbox.scrollTo(0, chatbox.scrollHeight);
  
	  setTimeout(() => {
		// Display "Thinking..." message while waiting for the response
		const incomingChatLi = createChatLi("Thinking...", "incoming");
		chatbox.appendChild(incomingChatLi);
		chatbox.scrollTo(0, chatbox.scrollHeight);
		generateResponse(incomingChatLi);
	  }, 600);
	}
  
	chatInput.addEventListener("input", () => {
	  // Adjust the height of the input textarea based on its content
	  chatInput.style.height = `${inputInitHeight}px`;
	  chatInput.style.height = `${chatInput.scrollHeight}px`;
	});
  
	chatInput.addEventListener("keydown", (e) => {
	  // If the Enter key is pressed without the Shift key and the window width is greater than 800px, handle the chat
	  if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
		e.preventDefault();
		handleChat();
	  }
	});
  
	sendChatBtn.addEventListener("click", handleChat);
	closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
	chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
  });
  
  

// const { Configuration, OpenAIApi } = require("openai");
// const readlineSync = require("readline-sync");;

// let APIcall = async () => {
// const newConfig = new Configuration({
// 	apiKey: "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"
// });
// const openai = new OpenAIApi(newConfig);
	
// const chatHistory = [];

// do {
// 	const user_input = readlineSync.question("Enter your Question: ");
// 	const messageList = chatHistory.map(([input_text, completion_text]) => ({
// 	role: "user" === input_text ? "ChatGPT" : "user",
// 	content: input_text
// 	}));
// 	messageList.push({ role: "user", content: user_input });

// 	try {
// 	const GPTOutput = await openai.createChatCompletion({
// 		model: "gpt-3.5-turbo",
// 		messages: messageList,
// 	});

// 	const output_text = GPTOutput.data.choices[0].message.content;
// 	console.log(output_text);

// 	chatHistory.push([user_input, output_text]);
// 	} catch (err) {
// 	if (err.response) {
// 		console.log(err.response.status);
// 		console.log(err.response.data);
// 	} else {
// 		console.log(err.message);
// 	}
// 	}
// } while (readlineSync.question("\nYou Want more Results? (Y/N)").toUpperCase() === "Y");
// };
// APIcall();
