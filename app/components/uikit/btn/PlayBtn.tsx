import { ButtonHTMLAttributes, FC } from "react";

type PlayBtnType = ButtonHTMLAttributes<HTMLButtonElement> & {};

const PlayBtn: FC<PlayBtnType> = (props) => {
    const { className, ...restProps } = props;
    return (
        <button
            className={`group hover:shadow-[inset_10px_15px_20px_black]   active:shadow-[inset_15px_30px_30px_black]  shadow-[inset_5px_10px_10px_black] focus:shadow-[inset_10px_15px_20px_black] 
            border-t   hover:border-t-transparent      border-b-transparent border-t-indigo-100    border-b  hover:border-b-indigo-100
            duration-300   p-2  ${className}  inline-flex justify-center rounded-full  m-x-auto`}
            {...restProps}
        >
            <svg
                height="175px"
                width="175px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
            >
                <g>
                    <g>
                        <path
                            d="M256,0C114.608,0,0,114.608,0,256s114.608,256,256,256s256-114.608,256-256S397.392,0,256,0z M256,496
			C123.664,496,16,388.336,16,256S123.664,16,256,16s240,107.664,240,240S388.336,496,256,496z"
                        />
                    </g>
                </g>
                <g>
                    <g>
                        <polygon points="189.776,141.328 189.776,370.992 388.672,256.16 		" />
                    </g>
                </g>
            </svg>
        </button>
    );
};

export default PlayBtn;
