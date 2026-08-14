function checkOrderStatus() {
    const orderNumber = document.getElementById("orderNumber").value;
    const result = document.getElementById("result");

    if (orderNumber.trim() === "") {
        result.innerHTML = "<p>Please enter an order number.</p>";
        return;
    }

    result.innerHTML =
        "<h3>Order Status</h3>" +
        "<p><strong>Order Number:</strong> " + orderNumber + "</p>" +
        "<p><strong>Status:</strong> In Transit</p>" +
        "<p><strong>Estimated Delivery:</strong> 15 August 2026</p>";
}

function showReturnInfo() {
    const reason = document.getElementById("reason").value;
    const result = document.getElementById("returnResult");

    if (reason === "") {
        result.innerHTML = "<p>Please select a reason.</p>";
        return;
    }

    result.innerHTML =
        "<h3>Return Request</h3>" +
        "<p><strong>Reason:</strong> " + reason + "</p>" +
        "<p>Your return request has been received.</p>" +
        "<p>Please package the item and drop it at the nearest collection point.</p>" +
        "<p><strong>Refund Time:</strong> 5–7 business days.</p>";
}
