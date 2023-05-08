(() => {
  // Type Aliases
  // Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.
  type UserID = string | number;
  let userID: UserID;
  userID = 10;
  userID = "10";

  function greeting(userID: string | number) {
    if (typeof userID === "string") {
      console.log(userID.toUpperCase());
    } else {
      console.log(userID);
    }
  }

  greeting(10);
  greeting("10");

  // Literal types
  // Literal types allow you to specify the exact value a string, number, or boolean must have.
  let shirtSize: "small" | "medium" | "large";
  shirtSize = "small";
  shirtSize = "medium";
  shirtSize = "large";
  // shirtSize = "extra-large"; // Error
})();
