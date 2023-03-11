import { useEffect } from 'react'
import { getMetadata } from '../../features/meta/MetadataSlice'
import { RootState } from '../../RootState'
import { connect } from 'react-redux/es/exports'

type GraphFrame = {
  graph: string,
  getMeta: () => void,
}

export const GraphFrame = ({
  graph,
  getMeta,
}: GraphFrame): JSX.Element => {
  
  useEffect(() => {
    getMeta()
  }, [])

  return (
    <div>GraphFrame</div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    graph: state.metadataReducer.graph,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMeta: () => {
      dispatch(getMetadata())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GraphFrame)
