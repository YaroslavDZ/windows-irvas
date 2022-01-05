import "./slider.js";
import modals from "./modules/modals.js";

window.addEventListener('DOMContentLoaded', () => {
    modals();
    const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
              modal = document.querySelector('.popup_engineer'),
              modalEngineerClose = document.querySelector('.popup_engineer .popup_close');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});