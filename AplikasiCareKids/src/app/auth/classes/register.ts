

export class Register {
    reset() {
        this.email = "null";
        this.full_name = "null";
        this.password = "null";
        this.password_confirmation = "null";
    }
    email: string = "";
    full_name: string = "";
    password: string = "";
    password_confirmation: string = "";
}