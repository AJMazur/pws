import './Plaintext.css'

const Plaintext = ({
     bodyPt,
     isLeftSided = false
}) => {

    return (
        <div className="plaintext-wrapper">
            <div className="container-fluid offset-1 col-10">
                { isLeftSided ?
                    <div className="plaintext plaintext-left-side">
                        {bodyPt}
                    </div> :
                    <div className="plaintext plaintext-right-side">
                        {bodyPt}
                    </div>
                }
            </div>
        </div>
    )
};

export default Plaintext;