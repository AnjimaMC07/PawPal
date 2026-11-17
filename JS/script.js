document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const petItems = document.querySelectorAll(".pet-item");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const noResults = document.getElementById("noResults");

  let selectedCategory = "all";

  function filterPets() {
    const searchText = searchInput.value.toLowerCase().trim();
    let visiblePets = 0;

    petItems.forEach(function (pet) {
      const category = pet.dataset.category;
      const name = pet.dataset.name.toLowerCase();

      const matchesCategory =
        selectedCategory === "all" || category === selectedCategory;

      const matchesSearch = name.includes(searchText);
      const showPet = matchesCategory && matchesSearch;

      pet.classList.toggle("d-none", !showPet);

      if (showPet) {
        visiblePets++;
      }
    });

    noResults.classList.toggle("d-none", visiblePets > 0);
  }

  searchInput.addEventListener("input", filterPets);

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectedCategory = button.dataset.category;

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active", "btn-paw");
        btn.classList.add("btn-outline-paw");
      });

      button.classList.add("active", "btn-paw");
      button.classList.remove("btn-outline-paw");

      filterPets();
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {

  // Pet search and category filter
  const searchInput = document.getElementById("searchInput");
  const petItems = document.querySelectorAll(".pet-item");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const noResults = document.getElementById("noResults");

  let selectedCategory = "all";

  function filterPets() {
    if (!searchInput || petItems.length === 0) return;

    const searchText = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    petItems.forEach(function (pet) {
      const name = (pet.dataset.name || "").toLowerCase();
      const category = pet.dataset.category;

      const matchesSearch = name.includes(searchText);
      const matchesCategory =
        selectedCategory === "all" || category === selectedCategory;

      const showPet = matchesSearch && matchesCategory;

      pet.classList.toggle("d-none", !showPet);

      if (showPet) visibleCount++;
    });

    if (noResults) {
      noResults.classList.toggle("d-none", visibleCount > 0);
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", filterPets);
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectedCategory = button.dataset.category;

      filterButtons.forEach(function (btn) {
        btn.classList.remove("active", "btn-paw");
        btn.classList.add("btn-outline-paw");
      });

      button.classList.add("active", "btn-paw");
      button.classList.remove("btn-outline-paw");

      filterPets();
    });
  });

  // Adoption form
  const form = document.getElementById("adoptionForm");
  const petChoice = document.getElementById("petChoice");
  const successMessage = document.getElementById("successMessage");
  const successPet = document.getElementById("successPet");

  const params = new URLSearchParams(window.location.search);
  const selectedPet = params.get("pet") || "Buddy";

  if (petChoice) {
    petChoice.value = selectedPet;
  }

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Demo only: data is not saved or sent to a server.
      if (successPet) {
        successPet.textContent = selectedPet;
      }

      if (successMessage) {
        successMessage.classList.remove("d-none");
      }

      form.classList.add("d-none");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

});