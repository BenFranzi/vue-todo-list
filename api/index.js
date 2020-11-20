const express = require('express');
var jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

const unauthorized = (res) => res.status(401).json({error: 401});
const badRequest = (res) => res.status(400).json({error: 400});

var authorised = express.Router()

/**
 * JWT check middleware
 */
authorised.use((req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token) {
            return unauthorized(res);
        } else {
            if (jwt.verify(token.split('Bearer ')[1], 'SHARED_SECRET')) {
                return next();
            }
        }
    } catch (e){
        return unauthorized(res);
    }
    return unauthorized(res);
});

const todos = [];

/**
 * Login
 * Note: Submit a username and it will be signed
 */
app.post('/auth', (req, res) => {

    if (!req.body) {
        return unauthorized(res);
    } else if (!req.body.username) {
        return unauthorized(res);
    }
    return res.json({token: jwt.sign({username: req.body.username}, 'SHARED_SECRET')});
});

/**
 * Get list of todo items
 */
authorised.get('/', (req, res) => {
    return res.json(todos);
});

/**
 * Add new todo item
 * {
 *     message: string,
 *     status?: boolean
 * }
 */
authorised.post('/', (req, res) => {
    if (req.body) {
        if (!!req.body.message) {
            const status = !!req.body.status;
            const id = (todos.length > 0) ? todos[todos.length - 1].id + 1 : 0;
            todos.push({
                id, message: req.body.message, status
            });
            return res.status(204).send();
        }
    }
    return badRequest(res);
});

/**
 * Edit existing todo item
 * @param id
 * {
 *     message: string,
 *     status?: boolean
 * }
 */
authorised.put('/:id', (req, res) => {
    const {id} = req.params.id;
    if (req.body) {
        if (req.body.message && req.body.status) {
            const index = todos.findIndex(item => id === item.id);
            if (index === -1) {
                return badRequest(res);
            }
            let item = todos[index];
            item = {id: item.id, ...req.body};
            todos[index] = item;
            return res.status(204).send();
        }
    }
    return badRequest(res);
});

/**
 * Delete todo item
 * @param id
 */
authorised.delete('/:id', (req, res) => {
    const {id} = req.params.id;
    const index = todos.findIndex(item => id === item.id);
    if (index === -1) {
        return badRequest(res);
    } else {
        todos.splice(index, index);
    }
    badRequest(res);
});

// Attach authorised endpoints
app.use('/', authorised);

app.listen(port, () => {
  console.log(`:${port}`);
});
