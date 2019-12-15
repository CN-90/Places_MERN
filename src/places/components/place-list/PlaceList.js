import React from 'react';

import Card from './../../../shared/components/UIElements/Card/Card';
import PlaceItem from './../place-item/PlaceItem';

import './PlaceList.css';

const PlaceList = props => {
  if (!props.items.length) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places found. Click below to create new place.</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
