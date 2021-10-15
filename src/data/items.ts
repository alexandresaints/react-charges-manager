import {Item} from '../types/Item'
export const items: Item[] = [
    {date: new Date(2021, 9, 6), category: 'late', title: 'João Henrique', value: 1500.00},
    {date: new Date(2021, 9, 12), category: 'payed', title: 'Mario Albuquerque', value: 1750.00},
    {date: new Date(2021, 9, 27), category: 'payed', title: 'Alexandre Santos', value: 4500.00},
    {date: new Date(2021, 9, 15), category: 'to_expire', title: 'Gabriela Silva', value: 297},
    {date: new Date(2021, 9, 30), category: 'payed', title: 'Kamilla Ribeiro', value: 2300.00},
    {date: new Date(2021, 9, 25), category: 'payed', title: 'Lucas Souza', value: 1800.00},

    {date: new Date(2021, 10, 21), category: 'payed', title: 'Aline Vilela', value: 450},
    {date: new Date(2021, 10, 17), category: 'late', title: 'Felipe Vieira', value: 4900.00},
    {date: new Date(2021, 10, 12), category: 'payed', title: 'Sofia Monteiro', value: 2700.00},
    {date: new Date(2021, 10, 14), category: 'payed', title: 'Ricardo Meneghel', value: 125},

    {date: new Date(2021, 11, 12), category: 'payed', title: 'Bonieky Lacerda', value: 1950.00},
    {date: new Date(2021, 11, 9), category: 'to_expire', title: 'Igor Oliveira', value: 5900.00},
    {date: new Date(2021, 11, 28), category: 'payed', title: 'Diego Fernandes', value: 2200.25},
    {date: new Date(2021, 11, 23), category: 'to_expire', title: 'Mayk Britto', value: 125},
    {date: new Date(2021, 11, 22), category: 'late', title: 'Danielle Ribeiro', value: 350.50},
]