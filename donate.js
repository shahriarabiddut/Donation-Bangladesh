
const noakhaliDonation = document.getElementById("donate1Button" );
  
  noakhaliDonation.addEventListener("click", (event) => {
    event.preventDefault(); 
    
    const donateName = document.getElementById('donate1Name').innerText;
    const donateBox = document.getElementById('donate1AmountBox');
    const donatedTotal = parseFloat(document.getElementById('donate1Amount').innerText);
    const donateAmount = parseFloat(donateBox.value);
    if (donateAmount < 0 || isNaN(donateAmount)) {
        alert( "invaid amount");
        return;
      }
    
    // Donate 1
      donateCalculationAndHistory(donatedTotal,donateName,donateAmount,'donate1Amount');
  });

  
// Donation History Section
const donationHistorySection = document.getElementById("donationHistorySection");

const donateCalculationAndHistory = (donatedTotal, title,amount,id) => {
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
    modal(amount,title);
};

// Modal

const popupModal = document.getElementById('popupModal');
const openPopupBtn = document.getElementById('openPopup');
const closePopupBtn = document.getElementById('closePopup');
const message = document.getElementById('message');
function modal(amount,title){
    popupModal.classList.remove('hidden');
    message.innerText = `${amount} Taka is Donated for ${title}`;
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