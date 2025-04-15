import React from 'react';
import { useParams } from 'react-router-dom';
import CreateOtherAnimalProfileForm from './CreateOtherAnimalProfileForm';

const DynamicOtherAnimalProfile = () => {
  const { animalType } = useParams();
  return <CreateOtherAnimalProfileForm animalType={animalType} />;
};

export default DynamicOtherAnimalProfile;
