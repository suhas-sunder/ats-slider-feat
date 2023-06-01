let slideshowData;

async function thisFunc() {
  await fetch("slideshow-data.json")
    .then((response) => response.json())
    .then((json) => {
      return (slideshowData = json);
    });
  checkValue();
}

thisFunc();

const checkValue = () => {
  console.log(slideshowData);
};
