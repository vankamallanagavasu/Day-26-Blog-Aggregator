document.addEventListener('DOMContentLoaded', () => {
    // Example of dynamically adding a post
    const addPostButton = document.createElement('button');
    addPostButton.textContent = 'Add Random Post';
    document.body.insertBefore(addPostButton, document.body.firstChild);

    addPostButton.addEventListener('click', function() {
        const mainContent = document.querySelector('.main-content');
        const postCount = mainContent.getElementsByClassName('post').length + 1;

        const newPost = document.createElement('div');
        newPost.className = 'post';
        newPost.innerHTML = `
            <h2>Blog Post ${postCount}</h2>
            <div class="post-meta">By Author ${postCount} on ${(new Date()).toLocaleDateString()}</div>
            <p>This is blog post number ${postCount}. It's been added dynamically!</p>
        `;

        mainContent.appendChild(newPost);
    });
});
function loadCategory(category) {
    // Placeholder: Fetch the posts for the category from your backend or API
    console.log(`Loading posts for category: ${category}`);
    // Here, you would typically make an AJAX request to your server to get the posts for the selected category
    // For demonstration, let's just change the main content text
    const mainContent = document.querySelector('.main-content');
    mainContent.innerHTML = `<h1>Posts in ${category}</h1>`;
    // Add fetched posts to mainContent
}
// Function to toggle visibility of subcategories
function toggleSubcategory(subcategory) {
    const subcategoryElement = document.getElementById(subcategory);
    subcategoryElement.classList.toggle('collapsed');
}

// Function to load category content
function loadCategory(category) {
    // Placeholder: You can implement content loading logic here
    console.log(`Loading posts for category: ${category}`);
}
