import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import TreeChart from "./Tree";
import useResizeObserver from "./useResizeObserver";

export const OrgChartComponent = (props, ref) => {
  const d3Container = useRef(null);
  const dimensions = useResizeObserver(d3Container);
  const [chartObj, setChartObj] = useState({});
  let chart = null;

  function addNode(node) {
    chart.addNode(node);
  }

  props.setClick(addNode);

  const openSearch = () => {
    chartObj.searchUsers();
  };

  const closeSearch = () => {
    console.log("close");
    chartObj.closeSearchBox();
  };

  const goBack = () => {
    chartObj.goBack();
  };

  // We need to manipulate DOM
  useEffect(() => {
    if (props.data && d3Container.current) {
      if (!chart) {
        chart = new TreeChart();
        setChartObj(chart);
      }
console.log(dimensions);
console.log(d3Container.current);
      chart
        .container(d3Container.current)
        .data(props.data)
        .svgWidth(dimensions.width)
        .initialZoom(0.6)
        .onNodeClick(d => {
          console.log(d + " node clicked");
          console.log("props", Object.keys(props), d);
          props.onNodeClick(d);
        })
        .render();
    }
  }, [props.data, d3Container.current, dimensions]);

  const addNodeEl = () => {
    chartObj.addNodeElement();
  };

  const fullScreen = () => {
    chartObj.toggleFullScreen();
  };

  const zoomNode = () => {
    // chartObj.zoomNode();
  };

  return (
    <div>
      <div ref={d3Container}>
        {/*<button onClick={openSearch}>search</button>
        <button onClick={goBack}>Back</button>*/}
        <button onClick={fullScreen}>Full Screen</button>
        {/*<button onClick={zoomNode}>Locate</button>*/}
      </div>
      <div className="user-search-box">
        <div className="input-box">
          <div className="close-button-wrapper">
            <button onClick={closeSearch}> close</button>
          </div>
          <div className="input-wrapper">
            <input type="text" className="search-input" placeholder="Search" />
            <div className="input-bottom-placeholder">
              By Firstname, Lastname, Tags
            </div>
          </div>
          <div />
        </div>
        <div className="result-box">
          <div className="result-header"> RESULTS </div>
          <div className="result-list">
            <div className="buffer" />
          </div>
        </div>
      </div>
    </div>
  );
};
