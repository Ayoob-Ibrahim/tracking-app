export class authservice {
    isAuthenticatedUser() {
        let isAuthenticated: boolean =
            sessionStorage["token"] || sessionStorage["status"] == "Waiting";
        return isAuthenticated;
    }

    user_token() {
        let token = sessionStorage["token"];
        return token;
    }
}
