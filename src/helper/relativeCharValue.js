export function getValue(char) {
  const value = char.charCodeAt() - "A".charCodeAt() + 1;
  console.log("char = ", char, "value = ", value);
  return value;
}
