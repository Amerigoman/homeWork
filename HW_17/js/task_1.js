function createTable(row, cell) {
  var table = document.createElement('table');
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var body = document.body;

  var newRow;
  for (var i = 0; i < row; i++) {
    newRow = table.insertRow(i);

    for (var j = 0; j < cell; j++) {
      newRow.insertCell(j);
      table.rows[i].cells[j].innerHTML = i + j;
    }
  }

  body.appendChild(table);  
}

createTable(10, 10);