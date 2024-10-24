import { Node } from '@xyflow/react';

export const addPreProcess = (
  nodes: Node[], 
  setNodes: (nodes: Node[]) => void, 
  nodeId: number,
  updateNodeData: (id: string, newData: any) => void,
  initialData: { label1Value?: string; label2Value?: string; label3Value?: string; input1Value?: string; input2Value?: string; input3Value?: string } = {}
) => {
  const newNode: Node = {
    id: `${nodeId}`,
    type: 'preProcessUpdater', 
    position: { x: Math.random() * 400, y: Math.random() * 400 }, 
    data: {
      label1Value: initialData.label1Value || 'Change',
      label2Value: initialData.label2Value || 'Change',
      label3Value: initialData.label3Value || 'Change',
      input1Value: initialData.input1Value || '',
      input2Value: initialData.input2Value || '',
      input3Value: initialData.input3Value || '',
      updateNodeData, 
    },
  };

  setNodes([...nodes, newNode]);
};
