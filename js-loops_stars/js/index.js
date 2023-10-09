console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let counter = 1; counter < 6; counter++) {
    const newStar = document.createElement("img");
    if (filledStars < counter) {
      newStar.setAttribute("src", "./assets/star-empty.svg");
      newStar.setAttribute("index", counter);
    } else {
      newStar.setAttribute("src", "./assets/star-filled.svg");
      newStar.setAttribute("index", counter);
    }
    newStar.addEventListener("click", () => {
      renderStars(counter);
    });
    starContainer.append(newStar);
    //--^-- your code here --^--
  }
}

renderStars(0);
