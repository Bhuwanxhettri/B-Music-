import express from 'express';
import { addFavirouteMusic, removeFavirouteMusic,getFavirouteMusic} from '../controllers/favoriteMusic-controller';
import { isAuthenticatedUser } from '../middleware/auth';

const favMusicRouter = express.Router();

favMusicRouter.put("/favMusic/add",addFavirouteMusic);
favMusicRouter.put("/favMusic/delete",removeFavirouteMusic);
favMusicRouter.put("/favMusic/get",getFavirouteMusic);


export default favMusicRouter;