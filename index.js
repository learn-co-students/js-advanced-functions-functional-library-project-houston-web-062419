const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, alert) {
      
        if (array.isArray)  
          for (let i = 0; i < array.length; i++) {
            alert(array[i])
          }
        else
          for (let key in array){
            alert(array[key])
          }
        return array
      
    },

    map: function(array, alert) {
      let newarray  = []

       if (array.isArray)  
       {
        for (let i = 0; i < array.length; i++) {
            newarray[i] = alert(array[i])
          }
       }
          
        else
          for (let key in array){
            newarray.push(alert(array[key]))
          }
        return newarray
    },

    reduce: function(array, func, accum ) {
      let i_start = 0
      if (accum == undefined)
      {
        accum = array[0]
        i_start = 1
      }

      for (let i = i_start; i < array.length; i++) {
            accum = func(accum, array[i])
          }
          return accum
    },

    find: function(array, func) {
      for (let i = 0; i < array.length; i++) {
            if(func(array[i]) == true)
              return array[i]
          }
    },

    filter: function (array, func) {
      let newarray = []
       for (let i = 0; i < array.length; i++) {
            if(func(array[i]) == true)
              newarray.push( array[i])
          }
        return newarray
    },


    size: function (array) {
      if (array.isArray)
        return array.length
      let size  = 0
     for (let key in array){
            size++
        }
        return size

    },

    first: function (array, n = 1) {
      let newarray = []
      if (n == 1)
        return array[0]
      for (var i = 0; i < n; i++) {
        newarray.push(array[i])
      }
      return newarray
    },

    last: function (array, n = 1) {
      let newarray = []
      if (n == 1)
        return array[array.length - 1]
      for (var i = array.length - n; i < array.length; i++) {
        newarray.push(array[i])
      }
      return newarray
    },

    compact: function (array) {
      let newarray = []
      for (var i = 0; i < array.length; i++) {
        if (array[i])
          newarray.push(array[i])
      }
      return newarray
    },

    sortBy: function (array, func) {
       let newarray = Array.from(array)
       newarray.sort(function(a,b){return func(a) - func(b)})
        return newarray
    },

    flatten: function (array, flag = false) {
      if (flag)
        return array.flat(1)
      else 
      {
        function flattenDeep(arr1) {
         return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
        }
        return flattenDeep(array);
      }
    },
    uniq: function (array, flag = false, func){
       let newarray = []
       if (func != undefined)
        array = array.map(a => func(a))

      for (var i = 0; i < array.length; i++) {
        if (!newarray.includes(array[i]))
          newarray.push(array[i])

      }
      return newarray
    },

    keys: function (obj) {
      let ar = []
       for (let key in obj){
            ar.push(key)
          }
          return ar
    },
    values: function (obj) {
      let ar = []
       for (let key in obj){
            ar.push(obj[key])
          }
          return ar
    },
    functions: function(obj) {

      let ar = []
       for (let key in obj){
            if (typeof(obj[key]) == "function" ){
                ar.push(key)

            }
          }
          return ar.sort()
    },
    uniqSorted: function (array) {
      return fi.uniq(array).sort()
    },

    uniqSortedReverse: function (array) {
      return fi.uniq(array).sort((a, b) => {return b - a})
    },
    sum:  function(a, b, c) {
      return a + b + c
    },
    giveMeMore: function () {
      // body...
    }

  }
})()


function sum(a, b, c = 0) {
  return a + b + c
}


fi.libraryMethod()
let ar = [1,2,3]

console.log(sum(ar[0], ar[1], ar[2]))

console.log(ar.reduce((acc, a) => sum(a, acc)))

