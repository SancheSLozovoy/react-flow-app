import { BASE_URL } from "../../../../shared/config/api";
import { Edge, Node } from "@xyflow/react";
import { linkNodes } from "../../../../widgets/Flow/lib/linkNodes/linkNodes";

export const postNodes = async ( nodes: Node[], edges: Edge[]) => {
    const data = linkNodes(nodes, edges); 
    console.log(JSON.stringify(data))
    try {
        const response = await fetch(BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error(`error ${response.status}`);
        }
      } catch (error) {
        console.error("Error", error);
      }
};