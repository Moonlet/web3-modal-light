export function h(tag, props, ...children) {
  const element: HTMLElement = document.createElement(tag);

  Object.keys(props || {}).forEach((prop) => {
    if (prop === "style") {
      Object.keys(props[prop]).forEach((style) => {
        element.style[style] = props[prop][style];
      });
    } else if (prop.indexOf("on") === 0) {
      element[prop.toLowerCase()] = props[prop];
    } else {
      element[prop] = props[prop];
    }
  });

  function addChild(child) {
    if (Array.isArray(child)) {
      child.forEach((c) => addChild(c));
    } else if (typeof child === "object") {
      element.appendChild(child);
    } else {
      element.appendChild(document.createTextNode(child));
    }
  }

  (children || []).forEach((c) => addChild(c));

  return element;
}
