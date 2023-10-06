import React from "react";
import "./style.css";
import { Chat } from "../Chat";

class Carreers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showChat: false,
    };
  }

  // Butona tıklandığında Chat bileşenini göster
  openChat = () => {
    this.setState({ showChat: true });
  }

  render() {
    if (this.state.showChat) {
      // Chat bileşeni görüntüleniyor
      return (
        <div>
          <Chat />
        </div>
      );
    } else {
      // Butona tıklandığında Chat bileşenini gösteren düğme
      return (
    <div className="carreers">
      <div className="div">
        <img className="logo" alt="Logo" src="https://c.animaapp.com/AxrTB9jz/img/logo.svg" />
        <div className="image">
          <div className="overlap-group">
            <div className="group">
              <img className="eclipse" alt="Eclipse" src="https://c.animaapp.com/AxrTB9jz/img/eclipse.svg" />
            </div>
            <img className="frame" alt="Frame" src="https://c.animaapp.com/AxrTB9jz/img/frame-47287.png" />

          </div>
        </div>
        <p className="start-chatting-with">
          <span className="text-wrapper">Start chatting with </span>
          <span className="span">AI.</span>
        </p>
        <div className="frame-2">
          <div className="text" onClick={this.openChat}>Let’s start chat</div>
          <img className="vector" alt="Vector" src="https://c.animaapp.com/AxrTB9jz/img/vector-1.svg" />
        </div>
        <div className="carreers-wrapper">
          <img className="img" alt="Carreers" src="https://c.animaapp.com/AxrTB9jz/img/carreers@3x.png" />
        </div>
        <img className="CTA" alt="Cta" src="https://c.animaapp.com/AxrTB9jz/img/cta.png" />
        <div className="overlap">
          <div className="overlap-2">
            <img className="line" alt="Line" src="https://c.animaapp.com/AxrTB9jz/img/line-3.svg" />
            <img className="line-2" alt="Line" src="https://c.animaapp.com/AxrTB9jz/img/line-3.svg" />
            <img className="line-3" alt="Line" src="https://c.animaapp.com/AxrTB9jz/img/line-4.svg" />
            <div className="text-wrapper-2">Chat with unique characters</div>
          </div>
          <p className="p">You can chat many different characters for a few set of topics and interests.</p>
          <button className="BTN"onClick={this.openChat}>
            <div className="text-wrapper-3">Let’s start chat</div>
          </button>
         <div className="scroll-container">
  <div className="fixed-content">
    <div className="rectangle" />
    <img className="image-2" alt="Image" src="https://c.animaapp.com/AxrTB9jz/img/image-5.png" />
    <div className="text-wrapper-4">Hitachi Digital Brand Ecosystem.</div>
    <img className="image-3" alt="Image" src="https://c.animaapp.com/AxrTB9jz/img/image-4@2x.png" />
    <div className="text-wrapper-5">Stråbe</div>
    <img className="image-4" alt="Image" src="https://c.animaapp.com/AxrTB9jz/img/image-3@2x.png" />
    <img className="image-5" alt="Image" src="https://c.animaapp.com/AxrTB9jz/img/image-2@2x.png" />
    <div className="text-wrapper-6">Commons.</div>
    <div className="text-wrapper-7">Zvurçyk Fashion</div>
    <img className="image-6" alt="Image" src="https://c.animaapp.com/AxrTB9jz/img/image-1@2x.png" />
    <img className="image-7" alt="Image" src="https://c.animaapp.com/AxrTB9jz/img/image@2x.png" />
    <div className="text-wrapper-8">Aeizei</div>
    <div className="text-wrapper-9">Lancome</div>
  </div>
</div>
</div>
        <footer className="footer">
          <div className="footer-top">
            <div className="contact-us">
              <p className="text-wrapper-10">We would love to hear from you. Let’s work — together with Reload</p>
              <button className="div-wrapper">
                <div className="text-wrapper-11">Contact us</div>
              </button>
            </div>
            <div className="business">
              <div className="text-wrapper-12">Business requires</div>
              <div className="text-wrapper-13">hello@colstic.com</div>
              <div className="text-wrapper-14">+27 123 456 789</div>
            </div>
            <div className="open">
              <div className="text-wrapper-13">Junior Graphic Design</div>
              <div className="text-wrapper-14">Videography</div>
              <div className="text-wrapper-15">Photography</div>
              <div className="text-wrapper-12">Open positions</div>
            </div>
            <div className="london">
              <div className="text-wrapper-12">London</div>
              <p className="text-wrapper-13">
                133A Rye lane London SE15 4BQ
                <br />
                UK
              </p>
            </div>
            <div className="cape-town">
              <div className="text-wrapper-12">Cape town</div>
              <p className="element-upper-pepper">
                14 Upper pepper street CBD, 8001
                <br />
                Cape Town
              </p>
            </div>
          </div>
          <div className="footer-down">
            <img className="HR" alt="Hr" src="https://c.animaapp.com/AxrTB9jz/img/line-3.svg" />
            <div className="text-wrapper-16">DRIBBBLE</div>
            <div className="text-wrapper-17">INSTAGRAM</div>
            <div className="text-wrapper-18">LINKEDIN</div>
            <img className="logo-2" alt="Logo" src="https://c.animaapp.com/AxrTB9jz/img/logo-1.svg" />
          </div>
        </footer>
        <button className="buttons">
          <div className="text-2">Continue</div>
        </button>
        <p className="text-wrapper-19">
          Chat about any topic with ChatGPT in any time. It can be your friend, tutor or therapist.
        </p>
        <p className="AI-chatbot">
          <span className="span">AI</span>
          <span className="text-wrapper"> Chatbot</span>
        </p>
        <p className="text-wrapper-20">We’ve trained a model called ChatGPT which interacts in a conversational way.</p>
      </div>
    </div>
  );
};
  }}
export default Carreers;