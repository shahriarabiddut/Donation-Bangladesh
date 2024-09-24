 // Donate 1
    const noakhaliDonation = document.getElementById("donate1Button" );
  noakhaliDonation.addEventListener("click", (event) => {
    event.preventDefault(); 
    
    const donateName = document.getElementById('donate1Name').innerText;
    const donateBox = document.getElementById('donate1AmountBox');
    const donatedTotal = parseFloat(document.getElementById('donate1Amount').innerText);
    const donateAmount = parseFloat(donateBox.value); 
    donateBox.value = '';
    if (donateAmount < 0 || isNaN(donateAmount)) {
        alert( "invaid amount");
        return;
      }
      donateCalculationAndHistory(donatedTotal,donateName,donateAmount,'donate1Amount');
  });
 // Donate 2
  const feniDonation = document.getElementById("donate2Button" );
  feniDonation.addEventListener("click", (event) => {
    event.preventDefault(); 
    
    const donateName = document.getElementById('donate2Name').innerText;
    const donateBox = document.getElementById('donate2AmountBox');
    const donatedTotal = parseFloat(document.getElementById('donate2Amount').innerText);
    const donateAmount = parseFloat(donateBox.value); 
    donateBox.value = '';
    if (donateAmount < 0 || isNaN(donateAmount)) {
        alert( "invaid amount");
        return;
      }
      donateCalculationAndHistory(donatedTotal,donateName,donateAmount,'donate2Amount');
  });
   // Donate 3
const quotaDonation = document.getElementById("donate3Button" );
quotaDonation.addEventListener("click", (event) => {
    event.preventDefault(); 
    
    const donateName = document.getElementById('donate3Name').innerText;
    const donateBox = document.getElementById('donate3AmountBox');
    const donatedTotal = parseFloat(document.getElementById('donate3Amount').innerText);
    const donateAmount = parseFloat(donateBox.value); 
    donateBox.value = '';
    if (donateAmount < 0 || isNaN(donateAmount)) {
        alert( "invaid amount");
        return;
      }
      donateCalculationAndHistory(donatedTotal,donateName,donateAmount,'donate3Amount');
  });
  
  const donateCalculationAndHistory = (donatedTotal, title,amount,id) => {
    // Donation History Section
    const donationHistorySection = document.getElementById("donationHistorySection");
    //Balance
    const myTotalBalanceID = document.getElementById("myTotalBalance");
    const myTotalBalance = parseFloat(myTotalBalanceID.innerText);
    if (myTotalBalance < amount ) {
        alert( "Please Topup to Donate! Insufficient Funds!");
        return;
    }

    const totalDonateAmount = donatedTotal + amount;
    document.getElementById(id).innerText = totalDonateAmount + ' BDT';
    // Reducing Balance
    myCurrentBalance = myTotalBalance - amount;
    myTotalBalanceID.innerText = myCurrentBalance;
    //Popup
    modal(amount,title);
    const div = document.createElement("div");
    div.className =
        "bg-white p-6 rounded border border-gray-600 border-solid mb-2";
    div.innerHTML = `
                <h4 class="text-xl font-bold text-gray-600">
                ${amount} Taka is Donated for ${title}
                </h4>
                <div class="text-[16px] font-light text-gray-400 mt-4">
                <span class="text-xl font-bold text-gray-600"> Date :</span> ${new Date()}
                        </div>`;
    donationHistorySection.appendChild(div);
};

// Modal

const popupModal = document.getElementById('popupModal');
const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const message = document.getElementById('message');
function modal(amount,title){
    popupModal.classList.remove('hidden');
    message.innerText = `${amount} Taka is Successfully Donated [Fund : ${title}]`;
}
// Close the popup modal
closePopupBtn.addEventListener('click', () => {
  popupModal.classList.add('hidden');
});

// Close the popup if user clicks outside the modal content
window.addEventListener('click', (e) => {
  if (e.target == popupModal) {
    popupModal.classList.add('hidden');
  }
});
// Toggles
const donationTab = document.getElementById('donationTab');
const donationTabButton = document.getElementById('donationTabButton');
const historyTab = document.getElementById('historyTab');
const historyTabButton = document.getElementById('historyTabButton');
// Toggle
donationTabButton.addEventListener('click', () => {
    historyTab.classList.add('hidden');
    historyTabButton.classList.remove('bg-[#B4F461]');
    donationTabButton.classList.add('bg-[#B4F461]');
    donationTab.classList.remove('hidden');
  });
historyTabButton.addEventListener('click', () => {
    donationTab.classList.add('hidden');
    donationTabButton.classList.remove('bg-[#B4F461]');
    historyTabButton.classList.add('bg-[#B4F461]');
    historyTab.classList.remove('hidden');
});