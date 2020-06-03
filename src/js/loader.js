export default (el, hideLoaderClass) => {
    let loader = document.querySelector(el);
    setTimeout(() => loader.classList.add(hideLoaderClass), 1000);
};

