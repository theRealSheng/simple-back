
const mongoose = require('mongoose');
// const Warehouse = require('../models/warehouseCard');
// const User = require('../models/user');
// const Booking = require('../models/booking');

const dbName = 'simplelinearapi';
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
//     role: 'SELLER',
//     description: 'Founded in 1800, we are leading online seller for erotic items'
//   },
//   {
//     username: 'SHENG',
//     password: p1234encrypted,
//     companyName: 'Simple Linear',
//     companyAddress: '999 Pamplona, Bacelona',
//     email: 'Sheng@awesome.com',
//     role: 'SELLER',
//     description: 'Founded in 2000, we are leading online seller for books'
//   },
//   {
//     username: 'Danielle',
//     password: p1234encrypted,
//     companyName: 'None Logistics',
//     companyAddress: '0 Supply, Bacelona',
//     email: 'Danielle@awesome.com',
//     role: 'OWNER',
//     description: 'Founded in 2005, we are leading online seller for chargers'
//   },
//   {
//     username: 'Santi',
//     password: p1234encrypted,
//     companyName: 'Super Logistics',
//     companyAddress: '8 Super Logistics, Bacelona',
//     email: 'Santi@awesome.com',
//     role: 'OWNER',
//     description: 'Founded in 2008, we are leading online seller for laptops'
//   },
//   {
//     username: 'Stephi',
//     password: p1234encrypted,
//     companyName: 'All Logistics',
//     companyAddress: '1 Logistics, Bacelona',
//     email: 'Stephi@awesome.com',
//     role: 'OWNER',
//     description: 'Founded in 2017, we are leading online seller for chairs'
//   }
// ];

// User.create(users, (err) => {
//   if (err) { throw (err); }
//   console.log(`Created ${users.length} users`);
// });

// const warehouses = [
//   {
//     ownerID: '5a96a93f54cb7904c9bcbdd2',
//     companyName: 'None Logistics',
//     warehouseAddress: '0 Supply, Bacelona',
//     pricing: 'Very Expensive',
//     specialNotes: 'Only rich customers',
//     description: 'Founded in 1980, we are one stop logistics for all. We focus on air shipments'

//   },
//   {
//     ownerID: '5a96a93f54cb7904c9bcbdd3',
//     companyName: 'Super Logistics',
//     warehouseAddress: '8 Super Logistics, Bacelona',
//     pricing: 'Very Cheap',
//     specialNotes: 'Only cheap customers',
//     description: 'Founded in 1999, we are one stop logistics for all. We focus on ocean shipments'
//   },
//   {
//     ownerID: '5a96a93f54cb7904c9bcbdd4',
//     companyName: 'All Logistics',
//     warehouseAddress: '1 Logistics, Bacelona',
//     pricing: 'Super Mega expensive',
//     specialNotes: 'I take any customer',
//     description: 'Founded in 2013, we are one stop logistics for all. We focus on air shipments'
//   }
// ];

// Warehouse.create(warehouses, (err) => {
//   if (err) { throw (err); }
//   console.log(`Created ${warehouses.length} warehouses`);
// });

// const bookings = [
//   {
//     companyName: 'None Logistics',
//     warehouseAddress: '0 Supply, Bacelona',
//     seller: '',
//     productName: 'Only rich customers',
//     dimsWeight: '2000 pcs: 30W x 40L x 50H cm ',
//     packCargo: 'Pallet',
//     hazmat: 'False',
//     expectedVolWeightShip: 'a lot cargo',
//     expectedVolWeightMonth: '30 CBBM',
//     expTurnOver: 7,
//     enterDate: ''
//   },
//   {
//     companyName: 'Super Logistics',
//     warehouseAddress: '8 Super Logistics, Bacelona',
//     seller: 'Very Expensive',
//     productName: 'Only rich customers',
//     dimsWeight: '2000 pcs: 30W x 40L x 50H cm ',
//     packCargo: 'Pallet',
//     hazmat: 'False',
//     expectedVolWeightShip: 'a lot cargo',
//     expectedVolWeightMonth: '30 CBBM',
//     expTurnOver: 7,
//     enterDate: ''
//   },
//   {
//     companyName: 'Super Logistics',
//     warehouseAddress: '8 Super Logistics, Bacelona',
//     seller: 'Very Expensive',
//     productName: 'Only rich customers',
//     dimsWeight: '2000 pcs: 30W x 40L x 50H cm ',
//     packCargo: 'Pallet',
//     hazmat: 'False',
//     expectedVolWeightShip: 'a lot cargo',
//     expectedVolWeightMonth: '30 CBBM',
//     expTurnOver: 7,
//     enterDate: ''
//   },
//   {
//     companyName: 'None Logistics',
//     warehouseAddress: '0 Supply, Bacelona',
//     seller: 'Very Expensive',
//     productName: 'Only rich customers',
//     dimsWeight: '2000 pcs: 30W x 40L x 50H cm ',
//     packCargo: 'Pallet',
//     hazmat: 'False',
//     expectedVolWeightShip: 'a lot cargo',
//     expectedVolWeightMonth: '30 CBBM',
//     expTurnOver: 7,
//     enterDate: ''
//   }
// ];

// Booking.create(bookings, (err) => {
//   if (err) { throw (err); }
//   console.log(`Created ${bookings.length} users`);
// });
