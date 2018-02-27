
const mongoose = require('mongoose');
const Warehouse = require('../models/warehouseCard');
const User = require('../models/user');

const dbName = 'Simple-Linear';
mongoose.connect(`mongodb://localhost/${dbName}`);

const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const p1234encrypted = bcrypt.hashSync('1234', salt);

const users = [
  {
    Username: 'Jana',
    Password: p1234encrypted,
    CompanyName: 'Simple Linear',
    CompanyAddress: '999 Pamplona, Bacelona',
    Email: 'Jana@awesome.com',
    Role: 'SELLER'
  },
  {
    Username: 'SHENG',
    Password: p1234encrypted,
    CompanyName: 'Simple Linear',
    CompanyAddress: '999 Pamplona, Bacelona',
    Email: 'Sheng@awesome.com',
    Role: 'SELLER'
  },
  {
    Username: 'Danielle',
    Password: p1234encrypted,
    CompanyName: 'None Logistics',
    CompanyAddress: '0 Supply, Bacelona',
    Email: 'Danielle@awesome.com',
    Role: 'OWNER'
  },
  {
    Username: 'Santi',
    Password: p1234encrypted,
    CompanyName: 'Super Logistics',
    CompanyAddress: '8 Super Logistics, Bacelona',
    Email: 'Santi@awesome.com',
    Role: 'OWNER'
  },
  {
    Username: 'Stephi',
    Password: p1234encrypted,
    CompanyName: 'All Logistics',
    CompanyAddress: '1 Logistics, Bacelona',
    Email: 'Stephi@awesome.com',
    Role: 'OWNER'
  }
];

const warehouses = [
  {
    OwnerID: User._id,
    CompanyName: 'None Logistics',
    WarehouseAddress: '0 Supply, Bacelona',
    Pricing: 'Very Expensive',
    SpecialNotes: 'Only rich customers'
  },
  {
    OwnerID: User._id,
    CompanyName: 'Super Logistics',
    WarehouseAddress: '8 Super Logistics, Bacelona',
    Pricing: 'Very Cheap',
    SpecialNotes: 'Only cheap customers'
  },
  {
    OwnerID: User._id,
    CompanyName: 'All Logistics',
    WarehouseAddress: '1 Logistics, Bacelona',
    Pricing: 'Super Mega expensive',
    SpecialNotes: 'I take any customer'
  }
];

Warehouse.create(warehouses, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${warehouses.length} warehouses`);
});

User.create(users, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${users.length} warehouses`);
});
