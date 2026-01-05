const lightbox = GLightbox({
  selector: '.glightbox',
  closeButton: true,
  keyboardNavigation: true,
  closeOnOutsideClick: true,
  touchNavigation: true,
  loop: true,
  bodyClass: 'glightbox-open',

  onOpen: () => {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
  },

  onClose: () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
  }
});
