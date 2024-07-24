console.log("Hi");
const faqs = Array.from(document.querySelectorAll(".faq"));
const faqP = Array.from(document.querySelectorAll(".faq-p"));
const faqImg = Array.from(document.querySelectorAll(".faq-img"));

faqs.forEach((faq) =>
  faq.addEventListener("click", function () {
    if (faq.parentElement.classList.contains("open")) {
      faqP.forEach((faqp) => faqp.classList.add("hidden"));
      faqImg.forEach((faqp) => (faqp.src = "assets/images/icon-plus.svg"));
      faq.parentElement.classList.remove("open");
    } else {
      faqs.forEach((faq) => faq.parentElement.classList.remove("open"));

      const numberFaq = faq.dataset.box;
      const showP = faqP.filter((faqp) => faqp.dataset.p === numberFaq);
      faqP.forEach((faqp) => faqp.classList.add("hidden"));
      showP[0].classList.toggle("hidden");
      const showImg = faqImg.filter((faqp) => faqp.dataset.img === numberFaq);
      faqImg.forEach((faqp) => (faqp.src = "assets/images/icon-plus.svg"));
      showImg[0].src = "assets/images/icon-minus.svg";

      faq.parentElement.classList.add("open");
    }
  })
);
