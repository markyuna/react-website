/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from '../Carousel/Carousel';
import { useHistory } from 'react-router-dom';
import { Container, MainHeading } from '../../globalStyles';
import { GalerieVideo, GalerieSection, GalerieText } from './GalerieStyles';


const Galerie = () => {
  const history = useHistory();

	return (
    <>
    <GalerieSection>
			<GalerieVideo src="./assets/galerie.mp4" autoPlay muted />
			<Container>
				<MainHeading>Sculptures</MainHeading>
				<GalerieText>
        L'art du modelage en papier mâché..
				</GalerieText>
			</Container>
		</GalerieSection>
      <Carousel />
    </>
	);
};

export default Galerie;
