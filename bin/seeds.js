
const mongoose = require('mongoose');
const Warehouse = require('../models/warehouseCard');
// const User = require('../models/user');

const dbName = 'Simple-Linear';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const salt = bcrypt.genSaltSync(saltRounds);
// const p1234encrypted = bcrypt.hashSync('1234', salt);

// const users = [
//   {
//     username: 'Jana',
//     password: p1234encrypted,
//     companyName: 'Simple Linear',
//     companyAddress: '999 Pamplona, Bacelona',
//     email: 'Jana@awesome.com',
//     role: 'SELLER'
//   },
//   {
//     username: 'SHENG',
//     password: p1234encrypted,
//     companyName: 'Simple Linear',
//     companyAddress: '999 Pamplona, Bacelona',
//     email: 'Sheng@awesome.com',
//     role: 'SELLER'
//   },
//   {
//     username: 'Danielle',
//     password: p1234encrypted,
//     companyName: 'None Logistics',
//     companyAddress: '0 Supply, Bacelona',
//     email: 'Danielle@awesome.com',
//     role: 'OWNER'
//   },
//   {
//     username: 'Santi',
//     password: p1234encrypted,
//     companyName: 'Super Logistics',
//     companyAddress: '8 Super Logistics, Bacelona',
//     email: 'Santi@awesome.com',
//     role: 'OWNER'
//   },
//   {
//     username: 'Stephi',
//     password: p1234encrypted,
//     companyName: 'All Logistics',
//     companyAddress: '1 Logistics, Bacelona',
//     email: 'Stephi@awesome.com',
//     role: 'OWNER'
//   }
// ];

const warehouses = [
  {
    OwnerID: '5a957a14a8c3d1eabd65d15a',
    companyName: 'None Logistics',
    WarehouseAddress: '0 Supply, Bacelona',
    Pricing: 'Very Expensive',
    SpecialNotes: 'Only rich customers'
  },
  {
    OwnerID: '5a957a14a8c3d1eabd65d15b',
    companyName: 'Super Logistics',
    WarehouseAddress: '8 Super Logistics, Bacelona',
    Pricing: 'Very Cheap',
    SpecialNotes: 'Only cheap customers'
  },
  {
    OwnerID: '5a957a14a8c3d1eabd65d15c',
    companyName: 'All Logistics',
    WarehouseAddress: '1 Logistics, Bacelona',
    Pricing: 'Super Mega expensive',
    SpecialNotes: 'I take any customer'
  }
];

Warehouse.create(warehouses, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${warehouses.length} warehouses`);
});

// User.create(users, (err) => {
//   if (err) { throw (err); }
//   console.log(`Created ${users.length} users`);
// });
