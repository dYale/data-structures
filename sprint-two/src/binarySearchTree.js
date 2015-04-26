var BinarySearchTree = function(value){
  var obj = Object.create(objectPrototypes);
  obj.value = value;
  obj.left = null; 
  obj.right = null;
  return obj;
};




var objectPrototypes = {};

objectPrototypes.insert = function(node){

  if(node > this.value){
    if(this.right !== null){
    this.right.insert(node)
  } else {
    this.right = BinarySearchTree(node);
  }
} else {
    if(this.left !== null){
      this.left.insert(node)
    } else {
      this.left = BinarySearchTree(node);
    }
  }
}

objectPrototypes.contains = function(val){
var present = false; 

if(val > this.value){
      console.log( this.value +  " going right  " + val)
    if(this.value === val){
        present = true;
      }
      if(this.right !== null){
    this.right.contains(val)
    } 
} else {
  console.log( this.value +  " going left  " + val)
      if(this.value === val){

        present = true;
        console.log(present)
      }
      if(this.left !== null){
      this.left.contains(val)
    }
  }
  console.log(present)
  return present;
}


objectPrototypes.depthFirstLog = function(cb){


}

/*
 * Complexity: What is the time complexity of the above functions?
 */
