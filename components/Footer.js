import { Links, BoldRegularText } from "shared/components";

import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: ${(p) => p.theme.colors.gray_100};
  height: 300px;
  width: 100%;

  & p {
    color: #fdfef4 !important;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>This is a pokemon website</p>
      <BoldRegularText>Contact me</BoldRegularText>
      <p>Email: elmer.lignestal@live.se</p>
      <Links />
    </StyledFooter>
  );
};

export default Footer;
