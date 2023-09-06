
import React from 'react';
import { Container, MainHeading } from '../../globalStyles';
import { AproposSection, AproposText,  } from './AproposStyles';
// import MainBox from '../MainBox';

const Apropos = () => {
  

  return (
    <AproposSection>
			<Container>
				<MainHeading>A propos</MainHeading>
				<AproposText>
        L'art du modelage en papier mâché..
				</AproposText>
			</Container>
      {/* <MainBox /> */}
    </AproposSection>
  );
}

export default Apropos;
