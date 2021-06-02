    An edge will connect two nodes into one connected component.

    When we count an edge in, if two nodes have already been in the same connected component, the edge will result in a cycle. That is, the edge is redundant.

    We can make use of Disjoint Sets (Union Find).
    If we regard a node as an element, a connected component is actually a disjoint set.

    For example,

Given edges [1, 2], [1, 3], [2, 3],
1
/ \
2 - 3

    Initially, there are 3 disjoint sets: 1, 2, 3.
    Edge [1,2] connects 1 to 2, i.e., 1 and 2 are winthin the same connected component.
    Edge [1,3] connects 1 to 3, i.e., 1 and 3 are winthin the same connected component.
    Edge [2,3] connects 2 to 3, but 2 and 3 have been winthin the same connected component already, so [2, 3] is redundant.

    ```java

    public int[] findRedundantConnection(int[][] edges) {
        DisjointSet disjointSet = new DisjointSet(edges.length);

        for (int[] edge : edges) {
            if (!disjointSet.union(edge[0] - 1, edge[1] - 1)) return edge;
        }

        throw new IllegalArgumentException();
    }

    static class DisjointSet {

        private int[] parent;
        private byte[] rank;

        public DisjointSet(int n) {
            if (n < 0) throw new IllegalArgumentException();
            parent = new int[n];
            rank = new byte[n];
        }

        public int find(int x) {
            if (parent[x] == 0) return x;
            return parent[x] = find(parent[x]); // Path compression by halving.
        }

        // Return false if x, y are connected.
        public boolean union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            if (rootX == rootY) return false;

            // Make root of smaller rank point to root of larger rank.
            if (rank[rootX] < rank[rootY]) parent[rootX] = rootY;
            else if (rank[rootX] > rank[rootY]) parent[rootY] = rootX;
            else {
                parent[rootX] = rootY;
                rank[rootY]++;
            }

            return true;
        }
    }
    ```
