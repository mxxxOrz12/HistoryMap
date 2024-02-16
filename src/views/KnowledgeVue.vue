<script setup>
import { chatBot } from '@/js/bot/chat';
import { ref, onMounted } from 'vue';
onMounted(() => {
    chatBot();
});
</script>

<template>
    <div class="containbot">
        <div class="chatbot">
            <header>
                历史机器人
            </header>
            <ul class="chatbox">
                <li class="chat incoming">
                    <span class="material-symbols-outlined">smart_toy</span>
                    <p>你好，我是历史机器人<br>有什么可以帮到你的吗？</p>
                </li>
                <li class="chat outgoing">
                    <p>我了解中国的历史和地理</p>
                </li>
            </ul>
            <div class="chat-input">
                <textarea placeholder="请输入...." required></textarea>
                <span id="send-btn" class="material-symbols-outlined">send</span>
            </div>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');

.containbot {
    background: #e3f2fd;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.chatbot {
    position: fixed;
    right: 40px;
    bottom: 100px;
    width: 500px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0 0 128px 0 rgba(0, 0, 0, 0.1),
        0 32px 64px -48px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

.chatbot header {
    background: #d86161;
    padding: 16px 0;
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
    color: #fff;
}

.chatbot .chatbox {
    height: 520px;
    overflow-y: auto;
    padding: 30px 20px 70px;
}

.chatbox .chat {
    display: flex;
}

.chatbox .incoming span {
    height: 32px;
    width: 32px;
    color: #fff;
    align-self: flex-start;
    text-align: center;
    line-height: 32px;
    border-radius: 4px;
    margin: 0 10px 7px 0;
    background: #d86161;
}

.chatbox .outgoing {
    justify-content: flex-end;
    margin: 5px 0;
}

.chatbox .chat p {
    padding: 12px 12px;
    border-radius: 10px 10px 0 10px;
    background: #e8e9b6;
    font-size: 1rem;
    line-height: 1.5;
    max-width: 75%;
}

.chatbox .incoming p {
    border-radius: 10px 10px 10px 0;
    color: #000;
    background: #f2f2f2;
}

.chatbot .chat-input {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    gap: 5px;
    padding: 10px 20px;
    border-top: 1px solid #ccc;
    background: #fff;
}

.chat-input textarea {
    border: none;
    outline: none;
    font-size: 1.1rem;
    font-weight: 600;
    resize: none;
    padding: 16px 15px 16px 0;
    height: 70px;
    width: 80%;
}

.chat-input span {
    align-self: flex-end;
    height: 80px;
    color: rgb(226, 121, 121);
    line-height: 70px;
    font-size: 1.4rem;
    cursor: pointer;
    visibility: hidden;
}

.chat-input textarea:valid~span {
    visibility: visible;
}
</style>

