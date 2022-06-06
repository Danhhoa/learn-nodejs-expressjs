import {SiteController} from "../app/controllers/SiteController.js";

import express from "express";

const router = express.Router()

const siteController = new SiteController

router.get('/search', siteController.search)
router.get('/', siteController.index)

export {router as sitesRouter}

