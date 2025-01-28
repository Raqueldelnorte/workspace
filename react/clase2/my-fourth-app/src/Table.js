// src/Table.js
import React, { Component } from 'react';
// Componente funcional con arrow function 
const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        </thead>
    );
    };
// Componente funcional con función tradicional
function TableBody() {
    return (
        <tbody>
        <tr>
            <td>Charlie</td>
            <td>Janitor</td>
        </tr>
        <tr>
            <td>Mac</td>
            <td>Bouncer</td>
        </tr>
        </tbody>
    );
    }
    // Componente de clase
    class Table extends Component {
        render() {
            return (
                <table>
                    <TableHeader />
                    <TableBody />
                </table>
            );
        }
    }
    export default Table;
