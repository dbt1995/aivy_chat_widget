var U=Object.defineProperty;var j=(n,r,s)=>r in n?U(n,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[r]=s;var y=(n,r,s)=>(j(n,typeof r!="symbol"?r+"":r,s),s);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))c(h);new MutationObserver(h=>{for(const g of h)if(g.type==="childList")for(const _ of g.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function s(h){const g={};return h.integrity&&(g.integrity=h.integrity),h.referrerPolicy&&(g.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?g.credentials="include":h.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function c(h){if(h.ep)return;h.ep=!0;const g=s(h);fetch(h.href,g)}})();const P=function(n="#42a5f5",r=0,s="right",c=25){return`

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
    bottom: ${r}px;
    position: fixed;
    margin: 1em;
    ${s=="right"?`right: ${c}px;`:`left: ${c}px;`}
    z-index: 998;
    
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
    background: ${n};
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

    bottom: ${r};
    position: fixed;
    margin: 1em;
    ${s=="right"?`right: ${c+70}px;`:`left: ${c+70}px;`}

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
      background: ${n};
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
  color: ${n};
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
  background: ${n};
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
  background: ${n};
  color: #fff;
}
#aivy_webcare_widget .blue .chat {
  background: ${n};
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







`};function R(){function n(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return n()+n()+"-"+n()+"-"+n()+"-"+n()+"-"+n()+n()+n()}function C(n){var r=new Date(n*1e3),s=(new Date().getTime()-r.getTime())/1e3,c=Math.floor(s/86400);if(!(isNaN(c)||c<0||c>=31))return c==0&&(s<60&&"Vừa xong"||s<120&&"1 phút"||s<3600&&Math.floor(s/60)+" phút"||s<7200&&"1 giờ"||s<86400&&Math.floor(s/3600)+" giờ")||c==1&&"hôm qua"||c<7&&c+" ngày"||c<31&&Math.ceil(c/7)+" tuần"}typeof jQuery<"u"&&(jQuery.fn.prettyDate=function(){return this.each(function(){var n=C(this.title);n&&jQuery(this).text(n)})});class B{constructor(r,s,c,h,g,_){y(this,"position","bottom-right");y(this,"open",!1);y(this,"widgetContainer",null);this.position=this.getPosition(c),this.open=!1,this.bottom=s,this.position=c,this.distance=h,this.brand=g,this.icon=_,this.color=r,this.open=!1,this.currentGroup=null,this.passphrase="FirebaseChat",this.initialize(),this.injectStyles()}getPosition(r){const[s,c]=r.split("-");return{[s]:"30px",[c]:"30px"}}decryptUser(){const r=localStorage.getItem("enus");if(r){const c=CryptoJS.AES.decrypt(r,this.passphrase).toString(CryptoJS.enc.Utf8);return JSON.parse(c)}}async initialize(){var r=this;r.currentGroup=null;const s=document.createElement("div");document.body.appendChild(s),this.widgetContainer=document.createElement("div"),this.createWidgetContent(),s.appendChild(this.widgetContainer);let c=this.decryptUser();c?(_(0),_(1),h(c,!0)):_(0),$("#prime").click(function(){g()});async function h(f,b=!1){var m={apiKey:"AIzaSyAZlRMd1RygoP2niU5w4c057StI3mnzEwk",authDomain:"webcare-app.firebaseapp.com",databaseURL:"https://webcare-app-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"webcare-app",storageBucket:"webcare-app.appspot.com",messagingSenderId:"679542454067",appId:"1:679542454067:web:25aea5028d759452a9b046",measurementId:"G-9910EPHPNB"},I="FirebaseChat";if(!firebase.apps.length)firebase.initializeApp(m);else return"";const p=firebase.firestore(),v={async createGroup(e,a,o,i){const t=this,d=await x.getUserByHostAndType(location.hostname,"admin");if(!d)return alert("Không tìm thấy tài khoản admin tương ứng"),null;e.push(d);const l={createdAt:new Date,createdBy:a,members:e,name:o,type:i};return new Promise((w,u)=>{p.collection("group").add(l).then(function(k){l.id=k.id,t.fetchGroupByUserID(f),w(l)}).catch(function(k){u(k)})})},filterGroup(e){const a=this;return a.groups=[],new Promise((o,i)=>{let t=p.collection("group");e.forEach(d=>{t=t.where("members","==",d)}),t.get().then(function(d){const l=[];d.forEach(w=>{const u=w.data();u.id=w.id,l.push(u)}),l.length>0?o(l[0]):o(null)}).catch(function(d){i(d)})})},fetchGroupByUserID(e){return p.collection("group").where("members","array-contains",{...e}).onSnapshot(o=>{const i=[];o.forEach(t=>{const d=t.data();d.id=t.id,i.push(d)}),i.length>0&&(r.currentGroup=i[0])})},fetchUsersByGroup(e){e.users=[];const a=[];return e.members.forEach(o=>{const i=new Promise((t,d)=>{p.collection("user").doc(o).get().then(function(l){console.log(JSON.stringify(l.data())),t(l.data())}).catch(function(l){d(l)})});a.push(i)}),Promise.all(a)},saveUser(e){p.collection("user").doc(e.uid).set({uid:e.uid,displayName:e.displayName,photoURL:e.photoURL,email:e.email})},checkUserExisted(e){const a=p.collection("user").doc(e.uid);return new Promise((o,i)=>{a.get().then(function(t){o(t.exists)}).catch(function(t){i(t)})})},fetchUsers(){const e=this;return new Promise((a,o)=>{p.collection("user").get().then(function(i){const t=[];i.forEach(d=>{const l=d.data();t.push(l)}),e.users=t,a(t.length>0)}).catch(function(i){o(i)})})},getUserFromFireStore(e){if(!e)return;const a=p.collection("user").doc(e.uid);return new Promise((o,i)=>{a.onSnapshot(function(t){o(t.data())})})},fetchGroupByIds(e){const a=[],o=p.collection("group");e.forEach(async i=>{await o.doc(i).get().then(function(t){a.push(t.data())}).catch(function(t){console.error("Error get document: ",t)})}),this.groups=a},updateGroup(e){p.collection("group").doc(e.id).set(e).then(function(a){}).catch(function(a){console.error("Error writing document: ",a)})},addNewGroupToUser(e,a){const o=e.groups?e.groups:[];o.filter(t=>t===a).length===0&&(o.push(a),e.groups=o,p.collection("user").doc(e.uid).set(e))}},z={saveMessage(e,a,o){if(e.trim()){const i={messageText:e,sentAt:a,sentBy:r.user.uid};return new Promise((t,d)=>{p.collection("message").doc(o).collection("messages").add(i).then(function(l){t(i)}).catch(function(l){d(l)})})}},fetchMessagesByGroupId(e){r.messages=[],p.collection("message").doc(e.trim()).collection("messages").orderBy("sentAt").onSnapshot(a=>{const o=[];a.forEach(i=>{i&&o.push(i.data())}),r.messages=o,o&&o.length>0&&($("#chat_converse-box").empty(),o.forEach(i=>{const t=`<span class="${r.user.uid===i.sentBy?"chat_msg_item chat_msg_item_user":"chat_msg_item chat_msg_item_admin"}">
              
              ${r.user.uid===i.sentBy?"":'<div class="chat_avatar"> <img src="${this.icon}"/> </div>'}
              
              ${i.messageText}</span>
              
              ${r.user.uid===i.sentBy?'<span class="status">'+C(i.sentAt.seconds)+"</span>":""}
              `;$("#chat_converse-box").append(t)})),document.getElementById("chat_converse-box").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})})}},x={fetchUsersByGroup(e){e.users=[];const a=[];return e.members.forEach(o=>{const i=new Promise((t,d)=>{p.collection("user").doc(o).get().then(function(l){console.log(JSON.stringify(l.data())),t(l.data())}).catch(function(l){d(l)})});a.push(i)}),Promise.all(a)},saveUser(e){p.collection("user").doc(e.uid).set({...e})},checkUserExisted(e){const a=p.collection("user").doc(e.uid);return new Promise((o,i)=>{a.get().then(function(t){o(t.exists)}).catch(function(t){i(t)})})},async getUserByHostAndType(e,a){let i=await p.collection("user").where("hosttype","==",e+a).get(),t=[];if(i.forEach(d=>{t.push(d.data())}),t&&t.length>0)return t[0]},fetchUsers(){const e=this;return new Promise((a,o)=>{p.collection("user").get().then(function(i){const t=[];i.forEach(d=>{const l=d.data();t.push(l)}),e.users=t,a(t.length>0)}).catch(function(i){o(i)})})},getUserFromFireStore(e){if(!e)return;const a=p.collection("user").doc(e.uid);return new Promise((o,i)=>{a.onSnapshot(function(t){o(t.data())})})}},E={signInWithGoogleAuthentication(){const e=new firebase.auth.GoogleAuthProvider;return new Promise((a,o)=>{auth.signInWithPopup(e).then(function(i){a(i.user)}).catch(function(i){o(i)})})},saveUserToLocalStorage(e){const a=CryptoJS.AES.encrypt(JSON.stringify(e),I).toString();localStorage.setItem("enus",a)},saveUserToStore(e){this.$store.commit("user/add",e)},decryptUser(){const e=localStorage.getItem("enus");if(e){const o=CryptoJS.AES.decrypt(e,this.passphrase).toString(CryptoJS.enc.Utf8);return JSON.parse(o)}}};await x.checkUserExisted(f)?await v.fetchGroupByUserID(f):(E.saveUserToLocalStorage(f),x.saveUser(f),await v.createGroup([f],f,f.name,"private")),r.user=f,setTimeout(async()=>{await z.fetchMessagesByGroupId(r.currentGroup.id),r.loading=!1},1e3),document.getElementById("fab_send").addEventListener("click",S),$("#chatSend").keypress(function(e){var a=e.which;if(a==13)return S(e),!1});async function S(e){e.preventDefault();const a=new Date,o=document.getElementById("chatSend"),i=o.value;if(!i||i.length<=0)return;o.value="",document.getElementById("chat_converse").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"});const t=await z.saveMessage(i,a,r.currentGroup.id);if(t){const d={...r.currentGroup,users:null,modifiedAt:a,recentMessage:{...t,readBy:[]}};v.updateGroup(d)}}}function g(){$(".prime").toggleClass("zmdi-comment-outline"),$(".prime").toggleClass("zmdi-close"),$(".prime").toggleClass("is-active"),$(".prime").toggleClass("is-visible"),$("#prime").toggleClass("is-float"),$(".chat").toggleClass("is-visible"),$(".fab").toggleClass("is-visible")}$().ready(function(){$("#chat_first_screen").click(function(f){if($("form#chat_first_screen_form").validate({rules:{name:"required",phone:"required",email:{email:!0}},messages:{name:"Bạn chưa nhập tên",phone:"Bạn chưa nhập số điện thoại",email:"Email chưa đúng định dạng"},errorPlacement:function(b,m){m.is(":radio")?b.appendTo(m.parents(".form-group")):b.insertAfter(m)},submitHandler:function(b){}}),$("form#chat_first_screen_form").valid()){_(1);let b={name:$("form#chat_first_screen_form input[name='name']").val(),phone:$("form#chat_first_screen_form input[name='phone']").val(),email:$("form#chat_first_screen_form input[name='email']").val(),content:$("form#chat_first_screen_form input[name='content']").val(),host:location.hostname,type:"guest",uid:R()};h(b)}})}),$("#chat_second_screen").click(function(f){_(2)}),$("#chat_third_screen").click(function(f){_(3)}),$("#chat_fourth_screen").click(function(f){_(4)}),$("#chat_fullscreen_loader").click(function(f){$(".fullscreen").toggleClass("zmdi-window-maximize"),$(".fullscreen").toggleClass("zmdi-window-restore"),$(".chat").toggleClass("chat_fullscreen"),$(".fab").toggleClass("is-hide"),$(".header_img").toggleClass("change_img"),$(".img_container").toggleClass("change_img"),$(".chat_header").toggleClass("chat_header2"),$(".fab_field").toggleClass("fab_field2"),$(".chat_converse").toggleClass("chat_converse2")});function _(f){switch(f){case 0:$("#chat_converse").css("display","none"),$("#chat_body").css("display","none"),$("#chat_form").css("display","none"),$(".chat_login").css("display","block"),$(".chat_fullscreen_loader").css("display","none"),$("#chat_fullscreen").css("display","none");break;case 1:$("#chat_converse").css("display","block"),$("#chat_body").css("display","none"),$("#chat_form").css("display","none"),$("#aivy_webcare_widget .fab_field").css("display","inline-block"),$(".chat_login").css("display","none"),$(".chat_fullscreen_loader").css("display","block");break;case 2:$("#chat_converse").css("display","none"),$("#chat_body").css("display","block"),$("#chat_form").css("display","none"),$(".chat_login").css("display","none"),$(".chat_fullscreen_loader").css("display","block");break;case 3:$("#chat_converse").css("display","none"),$("#chat_body").css("display","none"),$("#chat_form").css("display","block"),$(".chat_login").css("display","none"),$(".chat_fullscreen_loader").css("display","block");break;case 4:$("#chat_converse").css("display","none"),$("#chat_body").css("display","none"),$("#chat_form").css("display","none"),$(".chat_login").css("display","none"),$(".chat_fullscreen_loader").css("display","block"),$("#chat_fullscreen").css("display","block");break}}}createWidgetContent(){this.widgetContainer.innerHTML=`
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'><\/script>
    <script src='https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js'><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"><\/script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"><\/script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"><\/script>
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
        <a id="fab_camera" class="fab"><i class="fa fa-picture-o"></i></a>
        <a id="fab_send" class="fab"><i class="fa fa-paper-plane"></i></a>
        <textarea id="chatSend" name="chat_message" placeholder="Nội dung chat" class="chat_field chat_message"></textarea>
      </div>
    </div>
      <a id="prime" class="fab"><i class="fa fa-comment-o"></i></a>
  </div>
  </div>
        
    `}injectStyles(){const r=document.createElement("style"),s=P(this.color,this.bottom,this.position,this.distance);r.innerHTML=s.replace(/^\s+|\n/gm,""),document.head.appendChild(r)}toggleOpen(){this.open=!this.open,this.open?(this.widgetIcon.classList.add("widget__hidden"),this.closeIcon.classList.remove("widget__hidden"),this.widgetContainer.classList.remove("widget__hidden")):(this.createWidgetContent(),this.widgetIcon.classList.remove("widget__hidden"),this.closeIcon.classList.add("widget__hidden"),this.widgetContainer.classList.add("widget__hidden"))}}function G(){if(aivyWebcareWidgetOption){const{color:n,bottom:r,position:s,distance:c,brand:h,icon:g}=aivyWebcareWidgetOption;return new B(n,r,s,c,h,g)}console.log("AivyChatWidget chưa nhận được cài đặt")}G();
