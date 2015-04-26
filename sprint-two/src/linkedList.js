var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.tail){
      list.tail.next = new Node(value);
    }
    list.tail = new Node(value);

    if(!list.head){
      list.head = list.tail;
    }


  };

  list.removeHead = function(){
    var temp = list.head;
    list.head = list.head.next;
    return temp.value;
  };

  list.contains = function(target){
    var present = false;
    var temp = list.head;
    for(var key in temp){

      if(target === temp.value){
        
        
        present =  true;
      } else {
        
        if(temp.next){
          temp = temp.next;


        }
        //check value and if next is present, go to next 
      }
    }
    return present    

  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
