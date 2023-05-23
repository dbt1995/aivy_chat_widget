// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
import { CLOSE_ICON, MESSAGE_ICON, styles } from "./assets.js";

class MessageWidget {
  constructor(position = "bottom-right"){
    this.position = this.getPosition(position);
    this.open = false;
    this.initialize();
    this.injectStyles();
  }

  position = "bottom-right";
  open = false;
  widgetContainer = null;

  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
    };
  }

  async initialize() {
    /**
     * Create and append a div element to the document body
     */
    const container = document.createElement("div");
    container.style.position = "fixed";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    /**
     * Create a button element and give it a class of button__container
     */
    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("button__container");

    /**
     * Create a span element for the widget icon, give it a class of `widget__icon`, and update its innerHTML property to an icon that would serve as the widget icon.
     */
    const widgetIconElement = document.createElement("span");
    widgetIconElement.innerHTML = MESSAGE_ICON;
    widgetIconElement.classList.add("widget__icon");
    this.widgetIcon = widgetIconElement;

    /**
     * Create a span element for the close icon, give it a class of `widget__icon` and `widget__hidden` which would be removed whenever the widget is closed, and update its innerHTML property to an icon that would serve as the widget icon during that state.
     */
    const closeIconElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("widget__icon", "widget__hidden");
    this.closeIcon = closeIconElement;

    /**
     * Append both icons created to the button element and add a `click` event listener on the button to toggle the widget open and close.
     */
    buttonContainer.appendChild(this.widgetIcon);
    buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    /**
     * Create a container for the widget and add the following classes:- `widget__hidden`, `widget__container`
     */
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__hidden", "widget__container");

    /**
     * Invoke the `createWidget()` method
     */
    this.createWidgetContent();

    /**
     * Append the widget's content and the button to the container
     */
    container.appendChild(this.widgetContainer);
    container.appendChild(buttonContainer);
    hideChat(0);

$('#prime').click(function() {
  toggleFab();
});


//Toggle chat and links
function toggleFab() {
  $('.prime').toggleClass('zmdi-comment-outline');
  $('.prime').toggleClass('zmdi-close');
  $('.prime').toggleClass('is-active');
  $('.prime').toggleClass('is-visible');
  $('#prime').toggleClass('is-float');
  $('.chat').toggleClass('is-visible');
  $('.fab').toggleClass('is-visible');
  
}

  $('#chat_first_screen').click(function(e) {
        hideChat(1);
  });

  $('#chat_second_screen').click(function(e) {
        hideChat(2);
  });

  $('#chat_third_screen').click(function(e) {
        hideChat(3);
  });

  $('#chat_fourth_screen').click(function(e) {
        hideChat(4);
  });

  $('#chat_fullscreen_loader').click(function(e) {
      $('.fullscreen').toggleClass('zmdi-window-maximize');
      $('.fullscreen').toggleClass('zmdi-window-restore');
      $('.chat').toggleClass('chat_fullscreen');
      $('.fab').toggleClass('is-hide');
      $('.header_img').toggleClass('change_img');
      $('.img_container').toggleClass('change_img');
      $('.chat_header').toggleClass('chat_header2');
      $('.fab_field').toggleClass('fab_field2');
      $('.chat_converse').toggleClass('chat_converse2');
      //$('#chat_converse').css('display', 'none');
     // $('#chat_body').css('display', 'none');
     // $('#chat_form').css('display', 'none');
     // $('.chat_login').css('display', 'none');
     // $('#chat_fullscreen').css('display', 'block');
  });

function hideChat(hide) {
    switch (hide) {
      case 0:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'block');
            $('.chat_fullscreen_loader').css('display', 'none');
             $('#chat_fullscreen').css('display', 'none');
            break;
      case 1:
            $('#chat_converse').css('display', 'block');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 2:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'block');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 3:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'block');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            break;
      case 4:
            $('#chat_converse').css('display', 'none');
            $('#chat_body').css('display', 'none');
            $('#chat_form').css('display', 'none');
            $('.chat_login').css('display', 'none');
            $('.chat_fullscreen_loader').css('display', 'block');
            $('#chat_fullscreen').css('display', 'block');
            break;
    }
}
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
    <div class="fabs"> 
    <div class="chat">
      <div class="chat_header">
        <div class="chat_option">
        <div class="header_img">
          <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
          </div>
          <span id="chat_head">Jane Doe</span> <br> <span class="agent">Agent</span> <span class="online">(Online)</span>
         <span id="chat_fullscreen_loader" class="chat_fullscreen_loader"><i class="fullscreen zmdi zmdi-window-maximize"></i></span>
  
        </div>
  
      </div>
      <div class="chat_body chat_login">
          <a id="chat_first_screen" class="fab"><i class="zmdi zmdi-arrow-right"></i></a>
          <p>We make it simple and seamless for businesses and people to talk to each other. Ask us anything</p>
      </div>
      <div id="chat_converse" class="chat_conversion chat_converse">
              <a id="chat_second_screen" class="fab"><i class="zmdi zmdi-arrow-right"></i></a>
        <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                 <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
              </div>Hey there! Any question?</span>
        <span class="chat_msg_item chat_msg_item_user">
              Hello!</span>
              <span class="status">20m ago</span>
        <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                 <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
              </div>Hey! Would you like to talk sales, support, or anyone?</span>
        <span class="chat_msg_item chat_msg_item_user">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
               <span class="status2">Just now. Not seen yet</span>
      </div>
      <div id="chat_body" class="chat_body">
          <div class="chat_category">
            <a id="chat_third_screen" class="fab"><i class="zmdi zmdi-arrow-right"></i></a>
          <p>What would you like to talk about?</p>
          <ul>
            <li>Tech</li>
            <li class="active">Sales</li>
            <li >Pricing</li>
            <li>other</li>
          </ul>
          </div>
  
      </div>
      <div id="chat_form" class="chat_converse chat_form">
      <a id="chat_fourth_screen" class="fab"><i class="zmdi zmdi-arrow-right"></i></a>
        <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                 <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
              </div>Hey there! Any question?</span>
        <span class="chat_msg_item chat_msg_item_user">
              Hello!</span>
              <span class="status">20m ago</span>
        <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                 <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
              </div>Agent typically replies in a few hours. Don't miss their reply.
              <div>
                <br>
                <form class="get-notified">
                    <label for="chat_log_email">Get notified by email</label>
                    <input id="chat_log_email" placeholder="Enter your email"/>
                    <i class="zmdi zmdi-chevron-right"></i>
                </form>
              </div></span>
  
          <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                 <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
              </div>Send message to agent.
              <div>
                <form class="message_form">
                    <input placeholder="Your email"/>
                    <input placeholder="Technical issue"/>
                    <textarea rows="4" placeholder="Your message"></textarea>
                    <button>Send</button> 
                </form>
  
          </div></span>   
      </div>
        <div id="chat_fullscreen" class="chat_conversion chat_converse">
        <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                 <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
              </div>Hey there! Any question?</span>
        <span class="chat_msg_item chat_msg_item_user">
              Hello!</span>
              <div class="status">20m ago</div>
        <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                 <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
              </div>Hey! Would you like to talk sales, support, or anyone?</span>
        <span class="chat_msg_item chat_msg_item_user">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                 <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
               </div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
        <span class="chat_msg_item chat_msg_item_user">
              Where can I get some?</span>
        <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                 <img src="http://res.cloudinary.com/dqvwa7vpe/image/upload/v1496415051/avatar_ma6vug.jpg"/>
               </div>The standard chuck...</span>
        <span class="chat_msg_item chat_msg_item_user">
              There are many variations of passages of Lorem Ipsum available</span>
              <div class="status2">Just now, Not seen yet</div>
        <span class="chat_msg_item ">
            <ul class="tags">
              <li>Hats</li>
              <li>T-Shirts</li>
              <li>Pants</li>
            </ul>
        </span>
      </div>
      <div class="fab_field">
        <a id="fab_camera" class="fab"><i class="zmdi zmdi-camera"></i></a>
        <a id="fab_send" class="fab"><i class="zmdi zmdi-mail-send"></i></a>
        <textarea id="chatSend" name="chat_message" placeholder="Send a message" class="chat_field chat_message"></textarea>
      </div>
    </div>
      <a id="prime" class="fab"><i class="prime zmdi zmdi-comment-outline"></i></a>
  </div>
        
    `;
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  }

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.widgetIcon.classList.add("widget__hidden");
      this.closeIcon.classList.remove("widget__hidden");
      this.widgetContainer.classList.remove("widget__hidden");
    } else {
      this.createWidgetContent();
      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
    }
  }
}

function initializeWidget() {
  return new MessageWidget();
}

initializeWidget();