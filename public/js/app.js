document.getElementById('registerForm').onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('/auth/register', {
        method: 'POST',
        body: new URLSearchParams(formData)
    });
    alert(await response.text());
};

document.getElementById('loginForm').onsubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await fetch('/auth/login', {
        method: 'POST',
        body: new URLSearchParams(formData)
    });
    alert(await response.text());
};
