var Tree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;


  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(childValue){
  this.children.push(Tree(childValue));
};

treeMethods.contains = function(target){
  var result = false;

  var checkValue = function(obj){
    if(obj.value === target){
      result = true;
    } else {
      _.each(obj.children, function(item){
        checkValue(item);
      }
    )}}
    checkValue(this);
    return result;
  }
/*
 * Complexity: What is the time complexity of the above functions?
 */


