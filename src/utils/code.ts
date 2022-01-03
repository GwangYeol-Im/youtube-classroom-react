export const decode = (str: string) => {
  const node = document.createElement('textarea');

  node.innerHTML = str;

  return node.value;
};
