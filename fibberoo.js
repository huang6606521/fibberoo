/**
 * 
 * Created by jipenghuang on 9/20/16.
 */

function fib() {
   let pervious = 0;
   let next = 1;
   let sum= 0;
   let list=[];
  list[0]= 0;list[1]=1;
  for(let i=2;i<100;i++){
    sum= pervious+next;
    pervious=next;
    next = sum;
    list[i]=sum;
   }
   return list;
}

console.log(fib());