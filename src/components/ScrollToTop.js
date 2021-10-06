import React, { useState, useEffect } from 'react';
import '../styles/components/ScrollToTop.scss';
import { useWindowScroll } from 'react-use';

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [pageYOffset]);

    if (!active) {
        return false;
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="scroll" onClick={scrollToTop}>
            UP<i className="scroll__icon"></i>
        </div>
    );
}

export default ScrollToTop;