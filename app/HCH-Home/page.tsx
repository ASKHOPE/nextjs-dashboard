// Code for the product info goes here where it contains
// all information about the product name, bio,ratings,so on..
// import Link from 'next/link';
import "@/styles/globals.css";
import React from 'react';

const Page = () => {
    return (
        <>
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", textAlign: "center" }}>
                <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "16px" }}>About Us</h1>
                <p style={{ fontSize: "1.125rem", color: "#4a4a4a", marginBottom: "24px" }}>
                    Welcome to our project! We are dedicated to building innovative solutions that
                    solve real-world problems and enhance daily life. Our team is passionate about
                    technology, creativity, and making a positive impact.
                </p>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}>Our Mission</h2>
                <p style={{ fontSize: "1.125rem", color: "#4a4a4a", marginBottom: "24px" }}>
                    Our goal is to create software that simplifies tasks, improves efficiency, and
                    empowers individuals and businesses to achieve their objectives. We believe in
                    leveraging technology to drive meaningful change and provide value to our users.
                </p>
                <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "12px" }}>Join Us</h2>
                <p style={{ fontSize: "1.125rem", color: "#4a4a4a", marginBottom: "24px" }}>
                    We are always looking for like-minded individuals to collaborate with. Whether
                    you are a developer, designer, or enthusiast, we invite you to be part of our
                    journey in shaping the future of technology.
                </p>
            </div>
        </>
    );
}


export default Page;