const {Usuario} = require('../../config/db.js');

module.exports = async (req, res) => {

    const { id } = req.params;

    try {

        await Usuario.destroy({
            where: {
                id
            }
        })

        return res.status(200).json({deleted: true});
        
    } catch (error) {
        return res.send(error)
    }

}