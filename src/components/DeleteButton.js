import { TrashIcon } from "@primer/octicons-react";

export default function DeleteButton({ id, size, fill, onClick }) {
    return (
        <button id={id} className='icon-btn' onClick={onClick}>
            <TrashIcon size={size} fill={fill} />
        </button>
    );
}