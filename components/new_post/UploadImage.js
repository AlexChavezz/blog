/*
    Should resive:

    - title
    - class name 

*/

export const UploadImage = (props) => {
    return (
        <div
            className={props.className}
            onClick={props.onClick}
        >
            {props.title}
            <img
                src='./upload-image.svg'
                alt='upload-arrow'
                style={{ width: 20, height: 20 }}
            />
        </div>
    )
}