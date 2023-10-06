//Yaren Su Saatçı
import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import initialMessages from './data'; // data.js dosyasını içe aktarın

const Chat = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState(initialMessages); // İlk mesajları burada kullanın
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
const userPhoto = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFIAAABcCAYAAAD9JuLrAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAABdaVRYdFNuaXBNZXRhZGF0YQAAAAAAeyJjbGlwUG9pbnRzIjpbeyJ4IjowLCJ5IjowfSx7IngiOjgzLCJ5IjowfSx7IngiOjgzLCJ5Ijo5Mn0seyJ4IjowLCJ5Ijo5Mn1dfVbQhKcAAAYVSURBVHhe7Zx9SF1lHMe/9zo1XTNJ5xI3W3MNXAYuagQOykYUzf3j6JVY0QtUk/pjBG4JFaxNiP1R2Av0Ao2oKOY/c70QSwZKK6SkDWWtxXCTLW3N3TU3p9OerzzSRe95zjn3PM/13HufDxx8nnNFzu/jc87zcp/fiUSj0SlYAhOVPy0BsSI1YUVqworUhBWpCStSE1akJqxITViRmrAiNWFFasKK1IQVqQkrUhOhWUZbvep2VItjRWUNKsqrUFa6FMVFi1FYuAi5C/Knf2d8YgyjoxcwEhvG0N+nMHj6OP4cOIL+33vQJ475ZN5EXl9chvp1jbjztvtRW3MXFhYWyU+S4+JoDL1HDuLQL9+is6sd/4wMyU9SQ8pF1tc14oH1m1G3dqM8Y4bun/fh6wN70NndLs+YJWUiN214DpsatmD5stXyTGo4cbIPezvewd7978szZjAu8r76R/HEQ9tTLnA2FPrJlzvxXefn8oxejImsrLgZTU+/iXWGb2G/dIlbvu2jlzEweEye0YMRkY3iNn7xmd3Iy71GngkXV8Yv4+0Pt6Jd4+2uXeT2lz5Aw71PyVq46fj+Y+x861lZC4Y2kRzO7Gj+Ynook05wyNTS+kjg4ZIWkXwetra0z3uHkizsiJp3NAZ6bgYWSYm7X9+Pihuq5Jn0ZPDMcWx9dUPSMgOJ5O3ctutA2rbE2bBlNm1bn9RtHmjRgs/ETJFIGAtjSoakRbJ3TreOxQuMibH5JScSibwmy57hOPHJh1tkLfNYVbUG584Pof+Y9xUl389Idi572npDO9jWBQftm5tqPXc+vm9tTvsyXSJhjIzVK75EcgEibHNnkzBWxuwFXyK5ipNteI3Zs0iuJ2bSUMcrjJmxu+FdZMMWWco+vMTuSSS/HsjG1jgDY6cDFZ5E8juWbMfNges4kvPpjk9Py5oZSmqAimJZ8cIkcCkGjIjLGj4rz6WAhsfLHefhri2SX5maJq8QKFjk47hO/IOXASvWAnfcLSYJ5fIPGUblwlUkv3cOM9ECoLwWqEnBI1zlwlVkuixMLLwRqL5JVgyhcqEUyW0kQXdAJM0YcHZw7jFyDrjq8FQvEiIXy7IJ6IJOEqEUyb0488YE8Mdvc4+jh4CeH4HYFfl78eQDZStl2RBOTpQiuaEplJwH+o8C47IaT77oiEzi5EQpkrvCQsspMQRK0CqjObJgCCcnSpHcWhdmxhI1ScM4OVGK5P7EMJOfJwspxMmJUiQ3eYaV/Grg2lxZiePyBVkwhJMTpciZnbJho0RIvEWMG+dcvJg6xvpl2RBOTpRz7e59E4hEIrJmjnIx1asskZUZxFVNCjFzEPaiDpc0dgbo/VVWDDE1NYW6jQtk7X+ULZJ7tucNIYs98JzDQeKkuKVPGJZInJwoRXLjezowNgz0dYlZj6ybxMmJUiSzB8LOpQFxO/cAF2XdNE5OlCKZgjFvCDM/fRN3HAT+vSo/i6Ngidn59WycnChFMo8lNIwCJxOtqYpOtPxWWU4BTk6UIpkMFCZivc6tMkVru45OlCKZURU2ErZKMTBfskaWDePkRCmSaWnMqAoTbJWxBHPsfPGgXFooK4agC6dUPaVIwj3WYWPwL1mIR4wxy8SMxyQqF64imdsXNmKHE7fKXNEqlxtslSoXriKZIBlGErZKMespNbgWrXLhKpLf4zJBMmw4tcocMWdfWSorGqED1d5yTxtNuV3jjW1fyVp28squB5WZtq4tkvAPcMd/tsLY3dKVPYkkTNXNVrzE7msP+WfvHc66XWlsjY897z4H9dwiCfOdsw2vMfsSyaRx5jtnC4zVa6K8L5GESeNMnch0GCNj9Ypvkcw7YdJ4psMY/SR4+hZJmHnPpPFMhbH5fbuA78yveN5t/SHj8hG5MPFC8z2y5p2kWuQMzLzPpIE6Y2FMyRBIJOeezLxn0ni6wxgYSzK52iSQSMIHMjPv07ll8tqDvD2ABBZJeAHMvA/jIrAbvGZeexCJJFBnkwj7uhqN2BcoacS+0ksz9iVzmrGvPdSMfRGnZuyrYQ1hX1ZsmUbLzMZiRWrDitSEFakJK1ITVqQWgP8AlgVeaaxocykAAAAASUVORK5CYII=';

    // Kullanıcının gönderdiği mesajı ekleyin
    const newUserMessage = {
      id: chatLog.length + 1, // Eşsiz bir ID oluşturun
      user: "You",
      message: inputValue,
      profileImg: userPhoto, // Kullanıcının profil fotoğrafı
    };

    setChatLog((prevChatLog) => [...prevChatLog, newUserMessage]);
    sendMessage(inputValue);
    setInputValue("");
  };

  const sendMessage = (message) => {
    const url = "https://api.openai.com/v1/chat/completions";

    const headers = {
      "Content-type": "application/json",
      Authorization: "Bearer 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",
    };

    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };
    setIsLoading(true);
    axios
      .post(url, data, { headers: headers })
      .then((response) => {
        const chatGPTPhoto = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAABXCAYAAABBRMhNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAABdaVRYdFNuaXBNZXRhZGF0YQAAAAAAeyJjbGlwUG9pbnRzIjpbeyJ4IjowLCJ5IjowfSx7IngiOjc3LCJ5IjowfSx7IngiOjc3LCJ5Ijo4OH0seyJ4IjowLCJ5Ijo4OH1dfejVgyoAAASVSURBVHhe7ZxNaBNBGIY/tbYKjaBFJXiwOVgRxPTQgxUFLeih9aAU/xClFhQURUSwFzFWvKiIiKKgYKVFbCulHtSDQvUg1oMHU7y0HlIPEmytgg34C5o3mSLTzGZ3Zzdpdvd7Lk0mhez7sDs7s5lvZoXD4b/E2GK2+MvYgKVpwNI0YGkasDQNWJoGLE0DlqYBS9OApWnA0jSYsblnZE2UItFaWrZyJS2pjtDCcJgqF1XRvMpKKisvz/zPn1+/6EcqRakvE/Q1maSx0QR9HB6mRPwtJYbimf+ZCYombUFVFdU1bqXVGzdRzdp6mh8KiU/0+D45SSOvB+ndi+f05skj+jYxIT4pPAWXVtfYROuad1B08xbRUhjiz57Sq74HaYGPRUvhKJi0hn37qaGllcIrakRLcUi+H6GBu3dooKtTtLiP69Lqt22npqPHKVxTXFnTSY6M0OPrV2nwYb9ocQ/XpC2NRGjX6VjBL0O74LLtOd9OnxIJ0eIcV6ThUtx5pp3mVlSIltLi98+f1Hsu5tol61jagYuXaf3uPeJdafOy+z51nDop3umjLS2UHkIcuXkrM3zwEhim3Dh8iCYdDFG0ZgTov9p6+jwnDOCYcezIoIttafiyE533Zvzu6AQcOzLoirMlDZfksdsdtHh5tWjxLsiALMhkF1vS0Id5+QybDrIgk10sS8Nd0ot9mBnIhGx2sCQN4zCvDCt0QDZktIrpkAOdZfvTgZIduLoFBsCxLQ2WZg6mZxqmRn4XBpARWa2QVxom36U2lywkyIrMZuSVhqcVQcNKZkNp6Bj9NLywCjKb3RSMpbW0ilfBwyy7UhoeURf7iWspgexwYIRSGp7pB518DnKk4VejIN0xjYADuFCRIw0/szFZjFzkSMPvkkwWIxc50vw4KdfFyIUkDUsFnP7y7SfgAk6mI0uL1opXzBQqJ5I0LEZhZFROJGlYvcPIqJxI0rDciZFROZGkYX0YI6NyIknDgjpGRuVEkja1ApH5j8qJJI2xhiQNa1wZGZUTSRoWBTMyKieSNKyiZmRUTiRpWHbOyKicSNLGRt1bYukXVE4kaShsYGRUTiRpqARhZFROZGlD8UwlCJMFLlTlRJI0gDWpTBYjFznSUGvEZDFykSMNxVlMFiMXOdJQzYYqj6ADB0aVfTnSAKrZgk4+B0ppKP9DNVtQQfZ8JZBKaQDlf0HFLLuxtK7OTPlf0EBms8IzQ2kA9ZJBw0rmvNJQYBqkOymyWimqzSsNoMAUy8X9DjIiqxVMpWFdPQpM/Q4yWq0+NpUG0DGiwNSvIJudqmNbRbJtvd6s8cwHJuUXdjaLd9awdKZNgYpcPw1DkAWZ7GJLGkqYrx08QOMfRkWLd0EGZNEpy7YlDaCzvLJ/r6fPOBw7MuhuO2FbGsCXXdjV7MkHlpk+LH3susKAljSA0xodqJfuqjhWHLOTnRLAnFAodFa81uJtehSd+jxOq9ZvoDllZaK1tMDAtTt2mvovXxItznBlBxiAYlreNkcT3qDJASj/463ANOFN5xzA2xu6AG+kGTC0B7dBhqVpwNI0YGm2IfoHkgHfy5XnghAAAAAASUVORK5CYII=';

        console.log(response);
        // Bot'un cevabını ekleyin
        const newBotMessage = {
          id: chatLog.length + 2, // Eşsiz bir ID oluşturun
          user: "Chat GPT",
          message: response.data.choices[0].message.content,
          profileImg: chatGPTPhoto, // Botun profil fotoğrafı
        };
        setChatLog((prevChatLog) => [...prevChatLog, newBotMessage]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="chat">
      <div className="div">
        <img
          className="logo"
          alt="Logo"
          src="https://c.animaapp.com/DIbgZQPP/img/logo.svg"
        />
  <div className="frame">
  {chatLog.map((message) => (
    <div
      key={message.id}
      className={`message-box ${
        message.user === "You" ? "user-message" : "bot-message"
      }`}
    >
      <div className="user-info">
        <img
          src={message.profileImg}
          alt={message.user}
          className="profile-image"
        />
      </div>
      <div className="user-info2">
      <span className="username">{message.user}</span>
      <div className="message-content">
        <p>{message.message}</p>
      </div>
      </div>
    </div>
  ))}
</div>


      </div>
      <div className="overlap-wrapper">
        <div className="overlap">
          <img
            className="arrows-diagrams"
            alt="Arrows diagrams"
            src="https://c.animaapp.com/DIbgZQPP/img/arrows--diagrams-arrow.svg"
          />
          <div className="overlap-2">
            <div className="div-wrapper">
              <div className="overlap-3">
                <div className="group-3">
                  <div className="overlap-group-2">
                    <img
                      className="eclipse"
                      alt="Eclipse"
                      src="https://c.animaapp.com/DIbgZQPP/img/eclipse.svg"
                    />
                    <div className="eclipse-2" />
                  </div>
                </div>
                <img
                  className="img"
                  alt="Frame"
                  src="https://c.animaapp.com/DIbgZQPP/img/frame-47287.png"
                />
              </div>
            </div>
            <div className="frame-3">
              <div className="group-4">
                <div className="AI-chatbot-wrapper">
                  <p className="AI-chatbot">
                    <span className="span">AI</span>
                    <span className="text-wrapper-4"> Chatbot</span>
                  </p>
                </div>
              </div>
              <div className="group-5">
                <p className="text-wrapper-5">
                  We’ve trained a model called ChatGPT which interacts in a
                  conversational way.
                </p>
              </div>
            </div>
          </div>
          <div className="text-wrapper-6">Back</div>
        </div>
      </div>
      <div className="frame-4" >
      <button type="submit" className="send-button" onClick={handleSubmit}>
      <img
          className="components-button"
          alt="Components button"
          src="https://c.animaapp.com/DIbgZQPP/img/components-button-main-icon-button.svg"
         
        />
      </button> 
        <div className="frame-5">
  <form onSubmit={handleSubmit}>
    <div className="text-wrapper-7"></div>
    <div className="message-input">
      <input
        type="text"
        placeholder="Send a message"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="send-button" >
        <img
          src="https://c.animaapp.com/DIbgZQPP/img/components-button-main-icon-button.svg"
          alt="Send"
          style={{ width: "24px", height: "24px" }}
        />
      </button>
    </div>
  </form>
</div>

    </div>
    </div>
 

  );
};

export default Chat;