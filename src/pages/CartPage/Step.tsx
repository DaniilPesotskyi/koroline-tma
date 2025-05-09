import React, {CSSProperties} from "react";
import {motion} from "framer-motion";

import {StepWrap, StepTitle, StepIndicator, StepSubTitle, stepHeadingStyles} from "@/pages/CartPage/styles.ts";
import {Collapse} from "@/components";

interface IStepProps {
    title: string,
    subtitle: string,

    step: number,
    currentStep: number
}

const Step: React.FC<IStepProps> = ({title, subtitle, step, currentStep}) => {
    const status =
        currentStep === step
            ? "active"
            : currentStep < step
                ? "inactive"
                : "complete";

    const stepStyles: CSSProperties = {
        marginLeft: status === "inactive" ? 'auto' : 0
    }

    return (
        <StepWrap
            status={status}
            style={stepStyles}
        >
            <StepIndicator status={status}>
                {status === "complete" ? (
                    <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                    >
                        <motion.path
                            initial={{pathLength: 0}}
                            animate={{pathLength: 1}}
                            transition={{
                                type: "tween",
                                ease: "easeOut",
                                duration: 0.3,
                            }}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                ) : (
                    <>{step + 1}</>
                )}
            </StepIndicator>
            <Collapse
                open={status === 'active'}
                orientation={'horizontal'}
                customStyles={stepHeadingStyles}
            >
                <StepTitle>{title}</StepTitle>
                <StepSubTitle>{subtitle}</StepSubTitle>
            </Collapse>
        </StepWrap>
    )
}

export default Step