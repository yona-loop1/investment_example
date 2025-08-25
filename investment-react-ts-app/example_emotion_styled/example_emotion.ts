/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

interface ButtonProps {
    primary?: boolean;
}

const Button = styled.button<ButtonProps>`
    background-color: ${(props) => (props.primary ? "blue" : "gray")};
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.primary ? "darkblue" : "darkgray")};
    }
`;

// const App = () => (
//     <div>
//         <Button primary>Primary Button</Button>
//         <Button>Secondary Button</Button>
//     </div>
// );

