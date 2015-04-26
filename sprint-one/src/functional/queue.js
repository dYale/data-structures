var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
    var enqueueValue = 0;
    var dequeueValue = 0;
    var size = 0;


  someInstance.enqueue = function(value){
    storage[enqueueValue++] = value;
    size++;
  };

  someInstance.dequeue = function(){
    size--;
    return storage[dequeueValue++];

  };

  someInstance.size = function(){
    if(size <= 0){
      return 0;
    } else {
    return size;
    }
  };

  return someInstance;
};
