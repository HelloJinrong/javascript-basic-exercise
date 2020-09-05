export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  let link =function(val){
    this.value = val;
    this.next = null;
  };

  let list=new link();
  let res=[];
  if(array.length===1)
  {list.value=array[0];
    return list;
  }
  if(array.length>1){
    for(let i=0;i<array.length;i++){
      res[i]=new link(array[i]);
    }
    for(let i=0;i<array.length-1;i++){
      res[i].next=res[i+1];
    }
    return res[0];
  }
}
