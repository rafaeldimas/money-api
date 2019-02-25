const router = require('express').Router()
const { User } = require('../models')

router.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(401).json({ message: 'User not found' })
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: 'Incorrect password' })
    }

    return res.json({
      user,
      token: user.generateToken()
    })
  } catch (error) {
    console.log(error)
  }
})

router.post('/register', async (req, res) => {
  const { email } = req.body

  try {
    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ message: 'User already exists' })
    }

    const user = await User.create(req.body)

    return res.json({
      user,
      token: user.generateToken()
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = {
  path: '/auth',
  router
}
