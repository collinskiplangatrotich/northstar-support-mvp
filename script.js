/**
 * Northstar Retail Support MVP - Interactivity Script
 */

// Initialized log (Replaced browser alert for better UX)
console.log("Northstar Support MVP script initialized successfully.");

// Mock Database for Order Tracking
const MOCK_ORDERS = {
    "NSL12345": {
        status: "Out for Delivery 🚚",
        deliveryDate: "15 August 2026",
        carrier: "Northstar Express (Tracking #EX-99201)"
    },
    "NSL67890": {
        status: "Processing in Warehouse ⏳",
        deliveryDate: "18 August 2026",
        carrier: "Pending Dispatch"
    },
    "NSL11223": {
        status: "Delivered ✅",
        deliveryDate: "12 August 2026",
        carrier: "Standard Logistics"
    }
};

// Human-readable labels for return dropdown values
const RETURN_REASONS = {
    "damaged": "Item damaged or defective",
    "wrong_size": "Wrong size / fit issue",
    "not_described": "Item not as described",
    "changed_mind": "Changed my mind"
};

/**
 * Checks order status against mock database or generates fallback status
 */
function checkOrderStatus() {
    const orderInput = document.getElementById("orderNumber");
    const resultContainer = document.getElementById("result");

    if (!orderInput || !resultContainer) return;

    const orderNumber = orderInput.value.trim().toUpperCase();

    // Validation: Empty Input
    if (orderNumber === "") {
        resultContainer.innerHTML = `
            <div style="background-color: #ffebee; color: #c62828; padding: 12px; border-radius: 4px; margin-top: 12px; border: 1px solid #ef9a9a;">
                ⚠️ Please enter a valid order number.
            </div>
        `;
        return;
    }

    // Retrieve order info or generate standard active delivery
    const orderInfo = MOCK_ORDERS[orderNumber] || {
        status: "In Transit 🚛",
        deliveryDate: "16 August 2026",
        carrier: "Standard Parcel Post"
    };

    // Render formatted output
    resultContainer.innerHTML = `
        <div style="background-color: #e8f5e9; color: #1b5e20; padding: 15px; border-radius: 6px; margin-top: 12px; border: 1px solid #a5d6a7;">
            <h3 style="margin-top: 0; color: #2e7d32;">📦 Order Details</h3>
            <p style="margin: 4px 0;"><strong>Order Number:</strong> ${orderNumber}</p>
            <p style="margin: 4px 0;"><strong>Status:</strong> ${orderInfo.status}</p>
            <p style="margin: 4px 0;"><strong>Estimated Delivery:</strong> ${orderInfo.deliveryDate}</p>
            <p style="margin: 4px 0;"><strong>Carrier:</strong> ${orderInfo.carrier}</p>
        </div>
    `;
}

/**
 * Processes return request and outputs confirmation with return tracking ID
 */
function showReturnInfo() {
    const reasonSelect = document.getElementById("reason");
    const resultContainer = document.getElementById("returnResult");

    if (!reasonSelect || !resultContainer) return;

    const reasonValue = reasonSelect.value;

    // Validation: No reason selected
    if (reasonValue === "") {
        resultContainer.innerHTML = `
            <div style="background-color: #ffebee; color: #c62828; padding: 12px; border-radius: 4px; margin-top: 12px; border: 1px solid #ef9a9a;">
                ⚠️ Please select a reason for your return.
            </div>
        `;
        return;
    }

    const reasonText = RETURN_REASONS[reasonValue] || reasonValue;
    const returnReference = "RET-" + Math.floor(100000 + Math.random() * 900000);

    // Render confirmation output
    resultContainer.innerHTML = `
        <div style="background-color: #e8f5e9; color: #1b5e20; padding: 15px; border-radius: 6px; margin-top: 12px; border: 1px solid #a5d6a7;">
            <h3 style="margin-top: 0; color: #2e7d32;">🔄 Return Request Received</h3>
            <p style="margin: 4px 0;"><strong>Return ID:</strong> ${returnReference}</p>
            <p style="margin: 4px 0;"><strong>Reason:</strong> ${reasonText}</p>
            <p style="margin: 4px 0;"><strong>Next Steps:</strong> Check your registered email for a prepaid shipping label and instructions.</p>
            <p style="margin: 4px 0;"><strong>Refund Processing Time:</strong> 5–7 business days upon item receipt.</p>
        </div>
    `;
}
