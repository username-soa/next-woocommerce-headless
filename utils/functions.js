function cx(...classnames) {
  return classnames
    .map((item) => {
      if (typeof item === "string") {
        return item;
      }
      if (typeof item === "object") {
        return Object.keys(item)
          .map((key) => {
            return item[key] ? key : void 0;
          })
          .join(" ");
      }
      return void 0;
    })
    .join(" ");
}

const createUrl = (pathname, params) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};

function getMostVisibleDiv(items) {
  var windowHeight = window.innerHeight;
  var maxVisibility = 0;
  var mostVisibleDiv = null;

  items.forEach(function (div, index) {
    var rect = div.getBoundingClientRect();
    var visibility =
      Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

    if (visibility > maxVisibility) {
      maxVisibility = visibility;
      mostVisibleDiv = div;
      mostVisibleDiv = index;
    }
  });

  return mostVisibleDiv;
}

export { cx, createUrl, getMostVisibleDiv };
