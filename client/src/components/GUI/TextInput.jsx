import { TextField, FormControl, FormLabel } from "@mui/material";

export default function TextInput({ value, onChange }) {
    return (
        <FormControl>
            <FormLabel sx={{ mb: 1, color: "white", textAlign: "center" }}>
                Guess Word
            </FormLabel>
            <TextField
                value={value}
                onChange={onChange}
                variant="filled"
                inputProps={{ min: 0, style: { textAlign: "center", color: "black" } }}
                sx={{
                    width: "20rem",
                    textAlign: "center",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "5px",
                }}
            />
        </FormControl>
    );
}
