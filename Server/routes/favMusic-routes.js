import express from 'express';
import { addFavirouteMusic, removeFavirouteMusic,getFavirouteMusic} from '../controllers/favoriteMusic-controller';
import { isAuthenticatedUser } from '../middleware/auth';

const favMusicRouter = express.Router();

favMusicRouter.put("/favMusic/add",addFavirouteMusic);
favMusicRouter.put("/favMusic/get",getFavirouteMusic);

favMusicRouter.put("/favMusic/delete",removeFavirouteMusic);


export default favMusicRouter;