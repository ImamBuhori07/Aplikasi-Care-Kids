

export class Login {
    reset(): void {
        this.email = "null";
        this.password = "null";
    }
    email: string = "";
    password: string = "";
}