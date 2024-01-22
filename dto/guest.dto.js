
export class GuestDTO {

    constructor({ id, email }) {
        this.id = id;
        this.email = email.toLowerCase();
    }
}

export class GuestDetailDTO {

    constructor({ id, firstname, lastname, email, hasConfirm }) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email.toLowerCase();
        this.hasConfirm = hasConfirm;
    }
}