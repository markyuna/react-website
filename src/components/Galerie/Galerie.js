/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import Carousel from '../Carousel/Carousel';
import { useHistory } from 'react-router-dom';
import { Container, MainHeading } from '../../globalStyles';
import { GalerieVideo, GalerieSection, GalerieText } from './GalerieStyles';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images = [
  "https://res.cloudinary.com/dxrttyi2g/image/upload/v1681639953/development/bzbiag9hqhvynrylo22hkuu7q7dr.jpg",
    //...
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
  const [data, setData] = useState({img: '', i: 0})
  const history = useHistory();
  const viewImage = (img, i) => {
    setData({img, i})
  }
  const imgAction = (action) => {
    let i = data.i;
    if(action === 'next-img'){
      setData({img: images[i+1], i: i+1});
    }
    if(action === 'previous-img'){
      setData({img: images[i-1], i: i-1});
    }
    if(!action){
      setData({img: '', i: 0});
    }
  }
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
      {data.img &&
        <div style={{
          width: '100%',
          height: '100vh',
          backgroundColor: 'transparent',
          position: 'fixed',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          marginBottom: '10px',
          justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
          <button onClick={()=> imgAction()} style={{position: 'absolute', top: '10px', right: '10px'}}> ❌ </button>
          <button onClick={()=> imgAction('previous-img')}>Previous</button>
          <img src={data.img} style={{width: '70%'}} alt="" />
          <button onClick={()=> imgAction('next-img')}> Next </button>
        </div>
      }
      <div style={{padding: "10px"}}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
          >
          <Masonry gutter="20px">
              {images.map((image, i) => (
                <img
                key={i}
                src={image}
                style={{width: "100%", display: "block"}}
                alt=""
                onClick={()=> viewImage(image, i)}
                />
                ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    <div>
    <Carousel />
    </div>
    </>
	);
};

export default Galerie;
