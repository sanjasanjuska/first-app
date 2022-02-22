import { useContext } from "react";
import AppContext from "../../contexts/AppContext";
import MessageList from "../../containers/MessageList";
import MessageForm from "../../containers/MessageForm";
import ChatContext from "../../contexts/ChatContext";

export default function ChatPage() {

    const appContext = useContext(AppContext);
    const chatContext = useContext(ChatContext);

    return (
        <div className="App">
            <header className="App-header">
                <h1>My Chat App {appContext.language}</h1>
                <MessageList />
                <MessageForm onSendMessage={chatContext.handleSendMessage} />
                <a
                    className="App-link"
                    href="https://github.com/sanjasanjuska"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    My GitHub Profile
                </a>
            </header>
        </div>
    );
}