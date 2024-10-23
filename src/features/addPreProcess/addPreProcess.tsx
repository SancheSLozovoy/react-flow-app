import { Node } from '@xyflow/react';

export const addPreProcess = (nodes: Node[], setNodes: (nodes: Node[]) => void, nodeId: number) => {
    const newNode: Node = {
        id: `preprocess-${nodeId}`,
        type: 'preProcessUpdater',
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        data: { value: {} },
    };

    setNodes([...nodes, newNode]);
};
