function createTableByUsingInnerHTML(row, cell) {
  var tbody = '<tbody>';
  var tr = '<tr>';
  var td = '<td>';
  var tableString = '<table>';
  var body = document.body;

  tableString = tableString.concat(tbody);

  for (var i = 0; i < row; i++) {
     tableString = tableString.concat(tr);

    for (var j = 0; j < cell; j++) {
      tableString = tableString.concat(td);
    }
  }

  document.body.innerHTML = tableString;  
}

createTableByUsingInnerHTML(10, 10);