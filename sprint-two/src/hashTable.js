var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var idx = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(idx);

  if (!bucket) {
    bucket = [];
    this._storage.set(idx, bucket)
  };
  var found = false
  for (var i = 0; i < bucket.length; i++) {
   var tuple = bucket[i];

   if(tuple[0] === k) {
    found = true;
    tuple[1] === v;
    break;
   }
  }
  if(!found){

  bucket.push([k,v]);
  }

};

HashTable.prototype.retrieve = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);

  
  for (var i = 0; i < bucket.length; i++) {
   var tuple = bucket[i];

   if(tuple[0] === k && tuple[1]) {
    return tuple[1];
   } 
   }
   return null;
  }


  //iterate through our bucket?
    //check if tuple[0] === k;
      //return entire tuple

HashTable.prototype.remove = function(k){
  var idx = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(idx);


  for (var i = 0; i < bucket.length; i++) {
   var tuple = bucket[i];

   if(tuple[0] === k) {
    delete tuple[1];

    }
  }
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
