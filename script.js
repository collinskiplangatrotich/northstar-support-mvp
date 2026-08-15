/**
 * Northstar Retail Support MVP - Production JavaScript Logic
 */

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

/**
 * Section 1: Order Status Checking
 */
function checkOrderStatus() {
    const orderInput = document.getElementById("orderNumber");
    const resultContainer = document.getElementById("result");

    if (!orderInput || !resultContainer) return;

    const orderNumber = orderInput.value.trim().toUpperCase();

    // Validation: Empty Input
    if (orderNumber === "") {
        resultContainer.innerHTML = `
            <div style="background-color: #ffebee; color: #c62828; padding: 12px; border-radius: 6px; border: 1px solid #ef9a9a;">
                ⚠️ Please enter a valid order number.
            </div>
        `;
        return;
    }

    // Lookup order or fallback
    const orderInfo = MOCK_ORDERS[orderNumber] || {
        status: "In Transit 🚛",
        deliveryDate: "16 August 2026",
        carrier: "Standard Parcel Post"
    };

    // Render result
    resultContainer.innerHTML = `
        <div style="background-color: #e8f5e9; color: #1b5e20; padding: 15px; border-radius: 6px; border: 1px solid #a5d6a7;">
            <h3 style="margin-top: 0; color: #2e7d32;">📦 Order Details</h3>
            <p style="margin: 4px 0;"><strong>Order Number:</strong> ${orderNumber}</p>
            <p style="margin: 4px 0;"><strong>Status:</strong> ${orderInfo.status}</p>
            <p style="margin: 4px 0;"><strong>Estimated Delivery:</strong> ${orderInfo.deliveryDate}</p>
            <p style="margin: 4px 0;"><strong>Carrier:</strong> ${orderInfo.carrier}</p>
        </div>
    `;
}

/**
 * Section 2 Dynamic Dropdowns: Toggles sub-options based on Return vs Refund selection
 */
function toggleSubOptions() {
    const requestType = document.getElementById("requestType").value;
    const returnGroup = document.getElementById("returnOptionsGroup");
    const refundGroup = document.getElementById("refundOptionsGroup");
    const resultContainer = document.getElementById("returnResult");

    // Clear previous results on toggle
    if (resultContainer) resultContainer.innerHTML = "";

    if (requestType === "return") {
        returnGroup.style.display = "block";
        refundGroup.style.display = "none";
    } else if (requestType === "refund") {
        returnGroup.style.display = "none";
        refundGroup.style.display = "block";
    } else {
        returnGroup.style.display = "none";
        refundGroup.style.display = "none";
    }
}

/**
 * Section 2 Form Submission: Processes dynamic choices for Returns and Refunds
 */
function submitReturnOrRefund() {
    const requestType = document.getElementById("requestType").value;
    const resultContainer = document.getElementById("returnResult");

    // Validation: Primary Selection
    if (!requestType) {
        resultContainer.innerHTML = `
            <div style="background-color: #ffebee; color: #c62828; padding: 12px; border-radius: 6px; border: 1px solid #ef9a9a;">
                ⚠️ Please select whether you wish to Return an Item or Request a Refund.
            </div>`;
        return;
    }

    // Branch 1: Handling Return Choices
    if (requestType === "return") {
        const returnSelect = document.getElementById("returnReason");
        if (!returnSelect.value) {
            resultContainer.innerHTML = `
                <div style="background-color: #ffebee; color: #c62828; padding: 12px; border-radius: 6px; border: 1px solid #ef9a9a;">
                    ⚠️ Please select a reason for your return.
                </div>`;
            return;
        }

        const reasonText = returnSelect.options[returnSelect.selectedIndex].text;
        const returnId = "RET-" + Math.floor(100000 + Math.random() * 900000);

        resultContainer.innerHTML = `
            <div style="background-color: #e8f5e9; color: #1b5e20; padding: 15px; border-radius: 6px; border: 1px solid #a5d6a7;">
                <h3 style="margin-top: 0; color: #2e7d32;">📦 Return Request Initiated</h3>
                <p style="margin: 4px 0;"><strong>Return Reference:</strong> ${returnId}</p>
                <p style="margin: 4px 0;"><strong>Selected Reason:</strong> ${reasonText}</p>
                <p style="margin: 4px 0;"><strong>Next Step:</strong> Drop the item at any partner collection station using the reference code above.</p>
            </div>`;
    } 
    
    // Branch 2: Handling Refund Choices
    else if (requestType === "refund") {
        const refundChoice = document.getElementById("refundOption").value;
        if (!refundChoice) {
            resultContainer.innerHTML = `
                <div style="background-color: #ffebee; color: #c62828; padding: 12px; border-radius: 6px; border: 1px solid #ef9a9a;">
                    ⚠️ Please select a specific refund option.
                </div>`;
            return;
        }

        let responseHTML = "";

        if (refundChoice === "status") {
            responseHTML = `
                <h3 style="margin-top: 0; color: #2e7d32;">💳 Existing Refund Status</h3>
                <p style="margin: 4px 0;"><strong>Status:</strong> Approved & Dispatched</p>
                <p style="margin: 4px 0;"><strong>Amount:</strong> $45.00</p>
                <p style="margin: 4px 0;"><strong>Estimated Arrival:</strong> 2–3 business days.</p>`;
        } else if (refundChoice === "store_credit") {
            responseHTML = `
                <h3 style="margin-top: 0; color: #2e7d32;">🎟️ Store Credit Code Generated</h3>
                <p style="margin: 4px 0;"><strong>Voucher Code:</strong> NORTHSTAR-CREDIT-2026</p>
                <p style="margin: 4px 0;"><strong>Value:</strong> $45.00 (Ready to use instantly on checkout)</p>`;
        } else if (refundChoice === "original_payment") {
            responseHTML = `
                <h3 style="margin-top: 0; color: #2e7d32;">💸 Original Payment Refund Submitted</h3>
                <p style="margin: 4px 0;"><strong>Status:</strong> Processing</p>
                <p style="margin: 4px 0;"><strong>Timeline:</strong> Funds will reflect in your account within 5–7 business days.</p>`;
        }

        resultContainer.innerHTML = `
            <div style="background-color: #e8f5e9; color: #1b5e20; padding: 15px; border-radius: 6px; border: 1px solid #a5d6a7;">
                ${responseHTML}
            </div>`;
    }
}
