require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

// 配置邮件发送器
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('All fields are required');
  }

  // Demo version: Instead of sending an email, we'll just log the data
  console.log('Received contact form submission:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  // Simulate a delay before responding
  setTimeout(() => {
    res.status(200).send('Message received (Demo: No email sent)');
  }, 1000);
});

// 服务静态文件
app.use('/', expressStaticGzip(path.join(__dirname, '../client/build'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz']
}));

// 处理所有其他路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
