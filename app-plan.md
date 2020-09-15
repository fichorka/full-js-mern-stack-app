User: {
\_id,
username,
password,
role: customer / admin
}

Item: {
\_id,
name,
price,
description,
imageUrl
}

order: {
\_id,
items: [
{
itemId: '325aseg',
itemPrice: 25
qty: 3,
}
]
}

CRUD operations:

create: user / item

read: users / items

update: user / item

delete: user / item

Typescript, Eslint

MERN stack
Backend:

- Node
- express
- redis
- local mongodb

Frontend:

- react
- react-router
