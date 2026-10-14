import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setError("");
        alert(`Welcome back, ${email}! You have successfully logged in.`);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="login-container">
                    <h1>Log In</h1>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p className="error">Error</p>}
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}

export default Login;