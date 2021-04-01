import { Parallax as ParallaxContainer, Background } from "react-parallax";
import TextSection from "../../Components/TextSection/TextSection";
const Parallax = ({ props }) => {
  return (
    <div
      style={{
        width: "100vw",
        marginLeft: "-12.5%",
        backgroundColor: "black",
        marginBottom: "5%",
      }}
    >
      <ParallaxContainer
        blur={{ min: -15, max: 30 }}
        bgImage={props.image.url}
        bgImageAlt={props.image.id}
        strength={-500}
      >
        <div style={{ background: "rgba(0,0,0,0.5)", paddingLeft: "9%" }}>
          <TextSection
            text={props}
            index={0}
            style={{ background: "rgba(0,0,0,0.5)", marginLeft: "5%" }}
          />
        </div>
      </ParallaxContainer>
    </div>
  );
};

export default Parallax;
