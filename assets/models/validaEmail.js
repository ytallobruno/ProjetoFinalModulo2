function validaEmail(email) {

    const emailValido =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    try {
        if (email.match(emailValido)) {
  
            alert("Email validado com sucesso");

            return email
        
          } else {
        
            throw new Error('Email inválido')
        
          }
    } catch (error) {
        console.error(error.message)
    }
  

  
  }