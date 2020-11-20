function Nodo (value){
    this.value = value;
    this.next = null;
  }
  function linkList(){
    this.head = null;
    this.leg = 0;
  }
  linkList.prototype.add = function(x){
    var nodo = new Nodo(x);
    if(this.head == null){
      this.head = nodo;
    }else {
      header = this.head;
      while (header.next != null) {
          header = header.next
        }
        header.next = nodo;
    }
    this.leg++;
  }
  linkList.prototype.pop = function(){
    if (this.leg === 0) {
      return null;
    }else if (this.leg === 1) {
      var value = this.head.value;
      this.head = null;
      this.leg--;
      return value;
    }else {
      var header = this.head;
      while (header.next != null) {
          header = header.next;
      header =
    }
    var val = header.value;
      header.value = null;
    this.leg--;
    console.log()
    return val;
    }
  }
  var list = new linkList();
  list.add(4);
  list.add(5);
  list.pop();
  console.log(list)