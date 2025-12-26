/*модалки из урока*/
const openModalButtons = document.querySelectorAll('[data-modal-action="open-modal"]');
const closeModalButtons = document.querySelectorAll('[data-modal-action="close-modal"]');
const modalWindows = document.querySelectorAll('[data-modal-action="modal"]');

/*Открытие/закрытие через кнопки*/
openModalButtons.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

closeModalButtons.forEach((btn) => {
  btn.addEventListener('click', closeModal);
});

function openModal(event) {
  modalWindows.forEach((modal) => {
    if (modal.getAttribute('data-modal') === event.target.getAttribute('data-modal')) {
      modal.classList.add('open');
    }
  });
}

function closeModal(event) {
  modalWindows.forEach((modal) => {
    if (modal.getAttribute('data-modal') === event.target.getAttribute('data-modal')) {
      modal.classList.remove('open');
    }
  });
}


/*ДОПОЛНЕНИЕ ДЛЯ ЗАКРЫТИЯ ПО КЛИКУ НА ОВЕРЛЕЙ*/
modalWindows.forEach((modal) => {
  // Клик по оверлею
  modal.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  /*Клик внутри контента — НЕ закрываем*/
  const content = modal.querySelector('.modal__content');
  content.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

// =========================
/*Аккордионы (как было)*/
const accordions = document.querySelectorAll('.accordion__container');

function toggleAccordion(event) {

  const header = event.target.closest('.accordion__header');
  if (!header) return; 

  const accordionContainer =
    header.closest('[accordion-type]') ?? header.closest('.accordion__container');

  const accordionType =
    header.closest('[accordion-type]')?.getAttribute('accordion-type') ?? 'multi';

  const parentElement = header.closest('[accordion-id]');
  const accordionState = parentElement.getAttribute('accordion-state');

  if (accordionType === 'single') {
    const items = accordionContainer.querySelectorAll('[accordion-id]');
    items.forEach(item => {
      item.setAttribute('accordion-state', 'closed');
    });
  }
  
  if (accordionState === 'closed') {
    parentElement.setAttribute('accordion-state', 'open');
  } else {
    parentElement.setAttribute('accordion-state', 'closed');
  }
}


accordions.forEach((accordion) => {
  accordion.addEventListener('click', toggleAccordion);
});
