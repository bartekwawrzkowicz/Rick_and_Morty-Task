import React from 'react';

import Character from './Character';

import '../styles/components/Character.scss';

const CharactersList = props => {

    return (
        <>
            <h2 className="characters-list__header">List of characters</h2>
            <Character posts={props.posts} />
        </>
    );
}

export default CharactersList;