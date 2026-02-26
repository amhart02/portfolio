import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    const title = 'Alayna Hart | Portfolio';
    const h1 = "Alayna Hart";
    const h2 = "Hi I'm";
    const h3 = "Web Designer and Developer"
    res.render('index', { title, h1, h2, h3 });
})

export default router;