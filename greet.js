export function greet(name) {

if (name == "Lara" || name == "Jan" || name == "CJ"){
  return "Hello Coach!";
} else if (name.length > 0) {
  return "Hello " + name + "!";
} else {
  return "Hello stranger!";
  }
}
