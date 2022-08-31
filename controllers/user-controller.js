const Users = require('../modules/user');

exports.getAllUsers = async (req, res, next) => {
    try {
        const [users] = await Users.getAll();
        // res.status(200).json(allUsers);
        res.send({
            message: 'All users',
            data: users,
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
  
exports.getUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const [user] = await Users.getOne(userId);
        // res.status(200).json(user);
        res.send({
            message: `Get user by id=${userId}`,
            data: user,
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
  
exports.createUser = async (req, res, next) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const mobile = req.body.mobile;
        const addUser = await Users.create(name, email, mobile);
        // res.status(201).json(addUser);
        res.send({
            message: `User created successful`,
            data: addUser,
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
  
exports.updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const name = req.body.name;
        const email = req.body.email;
        const mobile = req.body.mobile;
        const updateCurrentUser = await Users.update(userId, name, email, mobile);
        // res.status(200).json(updateCurrentUser);
        res.send({
            message: `User updated successful with id = ${userId}`,
            data: updateCurrentUser,
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
  
exports.deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const deleteCurrentUser = await Users.delete(userId);
        // res.status(200).json(deleteCurrentUser);
        res.send({
            message: `User delete successful with id = ${userId}`,
            data: deleteCurrentUser,
        })
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
};
