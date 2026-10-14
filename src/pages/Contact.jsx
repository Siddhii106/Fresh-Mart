import {useState} from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if (!name || !email || !message) {
            setError("All fields are required.");
            return;
        }
        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }
        if (message.length < 10) {
            setError("Your message should be at least 10 characters.");
            return;
        }

        setError("");
        alert(`Thank you, ${name}! We'll reply to ${email} soon.`);
        setName("");
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <form className="login-container" onSubmit = {handleSubmit}>
                <div className= "contact-container" >
                    <h1>Contact Us</h1>
                        <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                    />

                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                    />

                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your Message">
                    </textarea>

                    {error && <p className="error">{error}</p>}

                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    
    );
}

export default Contact;