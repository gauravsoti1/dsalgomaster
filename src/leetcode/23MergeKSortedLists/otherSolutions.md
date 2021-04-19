## Approach 2: Compare one by one

Algorithm

    Compare every k nodes (head of every linked list) and get the node with the smallest value.
    Extend the final sorted linked list with the selected nodes.

Complexity Analysis

    Time complexity : O(kN) where k is the number of linked lists.
        Almost every selection of node in final linked costs O(k)(k-1 times comparison).
        There are N nodes in the final linked list.

    Space complexity :
        O(n) Creating a new linked list costs O(n) space.
        O(1) It's not hard to apply in-place method - connect selected nodes instead of creating new nodes to fill the new linked list.

Approach 3: Optimize Approach 2 by Priority Queue

Algorithm

Almost the same as the one above but optimize the comparison process by priority queue. You can refer [here](https://en.wikipedia.org/wiki/Priority_queue) for more information about it.

```python

  from Queue import PriorityQueue

  class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """
        head = point = ListNode(0)
        q = PriorityQueue()
        for l in lists:
            if l:
                q.put((l.val, l))
        while not q.empty():
            val, node = q.get()
            point.next = ListNode(val)
            point = point.next
            node = node.next
            if node:
                q.put((node.val, node))
        return head.next

```

Complexity Analysis

    Time complexity : O(Nlog⁡k) where k is the number of linked lists.
        The comparison cost will be reduced to O(log⁡k) for every pop and insertion to priority queue. But finding the node with the smallest value just costs O(1) time.
        There are NNN nodes in the final linked list.

    Space complexity :
        O(n) Creating a new linked list costs O(n) space.
        O(k) The code above present applies in-place method which cost O(1) space. And the priority queue (often implemented with heaps) costs O(k) space (it's far less than N in most situations).


## Approach 4: Merge lists one by one

Algorithm

Convert merge k lists problem to merge 2 lists (k-1) times. Here is the merge 2 lists problem page.

Complexity Analysis

    Time complexity : O(kN) where k is the number of linked lists.
        We can merge two sorted linked list in O(n) time where n is the total number of nodes in two lists.
        Sum up the merge process and we can get: O(∑i=1k−1​(i∗(kN​)+kN​))=O(kN).

    Space complexity : O(1)
        We can merge two sorted linked list in O(1) space.
