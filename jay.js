const container = document.getElementById('container');

const signUpFunc = () => {
    container.classList.add("right-panel-active");
}
const signInFunc = () => {
    container.classList.remove("right-panel-active");
};

const togglePassw = () => {
    const password = document.loginForm.passw;
    if (password.type == 'password') {
        document.getElementById('show').style.display = 'none';
        document.getElementById('hide').style.display = 'block';
        password.type='text'
    } else {
        document.getElementById('show').style.display = 'block';
        document.getElementById('hide').style.display = 'none';
        password.type = 'password';
    }
};

const togglePassw2 = () => {
    const password2 = document.regForm.passw
    if (password2.type == 'password') {
        document.getElementById('show2').style.display = 'none';
        document.getElementById('hide2').style.display = 'block';
        password2.type = 'text';
    } else {
        document.getElementById('show2').style.display = 'block';
        document.getElementById('hide2').style.display = 'none';
        password2.type = 'password';
    }
}

const pattern = /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i

const handleReg = async (e) => {
    try {
        e.preventDefault();
        const data = await ({
            userName: document.regForm.uname.value,
            email: document.regForm.mail.value,
            password: document.regForm.passw.value
        });
        if (data.email.match(pattern)) {
            alert(`${data.email} added to the system successfully...`);
            location.reload(true);
        } else {
            alert('invalid email');
        };
    } catch (error) {
        alert('error');
    }
}

const handleLoggin = async (e) => {
    try {
        e.preventDefault();
        const data = await ({
            email: document.loginForm.mail.value,
            password: document.loginForm.passw.value
        })
        if (data.email.match(pattern)) {
            alert(`${data.email} logged into the system successfully...`);
            location.reload(true);
        } else {
            alert('invalid email');
        };
    } catch (error) {
        alert('error');
    };

}