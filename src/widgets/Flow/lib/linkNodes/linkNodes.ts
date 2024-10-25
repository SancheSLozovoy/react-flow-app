import { Node, Edge } from '@xyflow/react';

export const linkNodes = (nodes: Node[], edges: Edge[]) => {
    const connectedNodeIds = new Set<string>();

    edges.forEach(edge => {
        connectedNodeIds.add(edge.source);
        connectedNodeIds.add(edge.target);
    });

    const filteredNodes = nodes.filter(node => connectedNodeIds.has(node.id));
    const filteredEdges = edges.filter(edge => 
        connectedNodeIds.has(edge.source) && connectedNodeIds.has(edge.target)
    );

    return { nodes: filteredNodes, edges: filteredEdges };
};