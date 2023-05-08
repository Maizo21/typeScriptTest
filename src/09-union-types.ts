(() => {
  let userID: string | number;
  userID = 10;
  userID = "10";

  function greeting(myText: string | number) {
    if (typeof myText === "string") {
      console.log(myText.toUpperCase());
    } else {
      console.log(myText);
    }
  }

  greeting(10);
  greeting("10");
})();
