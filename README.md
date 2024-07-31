Here's a JavaScript function to sort an array of blog posts by their titles in alphabetical order. The function assumes that each blog post is an object with a title property.

Input
```
const blogPosts = [
    { id: 1, title: "Understanding JavaScript Closures", body: "Content 1" },
    { id: 2, title: "A Guide to CSS Flexbox", body: "Content 2" },
    { id: 3, title: "How to Use Git and GitHub", body: "Content 3" },
    { id: 4, title: "Introduction to Laravel", body: "Content 4" }
];
```

Output
```
[
    { id: 2, title: "A Guide to CSS Flexbox", body: "Content 2" },
    { id: 3, title: "How to Use Git and GitHub", body: "Content 3" },
    { id: 4, title: "Introduction to Laravel", body: "Content 4" },
    { id: 1, title: "Understanding JavaScript Closures", body: "Content 1" }
]
```

Explanation
The function sortPostsByTitle takes an array of blog posts as its argument.
It uses the sort method to sort the array in-place.
The sort method's callback function compares the titles of two posts, a and b, in a case-insensitive manner using toLowerCase().
The function returns -1 if titleA is alphabetically less than titleB, 1 if it's greater, and 0 if they are equal.
The sorted array is then returned and logged to the console in the example provided.
