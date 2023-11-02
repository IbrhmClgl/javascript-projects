export function checkEquality(input1, input2, text) {
  if (input1 === input2) {
    text.textContent = "Equal ✅";
  } else {
    text.textContent = "Not equal 🚫";
  }
}
