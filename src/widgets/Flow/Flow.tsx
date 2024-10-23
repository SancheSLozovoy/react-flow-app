import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  OnConnect,
  NodeToolbar,
  Panel,
  ControlButton,
  Edge,
  Node,
  NodeResizer
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';


const initialNodes: Node[] = [];
const initialEdges: Edge[] = []

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1}/>
        <Panel position="top-right">
          <button>Add 2 inputs</button>
          <button>Add 1 input</button>
          <button>Add 3 inputs</button>
        </Panel>
        <NodeResizer></NodeResizer>
      </ReactFlow>
    </div>
  );
}