const inp1 = document.getElementById("inp1");
const button = document.getElementById("button");

function* fact(n = 10) {
  let y = 1;
  for (let i = 1; i < n; i++) {
    y = y * (i + 1);
    yield y;
  }
}

button.addEventListener("click", function () {
  for (let k of fact(Number(inp1.value))) {
    inner.innerHTML = k;
  }
});
