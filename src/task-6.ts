function getFirstElement<T>(arr: T[]):T {
    return arr[0];
  }
  
  const firstString= getFirstElement<string>(["a", "b", "c"]);     // "a"
  const firstNumber =getFirstElement<number>([1, 2, 3]);           // 1
  const firstBoolean= getFirstElement<boolean>([true, false, true]); // true
  

console.log(firstNumber);
console.log(firstString);
console.log(firstBoolean);

