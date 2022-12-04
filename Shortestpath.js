import React from 'react'

function djikstraAlgorithm(areasVisited) {
        let distances = ["Kiev-Prague", "Prague-Zurich", "Zurich-Amsterdam", "Amsterdam-Barcelona", "Barcelona-Berlin", "Berlin-Kiev"];
        const areasVisited = ["Kiev", "Amsterdam", "Zurich", "Prague", "Berlin", "Barcelona"]
        // Stores the reference to previous nodes
        let prev = {};
        let pq = new PriorityQueue(this.nodes.length * this.nodes.length);   
    return (
        
        // Set distances to all nodes to be infinite except areasVisited
        distances[areasVisited] = 0);
        pq.enqueue(areasVisited, 0);
        this.nodes.forEach(node => {
           if (node !== areasVisited) distances[node] = Infinity;
           prev[node] = null;
        });
     
        while (!pq.isEmpty()) {
           let minNode = pq.dequeue();
           let currNode = minNode.data;
           let weight = minNode.priority;
           this.edges[currNode].forEach(neighbor => {
              let alt = distances[currNode] + neighbor.weight;
              if (alt < distances[neighbor.node]) {
                 distances[neighbor.node] = alt;
                 prev[neighbor.node] = currNode;
                 pq.enqueue(neighbor.node, distances[neighbor.node]);
              }
           });
        }
}

export default djikstraAlgorithm
