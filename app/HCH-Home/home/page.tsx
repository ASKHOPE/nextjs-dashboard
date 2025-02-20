// import { Suspense } from 'react';
import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "@/styles/globals.css";
// import Images from '../../../public/tree-brush.webp'

export const metadata: Metadata = {
    title: 'Home',
};

export default function HomePage() {
    return (
        <main className="home-screen">
            {/* Hero Section */}
            {/* <section className="hero">
                <Link href="/clients/shop">
                    <button className="visit-shop-button">
                        Visit Our Shop
                    </button>
                </Link>
            </section> */}

            {/* About Section */}
            <section className="about">
                <h2 className="about-text">About Handcrafted Haven</h2>
                <p className="about-paragraph">
                    Handcrafted Haven is your go-to platform for unique, handmade artwork Curated by talented artists worldwide.
                    We connect art lovers with skilled artisans from around the world.
                </p>
            </section>

            {/* Featured Artwork */}
            <section className="artwork">
                <h2 className="h2-artwork">Featured Artwork</h2>
                <div className="div-artwork">
                    {/* Artwork Cards */}
                    <div className="art1">
                        <img src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Tree black and white" width={300} height={200} className="rounded-lg" />
                        <h3 className="tree">Tree on Canvas</h3>
                        <p className="tree-price">$120</p>
                    </div>
                    <div className="art2">
                        <img src="https://plus.unsplash.com/premium_photo-1677609898243-63280b6c89a1?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Strokes" width={300} height={200} className="rounded-lg" />
                        <h3 className="abstract">Abstract Strokes</h3>
                        <p className="abstract-price">$95</p>
                    </div>
                    <div className="art3">
                        <img src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Mountain" width={300} height={200} className="rounded-lg" />
                        <h3 className="moutain">Mountain Escape</h3>
                        <p className="mountain-price">$150</p>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="how-it-works">
                <h2 className="h2-how">How It Works</h2>
                <div className="how-tiles">
                    <div className="how-1">
                        <h3 className="browse">1. Browse Artwork</h3>
                        <p className="text-explorer">Explore unique handcrafted pieces.</p>
                    </div>
                    <div className="order">
                        <h3 className="place">2. Place an Order</h3>
                        <p className="text-order">Secure checkout with multiple payment options.</p>
                    </div>
                    <div className="enjoy">
                        <h3 className="enjoy-art">3. Enjoy Your Art</h3>
                        <p className="text-enjoy">Get your artwork delivered safely.</p>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials">
                <h2 className="customers-testimonial">What Our Customers Say</h2>
                <div className="testimonial-div">
                    <div className="cust-1">
                        <p className="italic">"The quality of the paintings exceeded my expectations!"</p>
                        <h3 className="emily">- Emily R.</h3>
                    </div>
                    <div className="cust-1">
                        <p className="italic">"Amazing handcrafted pieces, delivered on time!"</p>
                        <h3 className="michael">- Michael D.</h3>
                    </div>
                </div>
            </section>
        </main>
    );
}
