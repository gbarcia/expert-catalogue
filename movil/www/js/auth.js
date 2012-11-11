function setAuthToken(token, lifetime) {
    var expires = new Date();
    expires.setDate(expires.getDate() + lifetime);

    localStorage.setItem("auth_token", token);
    localStorage.setItem("auth_token_expiration", expires.toGMTString());
}

function getToken() {
    return localStorage.getItem("auth_token");
}

function getExpiration() {
    return localStorage.getItem("auth_token_expiration");
}

function destroy() {
    localStorage.removeItem("auth_token_expiration");
    localStorage.removeItem("auth_token");
}

function isAuthenticate() {
    return (getToken() !== null);
}

function requireSession() {
    if (!isAuthenticate()) {
        window.location = 'login.html';
    }
}

function requireNoSession() {
    if (isAuthenticate()) {
        window.location = 'index.html';
    }

}

function logout() {
    destroy();
    window.location = 'login.html';
}