import CytoscapeComponent from 'react-cytoscapejs';
import { stylesheet } from '../../styled/CytoscapeStyleSheet';
import cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';
import '../../index.css'
import { useCallback, useState, useEffect } from 'react';
import { seletableLayouts } from './CytoscapeLayouts';

cytoscape.use(COSEBilkent)

export const CytoscapeFrame = ({cytoElement}) => {
  const [cytoscapeObject, setCytoscapeObject] = useState(null);
  useEffect(() => {
    if (cytoscapeObject) {
      const selectedLayout = seletableLayouts['coseBilkent']
      selectedLayout.animate = true
      selectedLayout.fit = true

      cytoscapeObject.minZoom(1e-1)
      cytoscapeObject.maxZoom(0.5)
      cytoscapeObject.layout(selectedLayout).run();
      cytoscapeObject.maxZoom(5);
    }
  }, [cytoscapeObject])

  const cyCallback = useCallback((newCytoObject) => {
    if (cytoscapeObject) return
    setCytoscapeObject(newCytoObject)
  })

  return (
    <CytoscapeComponent
      elements={CytoscapeComponent.normalizeElements(cytoElement)}
      stylesheet={stylesheet}
      cy={cyCallback}
      wheelSensitivity={0.5}
      className='NormalChart'
    />
  )
}
