import { Router } from 'express';
import websites from '../models/websites.mjs';
import graphicDesign from '../models/graphicDesign.mjs';

const router = Router();

router.get('/', (req, res) => {
    const title = 'Alayna Hart | Portfolio';
    const h1 = "Alayna Hart";
    const h2 = "Hi I'm";
    const h3 = "Web Designer and Developer";
    
    // Get PerfectDate project from both arrays
    const perfectDateWebsite = websites.find(p => p.title === "PerfectDate");
    const perfectDateFigma = graphicDesign.find(p => p.title === "PerfectDate Figma File");
    
    res.render('index', { title, h1, h2, h3, perfectDateWebsite, perfectDateFigma });
})

export default router;