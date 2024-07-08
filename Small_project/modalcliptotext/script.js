const modalDialog = document.querySelector('.copy-link-dialog');
const sharebtn = document.querySelector('.share-btn');
const copybtn = document.querySelector('.copy-btn');
const closebtn = document.querySelector('.close-btn');

sharebtn.addEventListener('click', (event) => {
    modalDialog.classList.remove('copy-link-dialog--fadeout');
    modalDialog.showModal();
});

closebtn.addEventListener('click', () => {
    modalDialog.classList.add('copy-link-dialog--fadeout');
    modalDialog.close();
});

copybtn.addEventListener('click', () => {
    const copyInput = document.getElementById('copy-link-input');
    copyInput.select();
    copyInput.setSelectionRange(0, 99999);

    navigator.clipboard
        .writeText(copyInput.value)
        .then(() => {
            const copyText = document.querySelector('#copy-text');
            copyText.innerHTML = 'Copied';
            // Reset the text after 2 seconds
            setTimeout(() => {
                copyText.innerHTML = 'Copy Text'; // Reset to original state
            }, 1000); // 1000 milliseconds = 1 second
        })
        .catch((err) => {
            console.error('Failed to copy: ', err);
        });
});

// Close modal dialog when clicking outside of it
// document.body.addEventListener('click', (event) => {
//         modalDialog.classList.add('copy-link-dialog--fadeout');
//         modalDialog.close();
    
// });

// Prevent closing the modal dialog when clicking inside it
// modalDialog.addEventListener('click', (event) => {
//     event.stopPropagation();
// });

