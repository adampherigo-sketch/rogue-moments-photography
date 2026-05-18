const navigationContainer = document.getElementById("navigation-container");

const siteBasePath = window.location.hostname.includes("github.io")
  ? "/rogue-moments-photography"
  : "";

if (navigationContainer) {
  fetch(`${siteBasePath}/components/navigation.html`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Navigation file could not be loaded.");
      }

      return response.text();
    })
    .then(data => {
      navigationContainer.innerHTML = data;
    })
    .catch(error => {
      console.error("Navigation failed to load:", error);
    });
}
