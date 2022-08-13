import {GotoClass} from "../../../ActionChip";
import {motion, useScroll} from "framer-motion";
import {useEffect, useState} from "react";

const BottomButton = () => {
    const {scrollY} = useScroll();
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScroll(latest);
        })
    }, [])

    return (
        <motion.div layout transition={{duration: 0.03}} className={'bottom-0 w-full pb-3 bg-white border-1 border-neutral-200 ' + (scroll > 570 ? 'fixed' : 'hidden')}>
            <GotoClass/>
        </motion.div>
    )
}

export default BottomButton;