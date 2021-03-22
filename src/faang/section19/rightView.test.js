import { rightView as rightViewbfs, Node } from "./rightView-bfs";
import { rightView as rightViewdfs } from "./rightView-dfs";
describe("Binary tree right view", () => {
  function buildTree() {
    const node1 = Node({ val: 1 });
    const node2 = Node({ val: 2 });
    const node3 = Node({ val: 3 });
    const node4 = Node({ val: 4 });
    const node5 = Node({ val: 5 });
    const node6 = Node({ val: 6 });
    const node7 = Node({ val: 7 });
    const node8 = Node({ val: 8 });
    node1.left = node2;
    node1.right = node3;
    node2.left = node4;
    node2.right = node5;
    node4.right = node7;
    node7.left = node8;
    node3.right = node6;
    return node1;
  }
  describe("Bfs approach should work", () => {
    test("should not return the hidden nodes", () => {
      const result = rightViewbfs(buildTree());
      expect(result).toEqual([1, 3, 6, 7, 8]);
    });

    test("should work for empty tree", () => {
      expect(rightViewbfs(null)).toEqual([]);
    });
  });

  describe("Dfs approach should work", () => {
    test("should not return the hidden nodes", () => {
      const result = rightViewdfs(buildTree());
      expect(result).toEqual([1, 3, 6, 7, 8]);
    });

    test("should work for empty tree", () => {
      expect(rightViewbfs(null)).toEqual([]);
    });
  });
});
