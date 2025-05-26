import {motion, Variants} from "framer-motion";

interface IPathProps {
    d?: string
    variants: Variants
    transition?: { duration: number }
}

const Path = (props: IPathProps) => (
    <motion.path
        fill="transparent"
        strokeWidth="2"
        stroke="var(--tg-theme-text-color)"
        strokeLinecap="round"
        {...props}
    />
)

export default Path;