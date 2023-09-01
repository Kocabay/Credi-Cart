//!KART İŞLEMLERİ
document.querySelector(".card-number-input").oninput = () => {
  document.querySelector(".card-number-box").innerText =
    document.querySelector(".card-number-input").value;
};

document.querySelector(".card-holder-input").oninput = () => {
  document.querySelector(".card-holder-name").innerText =
    document.querySelector(".card-holder-input").value;
};

document.querySelector(".month-input").oninput = () => {
  document.querySelector(".exp-month").innerText =
    document.querySelector(".month-input").value;
};

document.querySelector(".year-input").oninput = () => {
  document.querySelector(".exp-year").innerText =
    document.querySelector(".year-input").value;
};

document.querySelector(".cvv-input").onmouseenter = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(-180deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};

document.querySelector(".cvv-input").onmouseleave = () => {
  document.querySelector(".front").style.transform =
    "perspective(1000px) rotateY(0deg)";
  document.querySelector(".back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

document.querySelector(".cvv-input").oninput = () => {
  document.querySelector(".cvv-box").innerText =
    document.querySelector(".cvv-input").value;
};

//!ALERT ALANI

function validateForm() {
  var cardNumber = document.querySelector(".card-number-input").value;
  var cardHolder = document.querySelector(".card-holder-input").value;
  var month = document.querySelector(".month-input").value;
  var year = document.querySelector(".year-input").value;
  var cvv = document.querySelector(".cvv-input").value;

  if (
    cardNumber === "" ||
    cardHolder === "" ||
    month === "month" ||
    year === "year" ||
    cvv === ""
  ) {
    alert("Lütfen eksik alanları doldurunuz.");
  } else {
  }
}

function validateInput(input) {
  var inputValue = input.value;
  var regex = /^[a-zA-Z\s]*$/;

  if (!regex.test(inputValue)) {
    input.value = inputValue.replace(/[^a-zA-Z\s]/g, "");
  }
}
