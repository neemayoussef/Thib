import { Link} from "react-router-dom";

export function ConfirmDialog({open, onConfirm, onCancel}) {

    return <>
    <dialog open={open} id="dialog" >
        <div className="flex flex-col items-center justify-center" >
            <p>Do you want to leave the lobby?</p>
            <div className="flex items-center justify-center gap-[25%]">
                <Link id="border" className="px-[10%] py-[10%]" onClick={onConfirm} to="/invite">YES</Link>
                <button id="border" className="px-[19%] py-[10%]" onClick={onCancel}>NO</button>
            </div>
        </div>
    </dialog>
    </>
}