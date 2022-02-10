class Confirmador{
    constructor(item,itemReapeat){
        this.item = item;
        this.itemReapeat = itemReapeat;
    }

    confirmaItem(){
        if(this.item === this.itemReapeat){
            return true
          }
    }
}