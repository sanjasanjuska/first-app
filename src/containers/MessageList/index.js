import { useContext } from "react";
import ChatContext from "../../contexts/ChatContext";
import { MessageWithHoc as Message } from "../../components/Message";

export default function MessageList() {
    const chatContext = useContext(ChatContext);

    return (
        <div className="MessageList">
            {chatContext.messageObjects.length === 0 &&
                <p>No messages</p>}
            {chatContext.messageObjects.map((messageObject, index) =>
                <Message
                    key={index}
                    isImportant={messageObject.isImportant}
                    message={messageObject.message}
                    title={messageObject.title}
                />
            )}
        </div>
    )
}