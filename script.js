const qrCode = new QRCode(document.getElementById("qr-code"), {
    width: 400,
    height: 400,
  });
  
  function updateQRCode() {
    const qrText = document.querySelector("#qr-text").value;
    const lightColor = document.querySelector("#light-color").value;
    const darkColor = document.querySelector("#dark-color").value;
  
    qrCode._htOption.colorDark = darkColor;
    qrCode._htOption.colorLight = lightColor;
  
    qrCode.clear();
    qrCode.makeCode(qrText);
  }
  
  document.querySelector("#qr-text").addEventListener("input", updateQRCode);
  document.querySelector("#light-color").addEventListener("input", updateQRCode);
  document.querySelector("#dark-color").addEventListener("input", updateQRCode);
  
  updateQRCode();
  
  const downloadBtn = document.querySelector("#download");
  downloadBtn.addEventListener("click", () => {
    const qrCodeSVG = document.querySelector(".qrcode canvas").toDataURL("image/png");
    downloadBtn.href = qrCodeSVG;
  });
  
  const sizesSelect = document.querySelector("#qr-size");
  sizesSelect.addEventListener("change", () => {
    const selectedSize = sizesSelect.value;
    qrCode._htOption.width = selectedSize;
    qrCode._htOption.height = selectedSize;
    updateQRCode();
  });
  
  document.querySelector("#qr-text").addEventListener("input", updateQRCode);
  document.querySelector("#light-color").addEventListener("input", updateQRCode);
  document.querySelector("#dark-color").addEventListener("input", updateQRCode);
  