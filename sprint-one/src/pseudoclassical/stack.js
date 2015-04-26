var Stack = function() {
  this.loc = 0;
};

Stack.prototype.push = function(value) {
  this[this.loc] = value;
  this.loc++;
};

Stack.prototype.pop = function() {
  if(this.loc<=0) {
    this.loc = 0;
  }else {
    this.loc--;
  }
  return this[this.loc]
};

Stack.prototype.size = function() {
  return this.loc;
};