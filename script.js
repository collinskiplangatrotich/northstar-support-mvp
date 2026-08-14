// Order Status Function
function checkOrderStatus() {
    let orderNumber = document.getElementById("orderNumber").value;
    let result = document.getElementById("result");

    if (orderNumber === "") {
        result.innerHTML = "<p style='color:red;'>Please enter an order number.</p>";
    } else {
        result.innerHTML = `
            <h3>Order Status</h3>
            <p><strong>Order Number:</strong> ${orderNumber}</p>
            <p><strong>Status:</strong> In Transit</p>
            <p><strong>Estimated Delivery:</strong> 15 August 2026</p>
        `;
    }
}

// Returns & Refunds Function
function showReturnInfo() {
    let reason = document.getElementById("reason").value;
    let result = document.getElementById("returnResult");

    if (reason === "") {
        result.innerHTML = "<p style='color:red;'>Please select a reason.</p>";
    } else {
        result.innerHTML = `
            <h3>Return Request</h3>
            <p><strong>Reason:</strong> ${reason}</p>
            <p>Your return request has been received.</p>
            <p>Please package the item and drop it at the nearest collection point.</p>
            <p><strong>Refund Time:</strong> 5–7 business days.</p>
        `;
    }
}
