---
published: true
title: Bubble Sort: How Does It Work?
layout: post
---
OCTOBER 19, 2015
bubbles

The time complexity of Bubble Sort makes you wonder why it’s necessary to even rebuild such an expensive function, but the effort in making your brain iron out the details of how it works differently than running a native .sort( ) method and its ease of implementation is the true joy of the exercise. Default to either the native .sort( ) method or a sort included in a library like UnderscoreJS/lodash if you want to save both the time and effort though later in your code, as Bubble Sort is never as effective as we’d like it to be.

The native method is considered more effective in how it chooses to instead use recursion and a set pivot point (e.g.array[0])to compare all the elements in the array against. Any values in the array that are smaller than the pivot are pushed to the left of that pivot point and smaller values are pushed to the right. After all elements have been placed in the proper position in respect to the pivot, you may have to concatenate the left, pivot, and right sets of values back together again to return a newly sorted array depending on whether you used several arrays to sort the left/pivot/right sets of values or sorted them in the array provided.

Click here to delve deeper and learn all of the individual steps involved beyond the aforementioned.

For a working implementation of Bubble Sort, you can check out my code below and read through the pseudo-code to talk your way through it. Happy coding!

https://gist.github.com/existenzial/efb65f4428777fb14836.js