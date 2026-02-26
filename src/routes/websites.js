import { Router } from 'express';
import websites from '../models/websites.mjs'

const router = Router()

router.get('/', (req, res) => {
    const title = "Websites";
    const h1 = "Websites";
    const h2 = "Alayna Hart";
    const h3 = "Web Designer and Developer"
    const projects = websites
    res.render('projects', { title, h1, h2, h3, projects });
})

router.get('/:id', (req, res) => {
    const title = "Websites";
    const h1 = "Websites";
    const h2 = "Alayna Hart";
    const h3 = "Web Designer and Developer"
    const project = websites.find(p => p.id === parseInt(req.params.id));
    res.render('project', { title, h1, h2, h3, project });
})

export default router;