const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const popupCloseBtn = document.querySelector('#popup-close-btn');
const contactSubmitBtn = document.querySelector('#contact-submit-btn');
const contactForm = document.querySelector('#contact-form');
const popupMenuUl = document.querySelector('.popup-menu ul');
const popupDetails = document.getElementsByClassName('popup-details');
const modals = document.querySelectorAll('.modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');

const popupTitle = document.querySelector('.popup_title');
const popupSummaryTitle = document.querySelector('.popup_summary_title');
const popupSummaryFeature = document.querySelector('.popup_summary_feature');
const popupSummaryYear = document.querySelector('.popup_summary_year');
const popupDescription = document.querySelector('.popup_description');
const popupTagging = document.querySelector('.popup_tagging');
const popupImage = document.querySelector('.popup_img');

const errorMessage = document.querySelector('#error-message');
const contactFormEmail = document.querySelector('.contact-form-email');
const contactFormMessage = document.querySelector('.contact-form-message');
const contactFormName = document.querySelector('.contact-form-name');

const contactFormStorage = 'user-form';

const popupModal = [
  {
    name: 'Tonic',
    image: 'assets/images/banners/desktop_uber.svg',
    summary: {
      title: 'CANOPY',
      feature: 'Back End Dev',
      year: '2015',
    },
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tagging: ['html', 'css', 'javascript'],
  },
  {
    name: 'Multi-Post Stories',
    image: 'assets/images/banners/desktop_story.svg',
    summary: {
      title: 'CANOPY',
      feature: 'Back End Dev',
      year: '2015',
    },
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tagging: ['html', 'Ruby on rails', 'css', 'javascript'],
  },
  {
    name: 'Tonic',
    image: 'assets/images/banners/desktop_uber.svg',
    summary: {
      title: 'CANOPY',
      feature: 'Back End Dev',
      year: '2015',
    },
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tagging: ['html', 'css', 'javascript'],
  },
  {
    name: 'Uber Navigation',
    image: 'assets/images/banners/desktop_uber.svg',
    summary: {
      title: 'Uber',
      feature: 'Lead Developer',
      year: '2015',
    },
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tagging: ['html', 'css', 'javascript'],
  },
];

function onload() {
  const contactData = localStorage.getItem(contactFormStorage);
  if (contactData) {
    const contactJson = JSON.parse(contactData);
    contactFormName.value = contactJson.name;
    contactFormEmail.value = contactJson.email;
    contactFormMessage.value = contactJson.message;
  }
}
function hasUpperCase(str) {
  return /[A-Z]/.test(str);
}

mobileMenuBtn.addEventListener('click', () => {
  const d = document.getElementsByClassName('popup-menu');
  for (let i = 0; i < d.length; i += 1) {
    d[i].className += ' popup-menu-active';
  }
});

popupCloseBtn.addEventListener('click', () => {
  const d = document.getElementsByClassName('popup-menu');
  for (let i = 0; i < d.length; i += 1) {
    d[i].classList.remove('popup-menu-active');
  }
});

popupMenuUl.addEventListener('click', () => {
  const d = document.getElementsByClassName('popup-menu');
  for (let i = 0; i < d.length; i += 1) {
    d[i].classList.remove('popup-menu-active');
  }
});

modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    for (let i = 0; i < popupDetails.length; i += 1) {
      popupDetails[i].className += ' popup-details-active';
    }
    const content = popupModal[e.currentTarget.dataset.id];

    popupTitle.innerHTML = content.name;
    popupSummaryTitle.innerHTML = content.summary.title;
    popupSummaryFeature.innerHTML = content.summary.feature;
    popupSummaryYear.innerHTML = content.summary.year;
    popupDescription.innerHTML = content.description;
    popupImage.src = content.image;

    popupTagging.innerHTML = '';
    for (let i = 0; i < content.tagging.length; i += 1) {
      popupTagging.innerHTML += `<li> <button class="tag_button">${content.tagging[i]}</button></li>`;
    }
  });
});

modalCloseBtn.addEventListener('click', () => {
  for (let i = 0; i < popupDetails.length; i += 1) {
    popupDetails[i].classList.remove('popup-details-active');
  }
});

onload();

contactSubmitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  errorMessage.innerHTML = '';

  hasUpperCase(contactFormEmail.value);
  if (hasUpperCase(contactFormEmail.value)) {
    errorMessage.innerHTML = 'Please enter lower case characters for the email address';
  } else {
    localStorage.setItem(contactFormStorage, JSON.stringify({
      name: contactFormName.value ?? '',
      email: contactFormEmail.value ?? '',
      message: contactFormMessage.value ?? '',
    }));
    contactForm.submit();
    contactForm.reset();
  }
});
