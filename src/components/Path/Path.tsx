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
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
)

export default Path;