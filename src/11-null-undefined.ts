() => {
  let myNull = null; // any
  let myUndefined = undefined; // any

  let myNull2: null = null; // null
  let myUndefined2: undefined = undefined; // undefined

  let myNumber: number | null = null; // number | null
  myNumber = 10;

  let myString: string | undefined = undefined; // string | undefined
  myString = "Hello";

  //optional chaining function

  function printText(text: string | undefined) {
    console.log(text?.toUpperCase());
  }
};
