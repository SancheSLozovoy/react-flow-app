import { Node } from '@xyflow/react';
import { NodeData } from './types';


const nodeStrategies = {
    process: (id: string, updateNodeData: Function, data: NodeData) => ({
        id,
        type: 'textUpdater',
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        data: {
            ...data,
            inputs: ['label1Value', 'label2Value', 'input1Value', 'input2Value'],
            updateNodeData,
        },
    }),
    preProcess: (id: string, updateNodeData: Function, data: NodeData) => ({
        id,
        type: 'preProcessUpdater',
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        data: {
            ...data,
            inputs: ['label1Value', 'label2Value', 'label3Value', 'input1Value', 'input2Value', 'input3Value'],
            updateNodeData,
        },
    }),
};

export const addNode = (
    type: 'process' | 'preProcess',
    nodes: Node[],
    setNodes: (nodes: Node[]) => void,
    nodeId: number,
    updateNodeData: (id: string, newData: any) => void,
    initialData: NodeData = {}
) => {
    const newNode = nodeStrategies[type](String(nodeId), updateNodeData, initialData);
    setNodes([...nodes, newNode]);
};