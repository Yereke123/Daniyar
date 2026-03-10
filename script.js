const userData = {
  "firstName": "Еслим", 
  "lastName": "Данияр", // Ваша фамилия
  "jobTitle": "ЖАРНАМА АГЕНТТІГІ",
  "phone": "+77756591347", // Ваш WhatsApp номер
};

document.addEventListener("DOMContentLoaded", () => {
  
  // 1. Кнопка WhatsApp
  const btnWa = document.getElementById("btnWhatsapp");
  const waNumber = userData.phone.replace(/[^0-9]/g, '');
  btnWa.href = `https://wa.me/${waNumber}`;

  // 3. Кнопка сохранения контакта VCF
  const btnSave = document.getElementById("btnSave");
  btnSave.addEventListener("click", function(e) {
    e.preventDefault();
    
    const fullName = `${userData.firstName} ${userData.lastName}`;
    
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:${userData.lastName};${userData.firstName};;;
FN:${fullName}
ORG:${userData.company}
TITLE:${userData.jobTitle}
TEL;TYPE=CELL,VOICE:${userData.phone}
EMAIL;TYPE=WORK,INTERNET:${userData.email}
END:VCARD`;

    const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fullName}.vcf`;
    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  });
});