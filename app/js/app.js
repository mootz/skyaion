$(document).ready(function () {
    $('[data-fancybox]').fancybox({
        touch: false,
        arrows: false,
        type: 'inline',
    })

    if (document.querySelector('.reg-modal')) {
        let firstCont = document.querySelector(
            '.reg-modal .reg-modal__container-first'
        )
        let secondCont = document.querySelector(
            '.reg-modal .reg-modal__container-second'
        )
        let btn = document.querySelector('.reg-modal .button-modal')

        btn.addEventListener('click', function () {
            let mail = document.querySelector('[name="reg-mail"]').value

            document.querySelector(
                '.reg-mail .reg-modal__complete-mail'
            ).innerHTML = mail

            firstCont.style.opacity = '0'
            setTimeout(() => {
                firstCont.style.display = 'none'
            }, 300)

            secondCont.style.display = 'block'
            setTimeout(() => {
                secondCont.style.opacity = '1'
            }, 300)
        })
    }
    if (document.querySelector('.button-restore')) {
        let firstCont = document.querySelector(
            '.auth-modal .reg-modal__container-first'
        )
        let secondCont = document.querySelector(
            '.auth-modal .reg-modal__container-second'
        )
        let thirdCont = document.querySelector(
            '.auth-modal .reg-modal__container-third'
        )
        let btn = document.querySelector('.auth-modal .button-restore')
        let btnRes = document.querySelector('.auth-modal .button-restore__rdy')

        btn.addEventListener('click', function () {
            // let mail = document.querySelector('[name="reg-mail"]').value

            // document.querySelector('.auth-modal .reg-modal__complete-pass').innerHTML = mail

            firstCont.style.opacity = '0'
            setTimeout(() => {
                firstCont.style.display = 'none'
            }, 300)

            secondCont.style.display = 'block'
            setTimeout(() => {
                secondCont.style.opacity = '1'
            }, 300)
        })

        btnRes.addEventListener('click', function () {
            secondCont.style.opacity = '0'
            setTimeout(() => {
                secondCont.style.display = 'none'
            }, 300)

            thirdCont.style.display = 'block'
            setTimeout(() => {
                thirdCont.style.opacity = '1'
            }, 300)
        })
    }

    $('select').niceSelect()

    if (document.querySelector('.shop-modal__number')) {
        let less = document.querySelector('.shop-modal__less')
        let more = document.querySelector('.shop-modal__more')
        let inp = document.querySelector('.shop-modal__number')

        less.addEventListener('click', function () {
            inp.value = Number(inp.value) - 1
        })
        more.addEventListener('click', function () {
            inp.value = Number(inp.value) + 1
        })
    }
})
