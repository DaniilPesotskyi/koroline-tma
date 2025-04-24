import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";

import {CartIcon, FaqIcon, ShoppingBagIcon} from "@/icons";

import {Drawer, IconButton, IconWrapper, List, Path} from "@/components";
import {
    contactsListStyles,
    Heading,
    NavigationLink,
    navListStyles, StyledLink, StyledLoveText, SubTitle,
    Title,
    toggleButtonStyles,
    wrapperStyles
} from "@/layout/Sidebar/styles.ts";

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.body.classList.add('no-scroll')
        } else {
            document.body.classList.remove('no-scroll')
        }
    }, [open]);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <>
            <IconButton onClick={toggle} buttonCss={toggleButtonStyles(open)}>
                <motion.svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    animate={open ? "open" : "closed"}
                >
                    <Path
                        variants={{
                            closed: {d: "M 2 2.5 L 20 2.5"},
                            open: {d: "M 3 16.5 L 17 2.5"},
                        }}
                    />
                    <Path
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: {opacity: 1},
                            open: {opacity: 0},
                        }}
                        transition={{duration: 0.1}}
                    />
                    <Path
                        variants={{
                            closed: {d: "M 2 16.346 L 20 16.346"},
                            open: {d: "M 3 2.5 L 17 16.346"},
                        }}
                    />
                </motion.svg>
            </IconButton>

            <Drawer
                open={open}
                onClose={toggle}
                position={"left"}
                customStyles={wrapperStyles}
            >
                <Heading>KOROLINE</Heading>

                <Title>Меню</Title>
                <List customStyles={navListStyles}>
                    <NavigationLink to={'/'}>
                        <IconWrapper>
                            <ShoppingBagIcon/>
                        </IconWrapper>
                        Каталог
                    </NavigationLink>
                    <NavigationLink to={'/help'}>
                        <IconWrapper>
                            <FaqIcon/>
                        </IconWrapper>
                        Питання
                    </NavigationLink>
                    <NavigationLink to={'/cart'}>
                        <IconWrapper>
                            <CartIcon/>
                        </IconWrapper>
                        Кошик
                    </NavigationLink>
                </List>
                <Title>Контакти</Title>
                <SubTitle>Відділ продажу</SubTitle>
                <List customStyles={contactsListStyles}>
                    <StyledLink>+38 (096) 000 00 00</StyledLink>
                    <StyledLink>example@gmail.com</StyledLink>
                </List>
                <SubTitle>Співпраця</SubTitle>
                <List customStyles={contactsListStyles}>
                    <StyledLink>example@gmail.com</StyledLink>
                </List>
                <SubTitle>Технічний відділ</SubTitle>
                <List customStyles={contactsListStyles}>
                    <StyledLink>example@gmail.com</StyledLink>
                </List>

                <StyledLoveText>Made with ♥️ | 1.0</StyledLoveText>
            </Drawer>
        </>
    )
}

export default Sidebar