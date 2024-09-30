import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Grid, Tag } from "antd";
import "./Home.css";

const { Text } = Typography;
const { useBreakpoint } = Grid;

function Home() {
  const screens = useBreakpoint(); // Get the current screen sizesF
  const [title, setTitle] = useState("title");
  const [subtitle, setSubtitle] = useState("subtitle");
  const [maxTitleLength, setMaxTitleLength] = useState(0);
  const [maxSubtitleLength, setMaxSubtitleLength] = useState(0);
  const [titleClass, setTitleClass] = useState("title-xl");
  const [subtitleClass, setSubtitleClass] = useState("subtitle-xl");
  const [tagClass, setTagClass] = useState("tag-news-xl");

  // Função que aplica truncamento ao título e subtítulo
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  useEffect(() => {
    // Update max lengths based on the screen size
    if (screens.xxl) {
      setMaxTitleLength(23);
      setMaxSubtitleLength(48);
      setTitleClass("title-xxl");
      setSubtitleClass("subtitle-xxl");
      setTagClass("tag-news-xxl");
    } else if (screens.xl) {
      setMaxTitleLength(17);
      setMaxSubtitleLength(35);
      setTitleClass("title-xl");
      setSubtitleClass("subtitle-xl");
      setTagClass("tag-news-xl");
    } else if (screens.lg) {
      setMaxTitleLength(13);
      setMaxSubtitleLength(29);
      setTitleClass("title-lg");
      setSubtitleClass("subtitle-lg");
      setTagClass("tag-news-lg");
    } else if (screens.md) {
      setMaxTitleLength(10);
      setMaxSubtitleLength(21);
      setTitleClass("title-md");
      setSubtitleClass("subtitle-md");
      setTagClass("tag-news-md");
    } else if (screens.sm) {
      setMaxTitleLength(7);
      setMaxSubtitleLength(15);
      setTitleClass("title-sm");
      setSubtitleClass("subtitle-sm");
      setTagClass("tag-news-sm");
    } else if (screens.xs) {
      setMaxTitleLength(17);
      setMaxSubtitleLength(19);
      setTitleClass("title-xs");
      setSubtitleClass("subtitle-xs");
      setTagClass("tag-news-xs");
    }
  }, [screens]);

  return (
    <div style={{ marginTop: "100px" }}>
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Text className="anime-news">AnimeRadar</Text>
      </Row>

      <Row style={{ justifyContent: "center", marginBottom: "60px" }}>
        <Text className="subtitle">
          Stay ahead in the anime game, or risk being hit with filler episodes!
        </Text>
      </Row>

      <Row>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="image-container" style={{ flexGrow: 1, display: "flex" }}>
            <img
              src="https://a.storyblok.com/f/178900/960x537/b14fcaf531/visions-of-mana-elemental-vessels.jpg/m/filters:quality(95)format(webp)"
              alt="example"
              className="image"
            />
            <div className="overlay">
              <div className="tags">
                <Tag className={tagClass} color="white">
                  NEWS
                </Tag>
                <Tag className={tagClass} color="white">
                  GAMES
                </Tag>
              </div>
              <Text className={titleClass}>
                {truncateText(
                  "Visions of Mana Trailer Introduces Elemental Vessels",
                  maxTitleLength
                )}
              </Text>
              <Text className={subtitleClass}>
                {truncateText(
                  "Next entry in the series hits consoles and PC on August 29",
                  maxSubtitleLength
                )}
              </Text>
            </div>
          </div>
        </Col>

        <Col
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
        >
          <div className="image-container" style={{ marginBottom: "3%" }}>
            <img
              src="https://a.storyblok.com/f/178900/960x540/31eea450b4/cr_atri_hero.png/m/576x0/filters:quality(95)format(webp)"
              alt="example"
              className="image"
            />
            <div className="overlay">
              <div className="tags">
                <Tag className={tagClass} color="white">
                  NEWS
                </Tag>
                <Tag className={tagClass} color="white">
                  GAMES
                </Tag>
              </div>
              <Text className={titleClass}>
                {truncateText(
                  "ATRI - My Dear Moments - Anime Shares Creditless Ending Video",
                  maxTitleLength
                )}
              </Text>
              <Text className={subtitleClass}>
                {truncateText(
                  "The visual novel adaptation is now streaming on Crunchyroll",
                  maxSubtitleLength
                )}
              </Text>
            </div>
          </div>

          <div className="image-container">
            <img
              src="https://a.storyblok.com/f/178900/960x537/b14fcaf531/visions-of-mana-elemental-vessels.jpg/m/filters:quality(95)format(webp)"
              alt="example"
              className="image"
            />
            <div className="overlay">
              <div className="tags">
                <Tag className={tagClass} color="white">
                  NEWS
                </Tag>
                <Tag className={tagClass} color="white">
                  GAMES
                </Tag>
              </div>
              <Text className={titleClass}>
                {truncateText(
                  "Visions of Mana Trailer Introduces Elemental Vessels",
                  maxTitleLength
                )}
              </Text>
              <Text className={subtitleClass}>
                {truncateText(
                  "Next entry in the series hits consoles and PC on August 29",
                  maxSubtitleLength
                )}
              </Text>
            </div>
          </div>
        </Col>
      </Row>

      <Row style={{ height: "100px" }}></Row>
    </div>
  );
}

export default Home;
