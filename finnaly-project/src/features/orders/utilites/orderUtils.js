export function processOrders(orders, waiters, tables, dishes) {
    return orders.map(order => {
        const matchingWaiter = waiters.find(waiter => waiter.id === order.waiterId);
        const matchingTable = tables.find(table => table.id === order.tableId);
        const matchingDishes = order.dishes.map(orderDish => {
            const foundDish = dishes.find(dish => dish.id === orderDish.dishId);
            return {
                ...orderDish,
                name: foundDish.name,
                price: foundDish.price,
                total: foundDish.price * orderDish.count
            };
        });

        return {
            ...order,
            firstName: matchingWaiter.firstName,
            numberTable: matchingTable.number,
            matchingDishes,
            total: matchingDishes.reduce((total, dish) => total + dish.total, 0)
        };
    });
}