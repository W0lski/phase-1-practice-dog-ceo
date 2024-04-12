console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    // Challenge 1
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById("dog-image-container");
  
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const images = data.message;
        images.forEach(imageUrl => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          imgElement.alt = "Dog Image";
          dogImageContainer.appendChild(imgElement);
        });
      })
      .catch(error => console.error("Error fetching images:", error));
  
    // Challenge 2
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById("dog-breeds");
  
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
        breeds.forEach(breed => {
          const breedItem = document.createElement("li");
          breedItem.textContent = breed;
          dogBreedsList.appendChild(breedItem);
        });
      })
      .catch(error => console.error("Error fetching breeds:", error));
  
    // Challenge 3
    dogBreedsList.addEventListener("click", event => {
      if (event.target.tagName === "LI") {
        event.target.style.color = "blue"; // Change font color to blue
      }
    });
  
    // Challenge 4
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener("change", event => {
      const selectedLetter = event.target.value;
      const breedItems = dogBreedsList.getElementsByTagName("li");
      for (const breedItem of breedItems) {
        if (breedItem.textContent.startsWith(selectedLetter)) {
          breedItem.style.display = "block";
        } else {
          breedItem.style.display = "none";
        }
      }
    });
  });
  