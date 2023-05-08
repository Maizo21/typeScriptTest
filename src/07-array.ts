() => {
  // Arrays

  const prices = [100, 200, 300, 400, 500, 600];
  prices.push(700);

  console.log("prices", prices);

  let mixed: (string | number | boolean | Object)[] = [
    "Hola",
    1,
    true,
    { name: "John" },
  ];
  mixed.push("Adios");
  mixed.push(2);
  mixed.push(false);
  mixed.push({ name: "Jane" });
  console.log("mixed", mixed);
};
