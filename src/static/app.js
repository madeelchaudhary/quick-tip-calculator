function getElement(selector) {
  return document.querySelector(selector);
}

function getElementValue(element) {
  return element.value;
}

class TipCalculator {
  constructor() {
    this.bill = null;
    this.billElement = getElement("#bill");
    this.tipElement = getElement("#tipValue");
    this.splitElement = getElement("#splitValue");
    this.billElement.addEventListener("input", this.updateBill);
    this.tipElement.addEventListener("input", this.updateValues);
    this.splitElement.addEventListener("input", this.updateValues);
  }

  updateBill = (e) => {
    const billValue = e.target.value;

    this.bill = billValue || null;

    if (this.bill === null || this.bill < 0) {
      showValues(null);
      if (this.bill < 0) showAlert("enter correct value!", "error");
      return;
    }
    this.updateValues();
  };

  updateValues = () => {
    if (this.bill == null) return;
    const tipValue = getElementValue(this.tipElement);
    const splitValue = getElementValue(this.splitElement);
    computeValues(this.bill, tipValue, splitValue);
  };
}

function showValues(
  tipPercentage,
  tipPrice,
  totalPrice,
  persons,
  billEach,
  tipEach
) {
  getElement("#tipPercentage").textContent = tipPercentage;
  getElement("#tipPrice").textContent = tipPrice;
  getElement("#totalPrice").textContent = totalPrice;
  getElement("#persons").textContent = persons;
  getElement("#billEach").textContent = billEach;
  getElement("#tipEach").textContent = tipEach;
}

function computeValues(bill, tipValue, splitValue) {
  if (!bill) {
    showValues("", "", "", "", "", "");
    return;
  }
  const tip = (bill / 100) * parseInt(tipValue);
  const total = tip + parseInt(bill);
  const billEach = total / parseInt(splitValue);
  const tipEach = tip / parseInt(splitValue);

  const tipPrice = "$ " + tip.toFixed(2);
  const totalPrice = "$ " + total.toFixed(2);
  const billEachPrice = "$ " + billEach.toFixed(2);
  const tipEachPrice = "$ " + tipEach.toFixed(2);
  showValues(
    tipValue + "%",
    tipPrice,
    totalPrice,
    splitValue + " person",
    billEachPrice,
    tipEachPrice
  );
}

function showAlert(value, type) {
  getElement("#alertContent").textContent = value;
  getElement("#alert").classList.add(type);
  getElement("#closeAlert").addEventListener("click", closeAlert);
}

function closeAlert(e) {
  e.currentTarget.parentElement.classList.remove("error");
}

new TipCalculator();
