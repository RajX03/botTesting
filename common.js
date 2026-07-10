// function navigateTo(page) {

//     // Reset SalesIQ conversation
//     if (window.$zoho &&
//         $zoho.salesiq &&
//         typeof $zoho.salesiq.reset === "function") {

//         $zoho.salesiq.reset();
//     }

//     // Small delay so reset finishes
//     setTimeout(function () {
//         window.location.href = page;
//     }, 1000);

// }
function navigateTo(page) {
    // Extract a clean page name from the file string (e.g., "AI.html" becomes "AI")
    var pageName = page.replace('.html', '');

    // Update SalesIQ instantly in memory right before the redirect
    if (window.$zoho && $zoho.salesiq && typeof $zoho.salesiq.visitor === "object") {
        $zoho.salesiq.visitor.customInfo({ "current_page": pageName });
    }
     $zoho.salesiq.reset();
    // Redirect immediately without any artificial delay
    window.location.href = page;
}
