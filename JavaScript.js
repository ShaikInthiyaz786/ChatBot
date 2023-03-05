let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");
let sendMsgBtnEl = document.getElementById("sendMsgBtn");

sendMsgBtnEl.onclick = function msgToChatbot() {
    userMsg = userInputEl.value;

    let userChatContainerEl = document.createElement("div");
    userChatContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(userChatContainerEl);

    let msgEl = document.createElement("span");
    msgEl.classList.add("msg-to-chatbot");
    msgEl.textContent = userMsg
    userChatContainerEl.appendChild(msgEl);

    userInputEl.value = "";

    msgFromChatbot();
}

function msgFromChatbot() {
    l = chatbotMsgList.length;
    chatBotMsg = chatbotMsgList[Math.ceil(Math.random()*l)-1];
    
    let chatBotContainerEl = document.createElement("div");
    chatBotContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(chatBotContainerEl);

    let msgEl = document.createElement("span");
    msgEl.classList.add("msg-from-chatbot");
    msgEl.textContent = chatBotMsg
    chatBotContainerEl.appendChild(msgEl);
}
