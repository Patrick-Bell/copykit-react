import { TableContainer, Table, TableHead, TableRow, TableCell, Chip, TableBody, Typography } from "@mui/material"
import EmphasisText from "./EmphasisText"

const PropsTable = ({ tableProps, component}) => {


    return (

        <>

<Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 600, marginTop:'50px'}}>API Reference</Typography>
<Typography variant="subtitle2" sx={{ color: 'grey', marginTop: '10px' }}>Below are all the props that can be used with the <EmphasisText text={component} /> component.</Typography>

<TableContainer sx={{marginTop:'10px', borderRadius:'10px', fontFamily:'Poppins'}}>
        <Table size='small'>
            <TableHead sx={{background:'lightgrey'}}>
                <TableRow>
                    <TableCell sx={{padding:1.5, fontWeight:600, color:'black'}}>Prop</TableCell>
                    <TableCell sx={{padding:1.5, fontWeight:600, color:'black'}}>Type</TableCell>
                    <TableCell sx={{padding:1.5, fontWeight:600, color:'black'}}>Default</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableProps.map(table => (
                    <TableRow key={table.prop}>
                        <TableCell sx={{p:1.5}}><Chip sx={{borderRadius:'10px'}} variant='outlined' label={table.prop}></Chip></TableCell>
                        <TableCell><Chip sx={{borderRadius:'10px'}} variant='outlined' label={table.type}></Chip></TableCell>
                        <TableCell><Chip sx={{borderRadius:'10px'}} variant='outlined' label={table.default}></Chip></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
        
        </>
    )
}

export default PropsTable