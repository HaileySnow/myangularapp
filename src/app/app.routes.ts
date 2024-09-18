import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
{
    path: "landing", 
    component: LandingpageComponent
}, {
    path: "signup",
    component: SignupComponent
}, {
    path: "login",
    component: LoginComponent
}, {
    path: "home",
    component: HomepageComponent
}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
