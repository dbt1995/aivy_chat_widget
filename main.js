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
import { CLOSE_ICON, MESSAGE_ICON, getStyles } from "./assets.js";


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function prettyDate(time) {
  var date = new Date(time * 1000),
    diff = (((new Date()).getTime() - date.getTime()) / 1000),
    day_diff = Math.floor(diff / 86400);

  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31)
    return;

  return day_diff == 0 && (
    diff < 60 && "Vừa xong" ||
    diff < 120 && "1 phút" ||
    diff < 3600 && Math.floor(diff / 60) + " phút" ||
    diff < 7200 && "1 giờ" ||
    diff < 86400 && Math.floor(diff / 3600) + " giờ") ||
    day_diff == 1 && "hôm qua" ||
    day_diff < 7 && day_diff + " ngày" ||
    day_diff < 31 && Math.ceil(day_diff / 7) + " tuần";
}

// If jQuery is included in the page, adds a jQuery plugin to handle it as well
if (typeof jQuery != "undefined")
  jQuery.fn.prettyDate = function () {
    return this.each(function () {
      var date = prettyDate(this.title);
      if (date)
        jQuery(this).text(date);
    });
  };

class AivyMessageWidget {
  constructor(color, bottom, position, distance, brand, icon) {
    this.position = this.getPosition(position);
    this.open = false;
    this.bottom = bottom;
    this.position = position;
    this.distance = distance;
    this.brand = brand;
    this.icon = icon;
    this.color = color;
    this.open = false;
    this.currentGroup = null;



    this.passphrase = 'FirebaseChat';
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



  decryptUser() {
    const encryptedUser = localStorage.getItem('enus')
    if (encryptedUser) {
      const bytes = CryptoJS.AES.decrypt(encryptedUser, this.passphrase)
      const decryptWithAES = bytes.toString(CryptoJS.enc.Utf8)
      return JSON.parse(decryptWithAES)
    }
  }

  async initialize() {

    var vmThis = this;

    vmThis.currentGroup = null;

    /**
     * Create and append a div element to the document body
     */
    const container = document.createElement("div");
    // container.style.position = "fixed";
    // Object.keys(this.position).forEach(
    //   (key) => (container.style[key] = this.position[key])
    // );
    document.body.appendChild(container);

    /**
     * Create a button element and give it a class of button__container
     */
    // const buttonContainer = document.createElement("button");
    // buttonContainer.classList.add("button__container");

    /**
     * Create a span element for the widget icon, give it a class of `widget__icon`, and update its innerHTML property to an icon that would serve as the widget icon.
     */
    // const widgetIconElement = document.createElement("span");
    // widgetIconElement.innerHTML = MESSAGE_ICON;
    // widgetIconElement.classList.add("widget__icon");
    // this.widgetIcon = widgetIconElement;

    /**
     * Create a span element for the close icon, give it a class of `widget__icon` and `widget__hidden` which would be removed whenever the widget is closed, and update its innerHTML property to an icon that would serve as the widget icon during that state.
     */
    // const closeIconElement = document.createElement("span");
    // closeIconElement.innerHTML = CLOSE_ICON;
    // closeIconElement.classList.add("widget__icon", "widget__hidden");
    // this.closeIcon = closeIconElement;

    /**
     * Append both icons created to the button element and add a `click` event listener on the button to toggle the widget open and close.
     */
    // buttonContainer.appendChild(this.widgetIcon);
    // buttonContainer.appendChild(this.closeIcon);
    // buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    /**
     * Create a container for the widget and add the following classes:- `widget__hidden`, `widget__container`
     */
    this.widgetContainer = document.createElement("div");
    // this.widgetContainer.classList.add("widget__hidden", "widget__container");

    /**
     * Invoke the `createWidget()` method
     */
    this.createWidgetContent();

    /**
     * Append the widget's content and the button to the container
     */
    container.appendChild(this.widgetContainer);
    // container.appendChild(buttonContainer);
    // hideChat(0);
    let localUser = this.decryptUser();
    // debugger

    if (localUser) {
      // localUser.host = 'aivyjsc.com';
      hideChat(0);
      hideChat(1);


      firebaseConnect(localUser, true);
    } else {

      hideChat(0);
    }

    $('#prime').click(function () {
      toggleFab();
    });

    

function sendNotification(name, message) {
  $.ajax({
      headers: { "Accept": "application/json"},
      type : 'POST',
      url : "https://api.webcare.aivyjsc.com/api/guest/notification/send-from-widget",
      // headers : {
      //     Authorization : 'key=' + authorization_key
      // },
      // contentType: 'application/json;charset=UTF-8',
      crossDomain: true,
      data : {
          "name": name,
          "hostname": location.hostname,
          "messsage": message
      },
      beforeSend: function(xhr){
            xhr.withCredentials = true;
      },
      success : function(response) {
          console.log(response);
      },
      error : function(xhr, status, error) {
          console.log(xhr.error);                   
      }
  }); 
}



    async function firebaseConnect(user, existed = false) {
      var firebaseConfig = {
        apiKey: "AIzaSyAZlRMd1RygoP2niU5w4c057StI3mnzEwk",
        authDomain: "webcare-app.firebaseapp.com",
        databaseURL: "https://webcare-app-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "webcare-app",
        storageBucket: "webcare-app.appspot.com",
        messagingSenderId: "679542454067",
        appId: "1:679542454067:web:25aea5028d759452a9b046",
        measurementId: "G-9910EPHPNB"
      };
      // Initialize Firebase
      var passphrase = 'FirebaseChat';
      var app;
      if (!firebase.apps.length) {
        app = firebase.initializeApp(firebaseConfig)
      } else {
        return "";
      }
      // initialize database
      const db = firebase.firestore();
      

      // user;

      const groupFuncs = {
        async createGroup(userArray, createdBy, name, type) {
          const vm = this;
          const adminUser = await userFuncs.getUserByHostAndType(location.host, "admin");
          if (!adminUser) {
            alert("Không tìm thấy tài khoản admin tương ứng")
            return null;
          }
          userArray.push(adminUser);
          const group = {
            createdAt: new Date(),
            createdBy,
            members: userArray,
            name,
            type,
          }
          debugger
          return new Promise((resolve, reject) => {
            db.collection('group')
              .add(group)
              .then(function (docRef) {
                group.id = docRef.id
                vm.fetchGroupByUserID(user)
                resolve(group)
              })
              .catch(function (error) {
                reject(error)
              })
          })
        },
        filterGroup(userArray) {
          const vm = this
          vm.groups = []
          return new Promise((resolve, reject) => {
            let groupRef = db.collection('group')
            userArray.forEach((userId) => {
              groupRef = groupRef.where('members', '==', userId)
            })
            groupRef
              .get()
              .then(function (querySnapshot) {
                const allGroups = []
                querySnapshot.forEach((doc) => {
                  const data = doc.data()
                  data.id = doc.id
                  allGroups.push(data)
                })
                if (allGroups.length > 0) {
                  resolve(allGroups[0])
                } else {
                  resolve(null)
                }
              })
              .catch(function (error) {
                reject(error)
              })
          })
        },
        fetchGroupByUserID(user) {
          const vm = this;
          const groupRef = db.collection('group');
          return groupRef.where('members', 'array-contains', { ...user })
            .onSnapshot((querySnapshot) => {
              const allGroups = [];
              querySnapshot.forEach((doc) => {
                const data = doc.data()
                data.id = doc.id
                // if (data.recentMessage) 
                allGroups.push(data);
              })
              // iff
              // vm.groups = allGroups
              if (allGroups.length > 0) {
                vmThis.currentGroup = allGroups[0];
              }
            });
          // return new Promise((resolve, reject) => {
          //   const groupRef = db.collection('group')
          //   groupRef
          //     .where('members', 'array-contains', uid)
          //     .onSnapshot((querySnapshot) => {
          //       const allGroups = []
          //       querySnapshot.forEach((doc) => {
          //         const data = doc.data()
          //         data.id = doc.id
          //         if (data.recentMessage) allGroups.push(data)
          //       })
          //       vm.groups = allGroups
          //     })
          // })
        },
        fetchUsersByGroup(group) {
          group.users = []
          const promises = []
          group.members.forEach((member) => {
            const promise = new Promise((resolve, reject) => {
              db.collection('user')
                .doc(member)
                .get()
                .then(function (doc) {
                  // eslint-disable-next-line no-console
                  console.log(JSON.stringify(doc.data()))
                  resolve(doc.data())
                })
                .catch(function (error) {
                  reject(error)
                })
            })
            promises.push(promise)
          })
          return Promise.all(promises)
        },
        saveUser(user) {
          // eslint-disable-next-line no-console
          const userRef = db.collection('user')
          userRef.doc(user.uid).set({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            email: user.email,
          })
        },
        checkUserExisted(user) {
          const docRef = db.collection('user').doc(user.uid)
          return new Promise((resolve, reject) => {
            docRef
              .get()
              .then(function (doc) {
                resolve(doc.exists)
              })
              .catch(function (error) {
                reject(error)
              })
          })
        },
        fetchUsers() {
          const vm = this
          return new Promise((resolve, reject) => {
            db.collection('user')
              .get()
              .then(function (querySnapshot) {
                const allUsers = []
                querySnapshot.forEach((doc) => {
                  const user = doc.data()
                  allUsers.push(user)
                })
                vm.users = allUsers
                resolve(allUsers.length > 0)
              })
              .catch(function (error) {
                reject(error)
              })
          })
        },
        getUserFromFireStore(user) {
          if (!user) return
          const docRef = db.collection('user').doc(user.uid)
          return new Promise((resolve, reject) => {
            docRef.onSnapshot(function (doc) {
              resolve(doc.data())
            })
          })
        },

        fetchGroupByIds(groupIds) {
          const groups = []
          const groupRef = db.collection('group')
          groupIds.forEach(async (groupId) => {
            await groupRef
              .doc(groupId)
              .get()
              .then(function (doc) {
                groups.push(doc.data())
              })
              .catch(function (error) {
                // eslint-disable-next-line no-console
                console.error('Error get document: ', error)
              })
          })
          this.groups = groups
        },
        updateGroup(group) {
          db.collection('group')
            .doc(group.id)
            .set(group)
            .then(function (docRef) { })
            .catch(function (error) {
              // eslint-disable-next-line no-console
              console.error('Error writing document: ', error)
            })
        },
        addNewGroupToUser(user, groupId) {
          const groups = user.groups ? user.groups : []
          const existed = groups.filter((group) => group === groupId)
          if (existed.length === 0) {
            groups.push(groupId)
            user.groups = groups
            const userRef = db.collection('user')
            userRef.doc(user.uid).set(user)
          }
        },
      }

      const messageFuncs = {
        saveMessage(messageText, sentAt, currentGroupId, type="string") {
          // if (messageText.trim()) {
            const message = {
              messageText,
              sentAt,
              type,
              sentBy: vmThis.user.uid,
            }
            return new Promise((resolve, reject) => {
              db.collection('message')
                .doc(currentGroupId)
                .collection('messages')
                .add(message)
                .then(function (docRef) {
                  resolve(message)
                })
                .catch(function (error) {
                  reject(error)
                })
            })
          // }
        },
        async fetchMessagesByGroupId(groupId) {
          vmThis.messages = []
          db.collection('message')
            .doc(groupId.trim())
            .collection('messages')
            .orderBy('sentAt')
            .onSnapshot(async (querySnapshot) => {
              const allMessages = []
              querySnapshot.forEach((doc) => {
                if (doc) allMessages.push(doc.data())
              })
              vmThis.messages = allMessages
              if (allMessages && allMessages.length > 0) {
                $('#chat_converse-box').empty();
                for(let i = 0; i < allMessages.length; i++){ 
                  let message =allMessages[i];
                  let imageElement = '';
                  if (message.type == "image"){
                    if (message.messageText && message.messageText.length > 0){
                      for(let i =0 ; i <message.messageText.length; i++){
                        try {
                          let link = await firebase.storage().ref(message.messageText[i]).getDownloadURL();
                          imageElement +='<img style="height: 100px; width: auto;" ref="message.messageText[i]" src="'+link+'?alt=media"/>'
                        }
                        catch (e){
                          console.log(e);
                        }
                      }
                    }
                  }
                  const messageElement = `<span class="${vmThis.user.uid === message.sentBy ? "chat_msg_item chat_msg_item_user" : "chat_msg_item chat_msg_item_admin"
                    }">
              
              ${vmThis.user.uid === message.sentBy ? "" : '<div class="chat_avatar"> <img src="${this.icon}"/> </div>'}
              
              ${message.type=="image" ? imageElement : message.messageText}</span>
              
              ${vmThis.user.uid === message.sentBy ? '<span class="status">' + prettyDate(message.sentAt.seconds) + '</span>' : ""
                    }
              `;
                  // append the message on the page
                  // document.getElementById("chat_converse").innerHTML += message;
                  $('#chat_converse-box').append(messageElement);
               let { getStorage, ref, getDownloadURL } =  firebase.storage();

               
                }
              }

              document
                .getElementById("chat_converse-box")
                .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
            })
        }
      }

      const userFuncs = {
        fetchUsersByGroup(group) {
          group.users = []
          const promises = []
          group.members.forEach((member) => {
            const promise = new Promise((resolve, reject) => {
              db.collection('user')
                .doc(member)
                .get()
                .then(function (doc) {
                  // eslint-disable-next-line no-console
                  console.log(JSON.stringify(doc.data()))
                  resolve(doc.data())
                })
                .catch(function (error) {
                  reject(error)
                })
            })
            promises.push(promise)
          })
          return Promise.all(promises)
        },
        saveUser(user) {
          // eslint-disable-next-line no-console
          const userRef = db.collection('user')
          // debugger
          userRef.doc(user.uid).set({
            // uid: user.uid,
            // displayName: user.displayName,
            // photoURL: user.photoURL,
            // email: user.email,
            ...user
          })
        },
        checkUserExisted(user) {
          const docRef = db.collection('user').doc(user.uid)
          return new Promise((resolve, reject) => {
            docRef
              .get()
              .then(function (doc) {
                resolve(doc.exists)
              })
              .catch(function (error) {
                reject(error)
              })
          })
        },
        async getUserByHostAndType(host, type) {
          const query = db.collection('user').where("hosttype", "==", host + type);
          // query.where("type", "==", type);
          let querySnapshot = await query.get();
          let data = [];
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.push(doc.data());
          });
          if (data && data.length > 0) {
            return data[0];
          }
        },
        fetchUsers() {
          const vm = this
          return new Promise((resolve, reject) => {
            db.collection('user')
              .get()
              .then(function (querySnapshot) {
                const allUsers = []
                querySnapshot.forEach((doc) => {
                  const user = doc.data()
                  allUsers.push(user)
                })
                vm.users = allUsers
                resolve(allUsers.length > 0)
              })
              .catch(function (error) {
                reject(error)
              })
          })
        },
        getUserFromFireStore(user) {
          if (!user) return
          const docRef = db.collection('user').doc(user.uid)
          return new Promise((resolve, reject) => {
            docRef.onSnapshot(function (doc) {
              resolve(doc.data())
            })
          })
        },
      }

      const authFuncs = {
        signInWithGoogleAuthentication() {
          const provider = new firebase.auth.GoogleAuthProvider()
          return new Promise((resolve, reject) => {
            auth
              .signInWithPopup(provider)
              .then(function (result) {
                resolve(result.user)
              })
              .catch(function (error) {
                reject(error)
              })
          })
        },

        saveUserToLocalStorage(user) {
          // if (process.client) {
          const encryptWithAES = CryptoJS.AES.encrypt(
            JSON.stringify(user),
            passphrase
          ).toString()
          localStorage.setItem('enus', encryptWithAES)
          // }
        },

        saveUserToStore(user) {
          this.$store.commit('user/add', user)
        },

        decryptUser() {
          const encryptedUser = localStorage.getItem('enus')
          if (encryptedUser) {
            const bytes = CryptoJS.AES.decrypt(encryptedUser, this.passphrase)
            const decryptWithAES = bytes.toString(CryptoJS.enc.Utf8)
            return JSON.parse(decryptWithAES)
          }
        },
      }

      const exist = await userFuncs.checkUserExisted(user)
      if (exist) {

        // const vm = this;
        var currentGroup = await groupFuncs.fetchGroupByUserID(user)
      } else {
        authFuncs.saveUserToLocalStorage(user)
        userFuncs.saveUser(user)
        
        await groupFuncs.createGroup([user], user, user.name, 'private')
      }
      vmThis.user = user;


      setTimeout(async () => {
        await messageFuncs.fetchMessagesByGroupId(vmThis.currentGroup.id)

        vmThis.loading = false
      }, 1000)


      // userFuncs.fetchUsers()
      // const exist = await userFuncs.checkUserExisted(val)
      // if (exist) {
      //   groupFuncs.fetchGroupByUserID(val.uid)
      //   return 
      // }



      // get user's data
      // const username = prompt("Please Tell Us Your Name");

      // submit form
      // listen for submit event on the form and call the postChat function
      document.getElementById("fab_send").addEventListener("click", sendMessage);
      $("#chatSend").keypress(function (e) {
        var key = e.which;
        if (key == 13)  // the enter key code
        {
          sendMessage(e);
          return false;
        }
      });

    // var uploader = document.getElementById('uploader');
    let fileButton =         document.getElementById('fileInput');
    fileButton.addEventListener('change',sendImage);
    async function  sendImage(e){
               
        e.preventDefault();

        const sentAt = new Date()
               let file = e.target.files[0];
               let filename = guid()+'.'+ file.name.split('.').pop();
               let storageRef = firebase.storage().ref('images/'+vmThis.currentGroup.id+'/'+ filename);
               let task = storageRef.put(file);
               task.on('state_changed', function progress(snapshot) {
                let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                 console.log("percentage", percentage);
           
               }, function error(err) {
           
                  alert("Xảy ra lỗi khi tải ảnh")
               },async function complete() {
           
                const message = await messageFuncs.saveMessage(
                  ['images/'+vmThis.currentGroup.id+'/'+ filename],
                  sentAt,
                  vmThis.currentGroup.id,
                  "image"
                )
                if (message) {
                  // this.message = null
                  const group = {
                    ...vmThis.currentGroup,
                    ...{
                      users: null,
                      modifiedAt: sentAt,
                      recentMessage: { ...message, ...{ readBy: [] } },
                    },
                  }
                  groupFuncs.updateGroup(group)
                }
               });
        }





      // saveUserToFirebase(user);

      // send message to db
      async function sendMessage(e) {
        e.preventDefault();

        const sentAt = new Date()
        // const message = await this.saveMessage(
        //   this.message,
        //   sentAt,
        //   vmThis.currentGroup.id
        // )
        // if (message) {
        //   this.message = null
        //   const group = {
        //     ...this.currentGroup,
        //     ...{
        //       users: null,
        //       modifiedAt: sentAt,
        //       recentMessage: { ...message, ...{ readBy: [] } },
        //     },
        //   }
        //   this.updateGroup(group)
        // }

        // get values to be submitted
        const timestamp = Date.now();
        const messageInput = document.getElementById("chatSend");
        const messageText = messageInput.value;

        // clear the input box
        if (!messageText || messageText.length <= 0) {
          return;
        }
        messageInput.value = "";

        //auto scroll to bottom
        document
          .getElementById("chat_converse")
          .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

        // create db collection and send in the data

        // db.ref("messages/" + timestamp).set({
        //   username,
        //   message,
        //   timestamp
        // });
        const message = await messageFuncs.saveMessage(
          messageText,
          sentAt,
          vmThis.currentGroup.id
        )
        if (message) {
          // this.message = null
          const group = {
            ...vmThis.currentGroup,
            ...{
              users: null,
              modifiedAt: sentAt,
              recentMessage: { ...message, ...{ readBy: [] } },
            },
          }
          groupFuncs.updateGroup(group)

          // let to = vmThis.currentGroup.users[1];
          sendNotification(vmThis.user.name, messageText)
         
        }
      }

      function saveUserToFirebase(user) {
        var id = Math.random().toString(16).slice(2);
        var host = window.location.host;
        const userRef = db.ref("user/" + id);
        const timestamp = Date.now();

        userRef.set({
          uid: id,
          email: user.email,
          phone: user.phone,
          name: user.name,
          content: user.content,
          host,
          timestamp
        })



      }
      function saveGroupToFirebase(user) {
        var id = Math.random().toString(16).slice(2);
        var host = window.location.host;
        const userRef = db.ref("group/" + id);
        const timestamp = Date.now();

        userRef.set({
          uid: id,
          email: user.email,
          phone: user.phone,
          name: user.name,
          content: user.content,
          host,
          createdAt: timestamp,
          createdBy: ""
        })



      }



      function createGroup(userArray, createdBy, name, type) {
        const vm = this
        const group = {
          createdAt: new Date(),
          createdBy,
          members: userArray,
          name,
          type,
        }
        return new Promise((resolve, reject) => {
          db.collection('group')
            .add(group)
            .then(function (docRef) {
              group.id = docRef.id
              vm.fetchGroupByUserID(vm.user.uid)
              resolve(group)
            })
            .catch(function (error) {
              reject(error)
            })
        })
      }
      function filterGroup(userArray) {
        const vm = this
        vm.groups = []
        return new Promise((resolve, reject) => {
          let groupRef = db.collection('group')
          userArray.forEach((userId) => {
            groupRef = groupRef.where('members', '==', userId)
          })
          groupRef
            .get()
            .then(function (querySnapshot) {
              const allGroups = []
              querySnapshot.forEach((doc) => {
                const data = doc.data()
                data.id = doc.id
                allGroups.push(data)
              })
              if (allGroups.length > 0) {
                resolve(allGroups[0])
              } else {
                resolve(null)
              }
            })
            .catch(function (error) {
              reject(error)
            })
        })
      }

      // async function sendMessage() {

      // }

      // display the messages
      // reference the collection created earlier
      // const fetchChat = db.ref("messages/");

      // // check for new messages using the onChildAdded event listener
      // fetchChat.on("child_added", function (snapshot) {
      //   const messages = snapshot.val();
      //   const message = `<span class="${
      //     username === messages.username ? "chat_msg_item chat_msg_item_user" : "chat_msg_item chat_msg_item_admin"
      //   }">

      //   ${username === messages.username ? "" : '<div class="chat_avatar"> <img src="${this.icon}"/> </div>'}

      //   ${messages.message}</span>

      //   ${
      //     username === messages.username ?  '<span class="status">20m ago</span>' : ""
      //   }
      //   `;
      //   // append the message on the page
      //   // document.getElementById("chat_converse").innerHTML += message;
      //   $('#chat_converse').append(message);
      // });

    }

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
    $().ready(function () {
      $('#chat_first_screen').click(function (e) {

        // $("form#chat_first_screen_form").submit();
        $("form#chat_first_screen_form").validate({
          rules: {
            name: "required",
            phone: "required",
            email: {
              email: true
            }
          },

          messages: {
            name: "Bạn chưa nhập tên",
            phone: "Bạn chưa nhập số điện thoại",
            email: "Email chưa đúng định dạng"
          },
          errorPlacement: function (error, element) {
            if (element.is(":radio")) {
              error.appendTo(element.parents('.form-group'));
            }
            else { // This is the default behavior 
              error.insertAfter(element);
            }
          },
          submitHandler: function (form) {
            // form.submit();
            // hideChat(1);
          }
        });

        if ($("form#chat_first_screen_form").valid()) {
          hideChat(1);
          let user = {
            name: $("form#chat_first_screen_form input[name='name']").val(),
            phone: $("form#chat_first_screen_form input[name='phone']").val(),
            email: $("form#chat_first_screen_form input[name='email']").val(),
            content: $("form#chat_first_screen_form input[name='content']").val(),
            host: location.hostname,
            type: "guest",
            uid: guid()
          }


          // debugger
          firebaseConnect(user);


        };
      });
    });

    $('#chat_second_screen').click(function (e) {
      hideChat(2);
    });

    $('#chat_third_screen').click(function (e) {
      hideChat(3);
    });

    $('#chat_fourth_screen').click(function (e) {
      hideChat(4);
    });

    $('#chat_fullscreen_loader').click(function (e) {
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
          $('#aivy_webcare_widget .fab_field').css('display', 'inline-block');
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
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src='https://cdn.jsdelivr.net/jquery.validation/1.15.1/jquery.validate.min.js'></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.5.8/firebase-messaging.js"></script>
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
        
    `;
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    const styles = getStyles(this.color, this.bottom, this.position, this.distance);
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

function AivyInitializeWidget() {
  if (aivyWebcareWidgetOption) {
    const { color, bottom, position, distance, brand, icon } = aivyWebcareWidgetOption;
    return new AivyMessageWidget(color, bottom, position, distance, brand, icon);
  }
  console.log("AivyChatWidget chưa nhận được cài đặt")
}

AivyInitializeWidget();