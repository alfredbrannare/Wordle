import { Checkbox, FormControl, FormLabel } from "@mui/material";

export default function UniqueWordInput({ isChecked, onChange }) {
    return (
        <FormControl component="fieldset">
            {/* Label Above the Checkbox */}
            <FormLabel sx={{ mb: 1, color: "white", textAlign: "center" }}>
                Unique Word
            </FormLabel>
            <Checkbox
                checked={isChecked}
                onChange={onChange}
                color="primary"
            />
        </FormControl>
    );
}
