
async function sendEmail(senderName, senderEmail, senderPhoneNumber, senderMessage) {
  try {

    // post body data 
    const newMessage = {
      sender_name: document.getElementById(`${senderName}`).value,
      sender_email: document.getElementById(`${senderEmail}`).value,
      sender_phone_number: document.getElementById(`${senderPhoneNumber}`).value,
      comment: document.getElementById(`${senderMessage}`).value
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


    // PRODUCTION
    const response = await fetch(`https://rct-emails.onrender.com/send-email`, options);

    // TEST
    // const response = await fetch('http://localhost:3300/send-email', options);


    if (!response.ok) {

      console.log(`HTTP error: ${response.status}`);

      return response;

    } else {

      const data = await response.json();

      console.log(data);

      return data;

    }

  }

  catch (error) { return error; }

}


// /* Sending the formData object as payload using Fetch */
// const indexForm = document.getElementById('sendEmailIForm');
// indexForm.addEventListener('submit', async function(e) {
//     // Prevent default behavior:
//     e.preventDefault();

//     console.log("sdfafsafasf");
//     sendEmail('sendEmailIForm',"user_name","user_email", "user_phone_no", "user_comment", "pass-msg", 'err-msg');

// });

const sendingEmail = async (param) => {

  let res = {};

  document.getElementById("ss").innerText = "Sending ...";

  if (param === 'sendEmailForm') {

    res = await sendEmail("sender_name", "sender_email", "sender_phone_no", "sender_comment");

  } else {

    res = await sendEmail("user_name", "user_email", "user_phone_no", "user_comment");

  }

  if (res.status === 500) {

    alert("INTERNAL SERVER ERROR");

  } else if (res.status === 400) {

    document.getElementById("success-msg").innerText = res.message;

  } else {

    document.getElementById("ss").innerText = "Send";

    document.getElementById("success-msg").innerText = res.message;

    document.getElementById(`${param}`).reset();

  }


}

