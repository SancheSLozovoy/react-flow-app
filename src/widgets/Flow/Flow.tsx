import { useCallback, useState } from 'react';
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
    ReactFlowInstance
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { addProcess } from '../../features/addProcess/addProcess';
import Process from '../../entities/Process/ui/Process';
import PreProcess from '../../entities/PreProcess/ui/PreProcess';
import { addPreProcess } from '../../features/addPreProcess/addPreProcess';

const initialNodes: Node[] = [];
const initialEdges: Edge[] = [];
const nodeTypes = {
    textUpdater: Process,
    preProcessUpdater: PreProcess,
};

export default function Flow() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [nodeId, setNodeId] = useState(1);
    const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);  

    const onConnect: OnConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const updateNodeData = (id: string, newData: any) => {
        setNodes((nds) => nds.map((node) => (node.id === id ? { ...node, data: { ...node.data, ...newData } } : node)));
    };

    const handleAddProcess = () => {
        addProcess(nodes, setNodes, nodeId, updateNodeData);
        setNodeId(nodeId + 1);
    };

    const handleAddPreProcess = () => {
        addPreProcess(nodes, setNodes, nodeId); 
        setNodeId(nodeId + 1);
    };

    const handleSend = () => {
        const processedData = nodes.map(node => ({
            id: node.id,
            ...node.data,
        }));


        alert(JSON.stringify(processedData, null, 2));
    };

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onInit={setRfInstance}
                fitView
                nodeTypes={nodeTypes}
            >
                <Controls />
                <MiniMap />
                <Background gap={12} size={1} />
                <Panel position="top-right">
                    <button onClick={handleAddProcess}>Add Process</button>
                    <button onClick={handleAddPreProcess}>Add PreProcess1</button>
                    <button onClick={handleAddPreProcess}>Add PreProcess2</button>
                </Panel>
                <Panel position='bottom-right'>
                    <button onClick={handleSend}>Отправить</button>
                </Panel>
            </ReactFlow>
        </div>
    );
}
