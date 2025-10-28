import React from "react";
import './Naruto.css'
import naruto from './naruto/나루토.jpg'
import hinata from './naruto/히나타.jpg'
import sasuke from './naruto/사스케.jpg'
import itachi from './naruto/이타치.jpg'
import sikamaru from './naruto/시카마루.jpg'
import kakasi from './naruto/카카시.jpg'
import madara from './naruto/마다라.jpg'
import minato from './naruto/미나토.jpg'
import uzumaki from './naruto/우즈마키.jpg';
import hyuga from './naruto/휴우가.jpg';
import uchiha from './naruto/우치하.jpg';
import nara from './naruto/나라.jpg';
import hatake from './naruto/하타케.jpg';
import namikaze from './naruto/나미카제.jpg';
import background from './naruto/나루토배경.jpg'

const characters = [
    {id:1, name: "나루토", age: 18, lineage: "우즈마키", avatar: naruto, mark: uzumaki},
    {id:2, name: "히나타", age: 18, lineage: "휴우가", avatar: hinata, mark: hyuga},
    {id:3, name: "사스케", age: 18, lineage: "우치하", avatar: sasuke, mark: uchiha},
    {id:4, name: "이타치", age: 23, lineage: "우치하", avatar: itachi, mark: uchiha},
    {id:5, name: "시카마루", age: 18, lineage: "나라", avatar: sikamaru, mark: nara},
    {id:6, name: "카카시", age: 32, lineage: "하타케", avatar: kakasi, mark: hatake},
    {id:7, name: "마다라", age: "?", lineage: "우치하", avatar: madara, mark: uchiha},
    {id:8, name: "미나토", age: 39, lineage: "나미카제", avatar: minato, mark: namikaze},

]

function Naruto() {
    return(
        <div className="naruto-container" style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
            <h2 className="naruto-title">나루토 등장인물</h2>
            <div className="card-container" key={characters.id}>
                {
                    characters.map((character) => (
                        <div className="character-card">
                            <img src={character.avatar} alt={character.name} className="character-avatar"/>
                            <div className="character-info">
                                <h3 className="character-name">
                                    {character.name}
                                    <img src={character.mark} alt={`${character.lineage} 마크`} className="lineage-mark"/>
                                </h3>
                                <p>{character.age}세 - {character.lineage} 일족</p>
                            </div>
                        </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default Naruto;