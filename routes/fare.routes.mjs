import { Router } from 'express';
import * as FareController from '../controllers/fare.controller.mjs';

const fareRoute = new Router();

fareRoute.route('/fare').get(FareController.totalFare);

export default fareRoute;
