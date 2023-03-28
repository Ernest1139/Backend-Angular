const { Router } = require('express');
const router = Router();

// Raiz http://localhost/
router.get('/', (req, res) => {
    res.json({
        "Titulo" : "Api Tienda"
    });
});

module.exports = router;

