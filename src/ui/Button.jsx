import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.varient == "primary" ? "blue" : "#bf4774")};
  color: ${(props)=>props.varient == "primary"?"white":"black"};
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;
export default Button;
