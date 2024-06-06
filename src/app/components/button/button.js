import "./button.css"

export const Button = ({btnColor='#fff', btnBackground='#403c3c', onClick, text='null'}) => {
    return (
        <button className="button" style={{color: btnColor, background: btnBackground}} onClick={onClick}>
            {text}
        </button>
    )
} 