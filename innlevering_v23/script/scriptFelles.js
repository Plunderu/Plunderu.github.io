        /* Henter hamburgerelementet */
        const burgerEl = document.querySelector('.fa-bars')

        /* Henter navelementet */
        const navEl = document.querySelector('.nav')

        burgerEl.addEventListener('click', showNav)

        function showNav(){
            navEl.classList.toggle('show')
        }
        