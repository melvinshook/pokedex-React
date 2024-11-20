import { useEffect, useState } from "react";
import { DetailPokemon } from "../interfaces/pokemon.interface";
import { getColorFromUrl } from "../utils/colors";
import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
interface PokemonAvatarProps {
    pokemon: DetailPokemon
}

const PokemonAvatar = ({pokemon}: PokemonAvatarProps) => {
   

    
    return (
        <Card sx={{backgroundColor: pokemon.color}}>
            <CardMedia component="img" sx={{height: 100, objectFit: "contain"}}
                image={pokemon.sprites.other["official-artwork"].front_default}
                title={pokemon.name} />
            <CardContent>
                <Box sx={{
                    display: "felx",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Typography sx={{textTransform: "capitalize"}}>
                        {pokemon.name}
                    </Typography>
                    <Typography sx={{textTransform: "capitalize"}}>
                        #{pokemon.id}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
};

export default PokemonAvatar;