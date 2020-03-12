import {Action} from '@ngrx/store';
import {createAction} from '@ngrx/store';
import {IUsers} from '../../interface';

export const getUsers = createAction(
'[Users List Service Component] Load Users',
)


