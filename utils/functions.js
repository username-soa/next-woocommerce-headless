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

export { cx, createUrl };
