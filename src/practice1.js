const parseData = ({data, column})=> {
  const result = [];
  data.map(item => {
    let member = {};
    column.forEach(it => {
      member[it.name] = item.shift();
    })
    result.push(member);
  })
  return result
}

export { parseData };
