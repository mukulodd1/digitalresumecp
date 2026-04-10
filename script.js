const revealElements = document.querySelectorAll(".reveal");
const experienceYears = document.querySelector("#experience-years");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
  }
);

revealElements.forEach((element) => observer.observe(element));

if (experienceYears instanceof HTMLElement) {
  const startDateValue = experienceYears.dataset.startDate;

  if (startDateValue) {
    const startDate = new Date(startDateValue);
    const today = new Date();

    let monthsElapsed =
      (today.getFullYear() - startDate.getFullYear()) * 12 +
      (today.getMonth() - startDate.getMonth());

    if (today.getDate() < startDate.getDate()) {
      monthsElapsed -= 1;
    }

    monthsElapsed = Math.max(monthsElapsed, 0);

    const wholeYears = Math.floor(monthsElapsed / 12);
    const hasPartialYear = monthsElapsed % 12 !== 0;

    experienceYears.textContent = hasPartialYear ? `${wholeYears}+` : `${wholeYears}`;
  }
}
