import { Router } from 'express';
import graphicDesign from '../models/graphicDesign.mjs'

const router = Router()

router.get('/', (req, res) => {
    const title = "Graphic Design Projects";
    const h1 = "Graphic Design";
    const h2 = "Alayna Hart";
    const h3 = "Web Designer and Developer";
    const projects = graphicDesign;
    res.render('projects', { title, h1, h2, h3, projects });
})

router.get('/:id', (req, res) => {
    const title = "Graphic Design Projects";
    const h1 = "Graphic Design";
    const h2 = "Alayna Hart";
    const h3 = "Web Designer and Developer";
    const project = graphicDesign.find(project => project.id === parseInt(req.params.id))
    res.render('project', { title, h1, h2, h3, project }) 
})

export default router;