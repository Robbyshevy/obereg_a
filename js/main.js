"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    // function ValidPhone() {
    //     var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    //     var myPhone = document.getElementById('formTelnumber').value;
    //     var valid = re.test(myPhone);
    //     if (valid) output = 'Номер телефона введен правильно!';
    //     else output = 'Номер телефона введен неправильно!';
    //     document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
    //     return valid;}

    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);


        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                // formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');

            } else {
                alert("Ошибка");
                form.classList.remove('_sending');

            }
        } else {
            alert('Заполните обязательные поля')
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req')

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if (input.value === '') {
                formAddError(input);
                error++;
            }

        }
        return error;
    }


    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }


    // $(".close2").click(function () {
    //     $(".pop-up2").hide()
    // }), $(".close3").click(function () {
    //     $(".pop-up3").hide() })


});



// GALLERY

$(document).ready(function () {
    $(".b-carousel-button-right").click(function () {
        $(".h-carousel-items").animate({
            left: "-280px"
        }, 200), setTimeout(function () {
            $(".h-carousel-items .b-carousel-block").eq(0).clone().appendTo(".h-carousel-items"), $(".h-carousel-items .b-carousel-block").eq(0).remove(), $(".h-carousel-items").css({
                left: "0px"
            })
        }, 300)
    }), $(".b-carousel-button-left").click(function () {
        $(".h-carousel-items .b-carousel-block").eq(-1).clone().prependTo(".h-carousel-items"), $(".h-carousel-items").css({
            left: "-280px"
        }), $(".h-carousel-items").animate({
            left: "0px"
        }, 200), $(".h-carousel-items .b-carousel-block").eq(-1).remove()
    }), $(".pu-carousel-button-right").click(function () {
        $(".pu-carousel-items").animate({
            left: "-9%"
        }, 200), setTimeout(function () {
            $(".pu-carousel-items .pu-carousel-block").eq(0).clone().appendTo(".pu-carousel-items"), $(".pu-carousel-items .pu-carousel-block").eq(0).remove(), $(".pu-carousel-items").css({
                left: "0px"
            })
        }, 300)
    }), $(".pu-carousel-button-left").click(function () {
        $(".pu-carousel-items .pu-carousel-block").eq(-1).clone().prependTo(".pu-carousel-items"), $(".pu-carousel-items").css({
            left: "-9%"
        }), $(".pu-carousel-items").animate({
            left: "0px"
        }, 200), $(".pu-carousel-items .pu-carousel-block").eq(-1).remove()
    })
})