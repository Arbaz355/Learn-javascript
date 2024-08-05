// guard clause
const printData = (data) => {
  if (!data) return;
  if (!data.name) return;
  if (data.age) return [data.name, data.age];
};

const person = {
  name: "arbaz",
  age: 25,
};

console.log(printData(person));

// bad example
function userIsAdmin(user) {
  if (user.role == "admin") {
    if (user.manager == true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// good example
function userIsAdmin(user) {
  if (user.role != "admin") return false;
  if (user.manager != true) return false;
  return true;
}