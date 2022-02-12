class ManipuladorDom{

    mudaClasse(elemento,classeOn,classeOff){
        elemento.removeClass(classeOff);
        elemento.addClass(classeOn);
    }

    colocaClasse(elemento,classe){
        elemento.addClass(classe);
    }

    removeAtributo(elemento, atributo){
        elemento.removeAttr(atributo)
    }

    colocaAtributo(elemento, atributo){
        elemento.attr(atributo)
    }
}