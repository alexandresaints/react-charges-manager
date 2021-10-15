import {Category} from '../types/Category'

export const categories: Category = {
    late:{title: 'Atrasado', color: 'red', expense: true},
    payed:{title: 'Pago', color: 'green', expense: false},
    to_expire:{title: 'A Vencer', color: '#000', expense: true},
}