// import React from 'react';
// import {
//   FooterLinkItems,
//   FooterLinkTitle,
//   FooterLink,
//   FooterLogo,
//   SocialIcon,
//   FooterRights,
//   FooterSocialIcon,
//   FooterWrapper,
//   FooterAddress,
//   FooterColumn,
//   FooterGrid,
// } from './FooterStyles';
// import footerData from '../../data/FooterData';

// import { Row, Section } from '../../globalStyles';

// const scrollToTop = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// };

// const Footer = () => {
//   const { footerData, footerSocialData } = footerData; // Cambia el nombre de la constante para evitar conflicto de nombres

//   return (
//     <Section padding="4rem 0 2rem 0">
//       <FooterWrapper>
//         <FooterGrid justify="space-between">
//           <FooterColumn id="footerLogo">
//             <FooterLogo to="/">
//               <SocialIcon src="./assets/logo.png" />
//             </FooterLogo>
//             <FooterAddress>
//               10 Rue Edouard Vaillant, 94270 Le Kremlin-Bicêtre
//             </FooterAddress>

//             <Row align="center" margin="auto  0 0 0" gap="1rem">
//               {footerSocialData.map((social, index) => (
//                 <FooterSocialIcon
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </FooterSocialIcon>
//               ))}
//             </Row>
//           </FooterColumn>

//           {footerData.footerData.map((footerItem, index) => ( // Accede a footerData.footerData en lugar de solo footerData
//             <FooterLinkItems key={index}>
//               <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
//               {footerItem.links.map((link, linkIndex) => (
//                 <FooterLink key={linkIndex} to={link.to} onClick={scrollToTop}>
//                   {link.name}
//                 </FooterLink>
//               ))}
//             </FooterLinkItems>
//           ))}
//         </FooterGrid>
//         <FooterRights>MarkPaper © 2023</FooterRights>
//       </FooterWrapper>
//     </Section>
//   );
// };

// export default Footer;


import React from 'react';
import {
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLogo,
    SocialIcon,
    FooterRights,
    FooterSocialIcon,
    FooterWrapper,
    FooterAddress,
    FooterColumn,
    FooterGrid,
  } from './FooterStyles';
import { Row, Section } from '../../globalStyles';
import getFooterData from '../../data/FooterData';

// const iconStyle = (Icon) => <Icon />;

const Footer = () => {
  const { footerData, footerSocialData } = getFooterData();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Section padding="4rem 0 2rem 0">
      <FooterWrapper>
        <FooterGrid justify="space-between">
          <FooterColumn id="footerLogo">
            <FooterLogo to="/">
              <SocialIcon src="./assets/logo.png" />
            </FooterLogo>
            <FooterAddress>
              10 Rue Edouard Vaillant, 94270 Le Kremlin-Bicêtre
            </FooterAddress>

            <Row align="center" margin="auto  0 0 0" gap="1rem">
              {footerSocialData.map((social, index) => (
                <FooterSocialIcon
                  key={index}
                  href={social.url}
                  target="_blank"
                  aria-label={social.name}
                >
                  {social.icon}
                </FooterSocialIcon>
              ))}
            </Row>
          </FooterColumn>

          {footerData.map((footerItem, index) => (
            <FooterLinkItems key={index}>
              <FooterLinkTitle>{footerItem.title}</FooterLinkTitle>
              {footerItem.links.map((link, linkIndex) => (
                <FooterLink key={linkIndex} to={link.to} onClick={scrollToTop}>
                  {link.name}
                </FooterLink>
              ))}
            </FooterLinkItems>
          ))}
        </FooterGrid>
        <FooterRights>MarkPaper © 2023</FooterRights>
      </FooterWrapper>
    </Section>
  );
};

export default Footer;
