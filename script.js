
document.getElementById("generateBtn").addEventListener("click", () => {
    let imgBox = document.getElementById("imgBox");
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");

    if (qrText.value == "") {
        console.log("Please enter text or url");
        window.alert("Please enter text or url");
      qrText.classList.add("error");
      setTimeout(() => {
        qrText.classList.remove("error");
      }, 1000);
    } else {
      generateQR();
      return true;
    }

    function generateQR() {
      qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        encodeURIComponent(qrText.value);
      imgBox.classList.add("show-img");
      qrText.classList.remove("error");
    }
});


