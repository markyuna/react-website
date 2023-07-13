
import React, { useState } from 'react';
import {View} from 'react-viewer';
import Carousel from '../Carousel/Carousel';
import { useNavigate } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { GalerieCard, GalerieVideo, GalerieSection, GalerieText, GalerieButton } from './GalerieStyles';
import { ButtonWrapper } from '../Hero/HeroStyles';
import { setShowModal } from 'react-bootstrap';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const images = [
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1681639953/development/bzbiag9hqhvynrylo22hkuu7q7dr.jpg",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1681639947/development/ms0eh0x45i13sw24ar094v61ozbh.jpg",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1681639055/development/6h3mefkeu4d8al73y4ikhlgcxv85.jpg",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1681639494/development/mwyw9yndeul3wjygpt5ugibyqdpo.jpg",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1681639492/development/u9la38bimijgge94q25637d644m0.jpg",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1681639497/development/4clspepec3z5lzi65vimdwcyjbap.jpg",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1681639955/development/gp1252lh1nkjfo2ftg71r5xpjrtj.png",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1683904748/IMG_6360_nbzn1d.jpg",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1681639945/development/i7ewqpoi2dpdyuww2ldh1z7rnnp0.jpg",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1683904827/1A4CADB4-DD77-49F1-A805-13547A759759_u38dqd.png",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1683904901/IMG_6066_nfdvuu.jpg",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1683904901/IMG_7555_vv3cwn.jpg",
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1683904901/IMG_6064_lkmjvu.jpg",
]

const Galerie = () => {
  const [data, setData] = useState({ img: '', i: 0 });
  const [showModal, setShowModal] = useState(false); // Add setShowModal state

  const history = useNavigate();
  console.log(history)
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleImageHover = (index) => {
    setHoveredIndex(index);
  };

  const viewImage = (img, i) => {
    setData({ img, i });
    setShowModal(true);
  };

  const imgAction = (action) => {
    let i = data.i;

    switch (action) {
      case 'next-img':
        setData({ img: images[i + 1], i: i + 1 });
        break;
      case 'previous-img':
        setData({ img: images[i - 1], i: i - 1 });
        break;
      default:
        setData({ img: '', i: 0 });
        break;
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

	return (
    <>
      <GalerieSection>
        <GalerieVideo src="./assets/galerie.mp4" autoPlay muted />
          <MainHeading>Sculptures</MainHeading>
          <GalerieText>L'art du modelage en papier mâché..</GalerieText>
        <Container>
          {data.img && (
            <View
              style={{
                width: '100%',
                backgroundColor: 'grey',
                display: 'flex',
                justifyContent: 'center',
                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
              }}
            >
              <GalerieButton>
                <ButtonWrapper>
                  <Button onClick={() => imgAction()} style={{ position: 'absolute', top: '10px', right: '10px', border: 'round-5' }}>
                    ❌
                  </Button>
                  <Button onClick={() => imgAction('previous-img')}>Previous</Button>
                  <img src={data.img} style={{ width: '40%' }} alt="" />
                  <Button onClick={() => imgAction('next-img')}> Next </Button>
                </ButtonWrapper>
              </GalerieButton>
            </View>
          )}
        </Container>
      </GalerieSection>

      <div style={{ padding: '50px' }}>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="40px">
            {images.map((image, i) => (
              <GalerieCard key={i}>
                <img
                  src={image}
                  style={{width: "100%", display: "block", boxShadow: '0px 0px 10px 0px rgba(0,0,2,2.75)',}}
                  alt=""
                  onClick={()=> viewImage(image, i)}
                  />
                </GalerieCard>
                  ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      <Carousel />
    </>
	);
};

export default Galerie;
