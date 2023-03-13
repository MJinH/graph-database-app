import { useEffect, useState } from 'react'
import { GraphFrameContainer, GraphFrameWrapper, elementColorSettings, GraphFrameTop, GraphFrameCommand, GraphFrameIcon, GraphFrameMid } from '../../styled/Frame'
import { CytoscapeFrame } from '../cytoscape/CytoscapeFrame'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faCube } from "@fortawesome/free-solid-svg-icons"
import { setRefKeys } from '../../features/cypher/CypherSlice'
import { useDispatch } from 'react-redux'
import { setInput, setRef, setRender } from '../../features/three/RenderSlice'

export const GraphFrame = ({
  rows,
  command,
  rowCount,
  index,
  refKey,
}) => {

  const [cytoElement, setCytoElement] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    let nodes = []
    let edges = []
    let threeNodes = []
    let threeLinks = []
    rows?.map((row) => {
      Object.entries(row).forEach((rowEntry) => {
        const backColor = elementColorSettings[Math.floor(Math.random() * elementColorSettings.length)].background;
        const textColor = elementColorSettings[Math.floor(Math.random() * elementColorSettings.length)].fontColor;
        const borderColor = elementColorSettings[Math.floor(Math.random() * elementColorSettings.length)].borderColor;
        const [alias, val] = rowEntry
        let source = val.start_id
        let target = val.end_id
        if (source && target) {
          edges.push({
            group: 'edges',
            data: {
              id: val.id,
              source,
              target,
              label: val.label,
              borderColor: borderColor,
              backgroundColor: backColor,
              fontColor: textColor,
              size: 1,
              caption: 'label',
              properties: val.properties,
            },
            alias,
            classes: 'edge'
          })
          threeLinks.push({
            "source": source,
            "target": target,
            "name": val.label,
          })
        } else {
          nodes.push({
            group: 'nodes',
            data: {
              id: val.id,
              label: val.label,
              borderColor: borderColor,
              backgroundColor: backColor,
              fontColor: textColor,
              size: 55,
              caption: Object.prototype.hasOwnProperty.call(val.properties, 'name') ? 'name' : 'id',
              properties: val.properties,
            },
            alias,
            classes: 'node',
          })
          threeNodes.push({
            "id": val.id,
            "name": val.label,
            "val": val.properties.length >= 1 ? val.properties : '',
          })
        }
      })
    })
    let elements = { 
      nodes: nodes, 
      edges: edges, 
    }
    dispatch(setInput({ nodes: threeNodes, links: threeLinks, refKey: refKey }))
    setCytoElement(elements)
  }, [rows])

  const removeFrame = () => {
    dispatch(setRefKeys())
  }
  
  const renderThree = () => {
    dispatch(setRender({ render: true }))
    dispatch(setRef({ refKey: refKey }))
  }

  return (
    <GraphFrameContainer>
      <GraphFrameWrapper>
        <GraphFrameTop>
          <GraphFrameCommand>
            {`command: ${command}`}
          </GraphFrameCommand>
          <GraphFrameIcon>
            <FontAwesomeIcon icon={faCube} className='three' onClick={renderThree} />
            {index === 0 && <FontAwesomeIcon icon={faXmark} className='close' onClick={removeFrame} />}
          </GraphFrameIcon>
        </GraphFrameTop>
        <GraphFrameMid>
          {`row count: ${rowCount}`}
        </GraphFrameMid>
        { cytoElement && <CytoscapeFrame cytoElement={cytoElement} />}
      </GraphFrameWrapper>
    </GraphFrameContainer>
  )
}
