import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboredComponent } from './dashbored/dashbored.component';
import { TableComponent } from './table/table.component';
import { authguardGuard } from './guards/authguard.guard'; 
import { LoansComponent } from './components/loans/loans.component';
import { UsersComponent } from './components/users/users.component';
import { AmountsComponent } from './components/amounts/amounts.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { TansactionsComponent } from './components/tansactions/tansactions.component';
import { UserdashComponent } from './componets/userdash/userdash.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main/main.component';
import { NextduedateComponent } from './components/nextduedate/nextduedate.component';
import { PaymentproofformComponent } from './components/paymentproofform/paymentproofform.component';


export const routes: Routes = [
    // {
    //     path: '',    redirectTo: '/login', pathMatch: 'full' 
    // },
    {
        path:"",component:HomeComponent
    },
    {
        path:"home",component:HomeComponent
    },
    {
        path:"login",component:LoginComponent
    },
    {
        path:"register",component:RegisterComponent, canActivate:[authguardGuard]
    },
    {
        path:"dashboared",component:DashboredComponent
        , canActivate:[authguardGuard]
    },
    {
        path:"userdash",component:UserdashComponent
        , canActivate:[authguardGuard]
    },
    {
        path:"table",component:TableComponent
        , canActivate:[authguardGuard]

    },
    {
        path:"transaction",component:TansactionsComponent
        , canActivate:[authguardGuard]

    },
    {
        path:"loan",component:LoansComponent
        , canActivate:[authguardGuard]

    }
    ,
    {
        path:"user",component:UsersComponent
        , canActivate:[authguardGuard]

    },
    {
        path:"amount",component:AmountsComponent
        , canActivate:[authguardGuard]

    },
    {
        path:"payments",component:PaymentsComponent
        , canActivate:[authguardGuard]

    },
    {
        path:"profile",component:ProfileComponent
        , canActivate:[authguardGuard]

    },
    {
        path:"nextdate",component:NextduedateComponent
        , canActivate:[authguardGuard]

    },
    {
        path:"paympentpf",component:PaymentproofformComponent
        , canActivate:[authguardGuard]

    }
];
