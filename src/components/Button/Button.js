import "./button.css";

export const Button = (props) => {
  const { children, variant = 'primary', defaultButton = false, ...rest } = props;
  const buttonType = ["primary", "secondary", "transparent"];
  const className = buttonType.find((className) => className === variant)
  
  if(defaultButton) return <button>{children}</button>

  return (
    <button className={`btn ${className}`} {...rest}>
      {children}
    </button>
  );
};
