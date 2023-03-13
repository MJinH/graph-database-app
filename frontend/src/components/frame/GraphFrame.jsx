import { useEffect, useState } from 'react'
import { GraphFrameContainer, GraphFrameWrapper, elementColorSettings, GraphFrameTop, GraphFrameCommand, GraphFrameIcon, GraphFrameMid } from '../../styled/Frame'
import { CytoscapeFrame } from '../cytoscape/CytoscapeFrame'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { setRefKeys } from '../../features/cypher/CypherSlice'
import { useDispatch } from 'react-redux'

export const GraphFrame = ({
  rows,
  command,
  rowCount,
  index,
}) => {

  const [cytoElement, setCytoElement] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    let nodes = []
    let edges = []
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
        }
      })
    })
    let elements = { 
      nodes: nodes, 
      edges: edges, 
    }
    setCytoElement(elements)
  }, [rows])

  const removeFrame = () => {
    dispatch(setRefKeys())
  }  

  return (
    <GraphFrameContainer>
      <GraphFrameWrapper>
        <GraphFrameTop>
          <GraphFrameCommand>
            {`command: ${command}`}
          </GraphFrameCommand>
          <GraphFrameIcon>
            {index === 0 && <FontAwesomeIcon icon={faXmark} className='close' onClick={removeFrame} />}
          </GraphFrameIcon>
        </GraphFrameTop>
        <GraphFrameMid>
          {`row count: ${rowCount}`}
        </GraphFrameMid>
        { cytoElement && <CytoscapeFrame  cytoElement={cytoElement} />}
      </GraphFrameWrapper>
    </GraphFrameContainer>
  )
}
