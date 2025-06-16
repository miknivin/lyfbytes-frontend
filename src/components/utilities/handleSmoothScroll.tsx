const handleSmoothScroll = (e: React.MouseEvent<HTMLLIElement | HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ behavior: 'smooth', top: 0 });
};

export default handleSmoothScroll;