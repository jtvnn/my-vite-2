import styled from 'styled-components';

const MyButton = styled.button`
  background: ${(props) => props.bgcolor};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background 0.2s;
`;

function Button({ onClick, children }) {
    return (
        <div>
            <MyButton type="button" onClick={onClick} bgcolor='#4a5568;'>{children}</MyButton>
        </div>
    );
}

export default Button;

