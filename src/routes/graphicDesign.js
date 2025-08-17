import { Router } from 'express';
import graphicDesign from '../models/graphicDesign.mjs'

const router = Router()

router.get('/', (req, res) => {
    const title = "Graphic Design Projects";
    const h1 = "Alayna Hart";
    const h2 = "Graphic Design";
    const h3 = "Web Designer and Developer"
    res.render('projects', { title, h1, h2, h3 });
})

router.get('/:id', (req, res) => {
    //do this
})

export default router;