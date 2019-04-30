
//graph class implementation using an MAP + breadth search alghorithm + djikstra alghorithm
//hash table of nodes + values to be searched is passed as a paramether to a graph function while creating graph

class GraphDijkstra extends Map{
  constructor(){
    super();
    this._graph_values = new Map();
    this._parents = new Map();
    this._costs = new Map();
  }
  //node_name - name of the node used for getting the data of connected nodes
  //nodes_connected - array of modes that are connected to the node
  add_node(node_name, nodes_connected){
    this._graph_values.set(node_name, nodes_connected);
    if(node_name !== 'start' ){
      this._costs.set(node_name, "-");
      this._parents.set(node_name, "-");
    }
    
  }

  search(){
    //implementation of dijkstra first search alghorithm
    
  for (const [node1, neighbours] of this._graph_values) {
    for(const node2 of Object.keys(neighbours)){
      //console.log(node2);
      if(this._costs.get(node2) === '-'){
        console.log(neighbours[node2]);
        console.log(node1);
        this._costs.set(node2, neighbours[node2]);
        this._parents.set(node2, node1);
      }
      else if(this._costs.get(node2)> neighbours[node2]){
        
        this._costs.set(node2, neighbours[node2]);
        this._parents.set(node2 , node1);
      }
        
    }
  }
  console.log(this._parents);
  }



}


//example


let a= new GraphDijkstra(); 
a.add_node("start",{"Otocac":1, "Split":1, "Knin":2});
a.add_node("Otocac",{"Omis":2});
a.add_node("Split",{"Omis":2});
a.add_node("Knin",{"Omis":0});
a.add_node("Omis",{"Gospic":1});
a.add_node("Omis",{"Imotski":1});
a.add_node("Omis",{"Zagreb":1});
a.add_node("Gospic",{"Imotski":1});
a.add_node("Imotski",{"Zagreb":1});
a.add_node("Zagreb",{"end":5});
a.add_node("end",{});
a.search();
