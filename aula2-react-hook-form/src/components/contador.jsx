import { Button, Grid, Typography } from "@mui/material";
import { useContador } from "../contexts/contador-context";

export function Contador() {
    const { contador, decrementar, incrementar } = useContador()
    
    return (
        <Grid container> 
            <Grid item>
                <Button variant="contained" color="error" onClick={decrementar}> - </Button>
            </Grid>
            <Grid item px={2} display="flex" alignItems="center" justifyContent="center">
                <Typography>{contador}</Typography>
            </Grid>
            <Grid item>
                <Button variant="contained" color="success" onClick={incrementar}> + </Button>
            </Grid>
        </Grid>
    )
}