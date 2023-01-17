const express = require('express')
const path = require('path')
const router = express.Router()
const comment = require('../controllers/comment.controller')
router.get('/api/comment', comment.get)
router.post('/api/comment', comment.post)
router.put('/api/comment/:id', comment.update)
router.delete('/api/comment/:id', comment.delete)

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../view/index.html'))
})
router.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../../view/style.css'))
})
router.get('/logo', (req, res) => {
    res.sendFile(path.join(__dirname, '../../view/assets/logo.png'))
})

module.exports = router