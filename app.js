const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "interstellarclientsup@gmail.com",
        Password: "AF14B524F08D12B5D71B1633E3D79F933B5B",
        To: 'interstellarclientsup@gmail.com',
        From: "interstellarclientsup@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    sendEmail();
})