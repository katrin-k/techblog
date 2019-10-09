window.addEventListener('load', (event) => {
  const codeBlocks = document.querySelectorAll('pre[class*="language-"]');
  codeBlocks.forEach(function (el, index) {
    const elementClass = el.classList.item(0);
    const lang = elementClass.substring(elementClass.lastIndexOf('-') + 1);
    el.setAttribute('data-lang', lang);
  })
});