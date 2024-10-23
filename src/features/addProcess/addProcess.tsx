import { Node } from '@xyflow/react';

export const addProcess = (nodes: Node[], setNodes: (nodes: Node[]) => void, nodeId: number) => {
    const newNode: Node = {
        id: `node-${nodeId}`,
        type: 'textUpdater',
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        data: { value: {} },
    };

    setNodes([...nodes, newNode]);
};
