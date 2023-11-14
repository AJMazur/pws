import './Plaintext.css'

const Plaintext = ({
     bodyPt,
     isLeftSided = false
}) => {

    return (
        <div className="plaintext-wrapper">
            { isLeftSided ?
                <div className="plaintext-left-side">
                    {bodyPt}
                </div> :
                <div>
                    {bodyPt}
                </div>
            }
        </div>
    )
};

export default Plaintext;