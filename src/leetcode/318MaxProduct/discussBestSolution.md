```java
  public class Solution {
	/**
	 * @param words
	 * @return
	 *
	 * 		The soultion is calcuated by doing a product of the length of
	 *         each string to every other string. Anyhow the constraint given is
	 *         that the two strings should not have any common character. This
	 *         is taken care by creating a unique number for every string. Imagine
	 *         a 32 bit integer where 0 bit corresponds to 'a', 1st bit
	 *         corresponds to 'b' and so on.
	 *
	 *         Thus if two strings contain the same character when we do and
	 *         "AND" the result will not be zero and we can ignore that case.
	 */
	public int maxProduct(String[] words) {
		int[] checker = new int[words.length];
		int max = 0;
		// populating the checker array with their respective numbers
		for (int i = 0; i < checker.length; i++) {
			int num = 0;
			for (int j = 0; j < words[i].length(); j++) {
				num = num | ( 1 << (words[i].charAt(j) - 'a'));
			}
			checker[i] = num;
		}

		for (int i = 0; i < words.length; i++) {
			for (int j = i + 1; j < words.length; j++) {
				if ((checker[i] & checker[j]) == 0) //checking if the two strings have common character
					max = Math.max(max, words[i].length() * words[j].length());
			}
		}
		return max;
	}

}

```
