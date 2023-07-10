function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  gapi.load("client:auth2", () => {
    gapi.client
      .init({
        apiKey: "YOUR_API_KEY",
        clientId: "YOUR_CLIENT_ID",
        discoveryDocs: [
          "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
        ],
        scope: "https://www.googleapis.com/auth/gmail.send",
      })
      .then(() => {
        return gapi.auth2.getAuthInstance().signIn();
      })
      .then(() => {
        const accessToken = gapi.auth2
          .getAuthInstance()
          .currentUser.get()
          .getAuthResponse().access_token;
        const headers = {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        };
        const body = createEmailBody(name, email);

        return fetch(
          "https://www.googleapis.com/gmail/v1/users/me/messages/send",
          {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
          }
        );
      })
      .then((response) => {
        if (response.status === 200) {
          // Email sent successfully
          alert("Email sent successfully!");
        } else {
          // Error sending email
          alert("Error sending email. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  });
}

function createEmailBody(name, email) {
  const message = `Name: ${name}\nEmail: ${email}`;

  const emailHeaders = {
    To: "ayomideesin1@gmail.com",
    Subject: "New form submission",
  };

  const base64EncodedEmail = btoa(
    `From: ${emailHeaders.To}\r\n` +
      `To: ${emailHeaders.To}\r\n` +
      `Subject: ${emailHeaders.Subject}\r\n\r\n` +
      `${message}`
  );

  return {
    raw: base64EncodedEmail,
  };
}

/////////range///////////
var range = document.getElementById("myRange");

range.addEventListener("input", function () {
  // Get the current value of the range input
  var value = range.value;

  // Increase the value by a desired increment
  value++;

  // Set the updated value back to the range input
  range.value = value;
});

////////nvbr/////

const navbarToggle = document.getElementById("navbarToggle");
const navbarLinks = document.getElementById("navbarLinks");

navbarToggle.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
