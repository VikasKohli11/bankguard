import { useState } from "react";
import { loginUser, registerUser } from "../services/api";

function Login() {

    const [isSigningUp, setIsSigningUp] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");
        setMessage("");
        setLoading(true);

        try {

            const data = await loginUser(email, password);

            // Store authentication information
            localStorage.setItem("token", data.token);
            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            console.log("Login successful:", data);

            alert("Login successful!");

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        setError("");
        setMessage("");
        setLoading(true);

        try {
            await registerUser(name, email, password);
            setIsSigningUp(false);
            setName("");
            setPassword("");
            setMessage("Account created. Log in with your email and password.");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleModeChange = () => {
        setIsSigningUp(!isSigningUp);
        setError("");
        setMessage("");
    };

    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-header">

                    <h1>BankGuard</h1>

                    <p>
                        Banking Security & Fraud Monitoring
                    </p>

                </div>

                {message && (
                    <div className="success-message" role="status">
                        {message}
                    </div>
                )}

                {error && (
                    <div className="error-message" role="alert">
                        {error}
                    </div>
                )}

                <form onSubmit={isSigningUp ? handleSignup : handleLogin}>

                    {isSigningUp && (
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="name"
                                required
                            />
                        </div>
                    )}

                    <div className="form-group">

                        <label htmlFor="email">Email</label>

                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            autoComplete="email"
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label htmlFor="password">Password</label>

                        <input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            autoComplete={isSigningUp ? "new-password" : "current-password"}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading
                            ? (isSigningUp ? "Creating account..." : "Logging in...")
                            : (isSigningUp ? "Sign up" : "Login")}
                    </button>

                </form>

                <p className="auth-switch">
                    {isSigningUp ? "Already have an account?" : "Need an account?"}{" "}
                    <button
                        className="auth-switch-button"
                        type="button"
                        onClick={handleModeChange}
                    >
                        {isSigningUp ? "Log in" : "Sign up"}
                    </button>
                </p>

            </div>

        </div>
    );
}

export default Login;