// services.js

export function activateDiv(serviceDivs, imageElement, index) {
    serviceDivs.forEach((div, i) => {
        if (i === index) {
            div.classList.add("active");
            imageElement.src = div.getAttribute("data-img-src");
            imageElement.alt = div.getAttribute("data-img-alt");
        } else {
            div.classList.remove("active");
        }
    });
}

export function startInterval(serviceDivs, imageElement, intervalId, currentIndex) {
    return setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % serviceDivs.length;
        activateDiv(serviceDivs, imageElement, currentIndex.value);
    }, 6000);
}
