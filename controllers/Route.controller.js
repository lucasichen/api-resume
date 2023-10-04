const Route = require('../models/routes')

exports.getRoutes = async (req, res) => {
    try {
        const routes = await Route.find()
        res.json(routes)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.createRoute = async (req, res) => {
    const route = new Route({
        description : req.body.description,
        url: req.body.url,
    })

    try {
        const savedRoute = await route.save()
        res.status(200).json(savedRoute)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}