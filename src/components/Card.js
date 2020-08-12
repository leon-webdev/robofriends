import React from 'react';

const Card = ({id='0', name='leon', email='l@g.com'}) => {
    return (
        <div className='tc bg-light-blue dib br2 pa2 ma1 grow bw2 shadow-5'>
            <img alt={`${name}`} src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;