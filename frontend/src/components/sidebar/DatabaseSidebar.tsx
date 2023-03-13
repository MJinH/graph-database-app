import { RootState } from '../../RootState'
import { DatabaseSide, DatabaseSideElement, DatabaseSideType, EdgeElement, labelColorSettings, NodeElement, LabelWrapper, DatabaseSideWrapper } from '../../styled/Sidebar'
import { connect } from 'react-redux/es/exports'
import { getMetadata } from '../../features/meta/MetadataSlice'
import { useEffect } from 'react'

type DatabaseSidebarProps = {
    graph: string,
    edges: Array<any>,
    nodes: Array<any>,
    getMeta: () => void,
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
    getMeta,
}: DatabaseSidebarProps): JSX.Element => {

  useEffect(() => {
    getMeta()
  },[])

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

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMeta: () => {
      dispatch(getMetadata())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(DatabaseSidebar)
