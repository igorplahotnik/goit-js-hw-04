'use strict';
// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    this.items.push(itemName);
  },
  remove(itemName) {
    this.items = this.items.filter(item => item !== itemName);
  },
};

const invokeInventoryOperation = function (itemName, inventoryAction) {
  console.log(`Invoking ${inventoryAction.name} opeartion on ${itemName}`);
  inventoryAction.call(inventory, itemName);
};

invokeInventoryOperation('Аптечка', inventory.add);
// Invoking add opeartion on Аптечка


console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryOperation('Фильтр', inventory.remove);
// Invoking remove opeartion on Фильтр

console.log(inventory.items); // ['Монорельса', 'Аптечка']