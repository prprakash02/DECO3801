const { Configuration, OpenAIApi } = require("openai");
const readlineSync = require("readline-sync");;

let APIcall = async () => {
const newConfig = new Configuration({
	apiKey: "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"
});
const openai = new OpenAIApi(newConfig);
	
const chatHistory = [];

do {
	const user_input = readlineSync.question("Enter your Question: ");
	const messageList = chatHistory.map(([input_text, completion_text]) => ({
	role: "user" === input_text ? "ChatGPT" : "user",
	content: input_text
	}));
	messageList.push({ role: "user", content: user_input });

	try {
	const GPTOutput = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: messageList,
	});

	const output_text = GPTOutput.data.choices[0].message.content;
	console.log(output_text);

	chatHistory.push([user_input, output_text]);
	} catch (err) {
	if (err.response) {
		console.log(err.response.status);
		console.log(err.response.data);
	} else {
		console.log(err.message);
	}
	}
} while (readlineSync.question("\nYou Want more Results? (Y/N)").toUpperCase() === "Y");
};
APIcall();
