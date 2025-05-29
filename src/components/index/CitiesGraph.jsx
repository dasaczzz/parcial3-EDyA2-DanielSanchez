import { useMemo } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { useSelector } from "react-redux";

export const CitiesGraph = ({setSelectedCity}) => {
  const {cities} = useSelector((state) => state.cities);
  const data = useMemo(() => JSON.parse(JSON.stringify(cities)), [cities]);

  const handleNodeClick = (node) => {
    setSelectedCity(node);
  };

  return (
    <div className='w-1/3 h-1/3 rounded border-1 border-gray-700'>
      <ForceGraph2D 
        width={300}
        height={300}
        graphData={data} 
        nodeAutoColorBy="id"
        linkColor={() => '#333'}  
        nodeLabel={(node) => node.id}
        onNodeClick={handleNodeClick}
      />
    </div>
  );
}
