class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        console.log('registerSuccessfulLogin')
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout() {
        sessionStorage.clear()
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        return !(user === null);
    }

}

export default new AuthenticationService()