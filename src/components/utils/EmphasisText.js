import { Chip } from "@mui/material"

const EmphasisText = ({ text }) => {


    return (

        <>
        <Chip clickable sx={{borderRadius:'10px', fontFamily:'monospace', margin:'0 5px'}} variant="outlined" label={text}></Chip>
        </>
    )
}

export default EmphasisText