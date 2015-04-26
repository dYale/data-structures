

var Graph = function(){
};

Graph.prototype.addNode = function(node){

  this[node] = new Object();

  
};

Graph.prototype.contains = function(node){
  return !!this[node];

};

Graph.prototype.removeNode = function(node){
  var temp = this[node];
  delete this[node];
  return temp;

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var present = false;
  

  for (var i = 0; i < this[fromNode].edge.length; i++){
    if(toNode ===  this[fromNode].edge[i]){
      present = true;
    }
  }
  return present;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  
  if(this[fromNode].edge){
    this[fromNode].edge.push(toNode)
  } else {
    this[fromNode].edge = [toNode];
  }


  if(!!this[toNode].edge){
    this[toNode].edge.push(fromNode)
  } else {
  this[toNode].edge = [fromNode];
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  

};

Graph.prototype.forEachNode = function(cb){
  
    for(var node in this){
      cb(this[node]);  
    } 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
