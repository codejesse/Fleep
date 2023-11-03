import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { homeId } = useParams();
  return (
    <div>Hello {homeId}</div>
  );
};

export default PropertyDetails;
