import React from "react";
import { useParams } from "react-router-dom";
import usePokemon from "../hooks/usePokemon";
import { Container, Grid, Box, Button } from "@mui/material";
import PokemonAvatar from "./PokemonAvatar";
import PokemonBasicInfo from "./PokemonBasicInfo";
import PokemonStats from "./PokemonStats";
import { Link } from "react-router-dom";


const PokemonDetail = () => {
    let {pokemonName} = useParams()

    const {pokemon, isLoading} = usePokemon({pokemonName})
    return (
   <Container>
    <Grid container flexDirection="column" alignItems="center" justifyContent="center" spacing={2} mt={1}>
        <Grid item container alignItems="center" justifyContent="center" spacing={2}>
            {isLoading ? (
                <Box>Loading...</Box>
            ) : pokemon ? (
                <>
                <Grid item xs={12} sm={6}>
                    <PokemonAvatar pokemon={pokemon}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <PokemonBasicInfo pokemon={pokemon}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <PokemonStats pokemon={pokemon}/>
                </Grid>
                </>
            ) : (
                <Box>Pokemon not found</Box>
            
            )}

        </Grid>
            <Grid item>
                <Button component={Link} to={"/"} variant="contained">Go to PokemonList</Button>
            </Grid>
    </Grid>
   </Container>
    )
}

export default PokemonDetail;