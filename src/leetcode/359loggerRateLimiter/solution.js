/**
 * Initialize your data structure here.
 */
 var Logger = function() {
  this.messageMap = {};
};

/**
* Returns true if the message should be printed in the given timestamp, otherwise returns false.
      If this method returns false, the message will not be printed.
      The timestamp is in seconds granularity. 
* @param {number} timestamp 
* @param {string} message
* @return {boolean}
*/
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
const messageNextExecutionTime = this.messageMap[message];
  if (messageNextExecutionTime && messageNextExecutionTime > timestamp){
    return false;
  }
this.messageMap[message] = timestamp + 10;
return true;
};

/** 
* Your Logger object will be instantiated and called as such:
* var obj = new Logger()
* var param_1 = obj.shouldPrintMessage(timestamp,message)
*/