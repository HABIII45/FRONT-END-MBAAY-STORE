import {Route,Routes} from 'react-router-dom';
import { EspaceAgronome } from "../pages/EspaceAgronome";
import { EspaceAcheteur } from '../pages/EspaceAcheteur';
import AgronomeConnexion from '../pages/AgronomeConnexion';
import { CreerBoutique } from '../pages/CreerBoutique';
import { Home } from "../pages/Home";
import { RecapBoutique }  from "../pages/RecapBoutique";
import { LocationContactAgronome } from '../pages/InfosAgronome';
import { VerificationInfos } from '../pages/AffichageCompteAgronome';
import { Subscription } from '../pages/ChoixAbonnement';
import { ValidationAbonnement } from '../pages/ValidationAbonnement';
import { IdentiteBoutique } from '../pages/IdentiteBoutique';




export function AppRoutes() {
    return(
        <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/agronome" element={<EspaceAgronome />}/>
        <Route path="/acheteur" element={<EspaceAcheteur />}/>
        <Route path="/connexion" element={<AgronomeConnexion />}/>
        <Route path="/creerBoutique" element={<CreerBoutique />}/>
        <Route path="/recap" element={<RecapBoutique />}/>
        <Route path="/agronome/infos" element={<LocationContactAgronome />}/>
        <Route path="/agronome/infos-profil" element={<VerificationInfos />}/>
        <Route path="/agronome/infos-profil/abonnement" element={<Subscription />}/>
        <Route path="/agronome/infos-profil/abonnementValidation" element={<ValidationAbonnement />}/>
        <Route path="/boutique" element={<IdentiteBoutique />}/>
        




    </Routes>
    </>
    )
}