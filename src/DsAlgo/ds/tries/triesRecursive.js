/*
  This solution is 90% similar to the solution of the 
  udemy FAANG course

  I just made it a little more readable and used function 
  instead of classes

*/
function Node({ val, children = {}, isEnd = false }) {
  return {
    val,
    children,
    isEnd,
    toString() {
      return `val = ${val} ||  children = ${Object.keys(children).join(
        ","
      )} || isEnd = ${isEnd} `;
    },
  };
}

function Trie() {
  const root = new Node({ val: null });

  function insert(word, node = root) {
    if (word.length === 0) {
      node.isEnd = true;
      return;
    }
    const firstChar = word[0];
    if (!node.children[firstChar]) {
      node.children[firstChar] = Node({ val: firstChar });
      insert(word.slice(1), node.children[firstChar]);
    } else {
      insert(word.slice(1), node.children[firstChar]);
    }
  }

  function search(word, node = root) {
    if (word.length === 0) return node.isEnd;
    const firstChar = word[0];
    if (!node.children[firstChar]) return false;
    return search(word.slice(1), node.children[firstChar]);
  }

  function startsWith(prefix, node = root) {
    if (prefix.length === 0) return true;
    const firstChar = prefix[0];
    if (!node.children[firstChar]) return false;
    return startsWith(prefix.slice(1), node.children[firstChar]);
  }

  function print() {
    console.log(JSON.stringify(root));
  }

  return { insert, search, startsWith, print };
}

(function test1() {
  const t = new Trie();
  t.insert("hello");
  // t.print();
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
