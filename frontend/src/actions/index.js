
export const ORDER_BY = 'ORDER_BY';
export const GET_ALL_POST = 'GET_ALL_POST';


export function orderBy({orderoption}) {
    return {
        type: ORDER_BY,
        orderoption,

    }
}

export function getAll({posts}) {

    return {
        type: GET_ALL_POST,
        posts
    }

}

