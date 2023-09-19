import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const animals = [
    {name: '🐯', isMammal: true, lastName: 'Tiger', id: 1},
    {name: '🐻', isMammal: true, lastName: 'Bear', id: 2},
    {name: '🐶', isMammal: true, lastName: 'Dog', id: 3},
    {name: '🐱', isMammal: true, lastName: 'Cat', id: 4},
    {name: '🐷', isMammal: true, lastName: 'Pig', id: 5},
    {name: '🐸', isMammal: false, lastName: 'Frog', id: 6},
    {name: '🐵', isMammal: true, lastName: 'Monkey', id: 7},
];

const Animal = ({animal}) => (
    <>
        <tr>
            <td>{animal.name}</td>
            <td>{animal.lastName}</td>
            <td>{animal.isMammal.toString()}</td>
        </tr>
    </>
)

const Form = () => {
    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id='name'/>

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id='lastName'/>

            <button type="submit">Submit</button>
        </form>
    )
}

const List = ({animals}) => {
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Is mammal</th>
            </tr>
            </thead>
            <tbody>
            {animals}
            </tbody>
        </table>
    )
}

root.render(
    <>
        <Form/>
        <List animals={animals.map(animal => <Animal key={animal.id} animal={animal}/>)}/>

    </>
)


