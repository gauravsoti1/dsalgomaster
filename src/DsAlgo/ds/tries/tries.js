//  Understanding from: Udemy faang course, Section 35

//  This is my own code

/*
 * Instructor in the udemy course mentioned that we don't need to
 * store val in the node because we are doing nothing in the value.
 * But I think it doesn't really matter if we store it
 */

/*
  ? Space complexity: O(n) 
  * because we will be storing entire word.
  * Don't think of all the hashmaps at different levels, just think 
  * that when only one word is inserted, the space taken will be
  * actually the word only 
 */

/*
  ? Time Complexity: O(l)
  * l is the length of the word because in the worst case, we will be
  * traversing through whole of the word
 */

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

  function search(word) {
    let current = root;
    for (let c of word) {
      current = current.children[c];
      if (!current) return false;
    }
    return current.isEnd;
  }

  function startsWith(prefix) {
    let current = root;
    for (let c of prefix) {
      current = current.children[c];
      if (!current) return false;
    }
    return true;
  }

  function print() {
    console.log("trie === ", JSON.stringify(root));
  }

  return { insert, search, print, startsWith };
}

(function test1() {
  const t = new Trie();
  t.insert("hello");
  // t.print();
  console.log("is hello present ", t.search("hello"));
  console.log("should start with h, he, hel, hell, hello ");

  console.log("expect to start with h", t.startsWith("h"));
  console.log("expect to start with he", t.startsWith("he"));
  console.log("expect to start with hel", t.startsWith("hel"));
  console.log("expect to start with hell", t.startsWith("hell"));

  console.log("---- shouldn't start with hellos -----");
  console.log("expect to not start with hellos", t.startsWith("hellos"));
})();

(function emptyWordTest() {
  const t = new Trie();
  t.insert("");
  console.log("is empty present?", t.search(""));
})();

// how the datastructure looks like
(function root(){
  const t = new Trie();
  t.insert("yes");
  t.print();
})()