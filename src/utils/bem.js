export const bem = (prefix) => {
  return {
    bl: (props, classNames) => {
      return [prefix]
        .concat(classNames || [])
        .filter(Boolean)
        .join(" ");
    },
    el: (name, props) => {
      const className = `${prefix}__${name}`;
      const propClasses = getPropClasses(className, props);

      return [className, propClasses.join(" ")].filter(Boolean).join(" ");
    },
  };
};

const getPropClasses = (name, props) => {
  const result = [];

  if (!props) {
    return result;
  }

  for (const [key, value] of Object.entries(props)) {
    let valueClassName;

    if (typeof value === "string" || typeof value === "number") {
      valueClassName = `_${value}`;
    } else if (!value) {
      continue;
    } else {
      valueClassName = "";
    }

    result.push(`${name}_${hypenize(key)}${valueClassName}`);
  }

  return result;
};

const hypenize = (str) => {
  return str.replace(/[A-Z]/g, (x) => `-${x.toLowerCase()}`);
};
