const getStoredDonatedItem = () => {
    const storedDonatedItem = localStorage.getItem('donated-item');
    if (storedDonatedItem) {
        return JSON.parse(storedDonatedItem);
    }
    else {
        return [];
    }
}

const setDonatedItem = id => {
    const storedDonatedItem = getStoredDonatedItem();
    const exists = storedDonatedItem.find(itemId => itemId === id);
    if (!exists) {
        storedDonatedItem.push(id);
        localStorage.setItem('donated-item', JSON.stringify(storedDonatedItem));
    }
    
}

export {getStoredDonatedItem, setDonatedItem}