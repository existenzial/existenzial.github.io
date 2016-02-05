---
published: true
title: Bubble Sort: How Does It Work?
layout: post
---
OCTOBER 19, 2015

![Bubble Sort](https://jazzedaboutcoding.files.wordpress.com/2015/10/bubbles.jpg?w=300&h=200)

The time complexity of Bubble Sort makes you wonder why it’s necessary to even rebuild such an expensive function, but the effort in making your brain iron out the details of how it works differently than running a native .sort( ) method and its ease of implementation is the true joy of the exercise. Default to either the native .sort( ) method or a sort included in a library like UnderscoreJS/lodash if you want to save both the time and effort though later in your code, as Bubble Sort is never as effective as we’d like it to be.

The native method is considered more effective in how it chooses to instead use recursion and a set pivot point (e.g.array[0])to compare all the elements in the array against. Any values in the array that are smaller than the pivot are pushed to the left of that pivot point and smaller values are pushed to the right. After all elements have been placed in the proper position in respect to the pivot, you may have to concatenate the left, pivot, and right sets of values back together again to return a newly sorted array depending on whether you used several arrays to sort the left/pivot/right sets of values or sorted them in the array provided.

[Click here](https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/) to delve deeper and learn all of the individual steps involved beyond the aforementioned.

For a working implementation of Bubble Sort, you can check out my code below and read through the pseudo-code to talk your way through it. Happy coding!

```javascript
var bubbleSort = function(array) {
    var anySwapsYet;
    //create a variable to save a boolean determining whether the item should be swapped or not
    for(var i = 0; i < array.length; i++){
    //loop through the array to get the values
        anySwapsYet = false;
        //assign a value of false to start with for swapping the items since you need to loop through again to compare them first
        for (var j = 0; j < array.length; j++){
        //loop through the array a second time to get another point of reference when reassigning the values held at each indices
            if(array[j] > array[j + 1]){
            //if the value of the element is greater than what is next to it in the array 
                var temp = array[j]; 
                //save value temporarily so you can swap it after reassigning/swapping the other value
                array[j] = array[j + 1];
                //assign the value of the index with the value next to it
                array[j + 1] = temp;
                //then assign that value to to the temp value in case it needs to be swapped after the next iteration
            }
        }
        if(!anySwapsYet){
        //if there were no swaps after the iteration
            return array;
            //simply return the array
        }
    }
    return array;
};
```
