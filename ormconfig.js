module.exports = [
  {
    "name": "default",
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "rlindskog",
    "password": "test",
    "database": "atlify-test",
    "synchronize": true,
    "logging": false,
    "entities": [
       "api/src/entity/**/*.ts"
    ],
    "migrations": [
       "api/src/migration/**/*.ts"
    ],
    "subscribers": [
       "api/src/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "./api/src/entity",
       "migrationsDir": "./api/src/migration",
       "subscribersDir": "./api/src/subscriber"
    }
 }
]