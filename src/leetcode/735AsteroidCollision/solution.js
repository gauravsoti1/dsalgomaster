const NEGATIVE = "left";
const POSITIVE = "right";
function willAsteroidsCollide(asteroid1, asteroid2) {
  return asteroid1 > 0 && asteroid2 < 0;
}

function getTop2Asteroids(stack) {
  const length = stack.length;
  return [stack[length - 2], stack[length - 1]];
}

var asteroidCollision = function(asteroids) {
  const stack = [];
  let index = 0,
    length = asteroids.length;
  while (index < length) {
    stack.push(asteroids[index]);
    if (index === 0 || stack.length < 2) {
    } else {
      let [asteroid1, asteroid2] = getTop2Asteroids(stack);
      let asteroidsWillCollide = willAsteroidsCollide(asteroid1, asteroid2);
      while (asteroidsWillCollide) {
        const asteroid1Size = Math.abs(asteroid1);
        const asteroid2Size = Math.abs(asteroid2);
        if (asteroid2Size > asteroid1Size)
          stack[stack.length - 2] = stack[stack.length - 1];
        stack.pop();
        if (asteroid1Size === asteroid2Size) stack.pop();
        const top2asteroids = getTop2Asteroids(stack);
        asteroid1 = top2asteroids[0];
        asteroid2 = top2asteroids[1];
        asteroidsWillCollide = willAsteroidsCollide(asteroid1, asteroid2);
      }
    }
    index++;
  }
  return stack;
};
