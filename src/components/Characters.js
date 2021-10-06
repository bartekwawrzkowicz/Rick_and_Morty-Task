import React, { useState, useEffect } from 'react';

import '../styles/components/Characters.scss';

const Characters = props => {

    const characters = props.posts.map(character => {

        const date = new Date(character.created).toLocaleDateString();
        const time = new Date(character.created).toLocaleTimeString();

        return (
            <ul key={character.id} className="characters-list">
                <li className="row">
                    <div className="column">
                        <img src={character.image} alt="character" />
                    </div>

                    <div className="column">
                        <div className="characters-list__info name">
                            {character.name}
                        </div>
                        <div className="characters-list__info">
                            status: {character.status}
                        </div>
                        <div className="characters-list__info">
                            species: {character.species}
                        </div>
                        <div className="characters-list__info">
                            {character.type ?
                                `type: ${character.type}` : null}
                        </div>
                        <div className="characters-list__info">
                            gender: {character.gender}
                        </div>
                        <div className="characters-list__info">
                            created on {date}, at {time}
                        </div>
                    </div>
                </li>
            </ul >
        )
    }
    );

    return (
        <div className="characters-list">
            { characters}
        </div>
    )
}

export default Characters;