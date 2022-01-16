const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.createElement('img');

    imgPopup.classList.add('popup_img');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;
        if (target && target.classList.contains('preview')) {
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
            imgPopup.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        if (target && target.matches('div.popup_img')) {
            imgPopup.style.display = 'none';
            document.body.style.overflow = '';
        }

    });
};

export default images;