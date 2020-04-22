let removeLoader = (el, hideLoaderClass) => {
    let loader = document.querySelector(el);

    setTimeout(() => loader.classList.add(hideLoaderClass), 1000);
};

module.exports = removeLoader;