import React from 'react';

function TablaUsers(props) {
    const { data } = props;
    return (
        <table>
            <thead>
                <td>Usuario</td>
                <td>Nombre</td>
                <td>e-Mail</td>
                <td>Contraseña</td>
            </thead>
            <tbody>
                {
                    data.map(user => {
                        return (
                            <tr>
                                <td>{user.user}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
}

export default TablaUsers;