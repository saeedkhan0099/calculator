
function appendToDisplay(value) {
    document.getElementById("inputs").value += value;
  }
  function clearDisplay() {
    document.getElementById('inputs').value = '';
  }

  function deleteLast() {
    var inputs = document.getElementById("inputs");
    inputs.value = inputs.value.slice(0, -1);
  }

  function calculate() {
    var inputs = document.getElementById("inputs");
    try {
        inputs.value = eval(inputs.value);
    } catch (e) {
        inputs.value = "Error";
    }
  }