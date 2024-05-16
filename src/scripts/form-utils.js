window.verifyWaForm = null;
window.verifyCodeForm = null;

window.divWaVerifyButton = null;

window.checkoutHeading = null;
window.paymentHeading = null;

window.subscriptionRequestIdInput = null;

window.phoneInputField = null;
window.phoneInput = null;

window.paypalDiv = null;

window.info = null;
window.error = null;
window.infoText = null;
window.errorText = null;

window.loadingSendVerificationCode = null;
window.loadingVerification = null;

window.instanceDocComponents = function (paypalPlanId) {
  verifyWaForm = document.querySelector("#verifyWaForm");
  verifyCodeForm = document.querySelector("#verifyCodeForm");

  divWaVerifyButton = document.querySelector("#divWaVerifyButton");

  checkoutHeading = document.querySelector("#checkoutHeading");
  paymentHeading = document.querySelector("#paymentHeading");

  subscriptionRequestIdInput = document.querySelector(
    "#subscriptionRequestIdInput",
  );

  // const paypalDiv = document.querySelector("#paypal-button-container-P-0PC67333FG471260VMY42XTY");
  paypalDiv = document.querySelector(
    "#paypal-button-container-" + paypalPlanId,
  );

  info = document.querySelector(".alert-info");
  error = document.querySelector(".alert-error");

  infoText = document.querySelector(".alert-info span");
  errorText = document.querySelector(".alert-error span");

  loadingSendVerificationCode = document.querySelector(
    "#loadingSendVerificationCode",
  );

  loadingVerification = document.querySelector("#loadingVerification");

  phoneInputField = document.querySelector("#phone");
  phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "auto",
    geoIpLookup: getIp,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
}

window.sendVerificationCodeProcess = async function (vntotxtApi, event) {
  event.preventDefault();

  info.style.display = "none";
  error.style.display = "none";

  if (phoneInput.isValidNumber()) {
    const phoneNumber = phoneInput.getNumber();
    const waId = phoneNumber.replace("+", "");

    loadingSendVerificationCode.style.display = "";
    phoneInputField.disabled = true;

    try {
      let response = await fetch(vntotxtApi + "/v1/request-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          waId,
          tierId: 2,
        }),
      });

      if (response.ok) {
        response = await response.json();
        const { success, data, message } = response;
        if (success) {
          divWaVerifyButton.style.display = "none";
          verifyCodeForm.style.display = "";
          subscriptionRequestIdInput.value = data.subscriptionRequestId;
        } else {
          phoneInputField.disabled = false;
          error.style.display = "";
          errorText.innerHTML = message;
        }
      } else {
        phoneInputField.disabled = false;
        error.style.display = "";
        errorText.innerHTML = `There was an error validating the phone number. Please try again.`;
      }
    } catch (e) {
      phoneInputField.disabled = false;
      error.style.display = "";
      errorText.innerHTML = `There was an error validating the phone number. Please try again.`;
      loadingSendVerificationCode.style.display = "none";
      console.error(e);
    }

    loadingSendVerificationCode.style.display = "none";
  } else {
    error.style.display = "";
    errorText.innerHTML = `Invalid phone number.`;
  }
}

window.verificationCodeProcess = async function (vntotxtApi, event) {
  event.preventDefault();

  const verificationCode = document.querySelector(
    "#verificationCodeInput",
  ).value;
  const subscriptionRequestId = subscriptionRequestIdInput.value;

  info.style.display = "none";
  error.style.display = "none";

  loadingVerification.style.display = "";

  try {
    let response = await fetch(vntotxtApi + "/v1/verify-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subscriptionRequestId,
        pin: verificationCode,
      }),
    });

    if (response.ok) {
      response = await response.json();
      const { success, data, message } = response;
      if (success) {
        phoneInputField.disabled = true;
        // window.location.href = `${lang == "es" ? "/es" : ""}/subscription-success/?subscriptionId=${data.subscriptionId}`;
        verifyCodeForm.style.display = "none";
        checkoutHeading.style.display = "none";
        verifyWaForm.style.display = "none";
        paymentHeading.style.display = "";
        if (paypalDiv)
          paypalDiv.style.display = "";

        subscriptionRequestIdInput.value = data.subscriptionRequestId;
      } else {
        error.style.display = "";
        errorText.innerHTML = message;
      }
    } else {
      error.style.display = "";
      errorText.innerHTML = `There was an error validating the phone number. Please try again.`;
    }
  } catch (e) {
    error.style.display = "";
    errorText.innerHTML = `There was an error validating the phone number. Please try again.`;
    loadingVerification.style.display = "none";
    console.error(e);
  }

  loadingVerification.style.display = "none";
}

window.confirmPurchase = async function (vntotxtApi, paypalSubscription) {
  const subscriptionRequestId = subscriptionRequestIdInput.value;
  // const subscriptionRequestId = 1;

  try {
    let response = await fetch(vntotxtApi + "/v1/confirm-purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subscriptionRequestId,
        paypalSubscription,
        lang,
      }),
    });

    if (response.ok) {
      response = await response.json();
      const { success, data, message } = response;
      if (success) {
        window.location.href = `${lang == "es" ? "/es" : ""}/subscription-success/?orderID=${paypalSubscription.orderID}&subscriptionID=${paypalSubscription.subscriptionID}`;
      } else {
        error.style.display = "";
        errorText.innerHTML = message;
      }
    } else {
      error.style.display = "";
      errorText.innerHTML = `There was an error validating your subscription. Please try again.`;
    }
  } catch (e) {
    error.style.display = "";
    errorText.innerHTML = `There was an error validating your subscription. Please try again.`;
    loadingVerification.style.display = "none";
    console.error(e);
  }
}

window.getIp = function (callback) {
  fetch("https://ipinfo.io/json?token=f59435832cc609", {
    headers: { Accept: "application/json" },
  })
    .then((resp) => resp.json())
    .catch((e) => {
      console.warn("Fail to get ipinfo", e.message);
      return {
        country: "us",
      };
    })
    .then((resp) => {
      callback(resp.country);
    });
}

console.log('loaded')