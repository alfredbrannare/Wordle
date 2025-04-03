import { useState } from "react";

export default function WordLengthInput({ currentLength, onLengthChange }) {
    const [localLength, setLocalLength] = useState(currentLength);

    return (
        <div className="flex flex-col items-center justify-center my-4 form-control w-full max-w-xs">
            <label htmlFor="word-length" className="label">
                Choose length
            </label>
            <input
                type="number"
                id="word-length"
                className="input input-bordered border w-full max-w-xs text-center my-1"
                value={localLength}
                onChange={(e) => {
                    const newLength = parseInt(e.target.value, 10) || 0;
                    setLocalLength(newLength);
                    onLengthChange(newLength);
                }}
            />
        </div>
    );
}
