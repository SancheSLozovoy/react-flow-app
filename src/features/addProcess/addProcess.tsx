import { Node } from '@xyflow/react';

export const addProcess = (
  nodes: Node[], 
  setNodes: (nodes: Node[]) => void, 
  nodeId: number,
  updateNodeData: (id: string, newData: any) => void,
  initialData: { label1Value?: string; label2Value?: string; input1Value?: string; input2Value?: string } = {}
) => {
  const newNode: Node = {
    id: `process-${nodeId}`,
    type: 'textUpdater', 
    position: { x: Math.random() * 400, y: Math.random() * 400 }, 
    data: {
      text: '',
      label1Value: initialData.label1Value || 'Change',
      label2Value: initialData.label2Value || 'Change',
      input1Value: initialData.input1Value || '',
      input2Value: initialData.input2Value || '',
      updateNodeData, 
    },
  };

  setNodes([...nodes, newNode]);
};
