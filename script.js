const url_format = `https://openapi.programming-hero.com/api/phones?search=`; //search text at last
const example_url = `https://openapi.programming-hero.com/api/phones?search=iphone`;
const phone_detail_url = `https://openapi.programming-hero.com/api/phone/`; //id at last

const resultContainer = document.querySelector(".result-container");
const form = document.querySelector("form");
const input = document.querySelector("input");

let defaultData = [];
let searhedData = [];

async function getData(url) {
  const response = await fetch(url);
  const result = await response.json();
  // console.log(result);
  return result;
}

// getData(example_url);
// fetching phones at loading the [age first
getDefaultPhones(example_url);

async function getDefaultPhones(url) {
  let result = await getData(url);
  defaultData = result.data;
  defaultData = defaultData.splice(10, 5);
  console.log(defaultData);
  displayData(defaultData);
}

//! display data function
function displayData(arr) {
  resultContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();
  arr.forEach(async (obj) => {
    //! phone div
    const phoneDiv = document.createElement("div");
    phoneDiv.classList.add("phone-div");

    const image = document.createElement("img");
    image.src = obj.image;

    const phoneName = document.createElement("h2");
    phoneName.innerText = obj.phone_name;

    const description = document.createElement("p");
    description.innerText =
      "There are many variations of passages of available, but the majority have suffered";

    const showDetails = document.createElement("button");
    showDetails.innerText = "SHOW DETAILS";
    

    //! detail div
    const detailDiv = document.createElement("div");
    detailDiv.classList.add("close", "detail-div");
    
    // calling a function to create the div that takes an object of information
    // createDetailDiv(detailDiv);

    showDetails.addEventListener("click", async () => {
      let details = await fetch(phone_detail_url + obj.slug);
      details = await details.json();
      details = details.data;
      createDetailDiv(detailDiv, details);
      detailDiv.classList.remove("close");
    })

   

    phoneDiv.append(image, phoneName, description, showDetails);
    fragment.append(phoneDiv, detailDiv, );
    // fragment.append(phoneDiv)

  });
  const showAllButton = document.createElement("button");
  showAllButton.setAttribute("id","show-all")
  showAllButton.innerText = "SHOW ALL";
  showAllButton.addEventListener("click", ()=>{
    displayData(searhedData);
    showAllButton.classList.add("close");
  })
  resultContainer.append(fragment, showAllButton);
}
// creating detail div
function createDetailDiv(div, data) {
  const image = document.createElement("img");
  image.src = data.image;

  const phoneName = document.createElement("h2");
  phoneName.innerText = data.name;

  const brand = document.createElement("p");
  brand.innerText = "Brand : " + data.brand;

  const storage = document.createElement("p");
  storage.innerText = "Storage : " + data.mainFeatures.storage;

  const chipset = document.createElement("p");
  chipset.innerText = "Chip set : " + data.mainFeatures.chipSet;

  const memory = document.createElement("p");
  memory.innerText = "Memory : " + data.mainFeatures.memory;

  const sensors = document.createElement("p");
  sensors.innerText = "Sensors : " + data.mainFeatures.sensors;

  const release = document.createElement("p");
  release.innerText = data.releaseDate;

  const close = document.createElement("button");
  close.innerText = "CLOSE";
  close.addEventListener("click", (e)=>{
    div.classList.add("close");
  })

  div.append(image, phoneName, brand, storage, chipset, memory, sensors, release, close);
}

form.addEventListener("submit", async(e)=>{
  e.preventDefault();
 let data =  await getData(url_format + input.value);
 data = data.data
 searhedData = data;
 console.log(data);
 displayData(data.slice(0,5));

})