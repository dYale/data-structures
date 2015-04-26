var Queue = function(){
  var obj = {};
  obj.outIndex = 0;
  obj.inIndex = 0;
  obj.loc = 0;
  _.extend(obj,queueMethods);
  return obj
};

var queueMethods = {
  enqueue: function  (value) {
    this[this.inIndex] = value;
    this.inIndex++;
    this.loc++
  },

  dequeue: function () {
    this.loc--;
    return this[this.outIndex++]
  },

  size: function () {
    if (this.loc<=0) {
      this.loc = 0;
    };
    return this.loc;
  }
};



  