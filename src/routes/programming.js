import { Router } from 'express';
//import programming array

const router = Router()

router.get('/', (req, res) => {
    const title = "Programming Projects";
    const h1 = "Alayna Hart";
    const h2 = "Programming";
    const h3 = "Web Designer and Developer"
    res.render('projects', { title, h1, h2, h3 });
})

export default router;