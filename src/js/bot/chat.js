
export function chatBot() {
    const sendChatBtn = document.querySelector(".chat-input span");
    const chatInput = document.querySelector('.chat-input textarea');
    const chatbox = document.querySelector('.chatbox');

    let userMessage;
    const API_KEY = "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";


    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
        chatLi.innerHTML = chatContent;
        return chatLi;
    }

    const generateResponse = () => {
        const API_URL = "https://api.openai.com/v1/chat/completions";

        const requestOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userMessage }]
            })
        };
        fetch(API_URL, requestOption).then(res => res.json()).then(data => {
            console.log(data);
        }).catch(err => console.log(err));
    }


    const handleChat = () => {
        userMessage = chatInput.value.trim();
        if (!userMessage) return;
        chatbox.appendChild(createChatLi(userMessage, "outgoing"));
        setTimeout(() => {
            chatbox.appendChild(createChatLi("思考中", "incoming"));
            generateResponse();

        }, 600)
    }
    sendChatBtn.addEventListener("click", handleChat);
}