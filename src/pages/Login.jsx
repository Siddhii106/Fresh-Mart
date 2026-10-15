import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../PasswordInput";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!email.includes("@")) {
            setError("Please enter a valid email address.");
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setError("");
        onLogin(email);
        navigate("/");

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

                    <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />

                    {error && <p className="error">Error</p>}

                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}

export default Login;