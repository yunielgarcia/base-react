export default function Tabs({buttons, children, ButtonsContainer = "menu"}) {
    // const ButtonsContainer = buttonsContainer;
    // todo: ButtonsContainer is a placeholder for any tag element serving as a wrapper. In this case defaults to menu.
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    );
};
