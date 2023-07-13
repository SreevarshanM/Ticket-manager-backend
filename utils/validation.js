const mongoose = require("mongoose");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateObjectId = (string) => {
  return mongoose.Types.ObjectId.isValid(string);
};

const validatePhone = (string) => {
  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (string.match(phoneno)) {
    return true;
  } else {
    return false;
  }
};
const isValidVehicleNumberPlate = (NUMBERPLATE) => {
  // Regex to check valid
  // Indian Vehicle Number Plate
  const validpattern = new RegExp("^[A-Z0-9&Ñ]+$");
  if (NUMBERPLATE.match(validpattern)) return true;
  else return false;
};

module.exports = {
  validateEmail,
  validateObjectId,
  validatePhone,
  isValidVehicleNumberPlate,
};
