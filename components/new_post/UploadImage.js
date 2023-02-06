/*
    Should resive:

    - title
    - class name 

*/

import Image from "next/image"

export const UploadImage = (props) => {
    return (
        <div
            className={props.className}
            onClick={props.onClick}
        >
            {props.title}
            <Image
                src='./upload-image.svg'
                alt='upload-arrow'
                width={20}
                height={20}
            />
        </div>
    )
}