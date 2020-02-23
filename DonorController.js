const Donor = require("./models/donor")

module.exports = {
    async index(req, res) {
        const donors = await Donor.find()

        return res.render("index.html", { donors })
    },

    async store(req, res) {
        const { name, email, blood } = req.body

        if (!name || !email || !blood) {
            return res.send("Todos os campos DEVEM serem preenchidos.")
        }

        await Donor.create({
            name,
            email,
            blood,
        }).then(() => { console.log("Usuário cadastrado com sucesso!") })

        return res.redirect("/")
    }
}
