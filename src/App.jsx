import React from "react";
import "../src/styles/App.css";
import {
  PosterBackground,
  PosterPageBackground,
  ArticlePoster,
  SectionPoster,
  ReleaseContent,
  ColumnRelease,
  DateRelease,
  Title,
  Paragraph,
  SubTitle,
  ButtonListen,
  ButtonShere,
} from "./styles/Poster";
import { PiPlayBold } from "react-icons/pi";
import LayoutContainer from "./Layout/Index";

const App = () => {
  return (
    <LayoutContainer>
      <PosterPageBackground>
        <PosterBackground />
      </PosterPageBackground>

      <ArticlePoster>
        <SectionPoster>
          <ReleaseContent>
            <ColumnRelease $type="album">
              <DateRelease>
                <span>Cruz Cafuné</span>— Released May 25, 2023
              </DateRelease>
              <img src="./src/assets/images/portada.jpg" alt="cover" />
            </ColumnRelease>
            <ColumnRelease $type="action">
              <Paragraph>
                <span>Cruz Cafuné</span>— Released May 25, 2023
              </Paragraph>
              <Title>Level Days</Title>
              <SubTitle>Me Muevo con dios</SubTitle>
              <div>
                <ButtonListen>
                  <PiPlayBold style={{ marginRight: "10px" }} />
                  Listen Now
                </ButtonListen>
                <ButtonShere>Shere</ButtonShere>
              </div>
            </ColumnRelease>
          </ReleaseContent>
        </SectionPoster>
      </ArticlePoster>
    </LayoutContainer>
  );
};

export default App;
