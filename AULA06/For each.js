const users = [
  { name: "Kauã", age: 19, contact: "(11) 99999-9999" },
  { name: "Nika", age: 19, contact: "(22) 88888-8888" },
  { name: "Charlie", age: 21, contact: "(33) 77777-7777" },
  { name: "Diana", age: 22, contact: "(44) 66666-6666" },
];

users.forEach(function (item, index) {
  if (item.age < 18) {
    console.log(
      `O(a) cliente ${item.name}, posição ${index} é menor de idade.`
    );
  }
});
