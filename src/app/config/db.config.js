module.exports = {
    HOST: "localhost",
    USER: "localhost",
    PASSWORD: "adminZDZ",
    DB: "Dane",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };