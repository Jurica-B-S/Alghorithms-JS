//graph class implementation using an MAP + breadth search alghorithm
class Graph extends Map{
  constructor(){
    super();
    this._graph_values = new Map();
  }
  search(starting_node){
    //implementation of breadth first search alghorithm - arrays are used for queue
    //if element found returns an object {'steps':,'element':}
    //steps - minimum distance
    //element - returns the node that has the searched info
    let queue = [];
    let already_searched_nodes = new Set();
    let current_node = starting_node;
    let steps_to_find_node = 0;

    try{
      
      if(this._graph_values.size === 0){
        console.log("blabla");
        throw new Error("graphEmpty")
      }
      queue.push(this._graph_values[current_node]);
      while(queue.size > 0){
         current_node = queue[0];
          if(current_node.search_key === search_string){
            return queue_element;
        }
        queue.push(this._graph_values[current_node])
      }



    }
    catch(e){
      console.log(e.message);
      if (e.message === 'graphEmpty') console.log("Graph is empty - fil the data");
    }

  }
}


let a= new Graph(); 
a.search();
