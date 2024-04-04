document.addEventListener("DOMContentLoaded", function () {
  const gridContainer = document.querySelector(".listcard");
  const cardData = [
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/25023.png",
      altText: "Milady Meme Coin",
      name: "Milady Meme Coin",
      symbol: "LADYS",
      picks: "315,486",
    },

    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/24007.png",
      altText: "Delysium",
      name: "Delysium",
      symbol: "AGI",
      picks: "257,360",
    },
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/16334.png",
      altText: "APX",
      name: "APX",
      symbol: "APX",
      picks: "56,410",
    },
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/10407.png",
      altText: "Baby Doge Coin",
      name: "Baby Doge Coin",
      symbol: "BabyDoge",
      picks: "52,736",
    },
    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/29920.png",
      altText: "SLERF",
      name: "SLERF",
      symbol: "SLERF",
      picks: "37,396",
    },

    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/24477.png",
      altText: "ArbDoge AI",
      name: "ArbDoge AI",
      symbol: "AIDOGE",
      picks: "31,085",
    },

    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/19843.png",
      altText: "ApeX Protocol",
      name: "ApeX Protocol",
      symbol: "APEX",
      picks: "23,821",
    },

    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/11865.png",
      altText: "Bone ShibaSwap",
      name: "Bone ShibaSwap",
      symbol: "BONE",
      picks: "20,666",
    },

    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/22974.png",
      altText: "Bittensor",
      name: "Bittensor",
      symbol: "TAO",
      picks: "18,167",
    },

    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/8420.png",
      altText: "DAO Maker",
      name: "DAO Maker",
      symbol: "DAO",
      picks: "17,636",
    },

    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/11346.png",
      altText: "RACA",
      name: "RACA",
      symbol: "RACA",
      picks: "17,633",
    },

    {
      imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/29175.png",
      altText: "Wen",
      name: "Wen",
      symbol: "WEN",
      picks: "17,633",
    },

    // Add more objects with different data for each card
  ];

  // Sort cardData array based on picks in descending order
  cardData.sort(
    (a, b) =>
      parseInt(b.picks.replace(/,/g, "")) - parseInt(a.picks.replace(/,/g, ""))
  );

  // Loop through the sorted card data and generate cards
  cardData.forEach((data, index) => {
    const cardTemplate = createCard(
      data.imageUrl,
      data.altText,
      data.name,
      data.symbol,
      data.picks,
      index + 1
    );
    gridContainer.appendChild(cardTemplate);
  });
});

function createCard(imageUrl, altText, name, symbol, picks, rank) {
  // Create a new card element
  const card = document.createElement("div");
  card.classList.add(
    "bn-flex",
    "relative",
    "flex-col",
    "pt-[32px]",
    "pb-[20px]",
    "px-[24px]",
    "mobile:pt-[20px]",
    "mobile:pb-[16px]",
    "mobile:px-[16px]",
    "border-solid",
    "border",
    "border-line",
    "rounded-2xl",
    "hover:border-PrimaryYellow",
    "cursor-pointer"
  );

  // Populate the card with data
  card.innerHTML = `
        <div class="bn-flex flex-col items-center mb-[24px] mobile:mb-[12px]">
            <div class="bg-SecondaryBg rounded-[50%] w-[72px] h-[72px] mb-[12px] mobile:w-[48px] mobile:h-[48px] mobile:mb-[8px]">
                <img class="bn-lazy-img data-mask data-round w-full h-full" data-src="${imageUrl}" src="${imageUrl}" alt="${altText}" style="background-color: transparent;">
            </div>
            <div class="typography-headline4 mobile:subtitle6 text-PrimaryText noMobile:mb-[4px] truncate max-w-full" title="${name}">${name}</div>
            <div class="typography-btnLink3 mobile:btnLink4 text-TertiaryText mobile:text-SecondaryText truncate max-w-full cursor-pointer">${symbol}</div>
        </div>
        <div class="bn-flex items-center mb-[24px] mobile:mb-[12px]">
            <div class="bn-flex flex-1 flex-col items-center">
                <div class="typography-body3 mobile:caption1 text-TertiaryText mobile:text-SecondaryText">Rank</div>
                <div class="typography-headline4 mobile:subtitle6 text-[rgb(255,105,61)]">${rank}</div>
            </div>
            <div class="w-[1px] h-[24px] mx-[8px] bg-line"></div>
            <div class="bn-flex flex-1 flex-col items-center">
                <div class="typography-body3 mobile:caption1 text-TertiaryText mobile:text-SecondaryText">Picks</div>
                <div class="typography-headline4 mobile:subtitle6 text-[rgba(14,203,129)]">${picks}</div>
            </div>
        </div>
        <div class="bn-flex flex-col flex-1 justify-center">
            <div class="bn-flex mb-[10px] gap-[12px] mobile:mb-[8px] mobile:flex-col-reverse mobile:gap-[8px] flex-wrap">
                <button class="bn-button bn-button__primary data-size-middle flex-1 pop" name="pick">Pick</button>
            </div>
            <div class="bn-flex items-center justify-center typography-body3 mobile:caption1 text-TertiaryText mobile:text-SecondaryText">
                <svg class="bn-svg w-[16px] h-[16px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.22 11.778a3.11 3.11 0 100-6.22 3.11 3.11 0 000 6.22zM6.11 13.778A3.11 3.11 0 003 16.888v1.554h12.44v-1.555a3.11 3.11 0 00-3.11-3.11H6.11zM21 18.442h-3.56v-1.555c0-1.17-.394-2.248-1.055-3.11h1.505a3.11 3.11 0 013.11 3.11v1.555zM14.33 8.668a5.087 5.087 0 01-.852 2.825 3.11 3.11 0 100-5.65c.538.809.852 1.78.852 2.825z" fill="currentColor"></path>
                </svg>${picks}
            </div>
        </div>
    `;

  return card;
}

document.addEventListener("DOMContentLoaded", function () {
  const popupButtons = document.querySelectorAll(".pop");
  const popupCard = document.querySelector(".popup-card");
  const closeButton = document.querySelector(".popup-content .close");

  // Function to open the popup card
  function openPopup() {
    popupCard.style.display = "block";
  }

  // Function to close the popup card
  function closePopup() {
    popupCard.style.display = "none";
  }

  // Add event listener to each popup button
  popupButtons.forEach(function (button) {
    button.addEventListener("click", openPopup);
  });

  // Event listener for the close button inside the popup
  closeButton.addEventListener("click", closePopup);
});
