// Global module
var myModule = (function(jq, _) {
  function privateMethod1() {
    jq(".container").html("test");
  }

  function privateMethod2() {
    console.log(_.min([10, 5, 100, 2, 1000]));
  }
  return {
    publicMethod: function() {
      privateMethod1();
    },
  };
// PUll in jQuery and Underscore
})(jQuery, _);

myModule.publicMethod();