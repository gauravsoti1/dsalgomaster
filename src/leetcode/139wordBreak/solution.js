function Node({ val, children = {}, isEnd }) {
  return { val, children, isEnd };
}

function Trie() {
  let root = Node({ val: null, children: {}, isEnd: false });
  function insert(word) {
    let current = root;
    for (let c of word) {
      if (!current.children[c]) {
        current.children[c] = Node({ val: c, children: {}, isEnd: false });
      }
      current = current.children[c];
    }
    current.isEnd = true;
  }
  function startingWith(c, node = root) {
    return node.children[c];
  }

  function print() {
    console.log(JSON.stringify(root));
  }
  return {
    insert,
    print,
    root,
    startingWith,
  };
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*

  Runtime: 88 ms, faster than 56.96% of JavaScript online submissions for Word Break.
  Memory Usage: 40.7 MB, less than 52.25% of JavaScript online submissions for Word Break.

*/
var wordBreak = function(s, wordDict) {
  const trie = Trie();
  wordDict.forEach((word) => trie.insert(word));
  // trie.print();
  return findAnswer(s, trie);
};

function findAnswer(word, trie, seen = {}) {
  if (word.length === 0) return true;
  if (!trie.startingWith(word[0])) return false;
  let current = trie.startingWith(word[0]);
  let index = 0;
  const matchingRemainingWords = [];
  while (current && index < word.length) {
    if (current.isEnd) {
      const remainingWord = word.substring(index + 1);
      if (!seen[remainingWord]) {
        seen[remainingWord] = true;
        matchingRemainingWords.push(remainingWord);
      }
    }
    index++;
    current = trie.startingWith(word[index], current);
  }
  // Trying to find answer in reverse order, hoping this way our call stack would be smaller
  // which was in the case like this "aaaaaaaaaaaaaaaaaaaaa", dict = ["a","aa","aaa","aaaa"]
  for (let i = matchingRemainingWords.length - 1; i >= 0; i--) {
    if (findAnswer(matchingRemainingWords[i], trie, seen)) return true;
  }
  return false;
}

(function test1() {
  const answer = wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    [
      "a",
      "aa",
      "aaa",
      "aaaa",
      "aaaaa",
      "aaaaaa",
      "aaaaaaa",
      "aaaaaaaa",
      "aaaaaaaaa",
      "aaaaaaaaaa",
    ]
  );
  console.log("answer for big all a and then b string =", answer);
})();

(function test2() {
  const answer = wordBreak("leetcode", ["leet", "code"]);
  console.log("The answer for leetcode = ", answer);
})();

(function test3() {
  const answer = wordBreak("applepenapple", ["apple", "pen"]);
  console.log("The answer for applepenapple = ", answer);
})();

(function test4() {
  const answer = wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]);
  console.log("The answer for catsandog = ", answer);
})();
