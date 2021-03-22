A company has n employees with unique IDs from 0 to n-1. The head of the company has the ID headId.

You will receive a managers array where managers[i] is the ID of the manager for employee i.
Each employee has one direct manager. The company head has no manager (managers[headId] = -1).
It's guaranteed the subordination relationships will have a tree structure.

Example:

```
n = 8
8 employees: 0,1,2,3,4,5,6,7
headId = 4
managers = [2,2,4,6,-1,4,4,5]
```

The head of the company wants to inform all employees of news.
He will inform his direct subordinates who will inform their
direct subordinates and so on until everyone knows the news.

You will receive an informTime array where informTime[i] is the time it takes for employee i to inform all their direct
subordinates. Return the total number of minutes it takes to 
inform all employees of the news.