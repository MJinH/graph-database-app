export const initLocation = {};

const coseBilkentLayout = {
  name: 'cose-bilkent',
  idealEdgeLength: 100,
  refresh: 300,
  nodeDimensionsIncludeLabels: true,
  fit: false,
  randomize: true,
  padding: 10,
  nodeRepulsion: 9500,
  stop(event) {
    event.cy.nodes().forEach((ele) => {
      initLocation[ele.id()] = { x: ele.position().x, y: ele.position().y };
    });
  },
};

const colaLayout = {
  name: 'cola',
  animate: true,
  fit: false,
  avoidOverlap: true,
  stop(event) {
    event.cy.nodes().forEach((ele) => {
      initLocation[ele.id()] = { x: ele.position().x, y: ele.position().y };
    });
  },
};

const concentricLayout = {
  name: 'concentric',
  fit: false,
  height: 100,
  width: 100,
  stop(event) {
    event.cy.nodes().forEach((ele) => {
      initLocation[ele.id()] = { x: ele.position().x, y: ele.position().y };
    });
  },
};

export const seletableLayouts = {
  concentric: concentricLayout,
  cola: colaLayout,
  coseBilkent: coseBilkentLayout,
};

export const defaultLayout = seletableLayouts.coseBilkent;
