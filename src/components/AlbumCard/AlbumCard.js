import React from 'react'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'

const AlbumCard = ({ album }) => {
  const { artistName, releaseDate, artworkUrl100, collectionName } = album
  const artworkUrl300 = artworkUrl100.replace('100x100', '300x300')

  return (
    <div className="card-container">
      <Card
        hoverable
        style={{ width: 190 }}
        cover={<img alt="example" src={artworkUrl300} />}
      >
        <Meta title={artistName} />
        <p>
          {collectionName}
          <span> ({releaseDate.slice(0, 4)})</span>
        </p>
      </Card>
      ,
    </div>
  )
}

export default AlbumCard
