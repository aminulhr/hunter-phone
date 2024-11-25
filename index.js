const loadPhone = async (searchPhone = "oppo") => {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
  );

  const data = await res.json();
  const phones = data.data;

  displyPhone(phones);
};

const displyPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  //clear container after load new data
  phoneContainer.textContent = "";
  const getshowMoreBtn = document.getElementById("showMore-btn");
  if (phones.length > 12) {
    getshowMoreBtn.classList.remove("hidden");
  } else getshowMoreBtn.classList.add("hidden");
  //how many product show after search
  phones = phones.slice(0, 12);
  phones.forEach((phone) => {
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-400 w-96 shadow-xl p-4 rounded-xl text-black`;
    phoneCard.innerHTML = `
        <figure Class="flex justify-center">
            <img Class='rounded-md 'src="${phone.image}"alt="Shoes"/>
        </figure>
        <div class="card-body ">
            <h2 class="card-title flex justify-center">${phone.phone_name}</h2>
            <p Class="flex justify-center">If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions flex justify-center">
                <button onclick="showDetails('${phone.slug}')" class="btn btn-primary ">Show Details</button>
            </div>
        </div>`;

    phoneContainer.appendChild(phoneCard);
  });
  togolSpinner(false);
};

loadPhone();

// handel search
const handelSeardh = () => {
  togolSpinner(true);
  const getSearch = document.getElementById("search-filde");
  const getSearchValue = getSearch.value;
  loadPhone(getSearchValue);
};

const togolSpinner = (isloading) => {
  const loadspinner = document.getElementById("loading-spinners");
  if (isloading) {
    loadspinner.classList.remove("hidden");
  } else {
    loadspinner.classList.add("hidden");
  }
};

// handel show details
const showDetails = async (id) => {
  // console.log("click show details", id);
  const getData = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const data = await getData.json();
  const phone = data.data;
  console.log(phone);
  phoneDetails(phone);
};

const phoneDetails = (phone) => {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.innerHTML = `
    
  <img Class="text-center w-20 h-28" src="${phone.image}"/>
  <h1 Class="text-xl">Name: ${phone.name}</h1>
  <p>Display: ${phone.mainFeatures.displaySize} </p>

  `;
  show_my_modal.showModal();
};
