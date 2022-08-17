import React, {useState, useEffect, useRef} from 'react'
import Message from './Message';
import MessageInput from './MessageInput';

import {db} from '../firebase'
import {query, collection, orderBy, onSnapshot} from 'firebase/firestore';

const style = {
    main: `flex flex-col p-[10px] relative overflow-auto`
}

const Chat = () => {
    
    const scroll = useRef();

    const [messages,setMessages] = useState([]);

    useEffect ( () => {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = [];
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id})
            });
            setMessages(messages);
        })
        return () => unsubscribe();
    },[])

    return (
    <>
        <main className={style.main}>
            
            {/* Chat Messages */}
            {messages && messages.map((message) => (
                <Message key={message.id} message={message} />
            ))}

        </main>
        {/* Input Form */}
        <MessageInput scroll={scroll}/>
        <span ref={scroll}></span>
    </>
    )
}
export default Chat;