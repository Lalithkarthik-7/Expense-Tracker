let table = document.getElementById('table');
console.log('Table: ', table);

function deleteRow(row) {
  console.log(row);
  row.remove();
}

function addRow() {
  let date = document.getElementsByClassName('dateInput')[0].value;
  let amount = document.getElementsByClassName('amountInput')[0].value;
  let transactionType =
    document.getElementsByClassName('transactionType')[0].value;

  let row = document.createElement('tr');

  let amountCell = document.createElement('td');
  amountCell.innerText = amount;

  let transactionCell = document.createElement('td');
  transactionCell.innerText = transactionType;

  let dateCell = document.createElement('td');
  dateCell.innerText = date;

  let binCell = document.createElement('td');

  let deleteButton = document.createElement('button');
  let binImage = document.createElement('img');
  binImage.src = './recycle-bin.png';
  binImage.style.width = '25px';
  binImage.style.height = '25px';
  deleteButton.appendChild(binImage);
  deleteButton.classList.add('delete-button','delete-button:hover');
  deleteButton.onclick = () => deleteRow(row);

  binCell.appendChild(deleteButton);

  row.appendChild(amountCell);
  row.appendChild(transactionCell);
  row.appendChild(dateCell);
  row.appendChild(binCell);

  if (date != 0 && amount != 0 && transactionType != 0) {
    table.appendChild(row);
  }
  console.log('Line 124:', dateCell, amountCell, transactionCell);

  let totalIncome = document.getElementById('totalIncome').innerText;
  let totalExpense = document.getElementById('expense').innerText;
  let balance = document.getElementById('balance').innerText;

  if (transactionType == 'income') {
    if (totalIncome == '0') {
      document.getElementById('totalIncome').innerText = amount;
    } else {
      document.getElementById('totalIncome').innerText =
        parseInt(totalIncome) + parseInt(amount);
    }
    if (balance == '0') {
      document.getElementById('balance').innerText = amount;
    } else {
      document.getElementById('balance').innerText =
        parseInt(balance) + parseInt(amount);
    }
  } else if (transactionType == 'expense') {
    if (totalIncome == '0') {
      document.getElementById('expense').innerText = amount;
    } else {
      document.getElementById('expense').innerText =
        parseInt(totalExpense) + parseInt(amount);
    }

    if (balance == '0') {
      document.getElementById('balance').innerText = amount;
    } else {
      document.getElementById('balance').innerText =
        parseInt(balance) - parseInt(amount);
    }
  }

  console.log('Line 145: ', totalIncome, totalExpense, balance);
  // console.log("Line 109:",date,amount,transactionType);
}
