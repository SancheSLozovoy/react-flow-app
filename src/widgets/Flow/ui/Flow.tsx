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
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { addProcess } from '../../../features/addProcess/addProcess';
import Process from '../../../entities/Process/ui/Process';
import PreProcess from '../../../entities/PreProcess/ui/PreProcess';
import { addPreProcess } from '../../../features/addPreProcess/addPreProcess';
import { linkNodes } from '../lib/linkNodes/linkNodes';
import { sendPostRequest } from '../api/apiService/apiService';
import './Flow.css';

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
        addPreProcess(nodes, setNodes, nodeId, updateNodeData); 
        setNodeId(nodeId + 1);
    };

    const handleSend = async () => {
        const linkedData = linkNodes(nodes, edges);
        await sendPostRequest(linkedData);
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
                <Background gap={12} size={1} />
                <MiniMap />
                <Panel position="top-right" className="panel">
                    <button className="button" onClick={handleAddProcess}>Добавить процесс</button>
                    <button className="button" onClick={handleAddPreProcess}>Добавить PreProcess 1</button>
                    <button className="button" onClick={handleAddPreProcess}>Добавить PreProcess 2</button>
                </Panel>
                <Panel position='bottom-right' className="panel">
                    <button className="button" onClick={handleSend}>Отправить</button>
                </Panel>
            </ReactFlow>
        </div>
    );
}
