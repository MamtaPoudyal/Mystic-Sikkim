const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 5004; // Port number

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL Database Connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'mamta2004', // Ensure this matches your MySQL password
  database: 'sikkim_cab',
  port: 3306 // MySQL port
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
});

// API Endpoint to Save Order Data
app.post('/orders', (req, res) => {
  const { name, phone, pickupLocation, dropLocation, pickupDate, pickupTime } = req.body;

  if (!name || !phone || !pickupLocation || !dropLocation || !pickupDate || !pickupTime) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const query = 'INSERT INTO orders (name, phone, pickupLocation, dropLocation, pickupDate, pickupTime) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, phone, pickupLocation, dropLocation, pickupDate, pickupTime], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Database error.' });
    }

    const order = { id: result.insertId, name, phone, pickupLocation, dropLocation, pickupDate, pickupTime };
    res.status(200).json({ message: 'Order placed successfully.', order });
  });
});

// API to fetch order details
app.get('/orders/:orderId', (req, res) => {
  const orderId = req.params.orderId;
  const query = 'SELECT order_id AS id, name, phone, pickupLocation, dropLocation, pickupDate, pickupTime FROM orders WHERE order_id = ?';
  db.query(query, [orderId], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).json({ message: 'Database error.' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Order not found.' });
    }

    res.status(200).json({ order: results[0] });
  });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
