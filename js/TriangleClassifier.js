var TriangleClassifier = function() {

  this.classify = function(a,b,c) {
    if (a === b && b === c) {
      return "equilateral"
    }
    return "scalene";
  };
};
