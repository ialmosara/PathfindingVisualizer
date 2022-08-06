import React from "react";
import Node from "./Node/Node";
import './PathfindingVisualizer.css';

const PathfindingVisualizer = () => {
  const nodes = [];

  // 15 ROWS | 50 COLUMNS
  for (let row = 0; row < 15; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push([]);
    }
    nodes.push(currentRow);
  }

  console.log(nodes);
  return (
    <div className="grid">
      {nodes.map((row, rowIdx) => {
        return (
            <div>
            {row.map((node, nodeIdx) => {
                return (
                    <Node/>
                )
            })}
            </div>
        );
      })}
    </div>
  );
};

export default PathfindingVisualizer;
