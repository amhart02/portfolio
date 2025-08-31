import { Router } from 'express';
import programming from '../models/programming.mjs';

const router = Router()

router.get('/', (req, res) => {
    const title = "Programming Projects";
    const h1 = "Programming";
    const h2 = "Alayna Hart";
    const h3 = "Web Designer and Developer";
    const projects = programming;
    res.render('projects', { title, h1, h2, h3, projects });
})

export default router;