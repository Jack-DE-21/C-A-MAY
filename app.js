// Wait for the entire DOM (HTML) to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {

  // Get reference to the form with ID 'commentForm'
  const form = document.getElementById("commentForm");

  // Get reference to the textarea or input field where users type comments
  const commentText = document.getElementById("commentText");

  // Get reference to the container where submitted comments will appear
  const commentsContainer = document.getElementById("comments-container");

  // In-memory JSON array for storing comments
  let comments = [];

  const renderComments = () => {
    // Load the Handlebars template
    const source = document.getElementById("comments-template").innerHTML;
    const template = Handlebars.compile(source);

    // Reverse comments so most recent comes first
    const reversedComments = [...comments].reverse();

    // Render the template with data
    const compiledHtml = template({ comments: reversedComments });
    commentsContainer.innerHTML = compiledHtml;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const text = commentText.value.trim();
    if (!text) return;

    // Add new comment to array
    comments.push({
      name: "Pilot", 
      text: text
    });

    // Clear input
    commentText.value = "";

    // Re-render
    renderComments();
  });

  // Initial render 
  renderComments();
});
