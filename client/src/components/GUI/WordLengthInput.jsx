import { useState } from "react";

export default function WordLengthInput({ currentLength, onLengthChange }) {
    const [localLength, setLocalLength] = useState(currentLength);

    return (
        <div className="flex flex-col items-center justify-center my-4 form-control w-full max-w-xs">
            <label htmlFor="word-length" className="label text-success">
                Choose length
            </label>
            <input
                type="number"
                id="word-length"
                className="input input-bordered border w-full max-w-xs text-center my-1 focus:shadow-[0_1px_15px_rgba(0,211,187,0.31)] hover:shadow-[0_1px_15px_rgba(0,211,187,0.31)]"
                value={localLength}
                min={0}
                max={25}
                onChange={(e) => {
                    const newLength = parseInt(e.target.value, 10) || 0;
                    setLocalLength(newLength);
                    onLengthChange(newLength);
                }}
            />
        </div>
    );
}
