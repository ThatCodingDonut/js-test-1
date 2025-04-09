const redirect = (link) => {
    try {
        return window.location.assign(link);
    } catch (err) {
        return err; 
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("PR");

    if (btn) {
        btn.onclick = () => {
            redirect("/register");
        };
    }
});
