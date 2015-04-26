var Stack = function() {
 var obj = Object.create(stackMethods)
 obj.loc = 0;
 return obj;
 };

var stackMethods = {
  push: function(value){
    this[this.loc] = value;
    this.loc++
  },

  pop: function(){
    if(this.loc <= 0){
      this.loc = 0;
    } else {
      this.loc--;
    }

    return this[this.loc];
  },

  size: function(){
    return this.loc;
  }


};


