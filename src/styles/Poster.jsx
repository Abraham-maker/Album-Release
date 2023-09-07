import { styled, css } from "styled-components";
import { device } from "../config";

export const PosterPageBackground = styled.div`
  width: 100%;
  height: 100vh;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  mask-image: linear-gradient(180deg, black 90%, transparent 100%);
`;

export const PosterBackground = styled.div`
  background-image: url("../src/assets/images/cover.jpg");
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background-position: center;
  background-size: cover;
  z-index: 10000;
  filter: blur(5px) brightness(25%);
`;

export const ArticlePoster = styled.article`
  margin-left: auto;
  margin-right: auto;

  @media ${device.mobile} {
    max-width: 532px;
  }

  @media ${device.tablet} {
    max-width: 768px;
  }

  @media ${device.laptop} {
    max-width: 992px;
  }

  @media ${device.desktop} {
    padding: 0 1rem;
  }
`;

export const SectionPoster = styled.section`
  margin-bottom: 5rem;
  padding-top: 5rem;
  margin-top: 2rem;

  @media ${device.tablet} {
    margin-top: 7rem;
  }
`;

export const ReleaseContent = styled.div`
  @media ${device.tablet} {
    grid-column-gap: 2rem;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-column-gap: 3rem;
  }
`;

export const ColumnRelease = styled.div`
  ${(props) => {
    switch (props.$type) {
      case "album":
        return css`
          margin-bottom: 2rem;
          position: relative;

          @media ${device.mobile} {
            padding: 0;
          }

          @media ${device.tablet} {
            padding-left: 1.5rem;
          }

          @media ${device.laptop} {
            grid-column: 1/3;
          }
        `;
      case "action":
        return css`
          display: flex;
          justify-content: center;
          flex-direction: column;

          @media ${device.laptop} {
            grid-column: 3/6;
          }
        `;
      default:
        break;
    }
  }}

  img {
    aspect-ratio: 1/1;
    overflow: hidden;
    display: block;
    object-fit: cover;
    width: 100%;
  }
`;

export const DateRelease = styled.div`
  position: absolute;
  left: -5px;
  bottom: 0;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  font-style: italic;
  font-size: 18px;
  user-select: none;
  display: none;

  @media ${device.tablet} {
    display: block;
  }

  span {
    color: #ffffff;
    font-weight: 600;
  }
`;

export const Title = styled.h1`
  margin-bottom: 0;
  margin-top: 0;
  font-weight: 600;
  word-break: break-word;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  line-height: 1;
  font-size: 32px;

  @media ${device.tablet} {
    font-size: 42px;
  }
`;

export const SubTitle = styled.p`
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-size: 2em;
  line-height: 1;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 2rem;
  font-style: italic;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  font-size: 18px;

  span {
    color: #ffffff;
    font-weight: 600;
  }

  @media ${device.mobile} {
    display: block;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const ButtonListen = styled.button`
  vertical-align: top;
  background-color: #2489a7;
  color: #f1f1f1;
  font-size: 16px;
  padding: 1.6rem 1.8rem;
  height: 25px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  font-family: "Monument Extended", "Helvetica", Arial, sans-serif;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border: none;
  letter-spacing: 0.1em;
  position: relative;
  transition: 0.2s;

  &&:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const ButtonShere = styled.a`
  user-select: none;
  text-decoration: none;
  font-weight: 600;
  vertical-align: top;
  margin-left: 1rem;
  font-size: 16px;
  padding: 1rem 1.8rem;
  color: #f1f1f1;
  background: transparent;
  border: solid 1px #f1f1f1;
  border-radius: 0;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: 0.2s;
  position: relative;

  &&:hover {
    background-color: #fff;
    color: #000;
  }
`;
