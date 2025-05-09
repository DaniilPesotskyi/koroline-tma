import React, {useEffect, useState} from "react";
import {AnimatePresence, motion, Variants} from "framer-motion";

import {Container} from "@/components";

import {useCart} from "@/context/CartContext.tsx";

import Step from "@/pages/CartPage/Step.tsx";
import ItemsList from "@/pages/CartPage/ItemsList.tsx";
import Form from "@/pages/CartPage/Form.tsx";
import Accepting from "@/pages/CartPage/Accepting.tsx";

import {Steps} from "@/pages/CartPage/styles.ts";
import {useTelegram} from "@/hooks";

export interface ICartStepProps {
    onNext: () => void;
    onPrev: () => void;
}

const steps: React.FC<ICartStepProps>[] = [ItemsList, Form, Accepting]

const stepsVariants: Variants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.2},
    },
    exit: {
        x: -100,
        opacity: 0,
        transition: {duration: 0.2},
    },
};

const ItemsStep = ({activeStep}: { activeStep: number }) => {
    const {items} = useCart()

    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <Step step={0} currentStep={activeStep} title={'Кошик'} subtitle={`${items.length} товар на суму ${total} ₴`}/>
    )
}


const CartPage: React.FC = () => {
    const {showBackButton, hideBackButton, showMainButton, hideMainButton} = useTelegram()
    const [activeStep, setActiveStep] = useState(0)

    const StepComponent = steps[activeStep];

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }

    const handlePrev = () => {
        setActiveStep(activeStep - 1)
    }

    useEffect(() => {
        showBackButton()
        showMainButton()

        return () => {
            hideMainButton()
            hideBackButton()
        }
    }, []);

    return (
        <Container>
            <Steps>
                <ItemsStep activeStep={activeStep}/>
                <Step step={1} currentStep={activeStep} title={'Оформлення'} subtitle={'Заповніть всі необхідні поля'}/>
                <Step step={2} currentStep={activeStep} title={'Підтвердження'} subtitle={'Перевірте ваше замовлення'}/>
            </Steps>

            <AnimatePresence mode={'wait'}>
                <motion.div
                    key={activeStep}
                    variants={stepsVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <StepComponent onNext={handleNext} onPrev={handlePrev}/>
                </motion.div>
            </AnimatePresence>
        </Container>
    )
}

export default CartPage