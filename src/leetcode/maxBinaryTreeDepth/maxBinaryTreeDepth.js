export default function maxDepth(root, depth = 0) {
  // Current children not present, hence there is no more level
  // so return the depth that has already been calculated
  if (!root) return depth;
  // Since a node exists at this level, we are incrementing depth by 1
  const incrementedDepth = depth++;
  const leftDepth = maxDepth(root.left, incrementedDepth);
  const rightDepth = maxDepth(root.right, incrementedDepth);
  const maxDepthValue = Math.max(leftDepth, rightDepth);
  return maxDepthValue;
}
