document.getElementById("signup-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const messageBox = document.querySelector(".form-message");

  if (!email) {
    messageBox.textContent = "Please enter an email address.";
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();
    messageBox.textContent = result.message;
    messageBox.style.color = "green";
  } catch (error) {
    console.error(error);
    messageBox.textContent = "Failed to connect to server.";
    messageBox.style.color = "red";
  }
});
