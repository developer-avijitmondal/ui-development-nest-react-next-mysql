import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api";

interface FormData {
    email: string;
    password: string;
}

export default function Register() {
    const [form, setForm] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const res = await registerUser(form);

        if (res.status === 201) {
            alert("Registered successfully");
            navigate("/login");
        } else {
            alert(res.data.message || "Registration failed");
        }
    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 px-3">
            <div className="w-100" style={{ maxWidth: "400px" }}>
                <h2 className="text-center mb-4">Register</h2>

                <form onSubmit={handleSubmit}>
                    <input name="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} />
                    <input name="password" type="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} />
                    <button className="btn btn-success w-100">Register</button>
                </form>

                <p className="text-center mt-3">
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
}