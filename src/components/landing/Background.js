import MOBILE_IMAGES from "../../assets/landingImages/mobile/images";
import TABLET_HORIZONTAL from "../../assets/landingImages/tablet/horizontal/images";
import TABLET_VERTICAL from "../../assets/landingImages/tablet/vertical/images";
import DESKTOP_IMAGES from "../../assets/landingImages/desktop/images";
import styles from "../components/landing.module.css";

function Background(props) {
  const mobileImg1 = styles.landingBgImage1;
  const mobileImg2 = styles.landingBgImage2;

  return (
    <div>
      <picture>
        <source
          srcSet={`${DESKTOP_IMAGES.BgImage1Webp} 1x, ${DESKTOP_IMAGES.BgImage1Webp2x} 2x`}
          media="(min-width: 1200px)"
          type="image/webp"
        />
        <source
          srcSet={`${DESKTOP_IMAGES.BgImage1Png} 1x, ${DESKTOP_IMAGES.BgImage1Png2x} 2x`}
          media="(min-width: 1200px)"
        />
        <source
          srcSet={`${TABLET_HORIZONTAL.BgImage1Webp} 1x, ${TABLET_HORIZONTAL.BgImage2Webp2x} 2x`}
          media="(min-width: 1020px)"
          type="image/webp"
        />
        <source
          srcSet={`${TABLET_HORIZONTAL.BgImage1Png} 1x, ${TABLET_HORIZONTAL.BgImage1Png2x} 2x`}
          media="(min-width: 1020px)"
        />
        <source
          srcSet={`${TABLET_VERTICAL.BgImage1Webp} 1x, ${TABLET_VERTICAL.BgImage1Webp2x} 2x`}
          media="(min-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet={`${TABLET_VERTICAL.BgImage1Png} 1x, ${TABLET_VERTICAL.BgImage1Png2x} 2x`}
          media="(min-width: 768px)"
        />
        <img
          className={mobileImg1}
          src={MOBILE_IMAGES.BgImage1Png}
          alt="BgImage1"
        ></img>
      </picture>
      <picture>
        <source
          srcSet={`${DESKTOP_IMAGES.BgImage2Webp} 1x, ${DESKTOP_IMAGES.BgImage2Webp2x} 2x`}
          media="(min-width: 1200px)"
          type="image/webp"
        />
        <source
          srcSet={`${DESKTOP_IMAGES.BgImage2Png} 1x, ${DESKTOP_IMAGES.BgImage2Png2x} 2x`}
          media="(min-width: 1200px)"
        />
        <source
          srcSet={`${TABLET_HORIZONTAL.BgImage2Webp} 1x, ${TABLET_HORIZONTAL.BgImage2Webp2x} 2x`}
          media="(min-width: 1020px)"
          type="image/webp"
        />
        <source
          srcSet={`${TABLET_HORIZONTAL.BgImage2Png} 1x, ${TABLET_HORIZONTAL.BgImage2Png2x} 2x`}
          media="(min-width: 1020px)"
        />
        <source
          srcSet={`${TABLET_VERTICAL.BgImage2Webp} 1x, ${TABLET_VERTICAL.BgImage2Webp2x} 2x`}
          media="(min-width: 768px)"
          type="image/webp"
        />
        <source
          srcSet={`${TABLET_VERTICAL.BgImage2Png} 1x, ${TABLET_VERTICAL.BgImage2Png2x} 2x`}
          media="(min-width: 768px)"
        />
        <img
          className={mobileImg2}
          src={MOBILE_IMAGES.BgImage2Png}
          alt="BgImage2"
        ></img>
      </picture>
    </div>
  );
}

export default Background;
