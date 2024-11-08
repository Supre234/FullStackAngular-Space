import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { InnovationConsultingComponent } from './components/innovation/innovation.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup',component:SignupComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'investments',component:InvestmentsComponent},
    {path:'innovation',component:InnovationConsultingComponent},
];
