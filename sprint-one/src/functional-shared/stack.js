var Stack = function() {
  var obj = {};
  obj.loc = 0;
  _.extend(obj, stackMethods)
  return obj;
};


var stackMethods = {
  push: function (value) {
    this[this.loc] = value;
    this.loc++;
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


