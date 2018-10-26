const heroNameToPortrait = name =>{
    if(name === undefined)
        return undefined;
    return `https://ddragon.leagueoflegends.com/cdn/8.20.1/img/champion/${name}.png`;
};

export default heroNameToPortrait;