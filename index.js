const loadPhone = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/phones?search=iphone"
  );
  const data = await res.json();
  const phones = data.data;
  displyPhone(phones);
};
const displyPhone = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phones.forEach((phone) => {
    console.log(phone);
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-300 w-96 shadow-xl p-4 rounded-xl`;
    phoneCard.innerHTML = `
                    <figure Class="flex justify-center">
              <img Class='rounded-md '
                src="${phone.image}"
                alt="Shoes"/> </figure>
           
              

            <div class="card-body ">
              <h2 class="card-title flex justify-center">${phone.phone_name}</h2>
              <p Class="flex justify-center">If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions flex justify-center">
                <button class="btn btn-primary ">Buy Now</button>
              </div>
            </div>
          </div>
    `;
    phoneContainer.appendChild(phoneCard);
  });
};

loadPhone();
// handel search
const handelSeardh = () => {
  const getSearch = document.getElementById("search-filde");
  const getSearchValue = getSearch.value;
  console.log(getSearchValue);
};
