function login(){
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      alert(email)

      if (email === '123' && password === '456'){
        alert('inicio de sesion correcto')
        let modal = bootstrap.Modal.getOrCreateInstance(document.getElementById('modal_login'))
          modal.hide()
      }else {
        alert('usuario/contrasena incorrecta')
      }
    }
