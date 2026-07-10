function navigateTo(page) {

    // Reset SalesIQ conversation
    if (window.$zoho &&
        $zoho.salesiq &&
        typeof $zoho.salesiq.reset === "function") {

        $zoho.salesiq.reset();
    }

    // Small delay so reset finishes
    setTimeout(function () {
        window.location.href = page;
    }, 1000);

}
