# Full Stack Experience Switzerland App

This is the first MVP project that I created independently with tools and help provided by the CodeOp Fullstack Bootcamp. It is an e-shop that displays different experiences, which can further be filtered into different categories. There are many components created in the React app to show the home page. MySQL was used to create a database where the information used for the website are stored.

## Technologies Used
- React
- Node/Express
- MySQL
- Bootstrap
- Postman
- Pexels for Images
- Google Fonts

## Setup

### Dependencies

Run `npm install` to install the dependencies for the backend.

Switch to the client folder by entering the command `cd client` and run `npm install` to install dependencies related to React (the client).

### Database Prep

Create `.env` file in server directory and add

```
DB_HOST=localhost
DB_USER=root
DB_PASS=TYPE YOUR PASSWORD
DB_NAME=experienceCH
```

Type `mysql -u root -p` to access the MySQL CLI using your password.

In the MySQL CLI, type `CREATE DATABASE experienceCH;` to create a database in MySQL.

Run the following in the MySQL CLI: `ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'YOUR_PASSWORD';` (replace `YOUR_PASSWORD` with your actual password)

Open another terminal and go into the project folder and run `npm run migrate`. This will create the tables needed for this project since this has been configured in the package.json of the server.

### Run Your Development Servers

- Run `npm start` in the server directory to start the server.
- Open another terminal window and `cd client` and run `npm start` to start the frontend `http://localhost:3000`.
- Since the frontend has been connected to the backend, the app should function correctly when both the server and client has started.

## Resources
- [MySQL Documentation](https://dev.mysql.com/doc/mysqld-version-reference/en/keywords-8-0.html#keywords-8-0-detailed-I)
- [How to create a hero section](https://www.youtube.com/watch?v=fs923Mu5EXY&ab_channel=WEBCIFAR)
- [Bootstrap Layout](https://getbootstrap.com/docs/4.0/layout/grid/)

## Nice-to-haves
- Photo carousel of the locations
- A way to increase/decrease the quantity since each experience is good for one person only
- Create a log in so the users can: 
  - view their order history (need to edit the orders table to reflect everything well),
  - add experiences to favorites
- A contact form

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
