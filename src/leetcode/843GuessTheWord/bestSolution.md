```java

  class Solution {
    public void findSecretWord(String[] wordlist, Master master) {

        Set<String> words = new HashSet<>(Arrays.asList(wordlist));
        while (true) {
            Iterator iterator = words.iterator();

            // Make a guess. If the secret is guessed, just return. If not, store that word in curWord.
            String curWord = (String)iterator.next();
            int currentMatching = master.guess(curWord);
            if (currentMatching == 6) return;

            // Start a new loop and delete all strings that have a different matching count.
            // Let's say the secret and curWord have 3 matching count.
            // It is safe to delete all words that do not have 3 matching count.
            //??? WHY? if I have a word that has 4 matching count??
            while (iterator.hasNext()) {
                // the answer will also have the same matching count, hence we can eliminate all others
                if (!doTheyHaveSameMatchingCount(curWord, (String)iterator.next(), currentMatching)) {
                    iterator.remove();
                }
            }
            words.remove(curWord);
        }
    }

    public boolean doTheyHaveSameMatchingCount(String curWord, String nextWord, int k) {
        int count = 0;
        for (int i = 0; i < 6; i++) {
            if (nextWord.charAt(i) == curWord.charAt(i)) {
                count++;
            }
        }
        return k == count;
    }


}






```
