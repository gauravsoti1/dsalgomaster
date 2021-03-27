As we can see it is an optimization problem with lots of options
hence it is a DP problem

DP solution I found online:

```java

  class Solution {
    public int longestStrChain(String[] words) {
          Map<String, Integer> dp = new HashMap<>();
      Arrays.sort(words, (a, b) -> a.length() - b.length());
      int ans = 0;
      for (String word: words) {
        int best = 0;
        // Considering all possible variations of the current word
        for (int i = 0; i < word.length(); i++) {
          String prev = word.substring(0, i) + word.substring(i + 1);
          best = Math.max(best, dp.getOrDefault(prev, 0) + 1);
        }
        dp.put(word, best);
        ans = Math.max(ans, best);
      }

      return ans;
    }
  }

```

DFS solution:

```java

  class Solution {
    public int longestStrChain(String[] words) {
      int ans = 0;
      Set<String> set = new HashSet<>();
      Map<String, Integer> map = new HashMap();
      for (String word: words) {
        set.add(word);
      }
      for (String word: words) {
        ans = Math.max(ans, dfs(map, set, word));
      }
      return ans;
    }

    private int dfs(Map<String, Integer> map, Set<String> set, String word) {
      if (map.containsKey(word)) return map.get(word);

      int cnt = 0;
      for (int i = 0; i < word.length(); i++) {
        String next = word.substring(0, i) + word.substring(i + 1);
        if (set.contains(next)) {
          cnt = Math.max(cnt, dfs(map, set, next));
        }
      }

      map.put(word, 1 + cnt);
      return 1 + cnt;
    }
  }

```