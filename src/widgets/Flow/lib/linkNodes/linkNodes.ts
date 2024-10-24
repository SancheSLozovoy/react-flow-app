import { Node, Edge } from '@xyflow/react';

export const linkNodes = (nodes: Node[], edges: Edge[]) => {
    const processNodes = nodes.filter(node => node.type === 'textUpdater');

    const groupedData = processNodes.map(processNode => {
        const connectedPreProcesses = edges
            .filter(edge => edge.source === processNode.id)
            .map(edge => {
                const targetNode = nodes.find(node => node.id === edge.target);
                return targetNode ? { id: targetNode.id, data: targetNode.data } : null;
            });

        return {
            process: {
                id: processNode.id,
                data: processNode.data,
            },
            preProcesses: connectedPreProcesses.filter(item => item !== null),
        };
    });
    console.log(groupedData)
    return groupedData;
};
