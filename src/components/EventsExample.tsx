import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>("")
    const [drag, setDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const saveBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        console.log(inputRef.current?.value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log("DRAG");

    }
    const dragWithPreventHendler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(true)

    }
    const leaveHendler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(false)
        console.log("DROP");

    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDrag(false)

    }
    return (
        <div>
            <input value={value}
                   type="text"
                   onChange={changeInput}
                   placeholder="control"
            />
            <input ref={inputRef}
                type="text"
                   placeholder="Dont Control"
            />
            <button onClick={saveBtn}>
                Save
            </button>

            <div draggable
                 style={{width:'200px', height:'200px', background:"red"}}
                 onDrag={dragHandler}

            />
            <div onDrop={dropHandler}
                 onDragLeave={leaveHendler}
                 onDragOver={dragWithPreventHendler}
                style={{width:'200px', height:'200px', background: drag ? "yellow" : "red", marginTop:"15px"}}/>
        </div>
    )
};

export default EventsExample;