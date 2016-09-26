/**
 * @param  {object} elem - collection to search in
 * @param  {string} selector - className
 * @return {object} - return collection of elements with corresponding className
 */
function getElementByClass(elem, selector) {
  var result = [];
  var elements = elem.getElementsByTagName('*');
  var classContains = [];

  for(var i = 0; i < elements.length; i++) {
    classContains = elements[i].className.split(' ');

    for(var j = 0; j < classContains.length; j++) {
      if(classContains[j] == selector) {
        result.push(elements[i]);
        break;
      }
    }
  }

  return result;
}

var el = getElementByClass(document.body, 'content');