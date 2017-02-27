export const dialog = (dialogSelector, closeSelector, buttonSelector = false) => {

  var dialog = document.querySelector(dialogSelector);

  if (buttonSelector) {
    var showDialogButton = document.querySelector(buttonSelector);
    showDialogButton.addEventListener('click', function () {
          dialog.showModal();
        });
  }

  if (!dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
  }

  dialog.querySelector(closeSelector).addEventListener('click', function () {
      dialog.close();
    });

  return dialog;
};
