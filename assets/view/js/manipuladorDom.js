class ManipuladorDom{

    mudaClasse(elemento,classeOn,classeOff){
        elemento.removeClass(classeOff);
        elemento.addClass(classeOn);
    }

    removeAtributo(elemento, atributo){
        elemento.removeAttr(atributo)
    }

    colocaAtributo(elemento, atributo){
        elemento.prop(atributo, true)
    }
}