import { css } from "@emotion/css";
import travelImg from "../../../img/travel-website.png";
import clothingShop from "../../../img/clothing-shop.png";
import cryptoWebsite from "../../../img/crypto-website.png";
export const PausedOverlay1 = () => (
  <div>
    <img
      src={travelImg}
      alt="travel website thumbnail"
      className={css`
        /* Thumbnail image expands to cover the player */
        position: absolute;
        width: 100%;
        height: 96%;
        top: 0;
        left: 0;
        object-fit: cover;
        filter: brightness(60%);
      `}
    />
    <div
      className={css`
        /* Ensure the description text is displayed on top of the thumbnail image */
        z-index: 1;
        font-family: sans-serif;
        /* Position the text in the bottom-left corner of the overlay */
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1em;
      `}
    ></div>
  </div>
);

export const PausedOverlay2 = () => (
  <div>
    <img
      src={clothingShop}
      alt="travel website thumbnail"
      className={css`
        /* Thumbnail image expands to cover the player */
        position: absolute;
        width: 100%;
        height: 92%;
        top: 0;
        left: 0;
        object-fit: cover;
        filter: brightness(60%);
      `}
    />
    <div
      className={css`
        /* Ensure the description text is displayed on top of the thumbnail image */
        z-index: 1;
        font-family: sans-serif;
        /* Position the text in the bottom-left corner of the overlay */
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1em;
      `}
    ></div>
  </div>
);

export const PausedOverlay3 = () => (
  <div>
    <img
      src={cryptoWebsite}
      alt="travel website thumbnail"
      className={css`
        /* Thumbnail image expands to cover the player */
        position: absolute;
        width: 100%;
        height: 92%;
        top: 0;
        left: 0;
        object-fit: cover;
        filter: brightness(60%);
      `}
    />
    <div
      className={css`
        /* Ensure the description text is displayed on top of the thumbnail image */
        z-index: 1;
        font-family: sans-serif;
        /* Position the text in the bottom-left corner of the overlay */
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 1em;
      `}
    ></div>
  </div>
);