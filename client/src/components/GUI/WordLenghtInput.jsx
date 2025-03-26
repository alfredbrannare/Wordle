import { MenuItem, Select, FormControl, InputLabel, Typography, FormLabel } from "@mui/material";

export default function WordLengthInput({ length, onChange }) {
    return (
        <FormControl medium>
            <FormLabel sx={{ mb: 1, color: "white", textAlign: "center" }}>
                Guess Word
            </FormLabel>
            <Select
                value={length}
                onChange={onChange}
                label="Word Length"
                id="word-length-input"
                sx={{
                    backgroundColor: "whitesmoke",
                    color: "black",
                    focus: "orange"
                }}
            >
                {["Random", 4, 5, 6, 7, 8].map((num) => (
                    <MenuItem key={num} value={num}>
                        {num} Letters
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}