(() => {
  // any: Cualquier tipo de dato
  // Se aconseja no usarlo
  let myDynamic: any;
  myDynamic = "Hello";
  console.log(myDynamic);

  myDynamic = 100;
  console.log(myDynamic);

  myDynamic = true;
  console.log(myDynamic);

  const rta = (myDynamic as string).toLowerCase();
})();
