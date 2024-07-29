import React from "react";
import { Row, Col, Typography, Divider } from "antd";
import NewsCard from "../../components/newsCard/newsCard";

const { Title, Link } = Typography;

function Home() {
  return (
    <div>
      <Row>
        <Col
          className="gutter-row"
          span={6}
          style={{ borderRight: "1px solid #f0f0f0", paddingRight: "10px" }}
        >
          <Title level={3}>Latest News</Title>
          <Divider
            style={{
              borderColor: "#1668dc",
              borderWidth: "4px",
              marginTop: "4px",
            }}
          />

          <NewsCard
            image="https://a.storyblok.com/f/178900/960x537/b14fcaf531/visions-of-mana-elemental-vessels.jpg/m/filters:quality(95)format(webp)"
            tags="News; Games"
            date="Jul 29, 2024 14:05 WEST"
            title="Visions of Mana Trailer Introduces Elemental Vessels"
            subtitle="Next entry in the series hits consoles and PC on August 29"
            content="Following up on last month's release date reveal, Square Enix is back with another look at Visions of Mana. This time the subject is Elemental Vessels, and a new deep dive video specifically tackles the action-RPG's Gnome Shovel, Lumina Lantern and Shade Sight vessels. The PlayStation Blog has extensive commentary on the topic from producer Masaru Oyamada and director Ryosuke Yoshida, so definitely check that out if you want more info on Elemental Vessels and the thought that went into them."
            author="Joseph Luster"
          />
          <NewsCard
            image="https://a.storyblok.com/f/178900/960x540/31eea450b4/cr_atri_hero.png/m/576x0/filters:quality(95)format(webp)"
            tags="News"
            date="Jul 29, 2024 13:54 WEST"
            title="ATRI - My Dear Moments - Anime Shares Creditless Ending Video"
            subtitle="The visual novel adaptation is now streaming on Crunchyroll"
            content="Join the high-performance Humanoid Atri as she brings joy (and explosions) to the world of the future! Today, the visual novel adaptation has shared a creditless version of the show's ending sequence, featuring the cast in chibi form. Check out the video, set to the show's ending song, 'Yes to No no Aida ni' by idol group 22/7: Based on the visual novel developed by Frontwing and Makura, Makoto Kato (Bloom Into You, Fanfare of Adolescence) directs the ATRI -My Dear Moments- anime at studio TROYCA, with series compositon by Jukki Hanada (Sound! Euphonium), character designs adapted for animation by Michio Sato and music by Fuminori Matsumoto.            Crunchyroll is currently streaming the series, describing it thus: In the near future, a sudden and unexplained sea rise has left much of human civilization underwater. Natsuki Ikaruga, a boy who lost his mother and one of his legs in an accident some years earlier, returns disillusioned from a harsh life in the big city to find his old countryside home half-swallowed by the sea. Left without a family, all he has to his name is the ship and submarine left to him by his oceanologist grandmother, and her debts. His only hope to restore the dreams for the future that he has lost is to take up an opportunity presented to him by the suspicious debt collector Catherine. They set sail to search the sunken ruins of his grandmother's laboratory in order to find a treasure rumor says she left there. But what they find is not riches or jewels; it is a strange girl lying asleep in a coffin at the bottom of the sea, Atri. Atri is a robot, but her appearance and her wealth of emotions would fool anyone into think she's a living, breathing human being. In gratitude for being salvaged, she makes a declaration to Natsuki. 'I want to fulfil my master's final order. Until I do, I'll be your leg!' In a little town slowly being enveloped by the ocean, an unforgettable summer is about to begin for this boy and this mysterious robot girl."
            author="Kara Dennison"
          />

          <NewsCard
            image="https://a.storyblok.com/f/178900/960x537/b14fcaf531/visions-of-mana-elemental-vessels.jpg/m/filters:quality(95)format(webp)"
            tags="News; Games"
            date="Jul 29, 2024 14:05 WEST"
            title="Visions of Mana Trailer Introduces Elemental Vessels"
            subtitle="Next entry in the series hits consoles and PC on August 29"
            content="Following up on last month's release date reveal, Square Enix is back with another look at Visions of Mana. This time the subject is Elemental Vessels, and a new deep dive video specifically tackles the action-RPG's Gnome Shovel, Lumina Lantern and Shade Sight vessels. The PlayStation Blog has extensive commentary on the topic from producer Masaru Oyamada and director Ryosuke Yoshida, so definitely check that out if you want more info on Elemental Vessels and the thought that went into them."
            author="Joseph Luster"
          />
          <NewsCard
            image="https://a.storyblok.com/f/178900/960x540/31eea450b4/cr_atri_hero.png/m/576x0/filters:quality(95)format(webp)"
            tags="News"
            date="Jul 29, 2024 13:54 WEST"
            title="ATRI - My Dear Moments - Anime Shares Creditless Ending Video"
            subtitle="The visual novel adaptation is now streaming on Crunchyroll"
            content="Join the high-performance Humanoid Atri as she brings joy (and explosions) to the world of the future! Today, the visual novel adaptation has shared a creditless version of the show's ending sequence, featuring the cast in chibi form. Check out the video, set to the show's ending song, 'Yes to No no Aida ni' by idol group 22/7: Based on the visual novel developed by Frontwing and Makura, Makoto Kato (Bloom Into You, Fanfare of Adolescence) directs the ATRI -My Dear Moments- anime at studio TROYCA, with series compositon by Jukki Hanada (Sound! Euphonium), character designs adapted for animation by Michio Sato and music by Fuminori Matsumoto.            Crunchyroll is currently streaming the series, describing it thus: In the near future, a sudden and unexplained sea rise has left much of human civilization underwater. Natsuki Ikaruga, a boy who lost his mother and one of his legs in an accident some years earlier, returns disillusioned from a harsh life in the big city to find his old countryside home half-swallowed by the sea. Left without a family, all he has to his name is the ship and submarine left to him by his oceanologist grandmother, and her debts. His only hope to restore the dreams for the future that he has lost is to take up an opportunity presented to him by the suspicious debt collector Catherine. They set sail to search the sunken ruins of his grandmother's laboratory in order to find a treasure rumor says she left there. But what they find is not riches or jewels; it is a strange girl lying asleep in a coffin at the bottom of the sea, Atri. Atri is a robot, but her appearance and her wealth of emotions would fool anyone into think she's a living, breathing human being. In gratitude for being salvaged, she makes a declaration to Natsuki. 'I want to fulfil my master's final order. Until I do, I'll be your leg!' In a little town slowly being enveloped by the ocean, an unforgettable summer is about to begin for this boy and this mysterious robot girl."
            author="Kara Dennison"
          />
        </Col>

        <Col
          className="gutter-row"
          span={12}
          style={{
            borderRight: "1px solid #f0f0f0",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Title level={3}>Spotlight</Title>
          <Divider
            style={{
              borderColor: "#1668dc",
              borderWidth: "4px",
              marginTop: "4px",
            }}
          />
        </Col>

        <Col
          className="gutter-row"
          span={6}
          style={{
            paddingLeft: "10px",
          }}
        >
          <Title level={3}>Features</Title>
          <Divider
            style={{
              borderColor: "#1668dc",
              borderWidth: "4px",
              marginTop: "4px",
            }}
          />

          <NewsCard
            image="https://a.storyblok.com/f/178900/960x537/b14fcaf531/visions-of-mana-elemental-vessels.jpg/m/filters:quality(95)format(webp)"
            tags="News; Games"
            date="Jul 29, 2024 14:05 WEST"
            title="Visions of Mana Trailer Introduces Elemental Vessels"
            subtitle="Next entry in the series hits consoles and PC on August 29"
            content="Following up on last month's release date reveal, Square Enix is back with another look at Visions of Mana. This time the subject is Elemental Vessels, and a new deep dive video specifically tackles the action-RPG's Gnome Shovel, Lumina Lantern and Shade Sight vessels. The PlayStation Blog has extensive commentary on the topic from producer Masaru Oyamada and director Ryosuke Yoshida, so definitely check that out if you want more info on Elemental Vessels and the thought that went into them."
            author="Joseph Luster"
          />
          <NewsCard
            image="https://a.storyblok.com/f/178900/960x540/31eea450b4/cr_atri_hero.png/m/576x0/filters:quality(95)format(webp)"
            tags="News"
            date="Jul 29, 2024 13:54 WEST"
            title="ATRI - My Dear Moments - Anime Shares Creditless Ending Video"
            subtitle="The visual novel adaptation is now streaming on Crunchyroll"
            content="Join the high-performance Humanoid Atri as she brings joy (and explosions) to the world of the future! Today, the visual novel adaptation has shared a creditless version of the show's ending sequence, featuring the cast in chibi form. Check out the video, set to the show's ending song, 'Yes to No no Aida ni' by idol group 22/7: Based on the visual novel developed by Frontwing and Makura, Makoto Kato (Bloom Into You, Fanfare of Adolescence) directs the ATRI -My Dear Moments- anime at studio TROYCA, with series compositon by Jukki Hanada (Sound! Euphonium), character designs adapted for animation by Michio Sato and music by Fuminori Matsumoto.            Crunchyroll is currently streaming the series, describing it thus: In the near future, a sudden and unexplained sea rise has left much of human civilization underwater. Natsuki Ikaruga, a boy who lost his mother and one of his legs in an accident some years earlier, returns disillusioned from a harsh life in the big city to find his old countryside home half-swallowed by the sea. Left without a family, all he has to his name is the ship and submarine left to him by his oceanologist grandmother, and her debts. His only hope to restore the dreams for the future that he has lost is to take up an opportunity presented to him by the suspicious debt collector Catherine. They set sail to search the sunken ruins of his grandmother's laboratory in order to find a treasure rumor says she left there. But what they find is not riches or jewels; it is a strange girl lying asleep in a coffin at the bottom of the sea, Atri. Atri is a robot, but her appearance and her wealth of emotions would fool anyone into think she's a living, breathing human being. In gratitude for being salvaged, she makes a declaration to Natsuki. 'I want to fulfil my master's final order. Until I do, I'll be your leg!' In a little town slowly being enveloped by the ocean, an unforgettable summer is about to begin for this boy and this mysterious robot girl."
            author="Kara Dennison"
          />
          <NewsCard
            image="https://a.storyblok.com/f/178900/960x537/b14fcaf531/visions-of-mana-elemental-vessels.jpg/m/filters:quality(95)format(webp)"
            tags="News; Games"
            date="Jul 29, 2024 14:05 WEST"
            title="Visions of Mana Trailer Introduces Elemental Vessels"
            subtitle="Next entry in the series hits consoles and PC on August 29"
            content="Following up on last month's release date reveal, Square Enix is back with another look at Visions of Mana. This time the subject is Elemental Vessels, and a new deep dive video specifically tackles the action-RPG's Gnome Shovel, Lumina Lantern and Shade Sight vessels. The PlayStation Blog has extensive commentary on the topic from producer Masaru Oyamada and director Ryosuke Yoshida, so definitely check that out if you want more info on Elemental Vessels and the thought that went into them."
            author="Joseph Luster"
          />
          <NewsCard
            image="https://a.storyblok.com/f/178900/960x540/31eea450b4/cr_atri_hero.png/m/576x0/filters:quality(95)format(webp)"
            tags="News"
            date="Jul 29, 2024 13:54 WEST"
            title="ATRI - My Dear Moments - Anime Shares Creditless Ending Video"
            subtitle="The visual novel adaptation is now streaming on Crunchyroll"
            content="Join the high-performance Humanoid Atri as she brings joy (and explosions) to the world of the future! Today, the visual novel adaptation has shared a creditless version of the show's ending sequence, featuring the cast in chibi form. Check out the video, set to the show's ending song, 'Yes to No no Aida ni' by idol group 22/7: Based on the visual novel developed by Frontwing and Makura, Makoto Kato (Bloom Into You, Fanfare of Adolescence) directs the ATRI -My Dear Moments- anime at studio TROYCA, with series compositon by Jukki Hanada (Sound! Euphonium), character designs adapted for animation by Michio Sato and music by Fuminori Matsumoto.            Crunchyroll is currently streaming the series, describing it thus: In the near future, a sudden and unexplained sea rise has left much of human civilization underwater. Natsuki Ikaruga, a boy who lost his mother and one of his legs in an accident some years earlier, returns disillusioned from a harsh life in the big city to find his old countryside home half-swallowed by the sea. Left without a family, all he has to his name is the ship and submarine left to him by his oceanologist grandmother, and her debts. His only hope to restore the dreams for the future that he has lost is to take up an opportunity presented to him by the suspicious debt collector Catherine. They set sail to search the sunken ruins of his grandmother's laboratory in order to find a treasure rumor says she left there. But what they find is not riches or jewels; it is a strange girl lying asleep in a coffin at the bottom of the sea, Atri. Atri is a robot, but her appearance and her wealth of emotions would fool anyone into think she's a living, breathing human being. In gratitude for being salvaged, she makes a declaration to Natsuki. 'I want to fulfil my master's final order. Until I do, I'll be your leg!' In a little town slowly being enveloped by the ocean, an unforgettable summer is about to begin for this boy and this mysterious robot girl."
            author="Kara Dennison"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
