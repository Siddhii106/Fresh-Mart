import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordInput from "../PasswordInput";
import { loginUser } from "../auth";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
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
        setLoading(true);

        try {
            const data = await loginUser({ email, password });
            onLogin(data.email);
            navigate("/");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }

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

                    {error && <p className="error">{error}</p>}

                    <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
                </div>
            </form>
        </>
    )
}

export default Login;