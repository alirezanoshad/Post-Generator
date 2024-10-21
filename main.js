// Constructor function for Post
function Post(authorName, postTitle, postText) {
    this.authorName = authorName;
    this.postTitle = postTitle;
    this.postText = postText;
    this.postDate = new Date().toLocaleString();
  }
  
  ////////////// Function to generate a post
  function generatePost() {
    // Input Values
    const authorName = document.getElementById('author-name').value;
    const postTitle = document.getElementById('post-title').value;
    const postText = document.getElementById('post-text').value;
  
    // Create a new Post object
    const newPost = new Post(authorName, postTitle, postText);
  
    // Create a new post element
    const postElement = document.createElement('div');
    postElement.classList.add('post');
  
    // Set the inner HTML of the post using the newPost object
    postElement.innerHTML = `
      <div class="post-header">
        <div>
          <h3>${newPost.authorName}</h3>
          <span>${newPost.postDate}</span>
        </div>
      </div>
      <div class="post-content">
        <strong>${newPost.postTitle}</strong>
        <p>${newPost.postText}</p>
      </div>
      <div class="post-footer">
        <span>❤️ 0 Likes</span>
        <span>💬 0 Comments</span>
      </div>
    `;
  
    // Append the new post to the container
    const postContainer = document.getElementById('post-container');
    postContainer.append(postElement);
  }  

  // Test
  let meow = new Date().toLocaleString()
  console.log(meow);