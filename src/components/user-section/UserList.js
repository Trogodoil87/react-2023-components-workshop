import { useState, useEffect } from "react";

import * as userService from "../../Services/UserService";
import { UserActions } from "../../UserActionConstants";

import { UserItem } from "./user-item/UserItem";
import { Details } from "./user-details/Details";
import { UserCreate } from "./user-create/UserCreate";
import { UserEdit } from "./user-edit/UserEdit";
import { Delete } from "./user-delete.js/Delete";



export const UserList = () => {
    const [userAction, setUserAction] = useState({ user: null, action: null });

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(users => setUsers(users))
    }, []);

    function onActionClickHandler(userId, action) {
        userService.getById(userId)
            .then(user => {
                setUserAction({ user, action: action });
            });
    }

    function onDeleteHandler(userId) {
        userService.deleteById(userId)
            .then(setUserAction({ user: null, action: null }));
    }

    function onCreateClickHandler() {
        setUserAction({ user: {}, action: UserActions.Create });
    }

    function closeHandler() {
        setUserAction({ user: null, action: null });
    }

    function onSubmitClickHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const {

            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            ...address
        } = Object.fromEntries(formData);
        const userData = {
            firstName,
            lastName,
            email,
            imageUrl,
            phoneNumber,
            address
        };
        userService.create(userData)
            .then(user => {
                setUsers(state => [...state, user]);
                closeHandler();
            });
    }


    return (
        <div className="table-wrapper">

            {userAction.action == UserActions.Create
                && <UserCreate
                    action={userAction.action}
                    onClose={closeHandler}
                    onSubmitHandler={onSubmitClickHandler}
                />}

            {userAction.action == UserActions.Edit
                && <UserEdit
                    user={userAction.user}
                    action={userAction.action}
                    onClose={closeHandler}
                />}

            {userAction.action == UserActions.Details &&
                <Details
                    user={userAction.user}
                    onClose={closeHandler}
                />}

            {userAction.action == UserActions.Delete &&
                <Delete
                    user={userAction.user}
                    onClose={closeHandler}
                    onDelete={onDeleteHandler}
                />}

            < table className="table" >
                <thead>
                    <tr>
                        <th>
                            Image
                        </th>
                        <th>
                            First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                                className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>
                            Created
                            <svg aria-hidden="true" focusable="false" data-prefix="fas"
                                data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                                </path>
                            </svg>
                        </th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- Table row component --> */}
                    {users.map(user => <UserItem key={user._id} {...user} onActionClick={onActionClickHandler} />)}
                </tbody>
            </table >
            <button onClick={onCreateClickHandler} className="btn-add btn">Add new user</button>
        </div>
    );
}