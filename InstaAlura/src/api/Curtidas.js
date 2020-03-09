const curtirFoto = (likes, curtiu) => {
    let qtdLikes = likes;
    if(curtiu)
        qtdLikes--;
    else
        qtdLikes++;

    return [qtdLikes, !curtiu];
 };

const botaoLike = curtiu => {
    
    if(curtiu)
        return require('../../res/img/s2-checked.png');
    
    return require('../../res/img/s2.png');
}

export {curtirFoto, botaoLike};