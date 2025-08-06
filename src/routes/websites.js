import { Router } from 'express';
//import website array

const router = Router()

router.get('/', (req, res) => {
    const title = "Websites";
    const h1 = "Alayna Hart";
    const h2 = "Websites";
    const h3 = "Web Designer and Developer"
    res.render('projects', { title, h1, h2, h3 });
})

router.get('/:id', (req, res) => {
    //do this
})

export default router;