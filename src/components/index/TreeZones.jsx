import Tree from "react-d3-tree";
import { useRef, useEffect, useState } from "react";

export const TreeZones = ({ selectedCity }) => {
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [treeData, setTreeData] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formPosition, setFormPosition] = useState({ x: 0, y: 0 });
  const [targetNode, setTargetNode] = useState(null);
  const [newNodeName, setNewNodeName] = useState("");

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  useEffect(() => {
    if (selectedCity?.zones) {
      setTreeData(JSON.parse(JSON.stringify(selectedCity.zones))); // clonar
    }
  }, [selectedCity]);

  const addChild = () => {
  if (!newNodeName.trim() || !treeData) return;

  const newData = JSON.parse(JSON.stringify(treeData));

  const addToNode = (node, originalTarget) => {
    if (node.name === originalTarget.name && JSON.stringify(node.children) === JSON.stringify(originalTarget.children)) {
      if (!node.children) node.children = [];
      node.children.push({ name: newNodeName });
      node.__rd3t = { collapsed: false };
    } else if (node.children) {
      node.children.forEach(child => addToNode(child, originalTarget));
    }
  };

  addToNode(newData, targetNode);

  setTreeData(newData);
  setShowForm(false);
  setNewNodeName("");
};

  const getTreeHeight = (node) => {
    if (!node || !node.children || node.children.length === 0) return 1;
    return 1 + Math.max(...node.children.map(getTreeHeight));
  };

  const countNodes = (node) => {
    if (!node) return 0;
    if (!node.children || node.children.length === 0) return 1;
    return 1 + node.children.reduce((sum, child) => sum + countNodes(child), 0);
  };

  const handleNodeClick = (nodeData, evt) => {
    const rect = containerRef.current.getBoundingClientRect();
    setFormPosition({
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top,
    });
    setTargetNode(nodeData);
    setShowForm(true);
  };

  return (
    <div
      ref={containerRef}
      className="h-full border border-gray-700 rounded p-4 relative"
      style={{ width: "100%", height: "100%" }}
    >
      <h3 className="text-lg font-bold mb-2">
        {selectedCity?.id} - zones
      </h3>

      {treeData && dimensions.width > 0 && (
        <Tree
          data={treeData}
          translate={{
            x: dimensions.width / 2,
            y: dimensions.height / 4,
          }}
          onNodeClick={handleNodeClick}
          orientation="vertical"
          collapsible={true}
        />
      )}

      {showForm && (
        <div
          className="absolute bg-white border shadow-md rounded p-2"
          style={{ top: formPosition.y, left: formPosition.x, zIndex: 10 }}
        >
          <input
            type="text"
            placeholder="Nombre del nuevo nodo"
            value={newNodeName}
            onChange={(e) => setNewNodeName(e.target.value)}
            className="border px-2 py-1 rounded w-full mb-2"
          />
          <div className="flex gap-2">
            <button
              onClick={addChild}
              className="bg-green-600 text-white px-2 py-1 rounded text-sm"
            >
              Agregar
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-gray-400 text-white px-2 py-1 rounded text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
      <div className="mt-4 text-sm text-gray-800">
        <p><strong>Altura del árbol:</strong> {getTreeHeight(treeData)}</p>
        <p><strong>Cantidad de nodos:</strong> {countNodes(treeData)}</p>
      </div>
    </div>
  );
};
