const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('./models/User');

router.post(
  '/',
  [
    check('firstname', 'Name is required').not().isEmpty(),
    check('lastname', 'Name is required').not().isEmpty(),
    check('branch', 'Please enter your branch').not().isEmpty(),
    check('sem', 'Enter your semester').not().isEmpty(),
    check('email', 'Please include a valide email').isEmail(),
    check(
      'password',
      'Please enter your password with at least 8 characters'
    ).isLength({ min: 8 }),
    check('studentId', 'Please enter your clg Id').not().isEmpty(),
    check('clgname', 'Collage Name is reuired').not().isEmpty(),
    check('contactno', 'Please enter valid number').isLength(10),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstname,
      lastname,
      branch,
      sem,
      email,
      password,
      studentId,
      clgname,
      contactno,
    } = req.body;

    try {
      //see if user exists
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      user = new User({
        firstname,
        lastname,
        branch,
        sem,
        email,
        password,
        studentId,
        clgname,
        contactno,
      });
      //encrypt password
      const salt = await bcrypt.genSalt(8);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
