export function printBST() {
  const getNotNullNodes = (nodes = []) => {
    return nodes.filter((node) => node !== null);
  };
  const current = this.root;
  const childrenLevelNodes = {
    1: [current],
  };
  let currentLevel = 2;
  let lastLevelNotNullNodes = getNotNullNodes(
    childrenLevelNodes[currentLevel - 1]
  );
  while (lastLevelNotNullNodes && lastLevelNotNullNodes.length > 0) {
    let currentLevelNodes = [];
    lastLevelNotNullNodes.forEach((node) => {
      currentLevelNodes.push(node.left);
      currentLevelNodes.push(node.right);
    });
    if (getNotNullNodes(currentLevelNodes).length > 0)
      childrenLevelNodes[currentLevel] = currentLevelNodes;
    currentLevel++;
    lastLevelNotNullNodes = getNotNullNodes(
      childrenLevelNodes[currentLevel - 1]
    );
  }
  const levels = Object.keys(childrenLevelNodes);
  const totalLevels = levels.length;
  for (let i of levels) {
    // const spaces = Math.floor((totalLevels - i + 1) / 2);
    const spaces = totalLevels - i ;
    const spacesArray = [];
    for (let s = 1; s <= spaces; s++) {
      spacesArray.push("\t");
    }
    let values = [...spacesArray];
    childrenLevelNodes[i].forEach((node, index) => {
      if (node) values.push(node.value);
      else values = [...values, "\t"];
      if (index % 2 !== 0) values = [...values, "\t"];
      else values = [...values, ...spacesArray];
    });
    // console.log(values);
    console.log(values.join(""));
  }
}
