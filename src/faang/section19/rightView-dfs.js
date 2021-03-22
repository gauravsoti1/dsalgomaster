export function Node({ val, left, right }) {
  return { val, left, right };
}

export function rightView(root, depth = 0, result = []) {
  // do pre-order traversal prioritising right node, i.e. NRL traversal
  if (!root) return result;
  if (depth >= result.length) result.push(root.val);
  if (root.right) rightView(root.right, depth + 1, result);
  if (root.left) rightView(root.left, depth + 1, result);
  return result;
}
