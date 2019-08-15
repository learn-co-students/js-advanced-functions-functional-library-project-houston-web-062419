const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

        // for(var i=0; i < collection.length; i++)
        for(var i in collection)
        callback(collection[i], i, collection)

      return collection
    },

    map: function(collection, callback) {
      var array = []
      for(var i in collection)
      array.push(callback(collection[i], i, collection))

      return array
    },

    reduce: function(collection, callback, acc) {
      if (acc) {
        for(var i in collection) {
          acc = callback(acc, collection[i], collection)
        }
        return acc
      } else {
        acc = collection[0]
        for(var i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
        return acc
      }
    },

    find: function(collection, predicate){
      for(var i in collection){
        if (predicate(collection[i])) {
          return collection[i]
        }
      }
    },

    filter: function(collection, predicate){
      var array = []
      for(var i in collection){
        if (predicate(collection[i])) {
          array.push(collection[i])
        }
      }
      return array
    },

    size: function(collection) {
      return Object.keys(collection).length
    },

    first: function(array, n) {
      var arr = []
      if (n) {
        for(var i = 0; i < n; i++) {
          arr.push(array[i])
        }
        return arr
      } 
      else { 
        return array[0]
      }

    },

    last: function (array, n) {
      // console.log(array)
      let newArray = array.reverse()
      var arr = []
      if (n) {
        for(var i = 0; i < n; i++) {
          arr.push(newArray[i])
        }
        console.log(arr)
        return arr
      } 
      else { 
        return newArray[0]
      }
    },

    functions: function() {

    },

  }

})()
fi.libraryMethod()
