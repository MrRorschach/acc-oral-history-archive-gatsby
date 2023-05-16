import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              style={{
                width: "410px",
                display: "inline-block",
              }}
            >
            <iframe onLoad={console.log("Loaded")} width="410" height="240" src={item.iframeurl} title="YouTube video player" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
          <p>{item.text}</p>
          </div>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      iframeurl: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
