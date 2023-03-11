import { RootState } from '../../RootState'
import { DatabaseSide, DatabaseSideElement, DatabaseSideType, EdgeElement, labelColorSettings, NodeElement, LabelWrapper, DatabaseSideWrapper } from '../../styled/Sidebar'
import { connect } from 'react-redux/es/exports'

type DatabaseSidebarProps = {
    graph: string,
    edges: Array<any>,
    nodes: Array<any>,
}

type NodeLabelsProps = {
  nodes: Array<any>,
}

type EdgeLabelsProps = {
  edges: Array<any>,
}

const NodeLabels = ({
  nodes,
}: NodeLabelsProps) => {
  const list = nodes.map((node) => {
    const backColor = labelColorSettings[Math.floor(Math.random() * labelColorSettings.length)].background;
    const textColor = labelColorSettings[Math.floor(Math.random() * labelColorSettings.length)].color;
    return (
      <NodeElement style={{ backgroundColor: backColor, color: textColor }}>
        {`(${node.cnt}) ${node.name}`}
      </NodeElement>
    )
  })
  return (
    <>
     {list}
    </>
  )
}

const EdgeLabels = ({
 edges, 
}: EdgeLabelsProps) => {
  const list = edges.map((edge) => {
    return (
      <EdgeElement>
        {`(${edge.cnt}) ${edge.name}`}
      </EdgeElement>
    )
  })
  return (
    <>
     {list}
    </>
  )
}

export const DatabaseSidebar = ({
    graph,
    edges,
    nodes,
}: DatabaseSidebarProps): JSX.Element => {
  return (
    <DatabaseSide id='databaseSide'>
      <DatabaseSideWrapper id='databaseWrapper'>
        <DatabaseSideElement>
          <DatabaseSideType>
            Graph Name
          </DatabaseSideType>
          {graph}
        </DatabaseSideElement>
        <DatabaseSideElement>
          <DatabaseSideType>
            Node Labels
          </DatabaseSideType>
          <LabelWrapper>
            <NodeLabels nodes={nodes} />
          </LabelWrapper>
        </DatabaseSideElement>
        <DatabaseSideElement>
          <DatabaseSideType>
            Edge Labels
          </DatabaseSideType>
          <LabelWrapper>
            <EdgeLabels edges={edges} />
          </LabelWrapper>
        </DatabaseSideElement>
      </DatabaseSideWrapper>
    </DatabaseSide>
  )
}

const mapStateToProps = (state: RootState) => {
    return {
        graph: state.metadataReducer.graph,
        edges: state.metadataReducer.edges,
        nodes: state.metadataReducer.nodes,
    }
}

export default connect(mapStateToProps,null)(DatabaseSidebar)
