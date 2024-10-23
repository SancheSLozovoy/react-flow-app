import { Node } from '@xyflow/react';

export const addProcess = (nodes: Node[], setNodes: (nodes: Node[]) => void, nodeId: number) => {
    const newNode: Node = {
        id: `node-${nodeId}`,
        type: 'textUpdater',
        position: { x: 250, y: 0 },
        data: { value: {} },
    };

    setNodes([...nodes, newNode]);
};
