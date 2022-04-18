import { useEffect, useState } from "react";
import "./chatboxDesign.css";
import { AccountContext} from '../../component/AccountContext';
import { useContext } from 'react';

const ChatBox = ({socket, user, seller})=>{
   const [message, setMessage] = useState("");
   const [messageList, setMessageList] = useState([]);

   const sendMessage = ()=>{
       if(message.trim() != ""){
           const messageInfo = {
               room: seller,
               sender: user.username,
               msg: message
           }
           socket.emit("sendMessage", messageInfo);
           setMessageList((list)=>[...list, message])
       }
   }


   useEffect(()=>{
    socket.on('receiveMessage', (data)=>{
        setMessageList([...messageList, data])
    })
   }, [socket])


    return(
    <div className="chatbox">
        <h3 className="chatbox__title">Message</h3>
        <div className="chatbox__messages">
            {messageList.map((indieMessage, index)=>{
                console.log(indieMessage);
                console.log(user);
                return(
                    <p key={index} className={indieMessage.sender == user.username?"chatbox__messages__sender": "chatbox__messages__sender"}>{indieMessage.msg}</p>
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