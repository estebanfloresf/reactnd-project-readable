export const ORDER_BY = 'ORDER_BY';


export function orderBy ({ orderoption }) {
  return {
    type: ORDER_BY,
    orderoption,

  }
}

