
function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

function sendMessage() {
  var message = document.getElementById('message').value;
  const statusCodes = [200, 201, 500];
  var randomStatusCode = statusCodes[Math.floor(Math.random() * statusCodes.length)];
  var url = `http://httpbin.org/status/${randomStatusCode}`;
  var payload = {
    message: message
  }
  fetch(
    url,
    {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json"
      }
    }
  )
  .then(handleErrors)
  .then(() => {
    var alert = document.getElementById('alert');
    var alertMessage = document.getElementById('alert-message');
    alert.style.display = "block";
    alert.className = "alert success";
    alertMessage.innerHTML = "Message sent successfully." 
  })
  .catch(error => {
    var alert = document.getElementById('alert');
    var alertMessage = document.getElementById('alert-message');
    alert.style.display = "block";
    alert.className = "alert";
    alertMessage.innerHTML = "Something went wrong. Please try again later."
  })
  .finally(() => {
    document.getElementById("message").value = "";
  });
}
