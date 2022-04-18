import { useEffect, useState } from "react";
import "./chatboxDesign.css";
import { AccountContext} from '../../component/AccountContext';
import { useContext } from 'react';

const ChatBox = ({socket, user, seller})=>{
   const [message, setMessage] = useState("");
   const [messageList, setMessageList] = useState([]);

   const sendMessage = async ()=>{
       if(message.trim() != ""){
           const messageInfo = {
               room: seller,
               sender: user.username,
               msg: message
           }
           await socket.emit("sendMessage", messageInfo);
           setMessageList([...messageList, message])
       }
   }


   useEffect(()=>{
    socket.on('receiveMessage', (data)=>{
        setMessageList((list)=>[...list, data])
    })
   }, [socket])


    return(
    <div className="chatbox">
        <h3 className="chatbox__title">Message</h3>
        <div className="chatbox__messages">
            {messageList.map((indieMessage, index)=>{
                console.log(messageList);
                console.log(user.username);
                return(
                    <p key={index} className="chatbox_messages__sender">{indieMessage.msg}</p>
                );
            })}
        </div>
        <div className="chatbox__input">
            <input type="text" 
            onChange={(e)=>setMessage(e.target.value)} 
            placeholder=" ... say something" 
            className="chatbox__input__message"/>
            <button onClick={sendMessage} className="chatbox__input__button">send</button>
        </div>
    </div>
    );
}

export default ChatBox;