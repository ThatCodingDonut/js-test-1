const redirect = (link) => {
    try {
        return window.location.href(link); 
    } catch (err) {
        return err; 
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("PR");

    if (btn) {
        btn.onclick = () => {
            alert("Hi from the button!");
            redirect("https://your-redirect-link.com");
        };
    }

    alert("Hi from DOM loaded!");
});
