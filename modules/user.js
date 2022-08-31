const db = require('../data-base');

class Users {

    constructor(id, name, email, phone) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    static getAll() {
        return db.execute('SELECT * FROM users');
    };

    static getOne(id) {
        return db.execute(`SELECT * FROM users WHERE id = ${id}`);
    };

    static create(name, email, mobile) {
        return db.execute(`INSERT INTO users (name, email, mobile) VALUES ('${name}', '${email}', '${mobile}')`);
    };

    static update(id, name, email, mobile) {
        return db.execute(`UPDATE users SET name = '${name}', email = '${email}', mobile = '${mobile}' WHERE id = '${id}'`);
    };

    static delete(id) {
        return db.execute(`DELETE FROM users WHERE id = ${id}`);
    };

}

module.exports = Users