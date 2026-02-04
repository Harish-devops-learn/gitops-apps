const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/health', (req, res) => res.json({ status: 'OK', service: 'backend' }));
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 499 }
  ]);
});
app.get('/api/cart', (req, res) => res.json({ items: [], total: 0 }));

app.listen(port, () => console.log(`Backend on port ${port}`));