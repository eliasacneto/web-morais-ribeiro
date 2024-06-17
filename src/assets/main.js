document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

document.getElementById("navMenuToggler")?.addEventListener("click", function () {
    const navMenu = document.getElementById("navMenu")
    navMenu?.classList.toggle("h-0")
    navMenu?.classList.toggle("h-full")
    navMenu?.classList.toggle("opacity-0")
    navMenu?.classList.toggle("opacity-100")
})


function sendForm() {
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault();

        var client_name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var whatsapp = document.getElementById('whatsapp').value;
        var area = document.getElementById('area').value;
        var metus = document.getElementById('metus').value
        var message = document.getElementById('message').value;

        var webhookUrl = "https://discordapp.com/api/webhooks/1235704230703271976/t82KP2nVaMwLXwA2DP35wNrt4yBXCnBE7af27ZUm46b6eJKkmD0jjfTzMgRVlY9bp-UZ";
        var data = {
            username: "M&R Bot",
            content: "Uma nova mensagem foi recebida através do formulário:",
            embeds: [
                {
                    title: "Detalhes do Contato",
                    fields: [
                        { name: "Nome:", value: client_name, inline: true },
                        { name: "Email:", value: email, inline: true },
                        { name: "WhatsApp:", value: whatsapp, inline: true },
                        { name: "Área de interesse:", value: area, inline: true },
                        { name: "Como nos conheceu:", value: metus, inline: true },
                        { name: "Mensagem:", value: message },
                    ],
                    color: 7506394
                }
            ]
        };

        fetch(webhookUrl, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(response => {
            if (response.ok) {
                Swal.fire({
                    title: "Sua mensagem foi enviada!",
                    icon: "success",
                    width: 600,
                    padding: "3em",
                    color: "#FFF",
                    background: "#1E1732",
                    showConfirmButton: false,
                    timer: 4000,
                    showClass: {
                        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
                    },
                    hideClass: {
                        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
                    }
                });
            } else {
                Swal.fire({
                    title: "Poxa...",
                    text: "Parece que ocorreu um erro ao enviar mensagem!",
                    icon: "error",
                    width: 600,
                    padding: "3em",
                    color: "#FFF",
                    background: "#1E1732",
                    showConfirmButton: false,
                    timer: 4000,
                    showClass: {
                        popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
                    },
                    hideClass: {
                        popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
                    }
                });
            }
        }).catch(error => {
            console.error('Erro ao enviar dados: ', error);
            Swal.fire({
                title: "Erro de comunicação",
                text: "Mas calma, já estamos trabalhando para resolver! ",
                icon: "error",
                width: 600,
                padding: "3em",
                color: "#FFF",
                background: "#1E1732",
                showConfirmButton: false,
                timer: 4000,
                showClass: {
                    popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
                },
                hideClass: {
                    popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
                }
            });
        });
    });


}
