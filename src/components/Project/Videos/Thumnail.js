import React from 'react';
import { css } from "@emotion/css";

const Thumnail = ({imgSrc}) => {
  return (
    <div>
      <img
        src={imgSrc}
        alt="thumbnail"
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
}

export default Thumnail