import { useState } from "react";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [name, setName] = useState("")

    function handleSubmit(e){
        e.preventDefault();
       
        if (!name || !email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }
        if (!email.includes("@")) {
            setError("Please enter a valid email");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("")
        alert(`Welcome, ${name}! Your account has been created.`)
    }

    return (
        <div className= "signup-container">
            <form on Submit={handleSubmit}>
            <h1>Sign Up</h1>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
            />

            <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
            />

            <input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            />

            <input
                value={confirmPassword}
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Your Password"
            />

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button type="submit">Sign Up</button>

        </form>
        </div>
    );

}

export default Signup;