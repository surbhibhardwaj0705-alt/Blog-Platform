import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { PostList } from './components/post-list/post-list';
import {PostForm} from './components/post-form/post-form';
import { EditPost } from './edit-post/edit-post';

export const routes: Routes = [
    {
        path: '',
        component: PostList
    },

    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'post-form',
        component: PostForm
    },
    {
    path: 'edit-post/:id',
    component: EditPost
    }
];
