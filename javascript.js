'use strict';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector('#submit-button').addEventListener('click', function (){
    const emailInputValue = document.querySelector('#email').value;
    if (emailInputValue === '') {
        document.querySelector('#emailHelpBlock').textContent = 'Bạn chưa nhập email!';
    } else if (!regex.test(emailInputValue)) {
        document.querySelector('#emailHelpBlock').textContent = 'Bạn chưa nhập đúng định dạng email!';
    } else {
        document.querySelector('#personal-info-container').style.display='block';
        document.querySelector('#form-container').style.display='none';
    }
})
document.querySelectorAll(".body-info").forEach((element) => {
    element.addEventListener('mouseover', function () {
        if (element.querySelector('.info-body').style.display === 'none') {
            this.querySelector('.viewmore').style.display='block';
        }
    });
    element.addEventListener('mouseout', function () {
        this.querySelector('.viewmore').style.display='none';
    });
    element.querySelector('.viewless').addEventListener('click', function () {
        element.querySelector('.viewmore').style.display='block';
        element.querySelector('.info-body').style.display='none';
    });
    element.querySelector('.viewmore').addEventListener('click',function () {
        element.querySelector('.info-body').style.display='block';
        this.style.display='none';

    })
})
