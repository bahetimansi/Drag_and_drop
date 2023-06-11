// Get the list items, left container, right container, and reset button
let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let resetBtn = document.querySelector(".Reset-btn");

// Variable to store the selected item during dragging
let selected = null;

// Drag event listeners for each list item
for (let list of lists) {
  list.addEventListener("dragstart", function (e) {
    // Store the selected item
    selected = e.target;
    e.dataTransfer.setData("text/plain", ""); // Required for Firefox

    // Right container drag events
    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
      rightBox.classList.add("drag-over"); // Apply drag-over class to show visual feedback
    });

    rightBox.addEventListener("dragleave", function (e) {
      rightBox.classList.remove("drag-over"); // Remove drag-over class when leaving the container
    });

    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected); // Append the selected item to the right container
      selected = null; // Reset the selected item
      rightBox.classList.remove("drag-over"); // Remove drag-over class
    });

    // Left container drag events
    leftBox.addEventListener("dragover", function (e) {
      e.preventDefault();
      leftBox.classList.add("drag-over"); // Apply drag-over class to show visual feedback
    });

    leftBox.addEventListener("dragleave", function (e) {
      leftBox.classList.remove("drag-over"); // Remove drag-over class when leaving the container
    });

    leftBox.addEventListener("drop", function (e) {
      leftBox.appendChild(selected); // Append the selected item to the left container
      selected = null; // Reset the selected item
      leftBox.classList.remove("drag-over"); // Remove drag-over class
    });
  });
}

// Reset button event listener
resetBtn.addEventListener("click", function () {
  // Move all the items back to the left container
  while (rightBox.firstChild) {
    leftBox.appendChild(rightBox.firstChild);
  }
});
