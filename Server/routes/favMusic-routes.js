import express from 'express';
import { addFavirouteMusic } from '../controllers/favoriteMusic-controller';
import { isAuthenticatedUser } from '../middleware/auth';

const favMusicRouter = express.Router();

favMusicRouter.put("/favMusic/add",isAuthenticatedUser,addFavirouteMusic);


export default favMusicRouter;