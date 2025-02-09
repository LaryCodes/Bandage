interface ButtonProp{
    value?:string;
    rightIcon?:React.ReactElement
}

const Button = (props:ButtonProp) => {
  return (
    <button className="px-7 py-3 bg-primary text-white sm:text-sm text-xs rounded-md flex items-center justify-between gap-3">{props.value}{props.rightIcon}</button>
  )
}
export default Button