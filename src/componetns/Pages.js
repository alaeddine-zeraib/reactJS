import React from 'react'
import { Link, Outlet, useLocation } from "react-router-dom";

export function Home() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export function About() {
    return (
        <div>
            <h1>About</h1>
            <Outlet />
        </div>
    )
}

export function Services() {
    return (
        <div>
            <h1>Our services</h1>
        </div>
    )
}

export function History() {
    return (
        <div>
            <h1>Our History</h1>
        </div>
    )
}

export function Location() {
    return (
        <div>
            <h1>Our Location</h1>
        </div>
    )
}

export function Events() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export function Contact() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Ressource not found at {location.pathname}</h1>
        </div>
    )
}