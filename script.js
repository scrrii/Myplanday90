document.addEventListener("DOMContentLoaded", function() {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  checkboxes.forEach((box, index) => {
    const saved = localStorage.getItem(today + "_box_" + index);
    box.checked = saved === "true";
    box.addEventListener("change", () => {
      localStorage.setItem(today + "_box_" + index, box.checked);
    });
  });
});

function resetChecklist() {
  const today = new Date().toISOString().slice(0, 10);
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((box, index) => {
    box.checked = false;
    localStorage.removeItem(today + "_box_" + index);
  });
}
