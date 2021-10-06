import React from 'react';


import Characters from '../components/Characters';

import '../styles/components/Characters.scss';

const CharactersList = props => {


    return (
        <>

            <h2 className="characters-list__header">List of characters</h2>
            <div>

            </div>
            <Characters posts={props.posts} />
        </>
    );
}

export default CharactersList;