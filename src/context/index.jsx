import React, { useEffect, useMemo, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const App = React.createContext({});

export function usePangeaContext() {
    return React.useContext(App);
}

function reducer(state, { type, payload }) {
    return {
        ...state,
        [type]: payload,
    };
}

const INIT_STATE = {
    user: null,
    project: null,
};

const colorLists = {
    success: {
        color: '#00A843',
    },
    warning: {
        color: '#FCA004',
    },
    danger: {
        color: '#A80000',
    }
}

export default function Provider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, INIT_STATE);

    const makeToast = (type, title, content) => {
        toast.custom((t) => (
            <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} shadow-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`} style={{ borderRadius: '8px' }}>
                <div className="px-[20px] py-[20px] flex flex-row gap-[10px] border-1 border-[#DEE2E6]" style={{ minWidth: '300px', backgroundColor: '#FFF', borderRadius: '8px' }}>
                    <div className='flex-1 flex flex-col gap-[10px]'>
                        <div style={{ color: colorLists[type].color }}
                            className={`text-[20px] helvetica-medium`}
                        >{title}</div>

                        <p className="text-[14px] helvetica-medium" style={{ color: "#666666" }}>
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        ))
    }

    const sessionClose = () => {
        localStorage.clear();
        document.location.href = '/login';
    }

    useEffect(() => {

        (async () => {

            let user = JSON.parse(localStorage.getItem('user'));

            let project = JSON.parse(localStorage.getItem('project'));
            dispatch({
                type: "project",
                payload: project
            })

            if (user) {
                
                // const res = await axios.post(process.env.REACT_APP_BASE_URL+'login', {
                //     authType: 0, email: user.email, password: user.password, role: user.role
                // })

                // let token = localStorage.getItem('token');
                // axios.defaults.headers.common['x-auth-token'] = token;

                // console.log(`token res::`, res.data);

                // dispatch({
                //     type: "user",
                //     payload: res.data.user
                // })

                // localStorage.setItem('token', res.data.token);
            }

        })();

    }, [])

    return (
        <App.Provider
            value={React.useMemo(
                () => [
                    state, { dispatch, makeToast, sessionClose }
                ],
                [
                    state,
                    makeToast,
                    dispatch,
                    sessionClose
                ]
            )}
        >
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            {
                children
            }
        </App.Provider>
    )
}