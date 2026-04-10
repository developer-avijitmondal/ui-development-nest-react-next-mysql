import { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

interface FormData {
    email: string;
    password: string;
}

export default function Login() {
    const [form, setForm] = useState<FormData>({ email: "", password: "" });
    const navigate = useNavigate();

    // ✅ Redirect if already logged in
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navigate("/");
        }
    }, [navigate]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const data = await loginUser(form);

        if (data.access_token) {
            localStorage.setItem("token", data.access_token);
            alert("Login success");
            navigate("/");
        } else {
            alert(data.message || "Login failed");
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 px-3">
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Login</h2>

                <form onSubmit={handleSubmit}>
                    <input name="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} />
                    <input name="password" type="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} />
                    <button className="btn btn-primary w-100">Login</button>
                </form>

                <p className="text-center mt-3">
                    Don&apos;t have an account? <Link to="/register">Register</Link>
                </p>
            </div>
        </div>
    );
}