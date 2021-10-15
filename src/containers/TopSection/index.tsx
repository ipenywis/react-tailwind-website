import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import tw from "twin.macro";
import { NavBar } from "../../components/NavBar";
import BackgroundImage from "../../images/indonesia-high-res.jpg";
import { BsArrowDownCircle } from "react-icons/bs";

const TopSectionContainer = styled.div`
  ${tw`
        w-full
        flex
        flex-col
        h-screen
        relative
    `};
`;

const LandingSection = styled.div`
  ${tw`
        w-full
        h-screen
        flex
        flex-col
    `};

  background-image: url(${BackgroundImage}),
    linear-gradient(to left, #005b9c, #b1d1b148);
  background-size: cover;
  background-position: bottom 10% left;
  background-blend-mode: overlay;
`;

const InfoSection = styled.div`
  ${tw`
        absolute
        top[150px]
        left-3
        lg:top[150px]
        lg:right-10
        lg:left-auto
        2xl:right-60
        2xl:top[240px]
        2xl:left-auto
    `};
`;

const FloatingText = styled.h1`
  ${tw`
        m-0
        font-black
        text-white
        font-size[60px]
        line-height[25px]
        lg:font-size[125px]
        lg:line-height[90px]
        2xl:font-size[170px]
        2xl:line-height[125px]
        font-family["Archivo Narrow"]
        flex
        items-center
    `};
`;

const OutlinedTextSvg = styled.svg`
  font: bold 100px Century "Archivo Narrow", Arial;
  ${tw`
        width[550px]
        height[100px]
        lg:width[580px]
        lg:height[110px]
        2xl:width[550px]
        2xl:height[110px]
        flex
    `};
  overflow: overlay;

  text {
    max-height: 100%;
    flex: 1;
    fill: none;
    stroke: white;
    stroke-width: 2px;
    stroke-linejoin: round;
    z-index: 99;
    ${tw`
      2xl:transform[translateY(113px)]
      lg:transform[translateY(97px)]
      transform[translateY(71px)]
    `};
    text-shadow: 0px 0px 0px rgba(255, 255, 255, 0.5);
  }
`;

const DescriptionText = styled.p`
  ${tw`
        text-xl
        lg:text-lg
        text-white
        text-opacity-80
        mt-10
        max-w-xs
        lg:max-w-lg
        2xl:max-w-xl
    `};
`;

const ViewMoreButton = styled.button`
  ${tw`
        absolute
        bottom-4
        left-1/2
        -translate-x-1/2
        text-white
        text-4xl
        transition-colors
        duration-200
        hover:text-green-400
    `};
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LandingSection>
        <NavBar />
        <InfoSection>
          <FloatingText>WORLD</FloatingText>
          <FloatingText style={{ display: "inline-flex" }}>
            OF
            <OutlinedTextSvg viewBox="0 0 530 100">
              <text>PARADISE,</text>
            </OutlinedTextSvg>
          </FloatingText>
          <FloatingText>INDONESIA.</FloatingText>
          <DescriptionText>
            Let's explore of the third largest countries in the world, namely
            indonesia. Enjoy 3 vacation packages at competitive prices and
            strong soul.
          </DescriptionText>
        </InfoSection>
        <ViewMoreButton>
          <Link to="Explore" smooth={"easeInOutQuad"} duration={1500}>
            <BsArrowDownCircle />
          </Link>
        </ViewMoreButton>
      </LandingSection>
    </TopSectionContainer>
  );
}
