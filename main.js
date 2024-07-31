const blogPosts = [
  { id: 1, title: "Understanding JavaScript Closures", body: "Content 1" },
  { id: 2, title: "A Guide to CSS Flexbox", body: "Content 2" },
  { id: 3, title: "How to Use Git and GitHub", body: "Content 3" },
  { id: 4, title: "Introduction to Laravel", body: "Content 4" },
];

function sortPostsByTitle(posts) {
  return posts.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
  });
}

const sortedPosts = sortPostsByTitle(blogPosts);
console.log(sortedPosts);
