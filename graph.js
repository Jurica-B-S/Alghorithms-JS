//graph class implementation using an MAP + breadth search alghorithm
//hash table of nodes + values to be searched is passed as a paramether to a graph function while creating graph

class Graph extends Map{
  constructor(){
    super();
    this._graph_values = new Map();
  }
  //node_name - name of the node used for getting the data of connected nodes
  //nodes_connected - array of modes that are connected to the node
  add_node(node_name, nodes_connected){
    this._graph_values.set(node_name, nodes_connected);
  }
  search(starting_node, hash_table){
    //implementation of breadth first search alghorithm - arrays are used for queue
    //hash_table of node objects - keys are matched with objects
    let queue = [];
    let already_searched_nodes = new Set();
    let current_node = starting_node;
    let steps_to_find_node = 0;
    console.log("Blabla34", hash_table);
    try{
      
      if(this._graph_values.size === 0){
        console.log("blabla");
        throw new Error("graphEmpty")
      }
      console.log('1: ',this._graph_values.get(current_node));
      queue.push(...this._graph_values.get(current_node));
      while(queue.length > 0){
         current_node = queue[0];
         if(hash_table.get(current_node).car_dealer === true){
            return current_node;
        }
        console.log("Blabla34", current_node);
        console.log("Blabla34", (this._graph_values.get(current_node)));
        if(!already_searched_nodes.has(current_node)){
          queue.push(...(this._graph_values.get(current_node)));
          already_searched_nodes.add(current_node);
        }
        console.log(queue);
        queue.shift();
         console.log(queue);
      }



    }
    catch(e){
      console.log(e.message);
      if (e.message === 'graphEmpty') console.log("Graph is empty - fil the data");
    }

  }
}

let b = new Map();
b.set("Jura",{"car_dealer":false})
b.set("Pero",{"car_dealer":false})
b.set("Joža",{"car_dealer":false})
b.set("Konj",{"car_dealer":true})
b.set("Ivan",{"car_dealer":true})
let a= new Graph(); 
a.add_node("Jura",["Pero", "Joža", "Konj"]);
a.add_node("Pero",[]);
a.add_node("Joža",["Ivan", "Pero", "Konj"]);
a.add_node("Konj",["Ivan","Joža"]);
a.add_node("Ivan",[]);
a.search("Jura", b);
