
async function sendEmail() {
  try {

    // post body data 
    const newMessage = {
      sender_name: document.getElementById('sender_name').value,
      sender_email: document.getElementById('sender_email').value,
      sender_phone_no: document.getElementById('sender_phone_no').value,
      comment: document.getElementById('comment').value
    };

    console.log(newMessage);

    // request options
    const options = {
      method: 'POST',
      body: JSON.stringify(newMessage),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(`/https://rct-send-mail.onrender.com/send-email`, options);

    if (!response.ok) {

      console.log(`HTTP error: ${response.status}`);

    } else {

      const data = await response.json();

      console.log(data);

      // if (data.status == 200) {

      //   document.getElementById('success-msg').innerText = data.message;

      // } else {

      //   document.getElementById('errors-msg').innerText = data.message;

      // }

    }

  }

  catch (error) { console.log(error); }

}

const sendEmailForm = document.forms.namedItem("sendEmailForm");
sendEmailForm.addEventListener("submit", (event) => {
  sendEmail();
  event.preventDefault();
},
  false
);

