document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const service = e.target.service.value;
  const details = e.target.details.value;

  const output = `
    <h3>تم إرسال الطلب بنجاح</h3>
    <p><strong>الاسم:</strong> ${name}</p>
    <p><strong>الخدمة:</strong> ${service}</p>
    <p><strong>التفاصيل:</strong> ${details}</p>
  `;

  document.getElementById("output").innerHTML = output;
  e.target.reset();
});
