import ForceGraph3d from '3d-force-graph';
import fromKapsule from 'react-kapsule'
import { ThreeCanvas, RenderButton } from '../../styled/Frame';
import { useDispatch } from 'react-redux';
import { setRender } from '../../features/three/RenderSlice';

const Graph = fromKapsule(ForceGraph3d)

export const ThreeRenderer = ({inputData}) => {

  const dispatch = useDispatch()  
  const gData = {
    nodes: inputData.nodes?.map((node) => ({ id: node.id, name: node.name, val: node.val })),
    links: inputData.links?.map(link => ({ source: link.source, target: link.target  }))
  };

  const setRenderPage = () => {
    dispatch(setRender({ render: false }))
  }

  return (
    <>
    <ThreeCanvas>
      <RenderButton onClick={() => setRenderPage()}>
        Back
      </RenderButton>
      <Graph
        className='three-canvas' 
        graphData={gData}
        cooldownTicks={300}
        cooldownTime={20000}
        autoColorBy="group"
        forceEngine="ngraph"
      />
    </ThreeCanvas>
    </>
  )
}
