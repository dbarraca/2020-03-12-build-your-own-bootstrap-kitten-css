let compCode = document.querySelectorAll('code');

compCode.forEach((code) => {
//   console.log(code);
  let replaced = code.innerHTML.replaceAll('<','&lt;').replaceAll('>','&gt;');
  code.innerHTML = replaced;
})