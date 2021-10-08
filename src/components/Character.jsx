import React from 'react';

import '../styles/components/Character.scss';

const Character = props => {

    const characters = props.posts.length > 0 && props.posts.map(character => {

        const date = new Date(character.created).toLocaleDateString();
        const time = new Date(character.created).toLocaleTimeString();

        return (
            <div key={character.id} className="characters">
                <ul className="characters-list__items">
                    <li className="characters-list__items item">
                        <img className="characters-list__items item-image" src={character.image} alt="character" />
                    </li>

                    <li className="characters-list__items header">
                        <p className="characters-list__items name">
                            {character.name}
                        </p>
                        <p className="characters-list__items item">
                            status: {character.status}
                        </p>
                        <p className="characters-list__items item">
                            species: {character.species}
                        </p>
                        {character.type ?
                            <p className="characters-list__items item">
                                {`type: ${character.type}`}</p>
                            : null}
                        <p className="characters-list__items item">
                            gender: {character.gender}
                        </p>
                        <p className="characters-list__items item">
                            created on {date}, at {time}
                        </p>
                    </li>
                </ul>
            </div >
        )
    }
    );

    return (
        <div className="characters-list">
            { characters}
        </div>
    )
}

export default Character;