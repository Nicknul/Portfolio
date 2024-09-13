const ModalStyles = {
  container: 'fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50',
  image: 'max-w-[85vw] max-h-[85vh] object-contain mb-4',
  previewContainer: 'flex space-x-2 overflow-visible',
  previewImage: (selectedIndex: boolean) =>
    `w-16 h-16 object-cover cursor-pointer rounded-lg transition-transform duration-300 ${
      selectedIndex ? '-translate-y-2' : ''
    }`,
  closeButton: 'absolute top-4 right-4 text-white text-lg bg-gray-500 bg-opacity-50 rounded-lg px-4 py-2 z-50',
  navigationButton: 'fixed top-1/2 transform -translate-y-1/2 bg-white text-black px-3 py-1 rounded-full z-50',
  leftButton: 'left-4',
  rightButton: 'right-4',
  gridContainer: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4',
  imageWrapper: 'relative group w-full h-auto',
  overlay:
    'absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-300 rounded-lg',
  buttonWrapper:
    'absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300',
  modalOverlay: 'fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50',
  modalContainer: 'bg-white w-4/5 h-4/5 rounded-lg shadow-lg relative overflow-hidden',
  modalContent: 'overflow-y-auto h-full',
  modalBody: 'p-6',
  imageContainer: 'w-full h-2/3 bg-gray-200',
  modalImage: 'object-cover object-top w-full h-full',
  modalImageWrapper: 'overflow-y-auto h-full',
  modalImageContainer: 'w-full h-2/3 bg-gray-200',
  galleryButton:
    'border border-white text-white px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-white hover:text-black',
};

export default ModalStyles;
