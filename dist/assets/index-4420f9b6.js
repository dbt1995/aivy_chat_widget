var T=Object.defineProperty;var L=(c,s,n)=>s in c?T(c,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[s]=n;var z=(c,s,n)=>(L(c,typeof s!="symbol"?s+"":s,n),n);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))l(p);new MutationObserver(p=>{for(const m of p)if(m.type==="childList")for(const y of m.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&l(y)}).observe(document,{childList:!0,subtree:!0});function n(p){const m={};return p.integrity&&(m.integrity=p.integrity),p.referrerPolicy&&(m.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?m.credentials="include":p.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function l(p){if(p.ep)return;p.ep=!0;const m=n(p);fetch(p.href,m)}})();const M=function(c="#42a5f5",s=0,n="right",l=25){return`

#aivy_webcare_widget ul li{
    list-style: none;
  }
  #aivy_webcare_widget #chat_first_screen{
    background: red;
    padding: 10px 15px;
    border-radius: 15px;
    color:white;
    cursor:pointer;
  }
  #aivy_webcare_widget #chat_first_screen_form label.error{
    text-align: left;
    color: red;
    font-size: 12px;
  }
  #aivy_webcare_widget .fabs {
    bottom: ${s}px;
    position: fixed;
    margin: 1em;
    ${n=="right"?`right: ${l}px;`:`left: ${l}px;`}
    z-index: 100000;
    
  }
  
  #aivy_webcare_widget .fab {
    display: block;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    text-align: center;
    color: #f0f0f0;
    margin: 25px auto 0;
    box-shadow: 0 0 4px rgba(0, 0, 0, .14), 0 4px 8px rgba(0, 0, 0, .28);
    cursor: pointer;
    -webkit-transition: all .1s ease-out;
    transition: all .1s ease-out;
    position: relative;
    z-index: 998;
    overflow: hidden;
    background: ${c};
  }
  
  #aivy_webcare_widget .fab > i {
    font-size: 2em;
    line-height: 55px;
    -webkit-transition: all .2s ease-out;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }
  
  #aivy_webcare_widget .fab:not(:last-child) {
    width: 0;
    height: 0;
    margin: 20px auto 0;
    opacity: 0;
    visibility: hidden;
    line-height: 40px;
  }
  
  #aivy_webcare_widget  .fab:not(:last-child) > i {
    font-size: 1.4em;
    line-height: 40px;
  }
  
  #aivy_webcare_widget  .fab:not(:last-child).is-visible {
    width: 40px;
    height: 40px;
    margin: 15px auto 10;
    opacity: 1;
    visibility: visible;
  }
  
  #aivy_webcare_widget  .fab:nth-last-child(1) {
    -webkit-transition-delay: 25ms;
    transition-delay: 25ms;
  }
  
  #aivy_webcare_widget   .fab:not(:last-child):nth-last-child(2) {
    -webkit-transition-delay: 20ms;
    transition-delay: 20ms;
  }
  
  #aivy_webcare_widget   .fab:not(:last-child):nth-last-child(3) {
    -webkit-transition-delay: 40ms;
    transition-delay: 40ms;
  }
  
  #aivy_webcare_widget   .fab:not(:last-child):nth-last-child(4) {
    -webkit-transition-delay: 60ms;
    transition-delay: 60ms;
  }
  
  #aivy_webcare_widget   .fab:not(:last-child):nth-last-child(5) {
    -webkit-transition-delay: 80ms;
    transition-delay: 80ms;
  }
  
  #aivy_webcare_widget .fab(:last-child):active,
  #aivy_webcare_widget .fab(:last-child):focus,
  #aivy_webcare_widget .fab(:last-child):hover {
    box-shadow: 0 0 6px rgba(0, 0, 0, .16), 0 6px 12px rgba(0, 0, 0, .32);
  }
  /*Chatbox*/
  
  #aivy_webcare_widget .chat {
    position: fixed;
    right: 85px;
    bottom: 20px;

    bottom: ${s};
    position: fixed;
    margin: 1em;
    ${n=="right"?`right: ${l+70}px;`:`left: ${l+70}px;`}

    width: 400px;
    font-size: 12px !important;
    line-height: 22px !important;
    font-family: 'Roboto';
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    opacity: 0;
    box-shadow: 1px 1px 100px 2px rgba(0, 0, 0, 0.22);
    border-radius: 10px;
    -webkit-transition: all .2s ease-out;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
  }
  
  #aivy_webcare_widget .chat_fullscreen {
      position: fixed;
      right: 0px;
      bottom: 0px;
      top: 0px;
    }
    #aivy_webcare_widget   .chat_header {
        /* margin: 10px; */
      font-size: 13px;
      font-family: 'Roboto';
      font-weight: 500;
      color: #f3f3f3;
      height: 55px;
      background: ${c};
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      padding-top: 8px;
  }
  #aivy_webcare_widget  .chat_header2 {
        /* margin: 10px; */
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
  }
  #aivy_webcare_widget  .chat_header .span {
    float:right;
  }
  
  #aivy_webcare_widget .chat_fullscreen_loader {
    display: none;
      float: right;
      cursor: pointer;
      /* margin: 10px; */
      font-size: 20px;
      opacity: 0.5;
      /* padding: 20px; */
      margin: -10px 10px;
  }
  
  #aivy_webcare_widget .chat.is-visible {
    background-color: white;
    opacity: 1;
    -webkit-animation: zoomIn .2s cubic-bezier(.42, 0, .58, 1);
    animation: zoomIn .2s cubic-bezier(.42, 0, .58, 1);
  }
  #aivy_webcare_widget .is-hide{
    opacity: 0
  }
  
  #aivy_webcare_widget .chat_option {
    float: left;
    font-size: 15px;
    list-style: none;
    position: relative;
    height: 100%;
    width: 100%;
    text-align: relative;
    margin-right: 10px;
        letter-spacing: 0.5px;
        font-weight: 400
  }
  
  
  #aivy_webcare_widget .chat_option img {
      border-radius: 50%;
      width: 55px;
      background: white;
      padding: 3px;
      float: left;
      margin: -30px 20px 10px 20px;
      border: 4px solid rgba(0, 0, 0, 0.21);
  }
  
  #aivy_webcare_widget .change_img img{
      width: 35px;
      margin: 0px 20px 0px 20px;
  }
  #aivy_webcare_widget .chat_option .agent {
    font-size: 12px;
      font-weight: 300;
  }
  #aivy_webcare_widget .chat_option .online{
        opacity: 0.4;
      font-size: 11px;
      font-weight: 300;
  }
  #aivy_webcare_widget .chat_color {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 10px;
    float: left;
  }
  
  
  #aivy_webcare_widget .chat_body {
    background: #fff;
    width: 100%;
  
    display: inline-block;
    text-align: center;
      overflow-y: auto;
  
  }
  #aivy_webcare_widget  #chat_body{
      height: 450px;
  }
  #aivy_webcare_widget .chat_login p,.chat_body li, p, a{
      -webkit-animation: zoomIn .5s cubic-bezier(.42, 0, .58, 1);
    animation: zoomIn .5s cubic-bezier(.42, 0, .58, 1);
  }
  #aivy_webcare_widget .chat_body p {
    padding: 20px;
    color: #888;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.2rem;
  }
  #aivy_webcare_widget .chat_body a {
    width: 10%;
    text-align: center;
    border: none;
    box-shadow: none;
    line-height: 40px;
    font-size: 15px;
  }
  
  
  
  #aivy_webcare_widget .chat_field {
    position: relative;
    margin: 5px 0 5px 0;
    width: 50%;
    font-family: 'Roboto';
    font-size: 12px;
    line-height: 30px;
    font-weight: 500;
    color: #4b4b4b;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    border: none;
    outline: none;
    display: inline-block;
  }
  
  #aivy_webcare_widget .chat_field.chat_message {
    height: 30px;
    resize: none;
        font-size: 13px;
      font-weight: 400;
  }
  #aivy_webcare_widget .chat_category{
    text-align: left;
  }
  
  #aivy_webcare_widget .chat_category{
    margin: 20px;
    background: rgba(0, 0, 0, 0.03);
    padding: 10px;
  }
  
  #aivy_webcare_widget  .chat_category ul li{
      width: 80%;
      height: 30px;
      background: #fff;
      padding: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;
      border-radius: 3px;
      border: 1px solid #e0e0e0;
      font-size: 13px;
      cursor: pointer;
      line-height: 30px;
      color: #888;
      text-align: center;
  }
  
  #aivy_webcare_widget .chat_category li:hover{
      background: #83c76d;
      color: #fff;
  }
  #aivy_webcare_widget  .chat_category li.active{
      background: #83c76d;
      color: #fff;
  }
  
  #aivy_webcare_widget .tags{
   margin: 20px;
      bottom: 0px;
      display: block;
      width: 120%
  }
  #aivy_webcare_widget .tags li{
      padding: 5px 10px;
      border-radius: 40px;
      border: 1px solid rgb(3, 117, 208);
      margin: 5px;
      display: inline-block;
      color: rgb(3, 117, 208);
      cursor: pointer;
  
  }
  #aivy_webcare_widget  .fab_field {
    width: 100%;
    display: none;
    text-align: center;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom-right-radius: 10px;
      border-bottom-left-radius: 10px;
  
  }
  #aivy_webcare_widget  .fab_field2 {
      bottom: 0px;
      position: absolute;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 0px;
          z-index: 999;
    }
  
    #aivy_webcare_widget  .fab_field a {
    display: inline-block;
    text-align: center;
  }
  
  #aivy_webcare_widget  #fab_camera {
    float: left;
    background: rgba(0, 0, 0, 0);
  }
  
  #aivy_webcare_widget  #fab_send {
    float: right;
    background: rgba(0, 0, 0, 0);
  }
  
  #aivy_webcare_widget .fab_field .fab {
    width: 35px;
    height: 35px;
    box-shadow: none;
    margin: 5px;
  }
  
  #aivy_webcare_widget .fab_field .fab>i {
    font-size: 1.6em;
    line-height: 35px;
    color: #bbb;
  }
  
 #aivy_webcare_widget .fab_field .fab > i:hover {
  color: ${c};
}
#aivy_webcare_widget .chat_converse {
  position: relative;
  background: #fff;
  margin: 6px 0 0px 0;
  height: 300px;
  min-height: 0;
  font-size: 12px;
  line-height: 18px;
  overflow-y: auto;
  width: 100%;
  float: right;
}
#aivy_webcare_widget #chat_converse-box {
  display: inline-block;
  width: 100%;
}
#aivy_webcare_widget .chat_converse2 {
  height: 100%;
  max-height: 800px;
}
#aivy_webcare_widget .chat_list {
  opacity: 0;
  visibility: hidden;
  height: 0;
}
#aivy_webcare_widget .chat_list .chat_list_item {
  opacity: 0;
  visibility: hidden;
}
#aivy_webcare_widget .chat .chat_converse .chat_msg_item {
  position: relative;
  margin: 6px 0 5px  0px;
      padding: 6px 11px;
  max-width: 60%;
  display: block;
  word-wrap: break-word;
  border-radius: 3px;
  -webkit-animation: zoomIn 0.5s cubic-bezier(0.42, 0, 0.58, 1);
  animation: zoomIn 0.5s cubic-bezier(0.42, 0, 0.58, 1);
  clear: both;
  z-index: 999;
}
#aivy_webcare_widget .status {
  // margin: 40px -50px 0 0;
  width: 100%;
  text-align: right;
  padding-right: 23px;
  float: right;
  font-size: 11px;
  opacity: 0.3;
}
#aivy_webcare_widget .status2 {
  margin: -10px 20px 0 0;
  float: right;
  display: block;
  font-size: 11px;
  opacity: 0.3;
}
#aivy_webcare_widget .chat .chat_converse .chat_msg_item .chat_avatar {
  position: absolute;
  top: 0;
}
#aivy_webcare_widget .chat .chat_converse .chat_msg_item.chat_msg_item_admin .chat_avatar {
  left: -52px;
  background: rgba(0, 0, 0, 0.03);
}
#aivy_webcare_widget .chat .chat_converse .chat_msg_item.chat_msg_item_user .chat_avatar {
  right: -52px;
  background: rgba(0, 0, 0, 0.6);
}
#aivy_webcare_widget .chat .chat_converse .chat_msg_item .chat_avatar, #aivy_webcare_widget .chat_avatar img {
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 50%;
}
#aivy_webcare_widget .chat .chat_converse .chat_msg_item.chat_msg_item_admin {
  margin-left: 60px;
  float: left;
  background: rgba(0, 0, 0, 0.03);
  color: #666;
}
#aivy_webcare_widget .chat .chat_converse .chat_msg_item.chat_msg_item_user {
  margin-right: 20px;
  float: right;
  background: ${c};
  color: #eceff1;
}
#aivy_webcare_widget .chat .chat_converse .chat_msg_item.chat_msg_item_admin:before {
  content: '';
  position: absolute;
  top: 15px;
  left: -12px;
  z-index: 998;
  border: 6px solid transparent;
  border-right-color: rgba(255, 255, 255, .4);
}
#aivy_webcare_widget .chat_form .get-notified label {
  color: #077ad6;
  font-weight: 600;
  font-size: 11px;
}
#aivy_webcare_widget input {
  position: relative;
  width: 90%;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  color: #4b4b4b;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  outline: none;
  background: #fff;
  display: inline-block;
  resize: none;
  padding: 5px;
  border-radius: 3px;
}
#aivy_webcare_widget .chat_form .get-notified input {
  margin: 2px 0 0 0;
  border: 1px solid #83c76d;
}
#aivy_webcare_widget .chat_form .get-notified i {
  background: #83c76d;
  width: 30px;
  height: 32px;
  font-size: 18px;
  color: #fff;
  line-height: 30px;
  font-weight: 600;
  text-align: center;
  margin: 2px 0 0 -30px;
  position: absolute;
  border-radius: 3px;
}
#aivy_webcare_widget .chat_form .message_form {
  margin: 10px 0 0 0;
}
#aivy_webcare_widget .chat_form .message_form input {
  margin: 5px 0 5px 0;
  border: 1px solid #e0e0e0;
}
#aivy_webcare_widget .chat_form .message_form textarea {
  margin: 5px 0 5px 0;
  border: 1px solid #e0e0e0;
  position: relative;
  width: 90%;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  color: #4b4b4b;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  outline: none;
  background: #fff;
  display: inline-block;
  resize: none;
  padding: 5px;
  border-radius: 3px;
}
#aivy_webcare_widget .chat_form .message_form button {
  margin: 5px 0 5px 0;
  border: 1px solid #e0e0e0;
  position: relative;
  width: 95%;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  outline: none;
  background: #fff;
  display: inline-block;
  resize: none;
  padding: 5px;
  border-radius: 3px;
  background: #83c76d;
  cursor: pointer;
}
#aivy_webcare_widget strong.chat_time {
  padding: 0 1px 1px 0;
  font-weight: 500;
  font-size: 8px;
  display: block;
}
#aivy_webcare_widget ::-webkit-scrollbar {
  width: 6px;
}
#aivy_webcare_widget ::-webkit-scrollbar-track {
  border-radius: 0;
}
#aivy_webcare_widget ::-webkit-scrollbar-thumb {
  margin: 2px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.2);
}
#aivy_webcare_widget .is-active {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
}
#aivy_webcare_widget .is-float {
  box-shadow: 0 0 6px rgba(0, 0, 0, .16), 0 6px 12px rgba(0, 0, 0, .32);
}
#aivy_webcare_widget .is-loading {
  display: block;
  -webkit-animation: load 1s cubic-bezier(0, 0.99, 1, 0.6) infinite;
  animation: load 1s cubic-bezier(0, 0.99, 1, 0.6) infinite;
}
@-webkit-keyframes zoomIn {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
 }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
 }
}
@keyframes zoomIn {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
 }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
 }
}
@-webkit-keyframes load {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
 }
  50% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 1;
 }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
 }
}
@keyframes load {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 0;
 }
  50% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    opacity: 1;
 }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
 }
}
@media only screen and (min-width: 300px) {
  #aivy_webcare_widget .chat {
    width: 250px;
 }
}
@media only screen and (min-width: 480px) {
  #aivy_webcare_widget .chat {
    width: 300px;
 }
  #aivy_webcare_widget .chat_field {
    width: 65%;
 }
}
@media only screen and (min-width: 768px) {
  #aivy_webcare_widget .chat {
    width: 300px;
 }
  #aivy_webcare_widget .chat_field {
    width: 65%;
 }
}
@media only screen and (min-width: 1024px) {
  #aivy_webcare_widget .chat {
    width: 300px;
 }
  #aivy_webcare_widget .chat_field {
    width: 65%;
 }
}
#aivy_webcare_widget .blue .fab {
  background: ${c};
  color: #fff;
}
#aivy_webcare_widget .blue .chat {
  background: ${c};
  color: #999;
}
#aivy_webcare_widget .ink {
  display: block;
  position: absolute;
  background: rgba(38, 50, 56, 0.4);
  border-radius: 100%;
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  webkit-transform: scale(0);
  -webkit-transform: scale(0);
  transform: scale(0);
}
#aivy_webcare_widget .ink.animate {
  -webkit-animation: ripple 0.5s ease-in-out;
  animation: ripple 0.5s ease-in-out;
}
@-webkit-keyframes ripple {
 /*scale the element to 250% to safely cover the entire link and fade it out*/
  100% {
    opacity: 0;
    -moz-transform: scale(5);
    -ms-transform: scale(5);
    webkit-transform: scale(5);
    -webkit-transform: scale(5);
    transform: scale(5);
 }
}
@keyframes ripple {
 /*scale the element to 250% to safely cover the entire link and fade it out*/
  100% {
    opacity: 0;
    -moz-transform: scale(5);
    -ms-transform: scale(5);
    webkit-transform: scale(5);
    -webkit-transform: scale(5);
    transform: scale(5);
 }
}
#aivy_webcare_widget ::-webkit-input-placeholder {
 /* Chrome */
  color: #bbb;
}
#aivy_webcare_widget :-ms-input-placeholder {
 /* IE 10+ */
  color: #bbb;
}
#aivy_webcare_widget ::-moz-placeholder {
 /* Firefox 19+ */
  color: #bbb;
}
#aivy_webcare_widget :-moz-placeholder {
 /* Firefox 4 - 18 */
  color: #bbb;
}
#aivy_webcare_widget .widget__container * {
  box-sizing: border-box;
}
#aivy_webcare_widget h3, #aivy_webcare_widget p, #aivy_webcare_widget input {
  margin: 0;
  padding: 0;
}
#aivy_webcare_widget .widget__container {
  box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
  width: 400px;
  overflow: auto;
  right: -25px;
  bottom: 75px;
  position: absolute;
  transition: max-height 0.2s ease;
  font-family: Helvetica, Arial, sans-serif;
  background-color: #e6e6e6 a6;
  border-radius: 10px;
  box-sizing: border-box;
}
#aivy_webcare_widget .widget__icon {
  cursor: pointer;
  width: 60%;
  position: absolute;
  top: 18px;
  left: 16px;
  transition: transform 0.3s ease;
}
#aivy_webcare_widget .widget__hidden {
  transform: scale(0);
}
#aivy_webcare_widget .button__container {
  border: none;
  background-color: #0f172a;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
}
#aivy_webcare_widget .widget__container.hidden {
  max-height: 0px;
}
#aivy_webcare_widget .widget__header {
  padding: 1rem 2rem 1.5rem;
  background-color: #000;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
}

#aivy_webcare_widget .widget__header h3 {
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 8px;
}

#aivy_webcare_widget form {
  padding: 1rem 1rem 0.5rem;
}

#aivy_webcare_widget form .form__field {
  margin-bottom: 0.7rem;
  display: flex;
  flex-direction: column;
}

#aivy_webcare_widget .form__field label {
  margin-bottom: 8px;
  font-size: 14px;
}
#aivy_webcare_widget .form__field input, #aivy_webcare_widget .form__field textarea {
  border: 1px solid #939393;
  border-radius: 3px;
  padding: 8px 10px;
  background-color: #fff;
}
#aivy_webcare_widget .form__field input {
  height: 40px;
}
#aivy_webcare_widget .form__field textarea::placeholder {
  font-family: Helvetica, Arial, sans-serif;
}
#aivy_webcare_widget form button {
  height: 48px;
  border-radius: 6px;
  font-size: 18px;
  background-color: #000;
  color: #fff;
  border: 0;
  width: 100%;
  cursor: pointer;
}
#aivy_webcare_widget form button:hover {
  background-color: rgba(0, 0, 0, 95);
}







`};function U(){function c(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return c()+c()+"-"+c()+"-"+c()+"-"+c()+"-"+c()+c()+c()}function j(c){var s=new Date(c*1e3),n=(new Date().getTime()-s.getTime())/1e3,l=Math.floor(n/86400);if(!(isNaN(l)||l<0||l>=31))return l==0&&(n<60&&"Vừa xong"||n<120&&"1 phút"||n<3600&&Math.floor(n/60)+" phút"||n<7200&&"1 giờ"||n<86400&&Math.floor(n/3600)+" giờ")||l==1&&"hôm qua"||l<7&&l+" ngày"||l<31&&Math.ceil(l/7)+" tuần"}typeof jQuery<"u"&&(jQuery.fn.prettyDate=function(){return this.each(function(){var c=j(this.title);c&&jQuery(this).text(c)})});class N{constructor(s,n,l,p,m,y){z(this,"position","bottom-right");z(this,"open",!1);z(this,"widgetContainer",null);this.position=this.getPosition(l),this.open=!1,this.bottom=n,this.position=l,this.distance=p,this.brand=m,this.icon=y,this.color=s,this.open=!1,this.currentGroup=null,this.passphrase="FirebaseChat",this.initialize(),this.injectStyles()}getPosition(s){const[n,l]=s.split("-");return{[n]:"30px",[l]:"30px"}}decryptUser(){const s=localStorage.getItem("enus");if(s){const l=CryptoJS.AES.decrypt(s,this.passphrase).toString(CryptoJS.enc.Utf8);return JSON.parse(l)}}async initialize(){var s=this;s.currentGroup=null;const n=document.createElement("div");document.body.appendChild(n),this.widgetContainer=document.createElement("div"),this.createWidgetContent(),n.appendChild(this.widgetContainer);let l=this.decryptUser();l?(v(0),v(1),E(l,!0)):v(0),$("#prime").click(function(){P()});var p=document.getElementById("aivy-modalBox"),m=document.getElementById("aivy-modalImage");function y(){var h=document.getElementById("aivy-modalImage");function _(b){var x=h.clientWidth,g=h.clientHeight;h.style.width=x*b+"px",h.style.height=g*b+"px"}$(".aivy-modal #zoomout").on("click",function(){_(.5)}),$(".aivy-modal #zoomin").on("click",function(){_(1.5)})}document.getElementById("close-aivy-modal").onclick=function(){p.style.display="none"};function G(h,_){$.ajax({headers:{Accept:"application/json"},type:"POST",url:"https://api.webcare.aivyjsc.com/api/guest/notification/send-from-widget",crossDomain:!0,data:{name:h,hostname:location.hostname,messsage:_},beforeSend:function(b){b.withCredentials=!0},success:function(b){console.log(b)},error:function(b,x,g){console.log(b.error)}})}async function E(h,_=!1){var b={apiKey:"AIzaSyAZlRMd1RygoP2niU5w4c057StI3mnzEwk",authDomain:"webcare-app.firebaseapp.com",databaseURL:"https://webcare-app-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"webcare-app",storageBucket:"webcare-app.appspot.com",messagingSenderId:"679542454067",appId:"1:679542454067:web:25aea5028d759452a9b046",measurementId:"G-9910EPHPNB"},x="FirebaseChat";if(!firebase.apps.length)firebase.initializeApp(b);else return"";const g=firebase.firestore(),k={async createGroup(e,i,o,a){const t=this,r=await S.getUserByHostAndType(location.host,"admin");if(!r)return alert("Không tìm thấy tài khoản admin tương ứng"),null;e.push(r);const d={createdAt:new Date,createdBy:i,members:e,name:o,type:a};debugger;return new Promise((f,u)=>{g.collection("group").add(d).then(function(w){d.id=w.id,t.fetchGroupByUserID(h),f(d)}).catch(function(w){u(w)})})},filterGroup(e){const i=this;return i.groups=[],new Promise((o,a)=>{let t=g.collection("group");e.forEach(r=>{t=t.where("members","==",r)}),t.get().then(function(r){const d=[];r.forEach(f=>{const u=f.data();u.id=f.id,d.push(u)}),d.length>0?o(d[0]):o(null)}).catch(function(r){a(r)})})},fetchGroupByUserID(e){return g.collection("group").where("members","array-contains",{...e}).onSnapshot(o=>{const a=[];o.forEach(t=>{const r=t.data();r.id=t.id,a.push(r)}),a.length>0&&(s.currentGroup=a[0])})},fetchUsersByGroup(e){e.users=[];const i=[];return e.members.forEach(o=>{const a=new Promise((t,r)=>{g.collection("user").doc(o).get().then(function(d){console.log(JSON.stringify(d.data())),t(d.data())}).catch(function(d){r(d)})});i.push(a)}),Promise.all(i)},saveUser(e){g.collection("user").doc(e.uid).set({uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,email:e.email})},checkUserExisted(e){const i=g.collection("user").doc(e.uid);return new Promise((o,a)=>{i.get().then(function(t){o(t.exists)}).catch(function(t){a(t)})})},fetchUsers(){const e=this;return new Promise((i,o)=>{g.collection("user").get().then(function(a){const t=[];a.forEach(r=>{const d=r.data();t.push(d)}),e.users=t,i(t.length>0)}).catch(function(a){o(a)})})},getUserFromFireStore(e){if(!e)return;const i=g.collection("user").doc(e.uid);return new Promise((o,a)=>{i.onSnapshot(function(t){o(t.data())})})},fetchGroupByIds(e){const i=[],o=g.collection("group");e.forEach(async a=>{await o.doc(a).get().then(function(t){i.push(t.data())}).catch(function(t){console.error("Error get document: ",t)})}),this.groups=i},updateGroup(e){g.collection("group").doc(e.id).set(e).then(function(i){}).catch(function(i){console.error("Error writing document: ",i)})},addNewGroupToUser(e,i){const o=e.groups?e.groups:[];o.filter(t=>t===i).length===0&&(o.push(i),e.groups=o,g.collection("user").doc(e.uid).set(e))}},I={saveMessage(e,i,o,a="string"){const t={messageText:e,sentAt:i,type:a,sentBy:s.user.uid};return new Promise((r,d)=>{g.collection("message").doc(o).collection("messages").add(t).then(function(f){r(t)}).catch(function(f){d(f)})})},async fetchMessagesByGroupId(e){s.messages=[],g.collection("message").doc(e.trim()).collection("messages").orderBy("sentAt").onSnapshot(async i=>{const o=[];if(i.forEach(t=>{t&&o.push(t.data())}),s.messages=o,o&&o.length>0){for(let t=0;t<o.length;t++){let r=o[t],d=`message-${t}`;if($("#"+d).length>0)continue;let f="";if(r.type=="image"&&r.messageText&&r.messageText.length>0)for(let w=0;w<r.messageText.length;w++)try{let C=await firebase.storage().ref(r.messageText[w]).getDownloadURL();f+='<img class="aivy-image-chat" id="image-'+w+'" style="height: 100px; width: auto;" ref="message.messageText[i]" src="'+C+'?alt=media"/>'}catch(C){console.log(C)}const u=`<span id='${d}' class="${s.user.uid===r.sentBy?"chat_msg_item chat_msg_item_user":"chat_msg_item chat_msg_item_admin"}">
              
              ${s.user.uid===r.sentBy?"":'<div class="chat_avatar"> <img src="${this.icon}"/> </div>'}
              
              ${r.type=="image"?f:r.messageText}</span>
              
              ${s.user.uid===r.sentBy?'<span class="status">'+j(r.sentAt.seconds)+"</span>":""}
              `;$("#chat_converse-box").append(u),firebase.storage()}var a=document.getElementsByClassName("aivy-image-chat");for(let t=0;t<a.length;t++)a[t].getAttribute("data-value")||(a[t].setAttribute("data-value","viewer"),a[t].onclick=function(r){y(),p.style.display="block",m.style.removeProperty("height"),m.style.removeProperty("width"),m.src=this.src,m.alt=this.alt});$("#chat_converse-box img").each((t,r)=>{$(r).hasClass("image-viewer")||$(r).addClass("image-viewer")})}document.getElementById("chat_converse-box").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})})}},S={fetchUsersByGroup(e){e.users=[];const i=[];return e.members.forEach(o=>{const a=new Promise((t,r)=>{g.collection("user").doc(o).get().then(function(d){console.log(JSON.stringify(d.data())),t(d.data())}).catch(function(d){r(d)})});i.push(a)}),Promise.all(i)},saveUser(e){g.collection("user").doc(e.uid).set({...e})},checkUserExisted(e){const i=g.collection("user").doc(e.uid);return new Promise((o,a)=>{i.get().then(function(t){o(t.exists)}).catch(function(t){a(t)})})},async getUserByHostAndType(e,i){let a=await g.collection("user").where("hosttype","==",e+i).get(),t=[];if(a.forEach(r=>{t.push(r.data())}),t&&t.length>0)return t[0]},fetchUsers(){const e=this;return new Promise((i,o)=>{g.collection("user").get().then(function(a){const t=[];a.forEach(r=>{const d=r.data();t.push(d)}),e.users=t,i(t.length>0)}).catch(function(a){o(a)})})},getUserFromFireStore(e){if(!e)return;const i=g.collection("user").doc(e.uid);return new Promise((o,a)=>{i.onSnapshot(function(t){o(t.data())})})}},R={signInWithGoogleAuthentication(){const e=new firebase.auth.GoogleAuthProvider;return new Promise((i,o)=>{auth.signInWithPopup(e).then(function(a){i(a.user)}).catch(function(a){o(a)})})},saveUserToLocalStorage(e){const i=CryptoJS.AES.encrypt(JSON.stringify(e),x).toString();localStorage.setItem("enus",i)},saveUserToStore(e){this.$store.commit("user/add",e)},decryptUser(){const e=localStorage.getItem("enus");if(e){const o=CryptoJS.AES.decrypt(e,this.passphrase).toString(CryptoJS.enc.Utf8);return JSON.parse(o)}}};await S.checkUserExisted(h)?await k.fetchGroupByUserID(h):(R.saveUserToLocalStorage(h),S.saveUser(h),await k.createGroup([h],h,h.name,"private")),s.user=h,setTimeout(async()=>{await I.fetchMessagesByGroupId(s.currentGroup.id),s.loading=!1},1e3),document.getElementById("fab_send").addEventListener("click",B),$("#chatSend").keypress(function(e){var i=e.which;if(i==13)return B(e),!1}),document.getElementById("fileInput").addEventListener("change",A);async function A(e){e.preventDefault();const i=new Date;let o=e.target.files[0],a=U()+"."+o.name.split(".").pop();firebase.storage().ref("images/"+s.currentGroup.id+"/"+a).put(o).on("state_changed",function(f){let u=f.bytesTransferred/f.totalBytes*100;console.log("percentage",u)},function(f){alert("Xảy ra lỗi khi tải ảnh")},async function(){const f=await I.saveMessage(["images/"+s.currentGroup.id+"/"+a],i,s.currentGroup.id,"image");if(f){const u={...s.currentGroup,users:null,modifiedAt:i,recentMessage:{...f,readBy:[]}};k.updateGroup(u)}})}async function B(e){e.preventDefault();const i=new Date,o=document.getElementById("chatSend"),a=o.value;if(!a||a.length<=0)return;o.value="",document.getElementById("chat_converse").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"});const t=await I.saveMessage(a,i,s.currentGroup.id);if(t){const r={...s.currentGroup,users:null,modifiedAt:i,recentMessage:{...t,readBy:[]}};k.updateGroup(r),G(s.user.name,a)}}}function P(){$(".prime").toggleClass("zmdi-comment-outline"),$(".prime").toggleClass("zmdi-close"),$(".prime").toggleClass("is-active"),$(".prime").toggleClass("is-visible"),$("#prime").toggleClass("is-float"),$(".chat").toggleClass("is-visible"),$(".fab").toggleClass("is-visible")}$().ready(function(){$("#chat_first_screen").click(function(h){if($("form#chat_first_screen_form").validate({rules:{name:"required",phone:"required",email:{email:!0}},messages:{name:"Bạn chưa nhập tên",phone:"Bạn chưa nhập số điện thoại",email:"Email chưa đúng định dạng"},errorPlacement:function(_,b){b.is(":radio")?_.appendTo(b.parents(".form-group")):_.insertAfter(b)},submitHandler:function(_){}}),$("form#chat_first_screen_form").valid()){v(1);let _={name:$("form#chat_first_screen_form input[name='name']").val(),phone:$("form#chat_first_screen_form input[name='phone']").val(),email:$("form#chat_first_screen_form input[name='email']").val(),content:$("form#chat_first_screen_form input[name='content']").val(),host:location.hostname,type:"guest",uid:U()};E(_)}})}),$("#chat_second_screen").click(function(h){v(2)}),$("#chat_third_screen").click(function(h){v(3)}),$("#chat_fourth_screen").click(function(h){v(4)}),$("#chat_fullscreen_loader").click(function(h){$(".fullscreen").toggleClass("zmdi-window-maximize"),$(".fullscreen").toggleClass("zmdi-window-restore"),$(".chat").toggleClass("chat_fullscreen"),$(".fab").toggleClass("is-hide"),$(".header_img").toggleClass("change_img"),$(".img_container").toggleClass("change_img"),$(".chat_header").toggleClass("chat_header2"),$(".fab_field").toggleClass("fab_field2"),$(".chat_converse").toggleClass("chat_converse2")});function v(h){switch(h){case 0:$("#chat_converse").css("display","none"),$("#chat_body").css("display","none"),$("#chat_form").css("display","none"),$(".chat_login").css("display","block"),$(".chat_fullscreen_loader").css("display","none"),$("#chat_fullscreen").css("display","none");break;case 1:$("#chat_converse").css("display","block"),$("#chat_body").css("display","none"),$("#chat_form").css("display","none"),$("#aivy_webcare_widget .fab_field").css("display","inline-block"),$(".chat_login").css("display","none"),$(".chat_fullscreen_loader").css("display","block");break;case 2:$("#chat_converse").css("display","none"),$("#chat_body").css("display","block"),$("#chat_form").css("display","none"),$(".chat_login").css("display","none"),$(".chat_fullscreen_loader").css("display","block");break;case 3:$("#chat_converse").css("display","none"),$("#chat_body").css("display","none"),$("#chat_form").css("display","block"),$(".chat_login").css("display","none"),$(".chat_fullscreen_loader").css("display","block");break;case 4:$("#chat_converse").css("display","none"),$("#chat_body").css("display","none"),$("#chat_form").css("display","none"),$(".chat_login").css("display","none"),$(".chat_fullscreen_loader").css("display","block"),$("#chat_fullscreen").css("display","block");break}}}createWidgetContent(){this.widgetContainer.innerHTML=`
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'><\/script>
    <script src='https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js'><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"><\/script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"><\/script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"><\/script>
    <script src="https://www.gstatic.com/firebasejs/5.5.8/firebase-messaging.js"><\/script>
    <style>
    
  /* The Modal (background) */
  .aivy-modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 100001; /* Sit on top */
    /* padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.5); /* Black w/ opacity */
    align-items: center;
    margin: 0 auto;
  }
  
  .aivy-modal #modalImageContainer {
    overflow: auto;
    /* background: red; */
    width: 80vw;
    height: 80vh;
    margin: 1% auto;
  }
  
  .aivy-modal .modal-content {
    margin: auto;
    display: block;
    /* top:10%; */
    /* width: 80%; */
    /* max-width: 700px; */
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.5s;
    animation-name: zoom;
    animation-duration: 0.5s;
    overflow: auto;
    position: relative;
    max-width: none;
  }
  
  @-webkit-keyframes zoom {
    from {-webkit-transform:scale(0)}
    to {-webkit-transform:scale(1)}
  }
  
  @keyframes zoom {
    from {transform:scale(0)}
    to {transform:scale(1)}
  }
  
  /* The Close Button */
  .aivy-modal .close {
    /* position: absolute; */
    /* top: 15px; */
    /* right: 35px; */
    /* color: #f1f1f1; */
    margin: 1% 1% 0 0;
    float:right;
    color:white;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
    background-color: #190654;
  }
  
  .aivy-modal .close:hover,
  .aivy-modal .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
  .aivy-modal .zoomButton {
    width: 100px;
    height: 50px;
    background: #190654;
    color: white;
    font-size: 2em;
    border: none;
  }
  .aivy-modal .zoomButton:hover{
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
    
    </style>
    <div id="aivy-modalBox" class="aivy-modal">
  <div>
    <input type="button" class="close zoomButton" value="&times" id="close-aivy-modal">
  </div>
  <div id="modalImageContainer">
    <img id="aivy-modalImage" class="modal-content">
  </div>
  <div style="text-align:center;">
    <!-- <input type="button" class="close button" value="&times"> -->
    <input type="button" id="zoomin" class="zoomButton" value="+"/>
    <input type="button" id="zoomout" class="zoomButton" value="-"/>
  </div>
</div>
    <div id="aivy_webcare_widget">
    <div class="fabs"> 
    <div class="chat">
      <div class="chat_header">
        <div class="chat_option">
        <div class="header_img">
          <img src="${this.icon}"/>
          </div>
          <span id="chat_head">Xin chào</span> <br> <span class="agent">${this.brand}</span> 
          <!--  <span class="online">(Online)</span> -->
         <span id="chat_fullscreen_loader" class="chat_fullscreen_loader"><i class="fullscreen zmdi zmdi-window-maximize"></i></span>
  
        </div>
  
      </div>
      <div class="chat_body chat_login">
          <p>Vui lòng điền thông tin của bạn để chúng tôi hỗ trợ tốt nhất</p>
          <form id="chat_first_screen_form"  novalidate="novalidate" action="">
          <div class="form__field">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Họ và tên*"
              />
          </div>
          <div class="form__field">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nhập email của bạn"
              />
          </div>
          <div class="form__field">
              <input
                type="text"
                id="subject"
                name="phone"
                placeholder="Nhập số điện thoại *"
              />
          </div> 
          <div class="form__field">
              <input
                type="text"
                id="subject"
                name="content"
                placeholder="Nhập nội dung cần hỗ trợ"
              />
          </div> 
     
          <a id="chat_first_screen">Bắt đầu hội thoại&nbsp;<i class="zmdi zmdi-arrow-right"></i></a>
      </form>
          </div>
          
      <div id="chat_converse" class="chat_conversion chat_converse">
      <div id="chat_converse-box" >
        <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                 <img src="${this.icon}"/>
              </div>Xin chào, tôi có thể giúp gì cho bạn?</span>
        

      </div>
      </div>
      <div id="chat">
        <!-- messages will display here -->
        <ul id="messages"></ul>
  
        <!-- form to send message -->
     
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
                 <img src="${this.icon}"/>
              </div>Xin chào, tôi có thể giúp gì cho bạn?</span>
       
       
  
          <span class="chat_msg_item chat_msg_item_admin">
              <div class="chat_avatar">
                 <img src="${this.icon}"/>
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
                 <img src="${this.icon}"/>
              </div>Xin chào, tôi có thể giúp gì cho bạn?</span>
       
       
      
      </div>
      <div class="fab_field">
      <input id="fileInput" type="file" style="display:none;" />
        <a id="fab_camera" class="fab"  onclick="document.getElementById('fileInput').click();"><i class="fa fa-picture-o"></i></a>
        <a id="fab_send" class="fab"><i class="fa fa-paper-plane"></i></a>
        <textarea id="chatSend" name="chat_message" placeholder="Nội dung chat" class="chat_field chat_message"></textarea>
      </div>
    </div>
      <a id="prime" class="fab"><i class="fa fa-comment-o"></i></a>
  </div>
  </div>
        
    `}injectStyles(){const s=document.createElement("style"),n=M(this.color,this.bottom,this.position,this.distance);s.innerHTML=n.replace(/^\s+|\n/gm,""),document.head.appendChild(s)}toggleOpen(){this.open=!this.open,this.open?(this.widgetIcon.classList.add("widget__hidden"),this.closeIcon.classList.remove("widget__hidden"),this.widgetContainer.classList.remove("widget__hidden")):(this.createWidgetContent(),this.widgetIcon.classList.remove("widget__hidden"),this.closeIcon.classList.add("widget__hidden"),this.widgetContainer.classList.add("widget__hidden"))}}function F(){if(aivyWebcareWidgetOption){const{color:c,bottom:s,position:n,distance:l,brand:p,icon:m}=aivyWebcareWidgetOption;return new N(c,s,n,l,p,m)}console.log("AivyChatWidget chưa nhận được cài đặt")}F();
