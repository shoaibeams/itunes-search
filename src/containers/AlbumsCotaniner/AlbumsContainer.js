import React from 'react'
import AlbumCard from '../../components/AlbumCard/AlbumCard'
import './AlbumsContainer.scss'

const AlbumsContainer = ({ albums }) => {
  return (
    <div className="card-list">
      {albums.map((album, i) => (
        <AlbumCard album={album} key={i} />
      ))}
    </div>
  )
}

export default AlbumsContainer
