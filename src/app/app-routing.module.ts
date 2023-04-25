import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) }, 
{ path: '', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'forgot-password', loadChildren: () => import('./forgot-password/forgotPassword.module').then(m => m.ForgotPasswordModule) },
{ path: 'reset-password/:token', loadChildren: () => import('./reset-password/resetPassword.module').then(m => m.ResetPasswordModule) },
{ path: 'verify-email/:token', loadChildren: () => import('./verify/verify.module').then(m => m.VerifyModule) },
{ path: 'payment/:token', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
{ path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },
{ path: 'transaction-history', loadChildren: () => import('./transactionhistory/transactionhistory.module').then(m => m.TransactionhistoryModule) },
{ path: 'packages', loadChildren: () => import('./packages/packages.module').then(m => m.PackagesModule) },
{ path: 'rebuy', loadChildren: () => import('./rebuy/rebuy.module').then(m => m.RebuyModule) },
{ path: 'minipack', loadChildren: () => import('./minpack/minipack.module').then(m => m.MinipackModule) },
{ path: 'direct-team', loadChildren: () => import('./leg/leg.module').then(m => m.LegModule) },
{ path: 'passive-income', loadChildren: () => import('./passive/passive.module').then(m => m.PassiveModule) },
{ path: 'community-income', loadChildren: () => import('./community/community.module').then(m => m.CommunityModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
