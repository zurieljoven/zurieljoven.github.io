document.addEventListener("DOMContentLoaded", function() {
  const yearFilters = document.querySelectorAll(".year-filter");
  const typeFilters = document.querySelectorAll(".type-filter");
  const categoryFilters = document.querySelectorAll(".category-filter");
  const projectItems = document.querySelectorAll(".project-item");
  const noMatchingMessage = document.querySelector(".no-matching-projects");

  function getSelectedValues(filters) {
    const selectedValues = Array.from(filters)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    // If "All" is selected or no specific values are selected, return an empty array to match all
    if (selectedValues.includes("all") || selectedValues.length === 0) {
      return [];
    }
    return selectedValues;
  }

  function matchesFilter(selectedValues, itemValues) {
    if (selectedValues.length === 0) return true; // No filters selected or "All" is selected, match all
    return selectedValues.every(value => itemValues.includes(value));
  }

  function filterProjects() {
    const selectedYears = getSelectedValues(yearFilters);
    const selectedTypes = getSelectedValues(typeFilters);
    const selectedCategories = getSelectedValues(categoryFilters);

    let hasVisibleProjects = false;

    projectItems.forEach(item => {
      const itemYears = item.getAttribute("year").split(",");
      const itemTypes = item.getAttribute("type").split(",");
      const itemCategories = item.getAttribute("category").split(",");

      const yearMatches = matchesFilter(selectedYears, itemYears);
      const typeMatches = matchesFilter(selectedTypes, itemTypes);
      const categoryMatches = matchesFilter(selectedCategories, itemCategories);

      if (yearMatches && typeMatches && categoryMatches) {
        item.style.display = "block";
        hasVisibleProjects = true;
      } else {
        item.style.display = "none";
      }
    });

    // Show or hide the "No matching projects" message
    noMatchingMessage.style.display = hasVisibleProjects ? "none" : "block";
  }

  // Add event listeners to all checkboxes
  [yearFilters, typeFilters, categoryFilters].forEach(filterGroup => {
    filterGroup.forEach(checkbox => {
      checkbox.addEventListener("change", filterProjects);
    });
  });

  // Initial filter check
  filterProjects();
});
