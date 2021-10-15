import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Images
import BaliTempleImg from "../../images/bali-temple.jpg";
import RiceTerraceImg from "../../images/rice-terrace.jpg";
import ExoticBromoImg from "../../images/exotic-bromo.jpg";
import MaleMaldivesImg from "../../images/male-maldives.jpg";
import IceTeaImg from "../../images/ice-tea.jpg";

const ExploreSectionContainer = tw(Element)`
    w-full
    h-screen
    flex
    flex-col
    relative
    pt-1
    pb-1
    xl:pt-2
    xl:pb-2
    items-center
`;

const Title = tw.h1`
    text-3xl
    xl:text-3xl
    2xl:text-5xl
    mt-6
    lg:mt-0
    2xl:mt-6
    2xl:mb-6
    text-gray-800
    font-bold
    text-center
`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    mt-8
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-2
    lg:pr-2
`;

const ExploreSectionWrapper = tw.div`
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    xl:mt-6
    2xl:mt-10
    max-w-sm
    xl:max-w-2xl
    2xl:max-w-4xl
`;

const Item = styled.div`
  ${tw`
        flex
        flex-col
    `}

  img {
    ${tw`
            max-w-full
            max-h-full
        `}
  }
`;

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;

export function ExploreSection() {
  return (
    <ExploreSectionContainer name="Explore">
      <Title>Explore Travel Places</Title>
      <SectionInfo>
        View our tour package and find out more about the places we will visit
        together on this journey to the beautifull of indonesia, exploring so
        many historical and amazing locations with the group and having so much
        fun.
      </SectionInfo>
      <ExploreSectionWrapper>
        <Carousel dynamicHeight={false}>
          <Item>
            <img src={BaliTempleImg} />
            <Description>Bali Temple</Description>
          </Item>
          <Item>
            <img src={RiceTerraceImg} />
            <Description>Rice Terrace</Description>
          </Item>
          <Item>
            <img src={ExoticBromoImg} />
            <Description>Exotic Bromo</Description>
          </Item>
          <Item>
            <img src={MaleMaldivesImg} />
            <Description>Male Maldives</Description>
          </Item>
          <Item>
            <img src={IceTeaImg} />
            <Description>Ice Tea</Description>
          </Item>
        </Carousel>
      </ExploreSectionWrapper>
    </ExploreSectionContainer>
  );
}
