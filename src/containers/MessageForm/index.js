import { useState } from "react";
import PropTypes from "prop-types";
import Checkbox from "../../components/Checkbox";
import TextInput from "../../components/TextInput";
import FormButton from "../../components/FormButton";

export default function MessageForm({ onSendMessage }) {
    const [state, setState] = useState({
        message: "",
        isImportant: false,
        title: "",
    });

    const setMessage = (event) => {
        setState({ ...state, message: event.target.value });

    };

    const setTitle = (event) => {
        setState((currentState) => {
            return { ...currentState, title: event.target.value };
        });
    };

    const setIsImportant = (event) => {
        setState({ ...state, isImportant: event.target.checked });
    };

    const sendMessage = (event) => {
        event.preventDefault();
        onSendMessage(state);
    };

    return (
        <form onSubmit={sendMessage}>
            <TextInput
                label={<div>Title:</div>}
                onChange={setTitle}
                value={state.title}
                inputProps={{
                    name: "title", id: "title", placeholder: "Title"
                }}
            />
            <TextInput
                label={<div>Message:</div>}
                onChange={setMessage}
                value={state.message}
                placeholder="Message"
                inputProps={{
                    name: "message",
                    id: "message",
                    placeholder: "Message"
                }}
            />
            <Checkbox
                label="Important"
                onChange={setIsImportant}
                value="isImportant"
                checked={state.isImportant}
                inputProps={{
                    name: "isImportant",
                    id: "is-important"
                }}
            />
            <FormButton type="submit">Send</FormButton>
        </form>
    );
}

MessageForm.propTypes = {
    onSendMessage: PropTypes.func,
};