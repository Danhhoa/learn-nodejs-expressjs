import {NewsController} from "../app/controllers/NewsController.js";
import express from "express";

const router = express.Router()

const newsController = new NewsController

router.get('/:slug', newsController.show)
router.get('/', newsController.index)

export {router as newsRouter}
