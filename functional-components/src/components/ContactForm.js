import { useState } from "react";

const FOCUS_NONE = 0;
const FOCUS_USER = 1;
const FOCUS_REQUEST = 2;

function getStyle(isActive){
    return {
        display: "flex",
        flexDirection: "column",
        backgroundColor: isActive ? "oldlace" : "transparent"
    };
}


function Field({ label, children }){
    return (
        <label>
            {label}
            <br />
            {children}
        </label>
    );
}


function ContactForm(){
    const [focus, setFocus] = useState(FOCUS_NONE);
    const onUserFocus = () => setFocus(FOCUS_USER);
    const onRequestFocus = () => setFocus(FOCUS_REQUEST);

    const onBlur = () => setFocus(FOCUS_NONE);

    return (
        <form onBlur={onBlur} className="d-flex flex-column align-items-center justify-content-center">
            <h1>Contact</h1>
            <fieldset onFocus={onUserFocus} style={getStyle(focus === FOCUS_USER)}>
                <legend className="text-center">User</legend>
                <Field label={"Name"}>
                    <input />
                </Field>
                <Field label={"Email"}>
                    <input />
                </Field>
            </fieldset>
            <fieldset onFocus={onRequestFocus} style={getStyle(focus === FOCUS_REQUEST)}>
                <Field label={"Subject"}>
                    <input />
                </Field>
                <Field label={"Body"}>
                    <textarea />
                </Field>
            </fieldset>
        </form>
    )
}

export default ContactForm;
