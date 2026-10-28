const makeHtml = (tag, content) => {
  const p = document.createElement(tag);

  p.innerHTML = content;

  document.body.appendChild(p);
};

makeHtml("p", "<h1>hello</h1>");
makeHtml("p", "<h2>hello</h2>");
makeHtml("p", "<h3>hello</h3>");
makeHtml("p", "<h4>hello</h4>");
makeHtml("p", "<h5>hello</h5>");
makeHtml("p", "<h6>hello</h6>");
