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
            disableOnInteraction: true,
            autoplay: {
                delay: 10000,
            },
            slidesPerView: 1,
            pagination: {
                el: '.slider__pagination',
                type: 'bullets',
                clickable: true,
            },
        })
        $('.swiper-container').mouseenter(function () {
            mySwiper.autoplay.stop()
            // console.log('slider stopped')
        })

        $('.swiper-container').mouseleave(function () {
            mySwiper.autoplay.start()
            // console.log('slider started again')
        })
    }

    // переключение меню в личном кабинете
    function menuClick(evt, cityName) {
        var i, tabcontent, tablinks

        tabcontent = document.getElementsByClassName('l-content__item')
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none'
        }

        tablinks = document.getElementsByClassName('r-menu__item')
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '')
        }

        document.getElementById(cityName).style.display = 'block'
        evt.currentTarget.className += ' active'
    }

    // переключение в личном кабинете, в меню
    if (document.querySelector('.l-content')) {
        let charsLink = document.querySelector('.char-link')
        let profileLink = document.querySelector('.profile-link')
        let giftsLink = document.querySelector('.gifts-link')

        charsLink.addEventListener('click', function () {
            menuClick(event, 'chars')
        })

        profileLink.addEventListener('click', function () {
            menuClick(event, 'profile')
        })

        giftsLink.addEventListener('click', function () {
            menuClick(event, 'gifts')
        })
        profileLink.click()
    }

    // переключение в рейтинге между игроками и легионами
    if (document.querySelector('.rating__table')) {
        let ratingTable = document.querySelector('.rating__table')
        let legionTable = document.querySelector('.legion__table')
        let ratingMenuBtn = document.querySelector('.players-item')
        let legionBtn = document.querySelector('.legions-item')

        ratingMenuBtn.addEventListener('click', function () {
            if (!this.classList.contains('active')) {
                ratingMenuBtn.classList.toggle('active')
                legionBtn.classList.toggle('active')
            }
            legionTable.style.display = 'none'
            ratingTable.style.display = 'block'
        })

        legionBtn.addEventListener('click', function () {
            if (!this.classList.contains('active')) {
                legionBtn.classList.toggle('active')
                ratingMenuBtn.classList.toggle('active')
            }
            legionTable.style.display = 'block'
            ratingTable.style.display = 'none'
        })

        let lkButton = document.querySelector('.lk-button')
        let ratingBtn = document.querySelector('.rating-button')
        let rContent = document.querySelector('.r-content')
        let lContent = document.querySelector('.l-content')
        let lBg = document.querySelector('.l-content__bg')
        let contentWrapAll = document.querySelector('.content')
        let rating = document.querySelector('.rating')
        let ratingWrap = document.querySelector('.rating__wrap')
        let ratingTop = document.querySelector('.rating__top')
        let profileLink = document.querySelector('.profile-link')
        // let ratingTable = document.querySelector('.rating__table')

        ratingBtn.addEventListener('click', function () {
            rContent.style.width = 0
            rContent.style.transform = 'translateX(200px)'
            lContent.style.width = '100%'
            lBg.style.paddingLeft = '100%'
            // contentWrapAll.style.width = 'calc(100% + 7px)'
            ratingWrap.style.paddingRight = '0'
            ratingTop.style.opacity = '1'
            ratingTable.style.opacity = '1'
            ratingMenuBtn.click()

            setTimeout(() => {
                rating.style.display = 'block'
                rating.style.transform = 'translateX(0)'
                lContent.style.display = 'none'
                rContent.style.display = 'none'
                // contentWrapAll.style.width = '100%'
            }, 150)
        })

        lkButton.addEventListener('click', function () {
            rContent.style.width = '37%'
            rContent.style.transform = 'translateX(0)'
            lContent.style.width = '63%'
            lBg.style.paddingLeft = '0'
            // contentWrapAll.style.width = 'calc(100% + 20px)'
            ratingWrap.style.paddingRight = '100%'
            ratingTop.style.opacity = '0'
            ratingTable.style.opacity = '0'
            profileLink.click()

            setTimeout(() => {
                lContent.style.display = 'block'
                rContent.style.display = 'block'
                rating.style.display = 'none'
                rating.style.transform = 'translateX(0)'
            }, 150)
        })
    }

    if (document.querySelector('select')) {
        let firstItem = document.querySelectorAll(
            '.nice-select .list .selected'
        )
        setTimeout(() => {
            firstItem.forEach((e) => {
                e.style.display = 'none'
            })
        }, 1000)
    }

    // always at end
    setTimeout(() => {
        document.querySelector('.css-loader__wrap').style.opacity = '0'
    }, 1700)
    setTimeout(() => {
        document.querySelector('.css-loader__wrap').style.display = 'none'
        document.querySelector('body').classList.remove('loader')
    }, 1900)
})
