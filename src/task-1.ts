interface Pers{
    name: string;
    age: number;
    isOnline: boolean;

}
function pers(): void {
    const name: string = "Alice";
    const age: number = 30;
    const isOnline: boolean = true;
  
    const person: Pers = {
      name,
      age,
      isOnline,
    };
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Online: ${isOnline}`);
}
pers();