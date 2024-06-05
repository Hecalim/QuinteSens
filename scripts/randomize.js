// randomize.js
export function randomizeGalleryItems() {
    const gallery = document.getElementById('gallery');
    const items = Array.from(gallery.getElementsByClassName('gallery__item'));

    // Clear previous classes
    items.forEach(item => {
        item.classList.remove('gallery__item--wide', 'gallery__item--tall');
    });

    // Get a random subset of items for XXL, large, and medium
    const xxlItem = getRandomSubset(items, 1); // One XXL item
    const remainingItems = items.filter(item => !xxlItem.includes(item));
    const wideItems = getRandomSubset(remainingItems, 1); // Two large items
    const tallItems = getRandomSubset(remainingItems.filter(item => !wideItems.includes(item)), 2); // Four medium items

    // Assign classes
    xxlItem.forEach(item => item.classList.add('gallery__item--wide', 'gallery__item--tall'));
    wideItems.forEach(item => item.classList.add('gallery__item--wide'));
    tallItems.forEach(item => item.classList.add('gallery__item--tall'));
}

function getRandomSubset(arr, size) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, size);
}
