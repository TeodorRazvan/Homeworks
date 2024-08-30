document.addEventListener("DOMContentLoaded", function () {
  const commentsContainer = document.getElementById("comments-container");
  const newCommentText = document.getElementById("new-comment-text");
  const addCommentBtn = document.getElementById("add-comment-btn");

  // Initialize the comments array with some initial comments
  let comments = [
    {
      id: Date.now(),
      username: "comment4life",
      text: "Poorly written comments are my life! NO ragrets!",
    },
    {
      id: Date.now() + 1,
      username: "comment4life",
      text: "Another comment example",
    },
    {
      id: Date.now() + 2,
      username: "comment4life",
      text: "Yet another comment example",
    },
  ];

  // Function to display comments in the UI
  function displayComments() {
    commentsContainer.innerHTML = "";
    comments.forEach((comment) => {
      const commentElement = document.createElement("div");
      commentElement.innerHTML = `
                <strong>${comment.username}</strong>: ${comment.text}
            `;
      commentsContainer.appendChild(commentElement);
    });
  }

  // Initial display of comments
  displayComments();

  // Event listener for adding a new comment
  addCommentBtn.addEventListener("click", function () {
    const newText = newCommentText.value.trim();
    if (newText !== "") {
      const newComment = {
        id: Date.now(),
        username: "comment4life",
        text: newText,
      };
      comments.push(newComment);
      displayComments();
      newCommentText.value = ""; // Clear the textarea
    }
  });
});
