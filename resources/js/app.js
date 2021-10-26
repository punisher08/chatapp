const { default: axios } = require('axios');

require('./bootstrap');

const messages_elements = document.getElementById('messages');
const message_form = document.getElementById('message-form');

message_form.addEventListener('submit',function(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    let has_errors = false;
    if(username == ''){
        alert('Please enter username');
        has_errors = true;
    }
    if(message == ''){
        alert('Please enter username');
        has_errors = true;
    }
    if(has_errors){
        return;
    }
    const options = {
        method:'post',
        url:'/send-message',
        data:{
            username:username,
            message:message
        }
    }
    axios(options);
})
window.Echo.channel('chat').listen('.messages', (e)=>{
    messages_elements.innerHTML += '<div class="message"><strong>'+e.username+'</strong>'+e.message+'</div>';
})