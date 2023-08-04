import { BehaviorSubject, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, delay, map } from 'rxjs/operators';

const initialState = {
  loading: false,
  users: [],
};
let state = initialState;

let subject: any = new BehaviorSubject(initialState);

subject.next({ ...state, loading: true });

// user list limit
let limitUsersValue = 5;

let setLimitUsers = (limit) => {
  console.log(limit, 'service');
  limitUsersValue = limit;
  getUsers();
};

// selected user

let selectedUser$ = new BehaviorSubject({});

function SelectedUser() {
  return { getSelectedUser, setSelectedUser };
}

const getSelectedUser = () => {
  return selectedUser$.asObservable();
};

const setSelectedUser = (user) => {
  selectedUser$.next(user);
  console.log(user, 'service');
};

function getUsers() {
  ajax
    .getJSON(`https://randomuser.me/api/?results=${limitUsersValue}`)
    .pipe(
      map(({ results }) => {
        subject.next({ ...state, loading: false, users: results });
      }),
      catchError(() => subject.next({ ...state, loading: false }))
    )
    .subscribe();
}

getUsers();

export default {
  initialState,
  subscribe: (setState) => subject.subscribe(setState),
  setLimitUsers,
  SelectedUser,
};
