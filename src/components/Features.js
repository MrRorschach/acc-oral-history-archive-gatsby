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
                width: "240px",
                display: "inline-block",
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <iframe width="240" height="140" src={item.iframeurl} title="YouTube video player" frameborder="0" allow="encrypted-media; picture-in-picture; web-share" allowfullscreen></iframe>
          <p>{item.iframeurl}</p>
          <p>{item.text}</p>
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
