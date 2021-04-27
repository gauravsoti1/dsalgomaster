```java

  static int equiLeader(int[] a){
    int len = a.length;
    int equi_leaders = 0;

    // first, compute the leader
    int leader = a[0];
    int ctr = 1;

    for(int i = 1; i < a.length; i++){
      if(a[i] == leader) ctr++;
      else ctr--;
      if(ctr == 0){
        ctr = 1;
        leader = a[i];
      }
    }

    // check if it's a leader?
    int total = 0;
    for(int i : a){
      if(i == leader) total++;
    }

    if(total <= (len/2)) return 0; // impossible

    int ldrCount = 0;
    for(int i = 0; i < a.length; i++){
      if(a[i] == leader) ldrCount++;
      int leadersInRightPart = (total - ldrCount);
      if(ldrCount > (i+1)/2   &&   leadersInRightPart > (len-i-1)/2){
        equi_leaders++;
      }
    }

    return equi_leaders;
  }




```
