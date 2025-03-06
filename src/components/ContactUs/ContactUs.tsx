'use client';
import { useState } from "react";
import styles from "./ContactUs.module.css";
import { FaRocketchat } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectDetails: '',
        services: {
            websiteDesign: false,
            contentCreation: false,
            uxDesign: false,
            strategyConsulting: false,
            other: false,
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, checked } = e.target;

        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                services: {
                    ...prevData.services,
                    [name]: checked,
                },
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        // You can add your form submission logic here
    };

    return (
        <div id="contactus" className={styles.container}>
            <div className={styles.leftDiv}>
                <div>
                    <FaRocketchat className="size-9" />
                    <h2>Chat to Us</h2>
                    <p>mohammadparvezansari91@gmail.com</p>
                </div>
                <div>
                    <IoCall className="size-9" />
                    <h2>Call Us</h2>
                    <p>Mon - Fri from 8 am to 5 pm</p>
                    <p>+971554073246</p>
                </div>
            </div>
            <div className={styles.rightDiv}>
                <div className={styles.rightDivTitle}>
                    <h1>Got Ideas? We&apos;ve got the skills. Let&apos;s team up.</h1>
                    <p>Tell us more about yourself and what you have got in mind</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.rightDiv}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@company.com"
                            required
                        />
                        <label htmlFor="projectDetails">Tell us a little about your project</label>
                        <input
                            type="text"
                            name="projectDetails"
                            id="projectDetails"
                            value={formData.projectDetails}
                            onChange={handleChange}
                            required
                        />
                        <p>How we can help</p>
                        <div>
                            <div>
                                <input
                                    type="checkbox"
                                    name="websiteDesign"
                                    id="WebsiteDesign"
                                    checked={formData.services.websiteDesign}
                                    onChange={handleChange}
                                />
                                <label htmlFor="WebsiteDesign">Website Design</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    name="contentCreation"
                                    id="contentcreation"
                                    checked={formData.services.contentCreation}
                                    onChange={handleChange}
                                />
                                <label htmlFor="contentcreation">Content Creation</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    name="uxDesign"
                                    id="uxdesign"
                                    checked={formData.services.uxDesign}
                                    onChange={handleChange}
                                />
                                <label htmlFor="uxdesign">UX Design</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    name="strategyConsulting"
                                    id="strategyconsulting"
                                    checked={formData.services.strategyConsulting}
                                    onChange={handleChange}
                                />
                                <label htmlFor="strategyconsulting">Strategy Consulting</label>
                            </div>
                            <div>
                                <input
                                    type="checkbox"
                                    name="other"
                                    id="other"
                                    checked={formData.services .other}
                                    onChange={handleChange}
                                />
                                <label htmlFor="other">Other</label>
                            </div>
                        </div>
                        <div className={styles.submitButton}>
                            <button type="submit">Let&apos;s Get Started</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;