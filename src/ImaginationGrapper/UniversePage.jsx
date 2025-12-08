import React from "react";
import {Link} from "react-router-dom";

import astronomyIcon from "./Icons/astronomy.jpg";
import architectureIcon from "./Icons/architecture.jpg";
import futurologyIcon from "./Icons/futurology.jpg";
import physicsIcon from "./Icons/physics.jpg";
import philosophyIcon from "./Icons/philosophy.jpg";

const subjects = [
    {id: "astronomy", name: "Astronomy", icon:astronomyIcon},
    {id: "architecture", name: "Architecture", icon:architectureIcon},
    {id: "futurology", name: "Futurology", icon:futurologyIcon},
    {id: "physics", name: "Physics", icon:physicsIcon},
    {id: "philosophy", name: "Philosophy", icon:philosophyIcon},
];

function UniversePage() {
    return(
        <div className="content">
            <header>
                <h2>Choose the Dimension of Your Curiosity</h2>
            </header>

            <ul className="subject-list">
                {subjects.map((s) => (
                    <li key={s.id}>
                        <Link to={`/topics/${s.id}`} className="subject-item">
                            <img src={s.icon} alt={s.name} className="subject-icon"/>
                            {s.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UniversePage;