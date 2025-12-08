import React from "react";
import {useParams} from "react-router-dom";

function TopicPage() {
    const {name} = useParams();

    return(
        <div className="content topic-page">
            <header>
                <h1>{name.toUpperCase()}</h1>
                <p className="quote">"Exploring the depths of {name}..."</p>
            </header>

            <aside>
                <ul>
                    <li>Definition of {name}</li>
                    <li>Main Concepts</li>
                    <li>My Interest</li>
                </ul>
            </aside>

            <section>
                <h2 className="instagram-link" onClick={() => window.open("https://instagram.com", "_blank")}>My Interpretation</h2>
                <p>This section contains your knowledge and reflection.</p>
            </section>
        </div>
    );
}

export default TopicPage;