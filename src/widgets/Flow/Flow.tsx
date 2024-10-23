import React, { useCallback, useState } from 'react';
import {
    ReactFlow,
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    OnConnect,
    Panel,
    Edge,
    Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { addProcess } from '../../features/addProcess/addProcess';
import TextUpdaterNode from '../../entities/Process/Process';

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];
const nodeTypes = { textUpdater: TextUpdaterNode };

export default function App() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [nodeId, setNodeId] = useState(1);

    const onConnect: OnConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const handleAddProcess = () => {
        addProcess(nodes, setNodes, nodeId);
        setNodeId(nodeId + 1);
    };



    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
                nodeTypes={nodeTypes}
            >
                <Controls />
                <MiniMap />
                <Background gap={12} size={1} />
                <Panel position="top-right">
                    <button onClick={handleAddProcess}>Add Process</button>
                    <button>Add PreProcess1</button>
                    <button>Add PreProcess2</button>
                </Panel>
            </ReactFlow>
        </div>
    );
}
