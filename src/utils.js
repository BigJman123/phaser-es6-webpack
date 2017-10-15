export const centerGameObjects = (objects) => {
  objects.forEach(function (object) {
    object.anchor.setTo(0.5)
  })
}

// export const myCustomFunction = (thing) => {
// 	console.log('my custom thing ' + thing);
// };
