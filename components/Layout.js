import styled from "styled-components";
import { useRouter } from "next/router";

import { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { useCartModal } from "shared/hooks";

import { useRecoilState } from "recoil";
import { showFavorites as showFavoritesAtoms } from "atoms.js";

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.gray_10};

  overflow-x: hidden;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: 1900px;
  margin-top: 76px;
  overflow: hidden;
`;
const Layout = ({ children }) => {
  const router = useRouter();

  const [showFavorites, setShowFavorites] = useRecoilState(showFavoritesAtoms);

  const { hideWithTimer, hideTemporarly, hideInstantly } = useCartModal();

  //disabled scrolling when modal is open
  useEffect(() => {
    // if (showFavorites) document.body.classList.add("modal-open");
    // else document.body.classList.remove("modal-open");
  }, [showFavorites]);

  useEffect(() => {
    hideWithTimer();
    hideTemporarly();
    hideInstantly();
  }, [router.asPath]);

  return (
    <MainContainer>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </MainContainer>
  );
};
export default Layout;
