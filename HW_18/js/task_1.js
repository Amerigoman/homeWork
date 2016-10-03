function createTable(row, cell) {
  var table = document.createElement('table');
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var div = document.createElement('div');
  var body = document.body;

  var newRow;
  for (var i = 0; i < row; i++) {
    newRow = table.insertRow(i);

    for (var j = 0; j < cell; j++) {
      newRow.insertCell(j);
      table.rows[i].cells[j].innerHTML = '<div class="hidden">' + i + ':' + j + '</div>';
    }
  }

  body.appendChild(table);
}

createTable(10, 10);
var table = document.querySelector('table');
table.addEventListener('click', displayContent);

function displayContent(event) {
  var target = event.target; // где был клик?

  if (target.tagName == 'DIV') {
    // нашли элемент, который нас интересует!
    target.classList.add('hidden');
    return;
  }

  if (target.tagName == 'TD') {
    // нашли элемент, который нас интересует!
    target.children[0].classList.remove('hidden');
    return;
  }
};