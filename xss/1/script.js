const searchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(searchParams);

if (params.search) {
  const search = '<h4>No results found for "' + params.search +'"</h4>'
  document.write(search);
  //   document.getElementById("output").append(document.createRange().createContextualFragment(search));
}
document.write('hello world')
document.write('devkode')

// write a function named 'click' which prints hello via document.write
// and attach it to the button with id 'click'
function click() {
  document.write('hello')
}
click();