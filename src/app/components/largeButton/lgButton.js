import "./lgButton.css"

export const LgButton = ({btnColor='#fff', btnBackground='#403c3c', onClick, text='null'}) => {
    return (
        <button className="LgButton" style={{color: btnColor, background: btnBackground}} onClick={onClick}>
            {text}
        </button>
    )
} 