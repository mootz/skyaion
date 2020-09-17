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
            // TODO: расскоментить
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
    if (document.querySelector('.shop-modal')) {
        let firstCont = document.querySelector(
            '.shop-modal .reg-modal__container-first'
        )
        let secondCont = document.querySelector(
            '.shop-modal .reg-modal__container-second'
        )

        let btn = document.querySelector(
            '.shop-modal .button-modal__gift-friend'
        )

        btn.addEventListener('click', function () {
            firstCont.style.opacity = '0'
            setTimeout(() => {
                firstCont.style.display = 'none'
            }, 300)

            secondCont.style.display = 'block'
            setTimeout(() => {
                secondCont.style.opacity = '1'
            }, 300)
        })

        // btnRes.addEventListener('click', function () {
        //     secondCont.style.opacity = '0'
        //     setTimeout(() => {
        //         secondCont.style.display = 'none'
        //     }, 300)

        //     thirdCont.style.display = 'block'
        //     setTimeout(() => {
        //         thirdCont.style.opacity = '1'
        //     }, 300)
        // })
    }

    $('select').niceSelect()

    if (document.querySelector('.shop-modal__number')) {
        let less = document.querySelector('.shop-modal__less')
        let more = document.querySelector('.shop-modal__more')
        let inp = document.querySelector('.shop-modal__number')
        let btn = document.querySelector('.btn-money')
        let lessF = document.querySelector('.shop-modal__less-sec')
        let moreF = document.querySelector('.shop-modal__more-sec')
        let inpF = document.querySelector('.shop-modal__number-sec')
        let btnF = document.querySelector('.btn-money-sec')

        less.addEventListener('click', function () {
            inp.value = Number(inp.value) - 1
            btn.innerHTML = inp.value
        })
        more.addEventListener('click', function () {
            inp.value = Number(inp.value) + 1
            btn.innerHTML = inp.value
        })
        inp.addEventListener('change', function () {
            btn.innerHTML = inp.value
        })

        lessF.addEventListener('click', function () {
            inpF.value = Number(inpF.value) - 1
            btnF.innerHTML = inpF.value
        })
        moreF.addEventListener('click', function () {
            inpF.value = Number(inpF.value) + 1
            btnF.innerHTML = inpF.value
        })

        inpF.addEventListener('change', function () {
            btnF.innerHTML = inpF.value
        })
    }

    if (document.querySelector('.slider__container')) {
        var mySwiper = new Swiper('.slider__container', {
            direction: 'vertical',
            loop: true,
            slidesPerView: 1,
            pagination: {
                el: '.slider__pagination',
                type: 'bullets',
            },
        })
    }

    // переключение меню в личном кабинете
    function menuClick(evt, cityName) {
        // Declare all variables
        var i, tabcontent, tablinks

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName('l-content__item')
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none'
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName('r-menu__item')
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '')
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(cityName).style.display = 'block'
        evt.currentTarget.className += ' active'
    }

    if (document.querySelector('.l-content')) {
        let charsLink = document.querySelector('.char-link')
        let profileLink = document.querySelector('.profile-link')

        charsLink.addEventListener('click', function () {
            menuClick(event, 'chars')
        })

        profileLink.addEventListener('click', function () {
            menuClick(event, 'profile')
        })
        // profileLink.click()
    }
})
