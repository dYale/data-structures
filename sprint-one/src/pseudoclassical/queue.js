var Queue = function() {
  this.inIndex = 0;
  this.outIndex = 0;
  this.loc = 0;
  };

Queue.prototype.enqueue = function(value) {
  this[this.inIndex] = value;
  this.loc++;
  this.inIndex++;
};

Queue.prototype.dequeue = function() {
  this.loc--;

  return this[this.outIndex++];
};

Queue.prototype.size = function() {
  if(this.loc <= 0){
    this.loc = 0;
  }

  return this.loc
};

