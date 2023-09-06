import React, { useState } from 'react';

import chatbotImage from '../assets/images/chat.png';

const MainBox = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      message: 'Hello I am ChatGPT',
      sender: 'ChatGPT',
    },
  ]);

  const handleChatIconClick = () => {
    setIsChatOpen(true);
  };

  const handleChange = (text) => {
    setInput(text);
  };

  const handleSend = async () => {
    const newMessage = {
      message: input,
      sender: 'user',
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setInput('');

    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    // The API_KEY and the rest of the function remains the same
  }

  return (
    <div style={styles.container}>
      <button style={styles.chatbotIcon} onClick={handleChatIconClick}>
        <img src={chatbotImage} style={styles.icon} alt="Chatbot Icon" />

        {isChatOpen && (
          <div style={styles.chatbot}>
            <div style={styles.responseArea}>
              {messages.map((message, index) => (
                <div
                  key={index}
                  style={
                    message.sender === 'ChatGPT' ? styles.gptMessage : styles.userMessage
                  }
                >
                  <text>{message.message}</text>
                </div>
              ))}
            </div>
            <div style={styles.promptArea}>
              <input
                style={styles.textInput}
                type="text"
                placeholder="Send a message..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
              <button style={styles.submit} onClick={handleSend}>
                Send
              </button>
            </div>
          </div>
        )}
      </button>

      <div style={styles.centeredView}>
        <modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            window.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <div style={styles.centeredView}>
            <div style={styles.modalView}>
              <text style={styles.modalText}>Hello World!</text>
              <button style={[styles.button, styles.buttonClose]} onClick={() => setModalVisible(!modalVisible)}>
                <text style={styles.textStyle}>Hide Modal</text>
              </button>
            </div>
          </div>
        </modal>
        <button style={[styles.button, styles.buttonOpen]} onClick={() => setModalVisible(true)}>
          <test style={styles.textStyle}>Show Modal</test>
        </button>
      </div>
    </div>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  chatbot: {
    bottom: 0,
    right: 10,
    width: 100,
    height: 100,
    backgroundcolor: 'white',
    border: 3,
    borderradius: 4,
    padding: 10,
  },
  chatbotIcon: {
    cursor: 'pointer',
  },
});

export default MainBox;