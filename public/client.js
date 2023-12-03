console.log('Client-side code running');

const buttons = document.getElementsByClassName('edit-ingred-btn');

for (let button of buttons) {
    button.addEventListener('click', async function (e) {
        console.log('button was clicked');

        let name = button.parentElement.parentElement.querySelector(".name-col").innerText
        let quantity = button.parentElement.parentElement.querySelector(".quantity-col").innerText
        let unit = button.parentElement.parentElement.querySelector(".unit-col").innerText

        let nameHeading = document.getElementById("name-heading")
        let quantityInput = document.getElementById("quantity-input")
        let unitInput = document.getElementById("unit-input")

        nameHeading.innerText = name
        quantityInput.setAttribute("value", quantity)
        unitInput.setAttribute("value", unit)

        let submitButton = document.getElementById("submit-button")

        submitButton.addEventListener('click', async function (e) {
            let data = {
                name: name,
                quantity: quantityInput.value,
                unit: unitInput.value
            };

            console.log(data)

            try {
                console.log(JSON.stringify(data))
                const response = await fetch(`${window.location.pathname}/update`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    const contentType = response.headers.get('content-type');
                    const jsonResponse = await response.json();
                    // Check if the JSON response contains a redirect property
                    if (jsonResponse.redirect) {
                        // Manually redirect to the specified URL
                        window.location.href = jsonResponse.redirect;
                        return;
                    }
                }

                throw new Error('Request failed.');
            } catch (error) {
                console.error(error);
            }
        });

    });
}

