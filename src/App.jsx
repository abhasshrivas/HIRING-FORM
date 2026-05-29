import { useState } from "react";

import "./App.css";

function App() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        comments: "",
        password: "",
    });

    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setError((prev) => ({
            ...prev,
            [name]: "",
        }));
    };
    const validate = () => {
        let newError = {};

        if (!formData.firstName.trim()) {
            newError.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newError.lastName = "last name is required";
        }

        if (!formData.email.trim()) {
            newError.email = "email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newError.email = "Invalid Email address";
        }

        if (!formData.phone.trim()) {
            newError.phone = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(formData.phone)) {
            newError.phone = "Phone number must required 10 digits";
        }

        if (!formData.comments.trim()) {
            newError.comments = "comments is required";
        }
        if (!formData.password.trim()) {
            newError.password = "Password is required";
        } else if (formData.password.length < 8) {
            newError.password = "Password must be at least 8 characters";
        } else if (!/[A-Z]/.test(formData.password)) {
            newError.password = "Password must contain an uppercase letter";
        } else if (!/[a-z]/.test(formData.password)) {
            newError.password = "Password must contain a lowercase letter";
        } else if (!/[0-9]/.test(formData.password)) {
            newError.password = "Password must contain a number";
        } else if (!/[!@#$%^&*]/.test(formData.password)) {
            newError.password = "Password must contain a special character";
        }
        return newError;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationError = validate();

        if (Object.keys(validationError).length > 0) {
            setError(validationError);
        } else {
            setError({});
            alert("Form Submitted Successfully ✅");

            console.log(formData);

            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                comments: "",
                password: "",
            });
        }
    };
    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
            <div className="bg-white w-full max-w-5xl rounded-3xl overflow-hidden shadow-xl grid md:grid-cols-2">
                <form
                    onSubmit={handleSubmit}
                    className="p-10 flex flex-col justify-center"
                >
                    <h1 className="text-3xl font-semibold mb-8 mb-8">
                        Get match with the perfect freelence for your design
                        project.
                    </h1>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="text-sm text-gray-600">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-black"
                            ></input>
                            {error.firstName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {error.firstName}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="text-sm text-gray-600">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-black"
                            ></input>
                            {error.lastName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {error.lastName}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-black"
                        ></input>
                        {error.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {error.email}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-gray-600">
                            Phone number
                        </label>
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-black"
                        ></input>
                        {error.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                {error.phone}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="text-sm text-gray-600">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            placeholder="Enter your password"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-black"
                        ></input>

                        {error.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {error.password}
                            </p>
                        )}
                    </div>

                    <div className="mb-5">
                        <label className="text-sm text-gray-600">Comment</label>
                        <textarea
                            rows="4"
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            placeholder="Additional detail"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 mt-1 outline-none focus:ring-2 focus:ring-black"
                        ></textarea>
                        {error.comments && (
                            <p className="text-red-500 text-sm mt-1">
                                {error.comments}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <p className="text-sm text-gray-600 mb-3">services</p>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Website design
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                UI/UX design
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Strategy & research
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                App design
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Other
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="bg-black text-white py-4 rounded-xl font-medium hover:opacity-90 transition"
                    >
                        Get matched
                    </button>

                    <p className="text-sm text-gray-500 mt-4 text-center">
                        Prefer email? hello@untitledui.com
                    </p>
                </form>

                <div className="relative h-full">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661758211006-d41106e4be4d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="team"
                        className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="absolute bottom-10 left-10 text-white">
                        <h2 className="text-4xl font-serif leading-snug max-w-md">
                            Access our global talent network with 100,000+
                            world-class designers.
                        </h2>

                        <div className="flex gap-4 mt-6">
                            <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl text-sm">
                                Access our global talent network.
                            </div>

                            <div className="bg-white/20 backdrop-blur-md px-4 py-3 rounded-xl text-sm">
                                Explore projects and pick designers.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
