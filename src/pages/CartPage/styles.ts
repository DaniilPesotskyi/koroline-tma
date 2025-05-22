import styled, {css} from "styled-components";

export const containerStyles = css`

`

export const Steps = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 20px 0
`

// Step

interface StepStatusType {
    status: 'inactive' | 'active' | 'complete'
}

export const StepWrap = styled.div<StepStatusType>`
    display: flex;
    align-items: center;
`

export const StepIndicator = styled.div<StepStatusType>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 30px;
    height: 30px;

    border-radius: 50%;

    font-size: 20px;

    ${({status}) => status === 'active' && css`
        background-color: var(--active-step-bg-color);
        color: var(--active-step-color);
    `}
    ${({status}) => status === 'inactive' && css`
        background-color: var(--inactive-step-bg-color);
        color: var(--inactive-step-color);
    `}
    ${({status}) => status === 'complete' && css`
        background-color: var(--complete-step-bg-color);
        color: var(--complete-step-color);
    `}
    & > svg {
        width: 15px;
        height: 15px;
    }
`

export const stepHeadingStyles = css`
    margin-left: 10px;
`

export const StepTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
`

export const StepSubTitle = styled.p`
    font-size: 13px;
    color: #515151;
`


// List

// Form

export const InputsGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin-bottom: 20px;
`

export const InputsGroupLabel = styled.h3`
    margin: 0 0 5px 10px;

    font-size: 13px;
    font-weight: 400;
    color: #9D9D9D;
`

export const alertStyles = css`
    margin-bottom: 20px;
`

// Accepting

export const AcceptingWrap = styled.div`
    padding: 10px;
    margin-bottom: 10px;

    border-radius: var(--border-radius);
    background-color: #ffffff;
`

export const OrderNumber = styled.h3`
    font-size: 18px;
    font-weight: 500;
`

export const AcceptingList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const AcceptingItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AcceptingLabel = styled.span`
    font-size: 14px;
    color: #b2b2b2;
`
export const AcceptingValue = styled.span`
    font-size: 16px
`

export const OrderTotalPriceLabel = styled.p`
    font-size: 20px;
    font-weight: 500;
`

export const OrderTotalPriceValue = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: var(--price-color);

`

// Loader

export const orderLoaderDrawerStyles = css`
    width: 100%;
    height: 90%;
    
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`

export const OrderLoaderWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    height: 100%;
`

export const SuccessMessage = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #004B2F;
    text-align: center;
`

export const ErrorMessage = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #910606;
    text-align: center;
`

export const StyledExitButton = styled.button`
    padding: 14px 25px;
    margin-bottom: 40px;

    border: 0;
    border-radius: var(--border-radius);
    background-color: transparent;

    font-size: 18px;
    color: #7a2b2b;
`

export const StyledContinueButton = styled.button`
    padding: 14px 25px;

    border: 0;
    border-radius: var(--border-radius);
    background-color: #1a5e05;

    font-size: 18px;
    color: #ffffff;
`