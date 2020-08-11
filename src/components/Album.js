import React from 'react'
import PropTypes from 'prop-types'


const Album = ({name,imageurl,artist,category})=> (
    <div>
        <h2>{name}</h2>
        <img src={imageurl} alt={name}></img>
        <p >Artist: {artist}</p>
        <p >Category: {category}</p>
    </div>
)

Album.propTypes = {
    name: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
}

export default Album;