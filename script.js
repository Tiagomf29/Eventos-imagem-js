window.onload = function(){


    let imagem = document.getElementsByTagName("img");
    for(let i = 0; i < imagem.length; i++){

        imagem[i].src="pol2.png";

    }


    let botao1 = document.getElementById("btn1");
    let botao2 = document.getElementById("btn2");
    let form = document.getElementById("formulario");

    botao1.addEventListener('click', e =>{
        
        mudaImagem(true,form.text1.value);
    });

    botao2.addEventListener('click', e =>{

        mudaImagem(false,+form.text2.value);

    });


    function mudaImagem(ocupado,campo){    
        switch (+campo) {
            case 1:
                if (ocupado){
                    imagem[0].src="pol1.png";
                }else{
                    imagem[0].src="pol2.png";
                }
                break;
            case 2:
                if (ocupado){
                    imagem[1].src="pol1.png";
                }else{
                    imagem[1].src="pol2.png";
                }
                break;
            case 3:
                if (ocupado){
                    imagem[2].src="pol1.png";
                }else{
                    imagem[2].src="pol2.png";
                }
                break;
            case 4:
                if (ocupado){
                    imagem[3].src="pol1.png";
                }else{
                    imagem[3].src="pol2.png";
                }
                break;
            case 5:
                if (ocupado){
                    imagem[4].src="pol1.png";
                }else{
                    imagem[4].src="pol2.png";
                }
                break;                                                                
            case 6:
                if (ocupado){
                    imagem[5].src="pol1.png";
                }else{
                    imagem[5].src="pol2.png";
                }
                break;                
            case 7:
                if (ocupado){
                    imagem[6].src="pol1.png";
                }else{
                    imagem[6].src="pol2.png";
                }
                break;
            case 8:
                if (ocupado){
                    imagem[7].src="pol1.png";
                }else{
                    imagem[7].src="pol2.png";
                }
                break;
            case 9:
                if (ocupado){
                    imagem[8].src="pol1.png";
                }else{
                    imagem[8].src="pol2.png";
                }
                break;
            case 10:
                if (ocupado){
                    imagem[9].src="pol1.png";
                }else{
                    imagem[9].src="pol2.png";
                }
                break;
    
            default:
                break;
        }
    
    }

}







